"use client";
import React from "react";
import { ExerciseCard } from "@/components/ExerciseCard";
import GetDataOnScroll from "@/hooks/GetDataOnScroll";
import { SpinnerEmpty } from "@/components/ui/SpinnerEmpty";
import LoadingSearch from "@/components/Search/UI/loadingSearch/loadingSearch";
import { searchHook } from "@/components/Search/hook/searchHook";

const exercises = () => {
    const { value, exercise, isFetch, handleSearch } = searchHook();
    const { data, loading, hasMore } = GetDataOnScroll();

    const isSearching = value && value.trim().length > 0;

    return (
        <div className="min-h-screen bg-gray-950 text-white px-4 md:px-10 py-6">

            {/* TITLE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
                Exercise Library
            </h1>

            {/* SEARCH BAR */}
            <div className="mb-6">
                <div className="flex items-center bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 focus-within:border-gray-500 transition-all shadow-sm">
                    <input
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search body parts..."
                        className="bg-transparent outline-none text-sm text-gray-200 w-full placeholder-gray-500"
                    />
                </div>
            </div>

            {/* CONTENT */}
            <div className="space-y-6">

                {isSearching ? (
                    <>
                        {!isFetch ? (
                            <div className="flex justify-center py-10">
                                <LoadingSearch />
                            </div>
                        ) : exercise?.length > 0 ? (
                            <ExerciseCard exercise={exercise} />
                        ) : (
                            <p className="text-center text-gray-400 mt-10">
                                No results found. Try something less... creative.
                            </p>
                        )}
                    </>
                ) : (
                    <>
                        <ExerciseCard exercise={data} />

                        {loading && (
                            <div className="flex justify-center py-6">
                                <SpinnerEmpty />
                            </div>
                        )}

                        {!hasMore && (
                            <p className="text-center mt-8 text-gray-500 text-sm">
                                That’s it. End of list. Now maybe do one instead of scrolling?
                            </p>
                        )}
                    </>
                )}

            </div>
        </div>
    );
};

export default exercises;