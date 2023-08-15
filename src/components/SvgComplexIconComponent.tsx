import React from 'react';

interface ComplexSvgIconProps {
    children: React.ReactNode;
    width: number;
    height: number;
    className?: string;
}

const ComplexSvgIconComponent = ({children, width, height, className}: ComplexSvgIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            strokeWidth="2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {children}
        </svg>
    );
};

export default ComplexSvgIconComponent;