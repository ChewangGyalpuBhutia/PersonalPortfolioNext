"use client";

import React from 'react';

interface ButtonProps {
    title: string;
    // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
    return (
        <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            {title}
        </button>
    );
};

export default Button;