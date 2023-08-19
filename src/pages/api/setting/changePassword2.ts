// import {NextApiRequest, NextApiResponse} from "next";
// import {connectDB} from "@/utils/mongoDb";
// import {ObjectId} from "mongodb";
// import {hasPassword} from "@/utils/validation/validation";
// import bcrypt from "bcrypt";
//
// const handler = async (credentials: any, request: NextApiRequest, response: NextApiResponse) => {
//     if (request.method === 'PUT') {
//         let requestBody = {
//             _id: new ObjectId(request.body._id),
//             currentPassword: request.body.currentPassword,
//             newPassword: request.body.newPassword,
//             newPasswordConfirm: request.body.newPasswordConfirm,
//         }
//
//         /* 현재 사용중인 비밀번호 검증 */
//         const db = (await connectDB).db('forum');
//
//         /* 비밀번호가 없는 경우 에러 반환 */
//         if (!credentials.password || !hasPassword(credentials.password)) {
//             throw new Error("Invalid password format");
//         }
//
//         //const isPasswordValid: boolean = await bcrypt.compare(credentials.password, user.password);
//         //if (!isPasswordValid) throw new Error("Invalid password");
//
//         /* 비밀번호 해시값으로 변경 & DB 추가 */
//         let passwordHash: string = await bcrypt.hash(requestBody.newPassword, 10)
//         const result = await db.collection('user_card')
//             .updateOne(
//                 {_id: requestBody._id},
//                 { password: passwordHash }
//             );
//
//         //console.log('passwordHash ', passwordHash)
//         //console.log('result ', result)
//         return response.status(200).json({
//             message: '비밀번호가 변경되었습니다.'
//         });
//     }
// }
//
// export default handler;