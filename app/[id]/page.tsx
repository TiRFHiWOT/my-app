"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoLogoInstagram } from "react-icons/io";
import CustomCheckbox from "@/components/customChekbox/page";
import operator from "@/components/Reilverse_Assets/operator.svg";
import call from "@/components/Reilverse_Assets/support call.svg";
import mail from "@/components/Reilverse_Assets/mail.svg";
import couple from "@/components/Reilverse_Assets/couple 2.svg";
import logo from "@/components/Reilverse_Assets/Logo.svg";
import secure from "@/components/Reilverse_Assets/secure.png";
import comodo from "@/components/Reilverse_Assets/image 63345987.svg";
import mcaffe from "@/components/Reilverse_Assets/image 63345988.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import support_guy from "@/components/Reilverse_Assets/Support_guy.svg";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import Back from "@/components/Back/page";
import Header from "@/components/Header/page";

export default function Insurance() {
  console.log("insurance");
  const handleFormSubmit = async () => {
    console.log("handleForm");
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <Back />
      <Header />
      <div className="mx-auto mt-40  w-full h-auto min-h-[500px] flex flex-col items-center relative overflow-x-clip">
        <ToastContainer />
        <div
          className={
            "w-10/12 max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center"
          }
        >
          <div
            className={
              "w-full h-auto bg-gradient-to-b from-[#fff] to-transparent p-[1px] rounded-t-xl"
            }
          >
            <div
              className={
                "w-full h-auto flex max-[700px]:flex-col max-[700px]:items-center items-start bg-gradient-to-b from-white/90 to-white/30 rounded-t-xl gap-10 px-5 pt-3 pb-20"
              }
            >
              <div className={"flex flex-col items-start text-start"}>
                <span
                  className={
                    "text-[24px] max-[500px]:text-[21px] font-semibold"
                  }
                >
                  {data?.title || ""}
                </span>
                <span
                  style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                  className={"text-[18px] max-[500px]:text-[14px] font-[400]  "}
                >
                  {data?.description || ""}
                </span>

                <div
                  className={"w-auto flex items-start flex-wrap gap-10 mt-10"}
                >
                  <div
                    className={
                      "border-b-2 border-[#2983D3] rounded-2xl w-[45%] mt-3"
                    }
                  >
                    <input
                      style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                      placeholder={"First Name"}
                      className={
                        "w-[270px]  h-[45px] bg-transparent rounded-xl pl-7 outline-0"
                      }
                    />
                  </div>

                  <div
                    className={
                      "border-b-2 border-[#2983D3] rounded-2xl w-[45%] mt-3"
                    }
                  >
                    <input
                      style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                      placeholder={"Last Name"}
                      className={
                        "w-[270px] h-[45px] bg-transparent rounded-xl pl-7 outline-0"
                      }
                    />
                  </div>

                  <div
                    className={
                      "border-b-2 border-[#2983D3] rounded-2xl w-[45%] mt-3"
                    }
                  >
                    <input
                      style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                      placeholder={"Ex : gmail.com"}
                      className={
                        "w-[270px] h-[45px] bg-transparent rounded-xl pl-7 outline-0"
                      }
                    />
                  </div>

                  <div
                    className={
                      "border-b-2 border-[#2983D3] rounded-2xl w-[45%] mt-3"
                    }
                  >
                    <input
                      style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                      placeholder={"Phone"}
                      className={
                        "w-[270px] h-[45px] bg-transparent rounded-xl pl-7 outline-0"
                      }
                    />
                  </div>
                </div>

                <div
                  onClick={handleFormSubmit}
                  className={
                    "overflow-hidden w-[150px] h-10 flex pl-7 max-[630px]:text-start items-center self-start rounded-lg text-[16px] text-white font-semibold bg-gradient-to-tl from-[#2983D3] to-[#13519C] relative mt-12"
                  }
                >
                  <span className={"font-[400] uppercase"}>Send</span>
                  <IoIosArrowForward
                    className={"text-[150px] absolute -right-5 opacity-40"}
                  />
                </div>

                <div className={"flex items-center mt-5 gap-2"}>
                  <div className={"w-[25px] h-[25px] block mt-4"}>
                    <CustomCheckbox
                      className={"w-[25px] h-[25px] shadow"}
                      onClick={() => console.log("agreement")}
                    />
                  </div>

                  <span
                    style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                    className={"mt-3 text-[13px] max-w-[480px] "}
                  >
                    I hereby authorize Rielverse to contact me on my given
                    mobile number.
                  </span>
                </div>
              </div>

              <div
                className={
                  "w-[1px] h-[350px] max-[700px]:hidden bg-gradient-to-b from-[#13519C] to-transparent mt-10"
                }
              ></div>

              {/*right side*/}
              <div
                className={"flex flex-col items-start text-start gap-4 mt-10"}
              >
                <div className={"flex items-center gap-3"}>
                  <Image
                    className={"w-[24px] h-[24px] object-contain "}
                    src={operator}
                    alt={"operator"}
                  />

                  <div className={"flex flex-col items-start text-start"}>
                    <span className={"text-[16px] text-[#13519C]"}>
                      Customer Care
                    </span>
                    <span
                      style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                      className={"text-[12px] "}
                    >
                      Looking for help regarding policy?
                    </span>
                  </div>
                </div>

                <div className={"flex items-center gap-3"}>
                  <Image
                    className={"w-[24px] h-[24px] object-contain "}
                    src={call}
                    alt={"call"}
                  />

                  <div className={"flex flex-col items-start text-start"}>
                    <p className={"text-[16px] flex items-start"}>
                      Call Us :<span>9999-22-999</span>
                    </p>
                    <span
                      style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                      className={"text-[9px] self-center "}
                    >
                      24/7 available
                    </span>
                  </div>
                </div>

                <div className={"flex items-center gap-3"}>
                  <Image
                    className={"w-[33px] h-[33px] object-contain "}
                    src={mail}
                    alt={"call"}
                  />

                  <div className={"flex flex-col items-start text-start"}>
                    <span className={"text-[16px] text-[#13519C]"}>
                      Drop Email At
                    </span>
                    <span
                      style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                      className={"text-[12px] "}
                    >
                      Email-Id
                    </span>
                    <span
                      style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                      className={"text-[12px] "}
                    >
                      help@reilverse.com | support@reilverse.com
                    </span>
                  </div>
                </div>

                <Image
                  className={
                    "object-contain max-[800px]:w-[259px] max-[800px]:h-fit max-w-[379px] max-h-[207px] mt-10 max-[800px]:self-center self-end"
                  }
                  src={couple}
                  alt={"couple"}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            "w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center pb-20"
          }
        >
          <div className={"flex flex-col items-center mt-24"}>
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

        {/* <div className={'w-full h-0.5 bg-gray-200/70 mt-32'}></div> */}

        <div
          className={
            "w-full flex max-[850px]:flex-col max-[850px]:gap-4 items-center justify-between max-[850px]:-translate-y-[50px] -translate-y-12 pl-32 max-[730px]:px-4 max-[1200px]:pr-10 max-[1200px]:pl-20 min-[1800px]:pl-80 pr-16"
          }
        >
          <div
            data-aos="fade-right"
            className={"flex flex-col max-[650px]:items-center relative mt-10"}
          >
            <div
              className={` shadow_inner max-[500px]:w-[304px] w-[374px] h-[100px] max-[500px]:h-[90px] bg-white flex items-center  rounded-2xl`}
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
          </p>
        </div>

        <div className={"w-full flex items-end justify-between mt-20"}>
          <div
            className={
              "w-[40%] max-[800px]:h-14 h-20 bg-gray-200 rounded-tr-full"
            }
          ></div>
          <div
            className={
              "w-auto flex h-20 items-center justify-between px-10 max-[600px]:px-4 gap-4 text-2xl text-[#13519C] "
            }
          >
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedinIn />
            <IoLogoInstagram />
          </div>
          <div
            className={
              "w-[40%] max-[800px]:h-14 h-20 bg-gray-200 rounded-tl-full"
            }
          ></div>
        </div>
      </div>
    </>
  );
}
