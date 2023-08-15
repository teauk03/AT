import {connectDB} from "@/utils/mongoDb";
import {Post} from "@/types/Borad";


/**
 * MongoDB의 특정 컬렉션에서 데이터를 페이지네이션하여 출력.
 * @param databaseName - 데이터를 검색할 데이터베이스의 이름
 * @param collectionName - 데이터를 검색할 컬렉션의 이름
 * @param page - 출력할 페이지 번호 (1부터 시작)
 * @param limit - 한 페이지당 출력할 아이템의 최대 개수 (기본값: 10)
 * @returns 지정된 컬렉션에서 페이지네이션된 포스트 배열
 */
const getAllPostsFromForum = async (
    databaseName: string,
    collectionName: string,
    page: number,
    limit: number = 10
): Promise<Post[]> => {

    const db = (await connectDB).db(databaseName);
    let result: Post[] = await db.collection(collectionName)
        .find()
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray() as Post[];

    result = result.map((noticeItem: Post) => {
        noticeItem._id = noticeItem._id.toString();
        return noticeItem;
    });

    return result;
};

export default getAllPostsFromForum;