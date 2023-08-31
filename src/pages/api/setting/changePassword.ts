import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { connectDB } from "@/utils/mongoDb";
import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'PUT') {
        const { _id, currentPassword, newPassword, newPasswordConfirm } = request.body;

        // newPassword와 newPasswordConfirm이 일치하는지 확인
        if (newPassword !== newPasswordConfirm) {
            return response.status(400).json({ message: '새 비밀번호가 일치하지 않습니다.' });
        }

        // DB 연결 및 사용자 찾기
        const db = (await connectDB).db('main');
        const user = await db.collection('user_card').findOne({ _id: new ObjectId(_id) });

        // 현재 비밀번호 확인
        if (!user || !await bcrypt.compare(currentPassword, user.password)) {
            return response.status(400).json({ message: '현재 비밀번호가 일치하지 않습니다.' });
        }

        // 새 비밀번호 암호화
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // 비밀번호 업데이트
        const result = await db.collection('user_card').updateOne(
            { _id: new ObjectId(_id) },
            { $set: { password: hashedPassword } }
        );
        console.log('result : ', result)
        return response.status(200).json({
            message: '비밀번호가 변경되었습니다.',
            result
        });
    }
};

export default handler;