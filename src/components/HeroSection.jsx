import React from "react";
// import slideOne from "/slide-one.jpg";
// import slideTwo from "/slide-two.jpg";
// import slideThree from "/slide-three.jpg";

const HeroSection = () => {
  return (
    <>
      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-100">
          {/* Carousel Items */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/slideOne.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/slideTwo.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/slideThree.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div class="absolute bottom-0 left-0 right-0 z-30 h-8 bg-gradient-to-t from-orange-50 to-transparent pointer-events-none" />
        </div>

        {/* slide controls */}
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full w-20 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent dark:bg-transparent group-hover:bg-transparent dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-transparent dark:group-focus:ring-transparent group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full w-20 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent dark:bg-transparent group-hover:bg-transparent dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-transparent dark:group-focus:ring-transparent group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default HeroSection;
