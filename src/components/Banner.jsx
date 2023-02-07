import React from "react";
import Image from "next/image";
import lopesan from "../../public/lopesan.jpg";
import ContactBanner from "./ContactBanner";
import { FcUnlock } from 'react-icons/fc';
import { FcOnlineSupport } from 'react-icons/fc';
import { FcApproval } from 'react-icons/fc';

const Banner = () => {
  return (
    <main>
      <div className="container mx-auto space-y-16 py-10">
        <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5 mx-5">
          <div className="w-full flex flex-col justify-center items-center p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900">
            <h1 className="block mb-2 dark:text-red-500 text-5xl p-2 font-bold">
              Yes Travel Agency
            </h1>
            <span className="text-3xl dark:text-gray-50">
              Do you want to know how to take your family in Cuba to Dominican
              Republic?
            </span>
            <button
              type="button"
              className="relative px-8 py-4 text-black ml-4 overflow-hidden my-9 font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
            >
              More information
              <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-red-500">
                New
              </span>
            </button>
          </div>
          <Image
            src={lopesan}
            className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
            width={2000}
            height={500}
          />
        </section>
        <section className="mx-5">
          <span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-red-500">
            How it works
          </span>
          <h2 className="text-5xl font-bold lg:text-center dark:text-gray-50">
            Travel with Yes is simple
          </h2>
          <section className="p-6 dark:bg-gray-900 my-20 dark:text-gray-100">
            <div className="container mx-auto flex-wrap grid grid-wrap justify-center grid-cols-1 md:grid-cols-3 text-center">
              <div className="flex flex-col justify-center items-center m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">
                  15000+
                </p>
                <p className="text-sm sm:text-base">Customers served</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">
                  15
                </p>
                <p className="text-sm sm:text-base">Years of experience</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">
                  22
                </p>
                <p className="text-sm sm:text-base">Team members</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl flex justify-center align-center gap-2 font-bold leading-none lg:text-4xl my-2">
                  <FcApproval />Exclusive hotels
                </p>
                <p className="text-sm sm:text-base">
                  We have the best hotels and largest inventory to offer you the
                  vacation of your dreams.
                </p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl flex justify-center align-center gap-2 font-bold leading-none lg:text-4xl my-2">
                  <FcOnlineSupport />24/7 Support
                </p>
                <p className="text-sm sm:text-base">
                  We`ll be there every step of the way. You can contact us
                  anytime.
                </p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl flex justify-center align-center gap-2 font-bold leading-none lg:text-4xl my-2">
				<FcUnlock />Secure payment
                </p>
                <p className="text-sm sm:text-base">
                  We accept all major credit cards with a variety of secure
                  payment solutions.
                </p>
              </div>
            </div>
          </section>

          <ContactBanner />
        </section>
      </div>
    </main>
  );
};

export default Banner;
