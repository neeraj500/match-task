import React from "react";

const ProfileModal = ({ isOpen, onClose, profileData }) => {
  if (!isOpen || !profileData) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="modal-backdrop"
      tabIndex="-1"
      aria-hidden={!isOpen}
      onClick={handleBackdropClick}
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full max-h-full bg-amber-200 bg-opacity-50 dark:bg-opacity-80 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="relative p-4 w-full max-w-lg max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {profileData.name}
            </h3>

            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 md:p-5 space-y-4">
            <div className="flex justify-center mb-4">
              <img
                src={profileData.avatar}
                alt={`${profileData.name}'s avatar`}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#e5d1c2]" // Larger size
                loading="lazy"
              />
            </div>

            <p className="text-center text-lg font-medium text-gray-700 dark:text-gray-300">
              Age: {profileData.age}
            </p>
            {profileData.location && (
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                <strong className="font-semibold text-gray-800 dark:text-gray-200">
                  Location:
                </strong>{" "}
                {profileData.location}
              </p>
            )}

            {profileData.description && (
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <strong className="font-semibold text-gray-800 dark:text-gray-200">
                  About:
                </strong>{" "}
                {profileData.description}
              </p>
            )}

            {profileData.hobbies && profileData.hobbies.length > 0 && (
              <div>
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Hobbies:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-500 dark:text-gray-400">
                  {profileData.hobbies.map((hobby, index) => (
                    <li key={index}>
                      <strong className="font-medium">{hobby.title}:</strong>{" "}
                      {hobby.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={onClose}
              type="button"
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
