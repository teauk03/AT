import {ObjectId} from "mongodb";

interface UserSession {
    user: {
        _id: string;
        name: string;
        email: string;
        birth: string;
        role: string;
        lastAccess: string;
    }
}

interface Result {
    _id: string;
    userName: string;
    title: string;
    content: string;
    division_title: string;
    division: string;
}

export interface DetailsIndexProps {
    result: Result;
    USER_SESSION: UserSession;
}

export interface ContentButtonsProps {
    isMenuVisible: boolean;
    setMenuVisible: (visible: boolean) => void;
    result: Result;
    USER_SESSION: UserSession;
    handleDelete: (id: string) => void;
}