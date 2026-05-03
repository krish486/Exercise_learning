import React from "react";

const viewDetails = async ({ params }) => {
    let { id } = await params;


    let arr = id.split("").filter((elem, idx) => {
        if (idx > 2) {
            return elem
        }
    })

    let str = arr.join("")

    let res = await fetch(`https://oss.exercisedb.dev/api/v1/exercises/${str}`)
    let { data } = await res.json();

    let exercise = data

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

                {/* LEFT: IMAGE */}
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                    <img
                        src={exercise.gifUrl}
                        alt={exercise.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT: DETAILS */}
                <div className="flex flex-col gap-6">

                    <h1 className="text-4xl font-bold capitalize">
                        {exercise.name}
                    </h1>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-3">
                        {exercise.bodyParts.map((item, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                                {item}
                            </span>
                        ))}

                        {exercise.equipments.map((item, i) => (
                            <span key={i} className="px-3 py-1 bg-green-500/20 rounded-full text-sm">
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* MUSCLES */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Target Muscles</h2>
                        <p className="text-gray-300 capitalize">
                            {exercise.targetMuscles.join(", ")}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Secondary Muscles</h2>
                        <p className="text-gray-400 capitalize">
                            {exercise.secondaryMuscles.join(", ")}
                        </p>
                    </div>

                </div>
            </div>

            {/* INSTRUCTIONS */}
            <div className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Instructions</h2>

                <div className="flex flex-col gap-4">
                    {exercise.instructions.map((step, index) => (
                        <div
                            key={index}
                            className="flex gap-4 items-start bg-white/5 p-4 rounded-xl"
                        >
                            <span className="text-lg font-bold text-blue-400">
                                {index + 1}
                            </span>
                            <p className="text-gray-300">{step}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );

};

export default viewDetails;