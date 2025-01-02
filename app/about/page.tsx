"use client";
import diamond from "@/components/Reilverse_Assets/diamond logo.svg";
import layer from "@/components/Reilverse_Assets/about_layer.png";
import { IoIosArrowForward } from "react-icons/io";
import logo from "@/components/Reilverse_Assets/Logo.svg";
import support_guy from "@/components/Reilverse_Assets/Support_guy.svg";
import secure from "@/components/Reilverse_Assets/secure.png";
import comodo from "@/components/Reilverse_Assets/image 63345987.svg";
import mcaffe from "@/components/Reilverse_Assets/image 63345988.png";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Back from "@/components/Back/page";
import Header from "@/components/Header/page";
import colleges from "@/public/col.jpg";

export default function AboutUs() {
  return (
    <>
      <Back />
      <Header />
      <div
        className="mx-auto mt-40  w-full h-auto min-h-[500px] flex flex-col items-center relative overflow-x-clip"
        style={{ fontFamily: `Arboria-Book`, fontWeight: `400` }}
      >
        <div
          className={
            "w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center pb-20"
          }
        >
          {/* <div className={'w-full h-auto bg-gradient-to-b from-[#8DC14B] to-transparent p-[1px] rounded-t-xl'}> */}
          <div className={"w-full h-auto p-[1px] rounded-t-xl"}>
            <div
              className={
                "w-full h-auto flex flex-col items-start bg-gradient-to-b from-white/90 to-white/30 rounded-t-xl gap-10 px-10 pt-8 pb-20"
              }
            >
              <div
                className={
                  "w-full max-[1150px]:flex-col-reverse max-[1150px]:items-center flex items-start justify-between"
                }
              >
                <div
                  className={
                    "max-[1150px]:w-full flex flex-col items-start text-start"
                  }
                >
                  <span className={"text-[23px] font-semibold tracking-wide"}>
                    About <br /> Rielverse
                  </span>

                  <span
                    className={
                      "text-[18px] max-[1150px]:w-full min-[1150px]:w-[500px] mt-5"
                    }
                  >
                    Work directly with Insurance experts that have over 15 years
                    of experience in the insurance industry.
                  </span>

                  <div
                    className={
                      "w-full max-w-[430px] h-[1px] bg-gradient-to-r from-[#13519C] to-transparent mt-16 "
                    }
                  ></div>
                </div>

                <div className={"flex relative"}>
                  <Image
                    src={diamond}
                    alt=""
                    className={
                      " max-w-[238px] max-h-[175px] max-[1150px]:max-w-[128px] max-[1150px]:max-h-[78px] object-contain absolute max-[1150px]:-bottom-2 -bottom-14 max-[1150px]:-left-10 -left-32"
                    }
                  />
                  <Image
                    className={
                      "max-w-[339px] max-h-[226px] max-[1150px]:max-w-[279px] max-[1150px]:max-h-[166px] object-contain rounded-xl"
                    }
                    src={colleges}
                    alt={"colleges"}
                    width={0}
                    height={0}
                  />
                </div>
              </div>

              <div className={"w-full flex flex-col items-start text-start"}>
                <span className={"text-[24px] max-w-[550px] font-semibold"}>
                  Comparing, customizing & buying insurance policies has just
                  got easier
                </span>

                <span
                  style={{ fontFamily: `Arboria-Book`, fontWeight: `400` }}
                  className={"text-[18px]  mt-5"}
                >
                  Rielverse is built on over a decade’s worth of insurance
                  experience and expertise. Abc, our co-founder has worked in
                  insurance for nearly 15 years, and understands the pain points
                  of the customers who are looking to buy or renew their
                  insurance, be it car, home, life or health and has been
                  looking at how to resolve these issues as well as providing a
                  solution-based service to his clients.
                  <br />
                  <br />
                  This is where Abc, founder of SNG and co-founder of Rielverse
                  was able to provide his digital experience to help build a
                  user friendly and easy digital platform that provides an
                  online quote to customers in under 1 minute, at any time,
                  anywhere on any device.
                </span>
              </div>

              <div
                className={
                  "w-full flex items-start gap-10  max-[1150px]:flex-col max-[1150px]:items-center"
                }
              >
                <div className={"w-[300px] h-[450px]"}>
                  <div
                    className={
                      "w-[300px] h-[448px] block border-2 rounded-2xl overflow-visible border-[#13519C]/50 hover:border-[#13519C] duration-300"
                    }
                  >
                    <Image
                      className={
                        "w-full h-full rounded-2xl duration-300 shadow-xl hover:shadow-[#13519C]/30 hover:translate-x-3 hover:translate-y-3"
                      }
                      src={layer}
                      alt={"back layer"}
                    />
                  </div>
                </div>

                <div className={"flex flex-col items-start text-start mt-7 "}>
                  <span className={"text-[24px] font-semibold max-w-[550px]"}>
                    Our Mission
                  </span>

                  <span
                    style={{ fontFamily: `Arboria-Book`, fontWeight: `400` }}
                    className={"text-[18px]  mt-5"}
                  >
                    Our mission is to become the most reliable platform for
                    personal finance and insurance in the SNG by simplifying the
                    process. Find and compare insurance policies, credit cards,
                    loans, and bank accounts all in one place.
                  </span>

                  <span
                    className={"text-[24px] font-semibold max-w-[550px] mt-7"}
                  >
                    Our Vision
                  </span>

                  <span
                    style={{ fontFamily: `Arboria-Book`, fontWeight: `400` }}
                    className={"text-[18px]  mt-5"}
                  >
                    Our vision is to have you bank on us for all your personal
                    finance needs. Our platform allows you to easily compare
                    multiple policies side-by-side to visualize the benefits and
                    advantages of each policy, thereby empowering you to make
                    your own informed banking decisions.
                  </span>
                </div>
              </div>

              <p
                style={{ fontFamily: `Arboria-Book`, fontWeight: `400` }}
                className={"text-start"}
              >
                The team at Rielverse has been hand-picked to ensure that the
                same level of care, service and insurance expertise is what each
                customer receives, always! Constantly listening and learning so
                that the customer has the best digital experience, is able to
                find the best insurance cover quickly, easily and at the best
                price with an insurance expert at the other end of the phone or
                WhatsApp chat as support.
                <br />
                <br />
                The team at Rielverse chose to partner with Abc Insurance as
                their broker because they have nearly 15 years of experience
                within the insurance industry, and more importantly they provide
                a service that aligns itself with the values that underpin
                Rielverse around quality, transparency, speed, and best service.
              </p>
            </div>
          </div>
        </div>

        <div className={"w-full flex flex-col items-center px-4"}>
          <div
            className={
              "w-full max-w-[1180px] h-[172px] max-[1000px]:w-auto max-[1000px]:h-auto  rounded-xl bg-[#13519C]/30 self-center mt-7 flex flex-col justify-center max-[600px]:px-7 px-14"
            }
          >
            <div
              className={
                "flex justify-between items-center max-[1000px]:flex-col max-[1000px]:gap-3 max-[1000px]:py-4 max-[1000px]:items-center items-start text-start"
              }
            >
              <span className={"text-[16px] font-[100] leading-9"}>
                Need Insurance? Request <br /> Call Back
              </span>

              {/* <div className={'bg-gradient-to-t from-[#2983D3] to-[7%] to-transparent  pb-[1px] rounded-b-2xl mt-4'}> */}
              <div className={"border-b-2 border-[#2983D3] rounded-2xl"}>
                <input
                  onChange={(e) => console.log(e.target.value)}
                  style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                  placeholder={"First Name *"}
                  className={
                    "placeholder:text-[#777777] placeholder:font-[100] w-[240px]  h-[45px] bg-transparent rounded-xl pl-7 outline-0"
                  }
                />
              </div>

              <div className={"border-b-2 border-[#2983D3] rounded-2xl"}>
                <input
                  onChange={(e) => console.log(e.target.value)}
                  style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                  placeholder={"Phone number *"}
                  className={
                    "placeholder:text-[#777777] placeholder:font-[100] w-[240px]  h-[45px] bg-transparent rounded-xl pl-7 outline-0"
                  }
                />
              </div>

              <div
                className={"border-b-2 border-[#2983D3] w-[150px] rounded-2xl"}
              >
                <select
                  className={"h-[45px] rounded-xl bg-transparent outline-0"}
                >
                  <option value="volvo">Motors</option>
                  <option value="saab">2JZ</option>
                  <option value="opel">RB26</option>
                  <option value="audi">V12</option>
                </select>
              </div>

              <div
                className={
                  "overflow-hidden w-[180px] h-10 flex pl-7 items-center self-start rounded-lg text-[11px] text-white font-semibold bg-gradient-to-tl from-[#2983D3] to-[#74B5FF] relative mt-5"
                }
              >
                <span className={"font-[400]  uppercase"}>
                  Request Callback
                </span>
                <IoIosArrowForward
                  className={"text-[150px] absolute -right-8 opacity-40"}
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

        <div className={"w-full h-0.5 bg-gray-200/70 mt-32"}></div>

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
              className={`shadow_inner max-[500px]:w-[304px] w-[374px] h-[100px] max-[500px]:h-[90px] bg-white flex items-center  rounded-2xl`}
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
}
