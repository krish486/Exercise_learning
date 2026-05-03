"use client"
import React from "react";
import { searchHook } from "../Search/hook/searchHook";
import Navbar from "../Navbar";

export default function SearchWrapper({ children }) {
    const search = searchHook();

    return (
        <>
            <Navbar handleSearch={search.handleSearch} />
            <div className="mt-10">
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { search });
                    }
                    return child;
                })}
            </div>
        </>
    );
}