import React from "react";
import data from "../data/data.json"; // Assuming data.json is correctly structured
import Separator from "./Separator"; // Assuming Separator component exists

const Profile = () => {
  return (
    // Keep overall padding and background
    <div className="py-10 min-h-screen w-full bg-[#fffcf3]">
      {/* Title: Centered text */}
      <h1 className="text-2xl font-bold text-gray-700 mb-8 text-center">
        Featured Profiles
      </h1>

      {/* Container for the profile cards */}
      {/* Mobile: flex-col to stack vertically, items-center to center cards, px-4 for side padding */}
      {/* Medium screens and up (md:): switch to flex-row, justify-center, items-start (good for potentially varying card heights), adjust gap and padding */}
      <div className="flex flex-col items-center gap-6 px-4 md:flex-row md:justify-center md:items-start md:flex-wrap md:gap-8 max-w-screen-xl mx-auto rounded-xl">
        {/* Added md:flex-wrap in case cards need to wrap on medium screens */}
        {/* Changed md:items-center to md:items-start to better align cards if their heights differ */}

        {data.map((item) => (
          <div
            key={item.id || item.name}
            // Card Styling
            // Mobile: w-full to take full width, max-w-md to prevent it getting too wide
            // Medium screens and up (md:): reset width to auto, set max-width for desktop layout (e.g., max-w-xs or max-w-sm)
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-lg border-3 border-[#eec19f] py-4 w-full max-w-md md:w-auto md:max-w-xs lg:max-w-sm"
            // Use md:max-w-xs for smaller cards side-by-side, lg:max-w-sm allows slightly larger cards on wider screens
            // You can adjust md:max-w-xs / lg:max-w-sm based on how many cards you want side-by-side and how wide they should be.
          >
            {/* Top Section: Avatar and Basic Info */}
            <div className="flex flex-col items-center px-4"> {/* Added some horizontal padding inside card */}
              {/* Avatar: Centered */}
              <div className="w-24 h-24 mb-4 flex-shrink-0">
                <img
                  src={item.avatar} // Ensure this path is correct (consider Vite import or public folder path)
                  alt={`${item.name}'s avatar`}
                  className="w-full h-full rounded-full object-cover border-2 border-[#e5d1c2]"
                  loading="lazy"
                />
              </div>
              {/* Name and Age container */}
              <div className="w-full text-center">
                <p className="text-xl font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm font-semibold text-gray-900">{item.age}</p>
              </div>
            </div>

            <Separator />

            {/* Middle Section: Hobbies */}
            {item.hobbies && item.hobbies.length > 0 && (
              // Consistent padding
              <div className="p-5 text-left">
                <h3 className="text-md font-bold text-gray-700 mb-3">Hobbies</h3>
                <ul className="space-y-2">
                  {item.hobbies.map((hobby, hobbyIndex) => (
                    <li key={hobbyIndex} className="text-sm text-gray-600">
                      <strong className="font-medium text-gray-800">{hobby.title}:</strong>{" "}
                      {hobby.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Separator />

            {/* Bottom Section: Location & Description */}
            {/* Consistent padding and spacing */}
            <div className="p-5 space-y-3 text-sm text-left">
              {item.location && (
                <div>
                  <h3 className="text-md font-semibold text-gray-700 mb-1">Location</h3>
                  <p className="text-gray-600">{item.location}</p>
                </div>
              )}
              {item.description && (
                <div>
                  <h3 className="text-md font-semibold text-gray-700 mb-1">About</h3>
                  <p className="text-gray-600 italic">{item.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;