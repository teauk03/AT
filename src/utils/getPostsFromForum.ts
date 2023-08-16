import {connectDB} from "@/utils/mongoDb";
import {Post} from "@/types/Borad";

type typeAllPostsFromForum = {
    databaseName: string;
    collectionName: string;
    filter?: string | undefined;
    page: number;
    limit?: number | undefined;
}

/**
 * MongoDB의 특정 컬렉션에서 데이터를 페이지네이션하여 출력.
 * @param databaseName - 데이터를 검색할 데이터베이스의 이름
 * @param collectionName - 데이터를 검색할 컬렉션의 이름
 * @param page - 출력할 페이지 번호 (1부터 시작)
 * @param filter - 검색할 division 값을 필터로 사용 (빈 문자열이나 undefined일 경우 모든 division 선택)
 * @param limit - 한 페이지당 출력할 아이템의 최대 개수 (기본값: 10)
 * @returns 지정된 컬렉션에서 페이지네이션된 포스트 배열
 */
const getAllPostsFromForum = async (
    {databaseName, collectionName, page, filter, limit}: typeAllPostsFromForum
): Promise<Post[]> => {
    /* limit 값이 없거나 0일 경우 기본값 10 적용 */
    const actualLimit = limit || 10;

    const db = (await connectDB).db(databaseName);
    let result: Post[] = await db.collection(collectionName)
        .find(filter ? { division: filter } : {})
        .skip((page - 1) * actualLimit)
        .limit(actualLimit)
        .toArray() as Post[];

    result = result.map((noticeItem: Post) => {
        noticeItem._id = noticeItem._id.toString();
        return noticeItem;
    });

    return result;
};

export default getAllPostsFromForum;