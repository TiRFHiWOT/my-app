"use client";

import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import Back from "@/components/Back/page";
import Header from "@/components/Header/page";

export default function QuoteDetails() {
  return (
    <>
      <Back />
      <Header />
      <div className="mx-auto mt-40  w-full h-auto min-h-[500px] flex flex-col items-center relative overflow-x-clip">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl px-10 pb-6 relative">
          {/* Header */}
          <div className="flex flex-col justify-between items-start mb-8">
            <div className="flex w-full items-center gap-4 justify-between">
              <div className="bg-gradient-to-t from-blue-800 to-transparent p-[1px] rounded-b-xl">
                <div className="border rounded-b-xl pl-4 pr-8 pt-4 pb-2 bg-white">
                  <h1 className="text-xl font-bold text-red-500">Forte</h1>
                  <p className="text font-semibold text-gray-600">
                    General Insurance
                  </p>
                </div>
              </div>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <ArrowLeft className="w-6 h-6" />
              </Link>
            </div>
            <div className="text-right w-full flex items-center justify-between">
              <div className=" flex flex-col text-start">
                <p className="text-black mb-1 font-bold">
                  PERIOD OF INSURANCE :
                </p>
                <p className="text-blue-800 font-medium">
                  12 APRIL 2024 TO 11 APRIL 2025
                </p>
              </div>
              <div className="flex flex-col items-end gap-4 justify-between mb-2">
                <p className="font-bold ">
                  Quote No : <span className="text-blue-800">ADKD9876567</span>
                </p>
                <button className="inline-flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-2 text-sm text-blue-800 hover:bg-blue-50">
                  <Share2 className="w-4 h-4" />
                  Share Quote
                </button>
              </div>
            </div>
          </div>

          {/* Insurance Details */}
          <div className="space-y-6 mb-8">
            <div className="flex gap-5">
              <p className="text-black mb-1 w-40 font-bold">INSURED NAME :</p>
              <p className="text-blue-800 font-medium">CHIV SOTHANA AS OWNER</p>
            </div>

            <div className="flex gap-5">
              <p className="text-black mb-1 w-40 font-bold">ADDRESS :</p>
              <p className="text-blue-800 font-medium">
                FLOOR 7, BUILDING 721, MONIVONG BLVD,
                <br />
                BOENG KENGKANG 3, CHAMKAR MON,
                <br />
                PHNOM PENH, CAMBODIA
              </p>
            </div>

            <div className="flex gap-5">
              <p className="text-black mb-1 w-40 font-bold">OCCUPATION :</p>
              <p className="text-blue-800 font-medium">BANK</p>
            </div>

            <div className="flex gap-5">
              <p className="text-black mb-1 w-40 font-bold">SCOPE OF COVER :</p>
              <p className="text-blue-800 font-medium">
                THIRD PARTY LIABILITY + THEFT
              </p>
            </div>
          </div>

          {/* Vehicle Details Table */}
          <div className="mb-8">
            <p className="text-black mb-4 font-bold">VEHICLE(S) :</p>
            <div className="overflow-x-auto">
              <div className="w-full">
                <div className="p-[2px] rounded-xl bg-gradient-to-b from-blue-800 to-transparent mb-5">
                  <div className="text-sm text-gray-600 rounded-xl flex flex-col lg:flex-row text-center lg:gap-[1px]">
                    <div className="flex flex-row item-center justify-between lg:flex-col bg-white pt-4 lg:rounded-tl-xl lg:rounded-tr-none rounded-t-xl">
                      <h1 className="px-4 py-2 flex items-end h-12 text-md font-semibold ">
                        MAKE & MODEL
                      </h1>
                      <p className="px-4 py-2">MAZDA CX-3</p>
                    </div>

                    <div className="flex flex-row item-center justify-between lg:flex-col bg-white pt-4">
                      <h1 className="px-4 py-2 flex items-end h-12 text-md font-semibold ">
                        YEAR OF MANUFACTURE
                      </h1>
                      <p className="px-4 py-2">2024</p>
                    </div>
                    <div className="flex flex-row item-center justify-between lg:flex-col bg-white pt-4">
                      <h1 className="px-4 py-2 flex items-end h-12 text-md font-semibold ">
                        CHASSIS NO
                      </h1>
                      <p className="px-4 py-2">MM7DK2W7 ARW 703387</p>
                    </div>
                    <div className="flex flex-row item-center justify-between lg:flex-col bg-white pt-4">
                      <h1 className="px-4 py-2 flex items-end h-12 text-md font-semibold ">
                        ENGINE NO
                      </h1>
                      <p className="px-4 py-2">PE20370009</p>
                    </div>
                    <div className="flex flex-row item-center justify-between lg:flex-col bg-white pt-4">
                      <h1 className="px-4 py-2 flex items-end h-12 text-md font-semibold ">
                        REGISTRATION NO.
                      </h1>
                      <p className="px-4 py-2">TEMP</p>
                    </div>
                    <div className="flex flex-row item-center justify-between lg:flex-col bg-white pt-4">
                      <h1 className="px-4 py-2 flex items-end h-12 text-md font-semibold ">
                        CAPACITY
                      </h1>
                      <p className="px-4 py-2">2000 CC</p>
                    </div>
                    <div className="flex flex-row item-center justify-between lg:flex-col bg-white pt-4">
                      <h1 className="px-4 py-2 flex items-end h-12 text-md font-semibold ">
                        SUM INSURED (USD)
                      </h1>
                      <p className="px-4 py-2">34,000.00</p>
                    </div>
                    <div className="flex flex-row item-center justify-between lg:flex-col bg-white pt-4 lg:rounded-tr-xl">
                      <h1 className="px-4 py-2 flex items-end h-12 text-md font-semibold ">
                        NCD %
                      </h1>
                      <p className="px-4 py-2">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end">
            <div className="flex flex-col items-center gap-4">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-blue-700 transition-colors">
                Confirm & Pay
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Terms & Conditions*
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
