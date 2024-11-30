"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/NavBar';

const page = () => {

    return(
        <div>
            <Navbar />
            <h1>Education</h1>
        </div>
    )
}
export default page;