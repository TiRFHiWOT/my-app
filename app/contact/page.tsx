import { IoIosArrowForward } from "react-icons/io";
import support_guy from "@/components/Reilverse_Assets/Support_guy.svg";
import secure from "@/components/Reilverse_Assets/secure.png";
import comodo from "@/components/Reilverse_Assets/image 63345987.svg";
import logo from "@/components/Reilverse_Assets/Logo.svg";
import mcaffe from "@/components/Reilverse_Assets/image 63345988.png";
import contactIcon1 from "@/components/Reilverse_Assets/contactIcon1.svg";
import sendPlan from "@/components/Reilverse_Assets/sendPlan.svg";
import contactIcon2 from "@/components/Reilverse_Assets/contactIcon2.svg";
import contactIcon3 from "@/components/Reilverse_Assets/contactIcon3.svg";
import contactIcon5 from "@/components/Reilverse_Assets/contactIcon5.svg";
import contactIcon6 from "@/components/Reilverse_Assets/contactIcon6.svg";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import Back from "@/components/Back/page";
import Header from "@/components/Header/page";

const ContactUs = () => {
  return (
    <>
      <Back />
      <Header />
      <div
        className={` mx-auto mt-40  w-full h-auto min-h-[500px] flex flex-col items-center relative overflow-x-clip`}
        style={{ fontFamily: `Arboria-Book`, fontWeight: `400` }}
      >
        <div
          className={
            "w-10/12 rounded-xl bg-gradient-to-b from-[#fff] to-transparent p-[1.5px]"
          }
        >
          <div
            className={`gradientColumn flex flex-col lg:flex-row w-full justify-between h-full rounded-xl bg-white overflow-hidden pr-8 pl-14 py-4`}
          >
            <div className="lg:w-[50%] flex flex-col items-start">
              <p className="text-[#13519C] text-[24px] font-semibold">
                Contact Us
              </p>
              <span className="text-[#717171] font-normal text-[14px] mt-2">
                Any question or remarks? Just write us a message!
              </span>
              <div className="w-full mt-10">
                <form className="">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col items-start lg:w-[47%]">
                      <label
                        className="text-[#8D8D8D] text-[14px] font-medium"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full border-b-2 text-[#8D8D8D] border-[#8D8D8D] outline-0 bg-transparent pb-1 mt-2"
                        type="text"
                        name="firstName"
                      />
                    </div>
                    <div className="flex flex-col items-start lg:w-[47%]">
                      <label
                        className="text-[#8D8D8D] text-[14px] font-medium"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full border-b-2 text-[#8D8D8D] border-[#8D8D8D] outline-0 bg-transparent pb-1 mt-2"
                        type="text"
                        name="lastName"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-8 mt-10">
                    <div className="flex flex-col items-start lg:w-[47%]">
                      <label
                        className="text-[#8D8D8D] text-[14px] font-medium"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full border-b-2 text-[#8D8D8D] border-[#8D8D8D] outline-0 bg-transparent pb-1 mt-2"
                        type="text"
                        name="email"
                      />
                    </div>
                    <div className="flex flex-col items-start lg:w-[47%]">
                      <label
                        className="text-[#8D8D8D] text-[14px] font-medium"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="w-full border-b-2 text-[#8D8D8D] border-[#8D8D8D] outline-0 bg-transparent pb-1 mt-2"
                        type="number"
                        name="phoneNumber"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-10">
                    <p className="text-[14px] font-semibold text-[#011C2A]">
                      Select Subject?
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                      <div className="flex items-center mt-2 gap-2">
                        <input type="checkbox" id="generalInquiry" />
                        <label
                          htmlFor="generalInquiry"
                          className="text-[#13519C] font-medium text-[12px]"
                        >
                          General Inquiry
                        </label>
                      </div>
                      <div className="flex items-center mt-2 gap-2">
                        <input type="checkbox" id="generalInquiry2" />
                        <label
                          htmlFor="generalInquiry2"
                          className="text-[#13519C] font-medium text-[12px]"
                        >
                          General Inquiry
                        </label>
                      </div>
                      <div className="flex items-center mt-2 gap-2">
                        <input type="checkbox" id="generalInquiry3" />
                        <label
                          htmlFor="generalInquiry3"
                          className="text-[#13519C] font-medium text-[12px]"
                        >
                          General Inquiry
                        </label>
                      </div>
                      <div className="flex items-center mt-2 gap-2">
                        <input type="checkbox" id="generalInquiry4" />
                        <label
                          htmlFor="generalInquiry4"
                          className="text-[#13519C] font-medium text-[12px]"
                        >
                          General Inquiry
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-10">
                    <p className="text-[#8D8D8D] text-[14px] font-medium">
                      Message
                    </p>
                    <input
                      type="text"
                      placeholder="Write your message.."
                      className="bg-transparent h-[40px] text-[14px] placeholder:text-slate-400 w-full border-b-2 border-[#8D8D8D] outline-0"
                    />
                  </div>
                  <Link href={"/uat"} className="flex justify-end mt-10">
                    <div
                      className={
                        "overflow-hidden cursor-pointer my-4 z-0 w-48 h-11 max-[630px]:w-28 max-[630px]:h-12 max-[850px]:w-44 max-[850px]:h-14 max-[1200px]:w-52 max-[1200px]:h-16 flex pl-7 max-[630px]:text-start items-center rounded-lg max-[630px]:text-[16px] max-[850px]:text-xl text-[24px] text-white font-semibold bg-[#13519C] bg-gradient-to-tl from-[#13519C] to-[#2983D3] relative"
                      }
                    >
                      <span
                        className={
                          "font-[400] text-[16px] max-[630px]:-translate-x-1"
                        }
                      >
                        Send Message
                      </span>
                      <IoIosArrowForward
                        className={
                          "text-[250px] absolute -right-8 max-[630px]:-right-12 max-[630px]:text-[150px] max-[850px]:text-[200px] max-[850px]:-right-14 max-[1200px]:-right-16 opacity-40"
                        }
                      />
                    </div>
                  </Link>
                  <div className="flex justify-end">
                    <Image src={sendPlan} alt="send-plan" />
                  </div>
                </form>
              </div>
            </div>
            {/* /////////////////// */}
            <div
              className={
                "lg:w-[42%] rounded-t-xl h-fit bg-gradient-to-b from-[#2983D3] to-transparent p-[1.5px]"
              }
            >
              <div
                className={
                  "flex flex-col w-full items-start h-full rounded-t-xl bg-white overflow-hidden p-6"
                }
              >
                <p className="text-[#3B3B3B] text-[24px] font-semibold">
                  Need help ?
                </p>
                <p className="text-[#000] text-[16px] mt-1">
                  Choose how you like to connect with us
                </p>
                <div className="mt-6 w-full">
                  <div className="border-b border-[#E4E4E4] pb-5">
                    <div className="flex justify-between w-5/6">
                      <div className="flex gap-5 items-center">
                        <Image src={contactIcon1} alt="contactIcon1" />
                        <p className="text-[#000] font-semibold text-[16px]">
                          Request a call back
                        </p>
                      </div>
                      <Image src={contactIcon6} alt="contactIcon5" />
                    </div>
                  </div>
                  <div className="border-b border-[#E4E4E4] pb-5 mt-5">
                    <div className="flex justify-between w-5/6">
                      <div className="flex gap-5 items-center">
                        <Image src={contactIcon2} alt="contactIcon1" />
                        <p className="text-[#000] font-semibold text-[16px]">
                          Chat with us
                        </p>
                      </div>
                      <Image src={contactIcon6} alt="contactIcon5" />
                    </div>
                  </div>
                  <div className="border-b border-[#E4E4E4] pb-5 mt-5">
                    <div className="flex justify-between w-5/6">
                      <div className="flex gap-5 items-center">
                        <Image src={contactIcon3} alt="contactIcon1" />
                        <div className="flex flex-col items-start">
                          <p className="text-[#000] font-medium text-[10px]">
                            Connect on Whatsapp at
                          </p>
                          <p className="text-[#13519C] font-semibold text-[16px]">
                            +65 6287 7537
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`contactLastColumn px-5 py-3 mt-10 rounded-xl`}
                  >
                    <div className="flex w-5/6">
                      <div className="flex gap-5 items-center">
                        <Image src={contactIcon5} alt="contactIcon4" />
                        <div className="flex flex-col items-start">
                          <p className="text-[#000] font-medium text-[10px]">
                            Need help buying a new policy ?
                          </p>
                          <p className="text-[#13519C] font-semibold text-[16px] my-1">
                            Call at +65 6287 7537
                          </p>
                          <p className="text-[#000] font-medium text-[10px]">
                            10 AM to 7 PM (use registered number)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div
          className={
            "w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center pb-20"
          }
        >
          <div className={"flex flex-col items-center mt-10"}>
            <Image
              data-aos="zoom-out-up"
              className={"w-fit h-10 object-containe"}
              src={logo}
              alt={"Railverse Logo"}
            />

            <p
              style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
              data-aos="zoom-out-up"
              className={"text-2xl mt-4 opacity-75"}
            >
              Powered by Worldbridge Insurance Broker
            </p>
            <p
              style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
              data-aos="zoom-out-up"
              className={"text-xl mt-4 opacity-75"}
            >
              #10, 150 South Bridge Rd, #04 Fook Hai Building, Singapore 058727
            </p>
          </div>
        </div>
        <div
          className={
            "w-full flex max-[850px]:flex-col max-[850px]:gap-4 items-center justify-between max-[850px]:-translate-y-[50px] -translate-y-12 pl-32 max-[730px]:px-4 max-[1200px]:pr-10 max-[1200px]:pl-20 min-[1800px]:pl-80 pr-16"
          }
        >
          <div
            data-aos="fade-right"
            className={"flex flex-col max-[650px]:items-center relative"}
          >
            <div
              className={` shadow_inner} max-[500px]:w-[304px] w-[374px] h-[100px] max-[500px]:h-[90px] bg-white flex items-center  rounded-2xl`}
            >
              <Image
                className={
                  "w-fit h-[149px] max-[500px]:h-[100px] max-[500px]:-translate-x-2 -translate-x-7 self-end object-contain"
                }
                src={support_guy}
                alt={"support guy"}
              />

              <div
                style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                className={
                  "flex flex-col items-center ml-7 max-[500px]:ml-2 max-[500px]:items-start text-[16px] max-[500px]:text-start font-semibold opacity-50 gap-2 "
                }
              >
                <span style={{ fontWeight: "500" }}>CUSTOMER SERVICE</span>
                <span className={"text-[18px]"}>1800 2333 533</span>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className={` shadow_inner max-[350px]:w-[304px] w-[315px] h-[75px] px-4 bg-white flex items-center justify-center  rounded-2xl`}
          >
            <div className={"w-full justify-around flex items-center gap-2"}>
              <Image
                className={"w-fit h-9 object-contain"}
                src={secure}
                alt={"secure"}
              />
              <Image
                className={"w-fit h-6 object-contain"}
                src={comodo}
                alt={"comodo"}
              />
              <Image
                className={"w-fit h-5 object-contain"}
                src={mcaffe}
                alt={"mcAffe"}
              />
            </div>
          </div>
        </div>

        <div
          className={
            "w-full max-[800px]:px-2 max-[1440px]:px-6  max-w-[1190px] min-[1800px]:max-w-[1600px] flex flex-col  items-center"
          }
        >
          <p
            style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
            data-aos="fade-down"
            className={
              "text-start text-[14px] max-[800px]:text-[12px] font-semibold leading-7 opacity-75 "
            }
          >
            Remark
            <br />
            <br />
            Please answer all the above questions truthfully. If the insured
            conceals the truth or making a false statement will result in the
            voiding of this insurance contract. The insurance company has the
            right to terminate the insurance contract under Section 865 of the
            Civil and Commercial Code, and may refuse to pay compensation
            <br />
            <br />
            The Company does not contact customers through other (communication)
            channels apart from the Company’s official channels under any
            circumstances.
            <br />
            <br />
            Please note that under no circumstances shall the Company be held
            liable or responsible for any claims, losses, damages, expenses, or
            other inconvenience resulting from or in any way connected with such
            communication.
            <br />
            <span>Copyright 2024 Rielverse All Rights Reserved.</span>
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default ContactUs;
