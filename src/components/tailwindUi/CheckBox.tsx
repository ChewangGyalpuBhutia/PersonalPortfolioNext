"use client";

import React from 'react';

interface CheckboxProps {
    id: string;
    name: string;
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, name, label, checked, onChange }) => {
    return (
        <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
            </div>
            <div className="text-sm/6">
                <label htmlFor={id} className="font-medium text-gray-900">{label}</label>
            </div>
        </div>
    );
};

export default Checkbox;