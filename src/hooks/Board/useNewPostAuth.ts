import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

const useNewPostHandler = (status: string) => {
    const router = useRouter();

    const handleNewPostOnClick = (e: MouseEvent) => {
        if (status === "unauthenticated") {
            e.preventDefault();
            alert("로그인 후 이용 가능합니다.");
            router.push("/login");
        } else {
            router.push("/write");
        }
    };

    return handleNewPostOnClick;
};

export default useNewPostHandler;