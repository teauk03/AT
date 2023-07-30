'use client'
import React from "react";
import {signIn} from "next-auth/react";
import styles from './SocialLogin.module.scss';
import Image, {StaticImageData} from "next/image";

interface SocialLoginButtonProps {
    provider: string;
    src: StaticImageData;
    alt: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ provider, src, alt }) => {
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