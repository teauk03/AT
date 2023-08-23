import React from 'react';

type SvgIconComponentProps = {
    svgPath: string;
    width: number;
    height: number;
    className?: string;
    onClick?: React.MouseEventHandler<SVGElement>;
}

const SvgIconComponent = ({width, height, svgPath, className, onClick}: SvgIconComponentProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            className={className}
            onClick={onClick}
            strokeWidth="1.5"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
        </svg>
    );
};

export default SvgIconComponent;