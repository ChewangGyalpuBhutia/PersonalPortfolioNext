"use client";

import React from 'react';

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  autoComplete?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ id, name, type, placeholder, value, onChange, label, autoComplete, icon }) => {
  return (
    <div className="sm:col-span-4">
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">{label}</label>
      <div className="mt-2 relative">
        {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className={`block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 ${icon ? 'pl-10' : ''}`}
        />
      </div>
    </div>
  );
};

export default Input;