
import React from 'react';

const bodyParts = [
    "Back",
    "Cardio",
    "Chest",
    "Lower Arms",
    "Lower Legs",
    "Neck",
    "Shoulders",
    "Upper Arms",
    "Upper Legs",
    "Waist"
];

const LoadingSearch = () => {
    return (
        <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">

            {/* Spinner */}
            <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

            {/* Title */}
            <p className="text-lg font-semibold">
                Searching exercises...
            </p>

            {/* Info */}
            <p className="text-sm text-gray-500 max-w-md">
                Use these keywords for better results:{" "}
                <span className="font-medium">
                    {bodyParts.join(", ")}
                </span>.
                <br />
                There are many exercises, so searching by body part helps narrow things down.
            </p>
        </div>
    );
};

export default LoadingSearch;
