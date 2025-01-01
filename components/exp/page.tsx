"use client";
import Image from "next/image";
import { BUSINESSCATEGORIES, CATEGORIES } from "@/components/cat/page";
import HomeIcon from "@/components/HomeFold/homeIcon";
import { useEffect, useState } from "react";
import couple from "@/components/Reilverse_Assets/couple3.svg";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const VARIANTS = ["PERSONAL", "BUSINESS"];
  const [currentVariant, setCurrentVariant] = useState(0);
  const [categoryNo1, setCategoryNo1] = useState(getCategoryNo1());
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const router = useRouter();

  function getCategoryNo1() {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 1023) {
        return CATEGORIES.length;
      } else if (width >= 1280 && width <= 1536) {
        return 4;
      } else if (width >= 1023 && width <= 1280) {
        return 3;
      } else {
        return 5;
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setCategoryNo1(getCategoryNo1());
      setIsSmallScreen(width < 1023);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (item) => {
    if (item.card_href) {
      sessionStorage.setItem(
        "data",
        JSON.stringify({
          description: item.description,
          title: item.card_title,
        })
      );

      router.push(item.card_href);
    } else {
      console.log("No card_href found for item:", item);
    }
  };

  return (
    <div className="">
      <div className="max-w-[90rem] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-col lg:flex-row gap-4 items-end mb-4">
            <div className="min-w-[464px]">
              <Image
                data-aos="zoom-in"
                src={couple}
                width={700}
                className={"object-contain mr-3"}
                alt=""
              />
            </div>
            <div
              className={
                "w-full flex flex-col items-end text-start relative top-14 "
              }
            >
              <span
                data-aos="fade-left"
                className={
                  "max-[1150px]:self-center self-start max-[1150px]:text-center min-[1800px]:text-[40px] max-[500px]:text-[17px] text-[36px] font-[400] text-[#13519C] tracking-[-1px]"
                }
              >
                The #1 Trusted Platform For Your Insurance Needs
              </span>
              <span
                data-aos="fade-left"
                className={
                  "mb-2 max-[1150px]:self-center self-start text-[18px] font-[400] text-[#000000]"
                }
              >
                Your financial literacy journey starts here
              </span>

              <div
                className={"w-full flex justify-center lg:justify-start h-auto"}
              >
                <div
                  data-aos="fade-left"
                  className={
                    "w-[420px] border max-[500px]:w-[200px] max-[800px]:w-[280px] h-14 bg-white shadow-inner rounded-lg self-start p-1.5 flex gap-1 relative overflow-hidden"
                  }
                >
                  <div
                    style={{
                      transform: `translateX(${currentVariant * 100}%)`,
                    }}
                    className={
                      "w-1/2 h-full bg-[#13519C4D]/40 rounded-lg duration-500 "
                    }
                  ></div>
                  <div
                    className={
                      "absolute  w-[97.5%] h-[43px] rounded-lg flex items-center gap-1"
                    }
                  >
                    {VARIANTS.map((value, index) => (
                      <div
                        key={index}
                        onClick={() => setCurrentVariant(index)}
                        className={`w-1/2 h-full rounded-xl flex flex-col items-center justify-center text-[12px] font-[400] duration-500 cursor-pointer ${
                          currentVariant === index ? `text-[#13519C]` : ``
                        } `}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full flex mb-[50px] mt-5 flex-wrap justify-center lg:justify-start gap-3">
                {currentVariant === 0
                  ? isSmallScreen
                    ? CATEGORIES.map((value, index) => (
                        <HomeIcon
                          value={value}
                          key={index}
                          index={index}
                          handleClick={handleClick}
                        />
                      ))
                    : CATEGORIES.slice(0, categoryNo1).map((value, index) => (
                        <HomeIcon
                          value={value}
                          key={index}
                          index={index}
                          handleClick={handleClick}
                        />
                      ))
                  : isSmallScreen
                  ? BUSINESSCATEGORIES.map((value, index) => (
                      <HomeIcon
                        value={value}
                        key={index}
                        index={index}
                        handleClick={handleClick}
                      />
                    ))
                  : BUSINESSCATEGORIES.slice(0, categoryNo1).map(
                      (value, index) => (
                        <HomeIcon
                          value={value}
                          key={index}
                          index={index}
                          handleClick={handleClick}
                        />
                      )
                    )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap sm:pl-[167px] justify-center lg:justify-start gap-3">
            {currentVariant === 0
              ? isSmallScreen
                ? null
                : CATEGORIES.slice(categoryNo1, CATEGORIES.length).map(
                    (value, index) => (
                      <HomeIcon
                        value={value}
                        key={index}
                        index={index}
                        handleClick={handleClick}
                      />
                    )
                  )
              : isSmallScreen
              ? null
              : BUSINESSCATEGORIES.slice(
                  categoryNo1,
                  BUSINESSCATEGORIES.length
                ).map((value, index) => (
                  <HomeIcon
                    value={value}
                    key={index}
                    index={index}
                    handleClick={handleClick}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
