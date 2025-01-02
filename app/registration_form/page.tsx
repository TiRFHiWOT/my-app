"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Back from "@/components/Back/page";
import Header from "@/components/Header/page";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function RegistrationForm() {
  return (
    <>
      <Back />
      <Header />
      <div
        className="mx-auto mt-40  w-full h-auto min-h-[500px] flex flex-col items-center relative overflow-x-clip"
        style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
      >
        <div className="bg-white rounded-3xl px-10  w-full lg:w-[90rem] relative">
          <div className="w-full flex justify-end items-center">
            <Link href="#" className="text-gray-800 hover:text-gray-700 py-6">
              <FaArrowLeftLong className="w-6 h-6" />
            </Link>
          </div>

          <div className=" flex flex-col gap-5 lg:gap-20">
            <div className="flex flex-col gap-5 lg:flex-row justify-between w-[80%]">
              <div>
                <label className="block text-gray-800 text-lg font-semibold">
                  Full Name
                </label>
                <p className="text-sm text-gray-800 mt-2 mb-3">Need Help ?</p>
                <input
                  type="text"
                  placeholder="John Cooper"
                  className=" px-4 py-3 rounded-lg border border-gray-800 w-full lg:w-[20rem] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-800 text-lg font-semibold">
                  Email ID
                </label>
                <p className="text-sm text-gray-800 mt-2 mb-3">Need Help ?</p>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className=" px-4 py-3 rounded-lg border border-gray-800 w-full lg:w-[20rem] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-800 text-lg font-semibold">
                  Mobile No
                </label>
                <p className="text-sm text-gray-800 mt-2 mb-3">Need Help ?</p>
                <input
                  type="tel"
                  placeholder="7799262626"
                  className=" px-4 py-3 rounded-lg border border-gray-800 w-full lg:w-[20rem] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-row gap-x-20 h-full w-full lg:h-96 ">
              <div className="flex flex-col">
                <div>
                  <label className="block text-gray-800 text-lg font-semibold">
                    Address
                  </label>
                  <p className="text-sm text-gray-800 mt-2 mb-3">Need Help ?</p>
                  <input
                    type="text"
                    placeholder="8 90 0 Ad de"
                    className="px-4 py-3 rounded-lg border border-gray-800 w-full lg:w-[45rem] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>

                <Link
                  href="#"
                  className="w-fit mt-20 inline-flex items-center px-8 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Processed
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              <div className="hidden lg:flex items-center justify-center w-full">
                <Image
                  src="/couple3.svg"
                  alt="Family illustration"
                  width={800}
                  height={800}
                  priority
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
