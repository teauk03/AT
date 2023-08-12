import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/utils/mongoDb";
import { exec } from "child_process";

/* TODO : 도커로 리팩토링 해야함 (격리된 환경에서 코드 실행) */
const handler = async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
    try {
        const { code } = request.body;

        /* 코드 실행 (예: Node.js 코드 실행) */
        exec(`node -e "${code.replace(/"/g, '\\"')}"`, async (error, stdout, stderr) => {
            if (error) {
                console.error(error); // 오류 로깅
                response.status(500).json({ error: "코드를 실행할 수 없습니다." });
                return;
            }

            /* 실행 결과 */
            const output = stdout || stderr;

            /* 데이터베이스 연결 (coding_platform) */
            const db = (await connectDB).db('coding_platform');

            /* 실행 코드와 결과를 데이터베이스에 저장 */
            const result = await db.collection('executions').insertOne({
                code,
                output,
                timestamp: new Date(),
            });

            response.status(200).json({ output, id: result.insertedId });
        });
    } catch (err) {
        console.error(err); // 오류 로깅
        response.status(400).json({ error: '오류가 발생했습니다.' });
    }
};

export default handler;