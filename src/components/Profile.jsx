import React, { useState } from "react";
import data from "../data/data.json"; // Assuming data.json is correctly structured
import Separator from "./Separator"; // Assuming Separator component exists
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const openModal = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
  };
  return (
    <div className="py-10 min-h-screen w-full bg-[#fffcf3]">
      <h1 className="text-2xl font-bold text-gray-700 mb-8 text-center">
        Featured Profiles
      </h1>

      <div className="flex flex-col items-center gap-6 px-4 md:flex-row md:justify-center md:items-start md:flex-wrap md:gap-8 max-w-screen-xl mx-auto rounded-xl">
        {data.map((item) => (
          <div
            key={item.id || item.name}
            onClick={() => openModal(item)}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-2xl border-3 border-[#eec19f] py-4 w-full max-w-md md:w-auto md:max-w-xs lg:max-w-sm"
          >
            <div className="flex flex-col items-center px-4">
              <div className="w-24 h-24 mb-4 flex-shrink-0">
                <img
                  src={item.avatar}
                  alt={`${item.name}'s avatar`}
                  className="w-full h-full rounded-full object-cover border-2 border-[#e5d1c2]"
                  loading="lazy"
                />
              </div>
              <div className="w-full text-center">
                <p className="text-xl font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  {item.age}
                </p>
              </div>
            </div>

            <Separator />

            {item.hobbies && item.hobbies.length > 0 && (
              <div className="p-5 text-left">
                <h3 className="text-md font-bold text-gray-700 mb-3">
                  Hobbies
                </h3>
                <ul className="space-y-2">
                  {item.hobbies.map((hobby, hobbyIndex) => (
                    <li key={hobbyIndex} className="text-sm text-gray-600">
                      <strong className="font-medium text-gray-800">
                        {hobby.title}:
                      </strong>{" "}
                      {hobby.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Separator />

            <div className="p-5 space-y-3 text-sm text-left">
              {item.location && (
                <div>
                  <h3 className="text-md font-semibold text-gray-700 mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600">{item.location}</p>
                </div>
              )}
              {item.description && (
                <div>
                  <h3 className="text-md font-semibold text-gray-700 mb-1">
                    About
                  </h3>
                  <p className="text-gray-600 italic">{item.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <ProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profileData={selectedProfile}
      />
    </div>
  );
};

export default Profile;
