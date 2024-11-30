"use client";

import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, icon }) => {
  return (
    <div className="sm:col-span-4">
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  );
};

export default Input;