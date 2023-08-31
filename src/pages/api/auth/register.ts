import bcrypt from 'bcrypt';
import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";
import {
    hasValidPasswordLength,
    isValidEmailFormat,
    hasValidName,
    isFieldNotEmpty, hasMinLength
} from '@/utils/validation/validation';


const handlerRegister = async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
    /* POST 요청 처리 */
    if (request.method === 'POST') {
        const {email, password, name, nickname, birth, phone} = request.body;
        console.log(request.body)

        try {
            let db = (await connectDB).db('GameScore');
            /* 닉네임 중복 검사 */
            const existingNickname = await db.collection('user').findOne({ nickname });
            if (existingNickname) {
                response.status(400).json({ message: '이미 존재하는 닉네임입니다.' });
                return;
            }

            /* 이메일 중복 검사 */
            const existingEmail = await db.collection('user').findOne({ email });
            if (existingEmail) {
                response.status(400).json({ message: '이미 존재하는 이메일입니다.' });
                return;
            }

            /* 이름, 닉네임, 휴대폰 번호, 비밀번호의 공백을 검사 */
            /*if (!isFieldNotEmpty(email) || !isFieldNotEmpty(password) || !isFieldNotEmpty(name) || !isFieldNotEmpty(nickname) || !isFieldNotEmpty(phone)) {
                response.status(400).json({ message: '필수 입력사항입니다.'});
                return;
            }*/

            const getEmptyFields = () => {
                let fields = [];
                if (!isFieldNotEmpty(email)) fields.push('email');
                if (!isFieldNotEmpty(password)) fields.push('password');
                if (!isFieldNotEmpty(name)) fields.push('name');
                if (!isFieldNotEmpty(nickname)) fields.push('nickname');
                if (!isFieldNotEmpty(phone)) fields.push('phone');
                return fields;
            }

            const emptyFields = getEmptyFields();
            if (emptyFields.length > 0) {
                response.status(400).json({ message: '필수 입력사항입니다.', emptyFields: emptyFields });
                return;
            }


            /* 이메일 유효성 검사 */
            if (!isValidEmailFormat(email)) {
                response.status(400).json({message: '사용할 수 없는 이메일입니다.'});
                return;
            }


            /* 비밀번호 유효성 검사 */
            if (!hasValidPasswordLength(password)) {
                response.status(400).json({message: '사용할 수 없는 비밀번호입니다.'});
                return;
            }


            /* 닉네임 유효성 검사 */
            if (!hasMinLength(name, 2)) {
                response.status(400).json({message: '이름은 최소 2글자 이상 작성해야합니다.'});
                return;
            }



            /* 비밀번호 해시값으로 변경 & DB 추가 */
            let passwordHash: string = await bcrypt.hash(request.body.password, 10)
            await db.collection('user').insertOne({
                ...request.body,
                password: passwordHash,
                role: 'customer'
            });

            /* Response */
            response.status(200).json({message: '회원가입이 정상적으로 처리되었습니다.'});
        } catch (error) {
            if (error instanceof Error) {
                console.error(error);
                response.status(500).json({message: '인터넷 또는 서버 오류 발생', error: error.message});
            } else {
                console.error(error);
                response.status(500).json({message: '인터넷 또는 서버 오류 발생', error: "알 수 없는 에러"});
            }
        }
    }
}

export default handlerRegister;