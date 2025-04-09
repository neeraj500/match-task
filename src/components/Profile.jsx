import React from "react";
import data from "../data/data.json";
import Separator from "./Separator";

const Profile = () => {
  return (
    <div className="p-6 min-h-screen w-full bg-[#fffcf3]">
      {/* Title: Centered text */}
      <h1 className="text-xl font-bold text-gray-[#141614] mb-8 text-center">
        Featured Profiles
      </h1>

      <div className="flex justify-center items-center gap-6 max-w-screen-xl mx-auto rounded-xl">
        {data.map((item) => ( 
          <div
            key={item.id || item.name} 
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow duration-300  hover:shadow-lg border-2 border-[#e5d1c2] py-4"
          >
            {/* Top Section: Avatar and Basic Info */}
    
            <div className="flex flex-col items-center">
              {/* Avatar: Centered */}
              <div className="w-24 h-24 mb-4 flex-shrink-0"> {/* Added flex-shrink-0 */}
                <img
                  src={item.avatar}
                  alt={`${item.name}'s avatar`}
                  className="w-full h-full rounded-full object-cover border-2 border-[#e5d1c2]"
                  loading="lazy"
                />
              </div>
              {/* Name and Age container: Set to full width and left-align text */}
              <div className="w-full text-center">
                <p className="text-xl font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm font-semibold text-gray-900">{item.age}</p>
              </div>
            </div>
            <Separator/>
            {/* Middle Section: Hobbies */}
            {item.hobbies && item.hobbies.length > 0 && (
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
          <Separator/>
            {/* Bottom Section: Location & Description */}
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