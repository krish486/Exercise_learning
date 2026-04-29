import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Train Smarter <br />
            <span className="text-green-400">Get Stronger</span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Discover workouts, track your progress, and build your perfect fitness routine.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-medium">
              Explore Exercises
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-100 h-75 md:h-100 bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center">

          <img
            src="https://i.pinimg.com/736x/0a/76/eb/0a76eb289f73a2350f41831a59065fc0.jpg"
            alt="exercise"
            className="w-full h-full object-cover"
          />

        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold text-green-400">1500+</h3>
          <p className="text-gray-400 mt-2">Exercises Available</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold text-green-400">Custom Plans</h3>
          <p className="text-gray-400 mt-2">Build your own routines</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold text-green-400">Track Progress</h3>
          <p className="text-gray-400 mt-2">Stay consistent daily</p>
        </div>

      </section>

    </div>
  );
};

export default page;