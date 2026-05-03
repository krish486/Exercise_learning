"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 md:px-6 py-4">

            <div className="flex items-center justify-between gap-4">

                {/* Logo */}
                <div className="text-xl md:text-2xl font-bold text-green-400">
                    FitPro
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
                    <Link href="/" className="hover:text-green-400 transition">
                        Home
                    </Link>
                    <Link href="/exercises" className="hover:text-green-400 transition">
                        Exercises
                    </Link>
                </div>



                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(prev => !prev)}
                    className="md:hidden text-gray-300 text-xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-300">

                    <Link href="/" className="hover:text-green-400">
                        Home
                    </Link>
                    <Link href="/exercises" className="hover:text-green-400">
                        Exercises
                    </Link>

                    {/* Mobile Search */}
                    <div className="flex items-center bg-gray-900 border border-gray-700 rounded-full px-4 py-2">
                        <input
                            onChange={handleSearch}
                            type="text"
                            placeholder="Search body parts..."
                            className="bg-transparent outline-none text-sm text-gray-200 w-full"
                        />
                    </div>

                </div>
            )}
        </nav>
    );
}