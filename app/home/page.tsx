"use client";
import Second_section from "@/components/sections/second_section/page";
import green_layer from "@/components/Reilverse_Assets/Frame 3 (1).svg";
import logo from "@/components/Reilverse_Assets/Logo.svg";
import secure from "@/components/Reilverse_Assets/secure.png";
import comodo from "@/components/Reilverse_Assets/image 63345987.svg";
import mcaffe from "@/components/Reilverse_Assets/image 63345988.png";
import support_guy from "@/components/Reilverse_Assets/Support_guy.svg";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import LandingPage from "@/components/exp/page";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className={`container mx-auto`}>
        <div className={`content_wrapper`}>
          <LandingPage />
          <Second_section />

          <div
            className={
              "w-full max-[800px]:px-2 max-[1440px]:px-6 flex flex-col items-center mt-20"
            }
          >
            <div
              data-aos="zoom-out-up"
              className={
                "w-full max-[630px]:w-full max-[630px]:h-28 max-[850px]:w-[600px] max-[850px]:h-44 max-[1200px]:w-[800px] max-[1200px]:h-60 min-[1880px]:max-w-[1400px] max-w-[1190px] h-80 rounded-2xl flex flex-col items-end justify-center max-[630px]:px-4 max-[850px]:px-16 px-28 relative"
              }
            >
              <Image
                className={
                  "w-full h-full object-fill absolute top-0 left-0 -z-0"
                }
                alt=""
                src={green_layer}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 1.5, y: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.8 },
              }}
              className={"flex flex-col items-center mt-24"}
            >
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
                #10, 150 South Bridge Rd, #04 Fook Hai Building, Singapore
                058727
              </p>
            </motion.div>
          </div>
        </div>

        <div className={"w-full h-0.5 bg-gray-200/70 mt-32"}></div>

        <div
          className={
            "w-full flex max-[850px]:flex-col max-[850px]:gap-4 items-center justify-between max-[850px]:-translate-y-[50px] -translate-y-12 pl-32 max-[730px]:px-4 max-[1200px]:pr-10 max-[1200px]:pl-20 min-[1800px]:pl-80 pr-16"
          }
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
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
                <span className={"text-[18px] text-[#13519C]"}>
                  1800 2333 533
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            data-aos="fade-left"
            className={`shadow_inner max-[350px]:w-[304px] w-[315px] h-[75px] px-4 bg-white flex items-center justify-center  rounded-2xl`}
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
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
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
