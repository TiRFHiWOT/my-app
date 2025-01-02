"use client";

import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  Copy,
} from "lucide-react";
import Link from "next/link";
import Back from "@/components/Back/page";
import Header from "@/components/Header/page";

export default function ConfirmationPage() {
  const [hasClaims, setHasClaims] = useState(false);

  return (
    <>
      <Back />
      <Header />
      <div
        className="mx-auto mt-40  w-full h-auto min-h-[500px] flex flex-col items-center relative overflow-x-clip"
        style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
      >
        <div className="max-w-[90rem] mx-auto lg:grid grid-cols-3 gap-6">
          <div className="col-span-2  p-[1px] bg-gradient-to-b mx-4 lg:mx-0  from-blue-600 via-blue-600 to-transparent rounded-3xl">
            <div className="bg-white h-[50rem] rounded-3xl  p-6 md:p-8">
              <h1 className="text-2xl font-bold mb-2">Confirmation</h1>
              <p className="text-gray-800 mb-8">
                Our insurance consultant will call you to confirm the order
                after it has been submitted.
              </p>

              <div className="w-full flex flex-col lg:flex-row justify-between ">
                {/* Policy Start Date */}
                <div className="mb-6 w-full lg:w-[45%]">
                  <label className="block font-medium mb-1">
                    Policy start date ?
                  </label>
                  <p className="text-xs py-1 text-gray-800 mb-2">
                    If you currently have a policy that will expire soon, please
                    select a new policy start date that matches the end date of
                    your current policy for continuous coverage.
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="Fri, 29 Mar 2024"
                      className="w-full p-3 border-black border rounded-lg pr-10"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                {/* Manufacture Date */}
                <div className="mb-6 w-full lg:w-[45%]">
                  <label className="block font-medium mb-1">
                    Manufacture Date
                  </label>
                  <p className="text-xs py-1 text-gray-800 mb-2">
                    {`A car's manufacturing date is the calendar year when the vehicle
                was made. It's different from the production date, which is the
                date when the entire vehicle was assembled.`}
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="Fri, 29 Mar 2024"
                      className="w-full p-3 border-black border rounded-lg pr-10"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col lg:flex-row justify-between ">
                {/* Registration Number */}
                <div className="mb-6 w-full lg:w-[45%]">
                  <label className="block font-medium mb-1">
                    REGISTRATION NO.
                  </label>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs py-1 text-gray-800">
                      Need Help ?
                    </span>
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="TEMP"
                    className="w-full p-3 border-black border rounded-lg"
                  />
                </div>

                {/* Chassis Number */}
                <div className="mb-6 w-full lg:w-[45%]">
                  <label className="block font-medium mb-1">CHASSIS NO.</label>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs py-1 text-gray-800">
                      Need Help ?
                    </span>
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="MM7DK2W7ARW703387"
                    className="w-full p-3 border-black border rounded-lg"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col lg:flex-row justify-between ">
                {/* Engine Number */}
                <div className="mb-6 w-full lg:w-[45%]">
                  <label className="block font-medium mb-1">ENGINE NO.</label>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs py-1 text-gray-800">
                      Need Help ?
                    </span>
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="PE20370009"
                    className="w-full p-3 border-black border rounded-lg"
                  />
                </div>

                {/* NCD and Years of Driving */}
                <div className="grid grid-cols-2 gap-6 mb-6 w-full lg:w-[45%]">
                  <div>
                    <label className="block font-medium mb-1">NCD</label>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs py-1 text-gray-800">
                        Need Help ?
                      </span>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="relative">
                      <select className="w-full p-3 border-black border rounded-lg appearance-none pr-10">
                        <option>10%</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium mb-1">
                      Years of driving
                    </label>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs py-1 text-gray-500">
                        Need Help ?
                      </span>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="relative bg-transparent">
                      <select className="w-full p-3 border rounded-lg appearance-none pr-10">
                        <option>5</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Claims History */}
              <div>
                <label className="block font-medium mb-1">
                  Claims in the past 3 years
                </label>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs py-1 text-gray-800">
                    Need Help ?
                  </span>
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex gap-2 bg-gray-200 p-1 w-fit rounded-lg">
                  <button
                    onClick={() => setHasClaims(true)}
                    className={`px-4 py-1 rounded-lg w-28 cursor-pointer  ${
                      hasClaims ? "bg-blue-200 " : ""
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setHasClaims(false)}
                    className={`px-4 py-1 rounded-lg w-28 cursor-pointer ${
                      !hasClaims ? "bg-blue-200" : ""
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 p-[1px] bg-gradient-to-b mx-4 lg:mx-0  from-blue-600 via-blue-600 to-transparent rounded-3xl mt-96 lg:mt-0">
            <div className="bg-white h-[50rem] w-full rounded-3xl p-6 md:p-8 ">
              <div className="flex justify-between items-start">
                <div className="flex flex-col justify-start  pb-4 items-center gap-2">
                  <h2 className="text-xl font-bold">Policy Details</h2>
                  <div className="flex items-center self-start gap-1 text-blue-600">
                    <span>Type 3</span>
                    <Copy className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">$300</div>
                  <div className="text-sm text-gray-500">per year</div>
                </div>
              </div>

              <div className="space-y-2 mb-8 border-y border-gray-400 border-dashed pt-2 py-20">
                <div className="flex justify-between py-2">
                  <span>Type 3</span>
                  <span>$300</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Deductible</span>
                  <span>$0</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Repair type</span>
                  <span>Garage</span>
                </div>
              </div>

              <div className=" mb-8">
                <div className="flex justify-between py-2">
                  <span>Sub-total</span>
                  <span>$290</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>+ Admin Fee</span>
                  <span>$1</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-xl font-bold">Final Price</span>
                  <span className="text-3xl font-bold text-blue-600">$300</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  By continuing, you have agreed to our{" "}
                  <Link href="#" className="text-blue-600">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-blue-600">
                    T&C
                  </Link>
                </p>
              </div>

              <button className="bg-blue-800 w-fit gap-4 text-white rounded-lg py-4 px-6 flex items-center justify-between hover:bg-blue-700 transition-colors">
                <span>Confirm and pay</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Get your policy online instantly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
