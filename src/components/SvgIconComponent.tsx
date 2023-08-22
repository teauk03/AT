import React from 'react';

type SvgIconComponentProps = {
    svgPath: string;
    width: number;
    height: number;
    className?: string;
}

const SvgIconComponent = ({width, height, svgPath, className}: SvgIconComponentProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            className={className}
            strokeWidth="1.5"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
        </svg>
    );
};

export default SvgIconComponent;