'use client'
import {signIn} from "next-auth/react";
import styles from './SocialLogin.module.scss';
import Image from "next/image";
import {SOCIAL_LOGIN_BUTTON_PROPS} from "@/types/UI";

const SocialLoginButton: React.FC<SOCIAL_LOGIN_BUTTON_PROPS> = ({ provider, src, alt }) => {
    return (
        <button
            className={styles.social}
            onClick={() => signIn(provider)}
        >
            <Image
                className={styles.icon}
                width={24}
                height={24}
                src={src}
                alt={alt}
            />
            <div>{`Login for ${provider}`}</div>
        </button>
    );
}

export default SocialLoginButton;