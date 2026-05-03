import React from "react";
import Link from "next/link";

export function ExerciseCard({ exercise }) {
    const data = Array.isArray(exercise) ? exercise : [];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">

            {data.map((elem,idx) => (
                <Link key={idx} href={`/details/:${elem.exerciseId}`}>

                    <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-400 transition duration-300 cursor-pointer">

                        <div className="relative w-full h-[200px] overflow-hidden">
                            <img
                                src={elem.gifUrl}
                                alt={elem.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                        </div>

                        <div className="p-4 space-y-3">

                            <h2 className="text-base font-semibold text-white capitalize">
                                {elem.name}
                            </h2>

                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                                    {elem.bodyParts?.[0]}
                                </span>

                                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                                    {elem.equipments?.[0]}
                                </span>

                                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                                    {elem.targetMuscles?.[0]}
                                </span>
                            </div>

                        </div>
                    </div>

                </Link>
            ))}

        </div>
    );
}