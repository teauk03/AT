import bcrypt from 'bcrypt';
import {NextApiRequest, NextApiResponse} from "next";

import {Db} from "mongodb";
import connectDB from "@/lib/mongoDb";
import {hasValidPasswordLength, isValidEmail} from '@/utils/validation';

const handler = async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
    if (request.method == 'POST') {
        const {email, password} = request.body;

        // 이메일 유효성 검사
        if (!isValidEmail(email)) {
            response.status(400).json({message: '유효하지 않은 이메일입니다.'});
            return;
        }

        // 비밀번호 유효성 검사
        if (!hasValidPasswordLength(password)) {
            response.status(400).json({message: '유효하지 않은 비밀번호입니다. 비밀번호는 최소 8자 이상이어야 합니다.'});
            return;
        }

        try {
            let db: Db = (await connectDB).db('forum');

            // 비밀번호 해시값으로 변경 & DB 추가
            let passwordHash: string = await bcrypt.hash(request.body.password, 10)
            await db.collection('user_card').insertOne({
                ...request.body,
                password: passwordHash,
            });

            // response
            response.status(200).redirect(302, '/');
        } catch (error) {
            console.error(error);
            response.status(500).json({
                    message: '인터넷 또는 서버 오류 발생'
                }
            );
        }
    }
}

export default handler;