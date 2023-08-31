import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import {connectDB} from "@/utils/mongoDb";

const handlerInquiryUserPwd = async (request: NextApiRequest, response: NextApiResponse) => {
    const { token, newPassword } = request.body;

    try {
        const db = (await connectDB).db('main');
        const userCollection = db.collection('user_card');

        const user = await userCollection.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: new Date() },
        });

        console.log('Token:', token);
        console.log('New Password:', newPassword);
        console.log('User:', user);

        if (!user) {
            return response.status(400).json({ error: 'Token is invalid or has expired' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await userCollection.updateOne(
            { _id: user._id },
            {
                $set: {
                    password: hashedPassword,
                    resetPasswordToken: undefined,
                    resetPasswordExpires: undefined,
                },
            }
        );
        response.json({ success: 'Password has been reset' });

    } catch (error) {
        response.status(500).json({ error: 'An error occurred' });
    }
};

export default handlerInquiryUserPwd;