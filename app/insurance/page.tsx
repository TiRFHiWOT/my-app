"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { HelpCircle, ChevronDown } from "lucide-react";
import Header from "@/components/Header/page";
import Back from "@/components/Back/page";

export default function InsuranceQuote() {
  return (
    <>
      <Back />
      <Header />
      <div
        className="mx-auto mt-40  w-full h-auto min-h-[500px] flex flex-col items-center relative overflow-x-clip"
        style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
      >
        <div className="mx-auto lg:w-[90rem] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-[2px] bg-gradient-to-b from-blue-700 to-transparent rounded-xl">
            <div className="p-10 rounded-xl bg-white">
              <div className="space-y-6 h-full lg:h-[50rem] bg-gradient-to-b from-white to-transparent rounded-lg">
                <div className="border-b border-gray-400 pb-8">
                  <h2 className="text-lg font-semibold mb-4 overflow-hidden">
                    My car details
                  </h2>
                  <Select defaultValue="toyota">
                    <div className="border-2 border-blue-600 rounded-lg py-1 px-2 flex flex-row justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-xs">TOYOTA 4RUNNER 3.0</span>
                        <span className="text-xl text-blue-600">
                          2023 (256A)
                        </span>
                      </div>
                      <ChevronDown />
                    </div>
                    <SelectContent>
                      <SelectItem value="toyota">
                        {" "}
                        TOYOTA 4RUNNER 3.0 2023 (2566)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-3 flex items-center gap-3">
                    My Plan Preferences
                  </h2>
                  <p className="flex flex-row items-center gap-2 mb-5">
                    Covrage <HelpCircle className="h-4 w-4 text-gray-500" />{" "}
                  </p>
                  <div className="space-y-3">
                    <div className="bg-blue-800 text-white p-3 rounded-md">
                      Basic
                    </div>
                    <div className="bg-blue-100 p-3 rounded-md flex items-center justify-between">
                      Third Party
                      <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-md flex items-center justify-between">
                      Wind Screen
                      <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6 ">
            <div className="bg-gradient-to-b from-gray-200 via-transparent to-transparent bg-opacity-50 rounded-xl pr-10">
              <div className="p-6 mb-20">
                <div className="flex flex-row gap-5 ">
                  <div className="w-[30%]">
                    <label className="flex items-center gap-2 mb-4">
                      Sum Insured
                      <HelpCircle className="h-4 w-4 text-gray-500" />
                    </label>
                    <Slider
                      defaultValue={[50000]}
                      max={75000}
                      min={40000}
                      step={1000}
                      className="mb-2"
                    />
                    <div className="text-sm text-gray-600 border border-gray-300 rounded-md  py-1 px-3 bg-white ">
                      $75000 USD
                    </div>
                  </div>
                  <div className="h-full w-[2px] bg-gradient-to-b from-blue-600 to-transparent"></div>
                  <div>
                    <label className="block mb-4">Engine Size</label>
                    <Input defaultValue="3000" className="w-full" />
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 bg-white rounded-xl bg-opacity-50">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex flex-col items-center gap-6">
                    <div className="bg-gradient-to-t from-blue-600 to-transparent p-[2px] rounded-b-2xl">
                      <div className="w-auto bg-white px-10 rounded-b-2xl py-3">
                        <h1 className="text-3xl font-bold text-red-600">
                          Forte
                        </h1>
                        <p>General insurance</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Policy details
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      More Details
                    </Button>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-2xl font-bold text-blue-800">
                      $30,000.00
                    </div>
                    <Button className="bg-blue-800 px-10">Pay Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
