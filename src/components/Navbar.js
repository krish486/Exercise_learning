"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 50) {
                // scrolling down
                setShow(false);
            } else {
                // scrolling up
                setShow(true);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <nav
            className={`w-full fixed top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 md:px-6 py-4 transition-transform duration-300 ease-in-out ${show ? "translate-y-0" : "-translate-y-full"
                }`}
        >
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
                </div>
            )}
        </nav>
    );
}