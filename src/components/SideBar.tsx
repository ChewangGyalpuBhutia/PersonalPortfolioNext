"use client";

import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [isUsersOpen, setIsUsersOpen] = useState(false);
    const toggleUsersDropdown = () => {
        setIsUsersOpen(!isUsersOpen);
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex items-center justify-between gap-16 h-20 px-4 bg-gray-800 text-white">
                <h1 className="text-2xl font-bold">Rewardwise</h1>
                <button onClick={toggleSidebar} className="w-7 h-7 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#ededed" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>
            </div>
            <div className={`flex-1 px-4 py-6 bg-gray-800 text-white ${isOpen ? 'block' : 'hidden'}`}>
                <nav>
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <Link href="/admin/dashboard"> Dashboard </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                        </li>
                        <li className="flex items-center justify-between">
                            <Link href="/admin/settings">Students</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                        </li>
                        <li className="flex items-center justify-between">
                            <Link href="/admin/settings">Classes</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                        </li>
                        <li className="flex items-center justify-between">
                            <Link href="/admin/settings">Fees Management</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                        </li>
                        <li className="flex items-center justify-between">
                            <Link href="/admin/settings">Notifications</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                        </li>
                        <li className="flex items-center justify-between">
                            <Link href="/admin/settings">Reports</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                        </li>
                        <li className="flex items-center justify-between">
                            <Link href="/admin/settings">Settings</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                        </li>
                        {/* <li className="relative group flex flex-col items-center justify-between">
                            <div className='w-full flex justify-between'>
                                Users
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 inline-block transition-transform group-hover:rotate-90">
                                    <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                </svg>
                            </div>

                            <ul className="hidden pl-4 mt-2 space-y-2 group-hover:block text-white w-full">
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-2 h-2">
                                        <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                    </svg>
                                    <Link href="/admin/users/all">All Users</Link>

                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-2 h-2">
                                        <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                    </svg>
                                    <Link href="/admin/users/add">Add User</Link>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-2 h-2">
                                        <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                    </svg>
                                    <Link href="/admin/users/settings">User Settings</Link>
                                </li>
                            </ul>
                        </li> */}
                        <li className="flex items-center justify-between">
                            <Link href="/auth/logout">Logout</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                <path fill="#ededed" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;