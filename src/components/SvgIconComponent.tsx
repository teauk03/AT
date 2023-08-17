import React from 'react';

type SvgIconComponentProps = {
    svgPath: string;
    width: number;
    height: number;
}

const SvgIconComponent = ({width, height, svgPath}: SvgIconComponentProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
        </svg>
    );
};

export default SvgIconComponent;