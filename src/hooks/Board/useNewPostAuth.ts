import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/Auth/useAuth";

const useNewPostHandler = () => {
    const router = useRouter();
    const { isLoggedIn } = useAuth();
    const handleNewPostOnClick = (e: MouseEvent) => {
        if (!isLoggedIn) {
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