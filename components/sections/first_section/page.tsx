"use client";
import React, { useState } from "react";
import couple from "@/components/Reilverse_Assets/couple3.svg";
import car from "@/components/Reilverse_Assets/Car.svg";
import health from "@/components/Reilverse_Assets/Health.svg";
import smallbiz from "@/components/Reilverse_Assets/Small.svg";
import scooter from "@/components/Reilverse_Assets/scooter.svg";
import watch from "@/components/Reilverse_Assets/Lux Watch.svg";
import jewellery from "@/components/Reilverse_Assets/Jewellery.svg";
import handbag from "@/components/Reilverse_Assets/Handbag.svg";
import pet from "@/components/Reilverse_Assets/Pet.svg";
import personal from "@/components/Reilverse_Assets/Personal Accident.svg";
import travel from "@/components/Reilverse_Assets/Travel.svg";
import life from "@/components/Reilverse_Assets/Life.svg";
import consulting from "@/components/Reilverse_Assets/Consulting.svg";
import engineers from "@/components/Reilverse_Assets/Engineers.svg";
import retail from "@/components/Reilverse_Assets/Retail.svg";
import construction from "@/components/Reilverse_Assets/Construction.svg";
import logistics from "@/components/Reilverse_Assets/logistic.svg";
import education from "@/components/Reilverse_Assets/Education.svg";
import RealState from "@/components/Reilverse_Assets/real-state.svg";
import charity from "@/components/Reilverse_Assets/Charity.svg";
import entertainment from "@/components/Reilverse_Assets/entertainment.svg";
import finance from "@/components/Reilverse_Assets/finance.svg";
import food from "@/components/Reilverse_Assets/Food.svg";
import professional from "@/components/Reilverse_Assets/Professional 1.svg";
import welness from "@/components/Reilverse_Assets/Welness.svg";
import healthcare from "@/components/Reilverse_Assets/health-care.svg";
import tecnology from "@/components/Reilverse_Assets/Technology.svg";
import manufacturing from "@/components/Reilverse_Assets/Manufacturing.svg";
import interior from "@/components/Reilverse_Assets/Interior.svg";
import architects from "@/components/Reilverse_Assets/Architect.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SecOne from "@/components/HomeFold/secOne";
import SecThree from "@/components/HomeFold/secThree";
import SecFive from "@/components/HomeFold/secFive";

export default function First_section() {
  const router = useRouter();
  const [currentVariant, setCurrentVariant] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const categoryNo1 =
    window.innerWidth >= 500 && window.innerWidth <= 600 ? 3 : 5;
  const categoryNo2 =
    window.innerWidth >= 500 && window.innerWidth <= 800 ? 8 : 0;

  const CATEGORIES = [
    {
      card_image: car,
      card_title: "Car ",
      card_href: "/car_brand",
      category: "Tuk Tuk",
      category_href: "",
    },
    {
      card_image: scooter,
      card_title: "Motocycle ",
      card_href: "/motorcycle_insurance",
      category: "Home",
      category_href: "",
      description: "Be insured and ready to ride!",
    },
    {
      card_image: smallbiz,
      card_title: "Personal Cyber",
      card_href: "/personal_cyber_insurance",
      category: "Travel",
      category_href: "",
      description:
        "The Internet has become an integral part of daily life. Each time you reveal your personal information on the Internet, you are exposed to possible cybercrimes.",
    },
    {
      card_image: watch,
      card_title: "Luxury Watch",
      card_href: "/luxury_watch_insurance",
      category: "Life",
      category_href: "",
      description:
        "Your precious watch collection deserves comprehensive protection from vulnerabilities. Wear your luxury watch each & every moment with peace of mind, knowing it’s insured against damage & loss.",
    },
    {
      card_image: jewellery,
      card_title: "Jewellery ",
      card_href: "/jewellery_insurance",
      category: "Life",
      category_href: "",
    },
    {
      card_image: handbag,
      card_title: "Handbag ",
      card_href: "/handbag_insurance",
      category: "Life",
      category_href: "",
      description:
        "In the world of style, your handbag speaks volumes as a symbol of status and sophistication. Entrust its legacy to our handbag insurance, ensuring your prized possessions are safeguarded against life’s uncertainties. Carry with confidence, knowing your essentials are protected.",
    },
    {
      card_image: smallbiz,
      card_title: "Home ",
      card_href: "/home_insurance",
      category: "Travel",
      category_href: "",
    },
    {
      card_image: pet,
      card_title: "Pet",
      card_href: "/pet_insurance",
      category: "Travel",
      category_href: "",
      description:
        "Safeguard your most loyal companions because they are family",
    },
    {
      card_image: personal,
      card_title: "Personal Accident",
      card_href: "/personal_accident_insurance",
      category: "Travel",
      category_href: "",
      description: "Accidents can take a toll on your finances.",
    },
    {
      card_image: travel,
      card_title: "Travel ",
      card_href: "/travel_insurance",
      category: "Travel",
      heading: "Travel Insurance",
      category_href: "",
      description:
        "Don’t let unexpected events ruin a well deserved vacations.",
    },
    {
      card_image: health,
      card_title: "Health and Medical ",
      card_href: "/health_insurance",
      category: "Travel",
      category_href: "/insurance",
      description:
        "When illness strikes, we can take your mind off hospital bills and outpatient fees so that you can concentrate on getting better.",
    },
    {
      card_image: life,
      card_title: "Life ",
      card_href: "/life_insurance",
      category: "Travel",
      category_href: "",
    },
    {
      card_image: life,
      card_title: "Life ",
      card_href: "/life_insurance",
      category: "Travel",
      category_href: "",
    },
  ];

  const BUSINESSCATEGORIES = [
    {
      card_image: architects,
      card_title: "Architects and Surveyors",
      card_href: "/architect_and_surveyors_insurance",
      category: "Tuk Tuk",
      category_href: "",
      description:
        "We offer tailored policies for architects, planners, and surveyors, whether you’re self-employed or you have your own firm.",
    },
    {
      card_image: engineers,
      card_title: "Engineers",
      card_href: "/engineer_insurance",
      category: "Home",
      category_href: "",
      description:
        "Engineering work is deeply rewarding, but also fraught with certain risks. Liability risks are always on the minds of engineers, along with the ever-present risk of injuries.       ",
    },
    {
      card_image: tecnology,
      card_title: "IT / Technology Services",
      card_href: "/Technology_Services_insurance",
      category: "Travel",
      category_href: "",
      description:
        "A sprawling fast-paced industry like technology requires innovative products that are highly responsive.   Risk management is a critical tool in the technology industry, because the stakes are so high. ",
    },
    {
      card_image: consulting,
      card_title: "Consulting",
      card_href: "/Consulting_insurance",
      category: "Life",
      category_href: "",
      description:
        "Comprehensive consultants insurance to protect you from lawsuits, and much more.Whether you provide management consulting, IT consulting, or any other kind of consulting, you’ll need  insurance to protect your business. For consultants, the most critical protection you need is Professional Indemnity Insurance, so that you’re protected from business lawsuits related to the advice you provide. ",
    },
    {
      card_image: retail,
      card_title: "Retail",
      card_href: "/retail_insurance",
      category: "Life",
      category_href: "",
      description:
        "Whether you run a physical shop or an online e-commerce store, you’ll need retail insurance to protect your business.",
    },
    {
      card_image: food,
      card_title: "Food And Beverage",
      card_href: "/food_And_Beverage_insurance",
      category: "Life",
      category_href: "",
      description:
        "As consumers become more health, social, and environmentally conscious, food and beverage companies around the world are evolving their business models to meet these needs.",
    },
    {
      card_image: professional,
      card_title: "Professional Services",
      card_href: "/Professional_Services_insurance",
      category: "Travel",
      category_href: "",
      description:
        "Commercial insurance  starts with property insurance, so that your premises and inventory are well-protected. You’ll also want to cover yourself against staff injuries, public liability, and employee theft. If you ship goods, consider protecting them with shipping insurance.",
    },
    {
      card_image: finance,
      card_title: "Finance And Legal",
      card_href: "/Finance_And_Legal_insurance",
      category: "Travel",
      category_href: "",
    },
    {
      card_image: interior,
      card_title: "Interior Design And Renovation",
      card_href: "/Interior_Design_And_Renovation_insurance",
      category: "Travel",
      category_href: "",
    },
    {
      card_image: construction,
      card_title: "Construction",
      card_href: "/Construction_insurance",
      category: "Travel",
      category_href: "",
      description:
        "Construction is an essential industry for the global economy and activity in the sector is constant. There will always be a need for the renewal of existing and the creation of new infrastructure. But as the build cycle is often driven by socio-economic factors, it can be quite volatile. Construction companies need to have an acute awareness of current and emerging risk issues and be able to respond quickly to changing circumstances.",
    },
    {
      card_image: logistics,
      card_title: "Logistics",
      card_href: "/Logistics_insurance",
      category: "Travel",
      category_href: "",
      description:
        "Whether you’re an international freight forwarder, or a home moving company, logistics companies need insurance to protect themselves.",
    },
    {
      card_image: manufacturing,
      card_title: "Manufacturing and Storage",
      card_href: "/Manufacturing_and_Storage_insurance",
      category: "Travel",
      category_href: "",
      description:
        "The manufacturing landscape has become increasingly globalized as a result of digitization and the adoption of a more customer-centric mindset.We know that the manufacturing industry faces a host of common and emerging risk exposures daily.",
    },
    {
      card_image: welness,
      card_title: "Wellness And Fitness",
      card_href: "/Wellness_And_Fitness_insurance",
      category: "Travel",
      category_href: "",
      description:
        "Whether you run a gym, yoga/pilates studio, martial arts centre, or a sports coaching business, it’s important to have insurance to protect yourself. If you have a physical premises, you’ll need to ensure your capital investment is protected against major risks like fire or vandalism. If you have wellness/fitness employees, they can be prone to injuries, so you’ll to cover them for their medical expenses.",
    },
    {
      card_image: healthcare,
      card_title: "Health Care Services",
      card_href: "/Health_Care_Services_insurance",
      category: "Travel",
      category_href: "",
      description:
        "Healthcare organizations are challenged by risk on many fronts.",
    },
    {
      card_image: education,
      card_title: "Education",
      card_href: "/education_insurance",
      category: "Travel",
      category_href: "",
      description:
        "Education nurtures our future generations of leaders, engineers, scientists and artists. As today’s educational institutions face increasingly complex and diverse challenges, educators insurance programs must adapt to support these institutions. From kindergarten to university, we help education institutions of all levels create customised educators insurance solutions to safeguard your balance sheets, attract and retain your talent, and protect your students.",
    },
    {
      card_image: charity,
      card_title: "Charity",
      card_href: "/Charity_insurance",
      category: "Travel",
      category_href: "",
      description:
        "Management is a key element of governance.We offer tailored policies for non-profit organisations like charities, NGOs, and more.",
    },
    {
      card_image: RealState,
      card_title: "Real Estate",
      card_href: "/RealState_insurance",
      category: "Travel",
      category_href: "",
      description:
        "Property owners, operators, managers, and developers need to stay competitive in the dynamic world of real estate.",
    },
    {
      card_image: entertainment,
      card_title: "Entertainment",
      card_href: "/entertainment_insurance",
      category: "Travel",
      category_href: "",
      description:
        "In an age of changing media consumption habits and options, We can structure  risk management strategies to help entertainment organizations and promotors balance taking bold chances with minimizing and mitigating risk",
    },
  ];
  window.addEventListener("resize", () => getWidth());

  function getWidth() {
    setWidth(window.innerWidth);
  }

  const VARIANTS = ["PERSONAL", "BUSINESS"];

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
    <div>
      <div
        className={
          "w-full max-[1440px]:px-6 border-4 border-gray-800 max-[500px]:px-2 flex max-[1150px]:flex-col justify-center items-center relative mt-0"
        }
      >
        <Image
          data-aos="zoom-in"
          src={couple}
          className={
            "w-[500px] max-[800px]:w-[300px] max-[1350px]:w-[400px] max-w-[500px] max-h-[380px]  h-fit  object-contain mr-3 "
          }
          alt=""
        />
        <div
          className={
            "w-full max-[500px]:w-auto max-w-[800px] max-[500px]:max-w-[450px] flex flex-col items-end text-start relative top-14 "
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

          <div className={"w-full flex justify-center lg:justify-start h-auto"}>
            <div
              data-aos="fade-left"
              className={
                "w-[420px] border max-[500px]:w-[200px] max-[800px]:w-[280px] h-14 bg-white shadow-inner rounded-lg self-start p-1.5 flex gap-1 relative overflow-hidden"
              }
            >
              <div
                style={{ transform: `translateX(${currentVariant * 100}%)` }}
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

          {currentVariant === 0 ? (
            <SecOne
              width={width}
              CATEGORIES={CATEGORIES}
              categoryNo1={categoryNo1}
              handleClick={handleClick}
            />
          ) : (
            <SecOne
              width={width}
              CATEGORIES={BUSINESSCATEGORIES}
              categoryNo1={categoryNo1}
              handleClick={handleClick}
            />
          )}
        </div>
      </div>

      <div
        className={
          "w-full flex max-[1440px]:px-6 max-[500px]:px-2  max-[500px]:w-[450px] max-[1150px]:flex-col-reverse max-[1150px]:justify-start max-[1150px]:items-start justify-center items-center relative mt-0"
        }
      >
        <div className="">
          {currentVariant === 0 ? (
            <SecFive
              width={width}
              CATEGORIES={CATEGORIES}
              categoryNo2={categoryNo2}
              handleClick={handleClick}
            />
          ) : (
            <SecFive
              width={width}
              CATEGORIES={BUSINESSCATEGORIES}
              categoryNo2={categoryNo2}
              handleClick={handleClick}
            />
          )}
        </div>

        <div className="hidden">
          {currentVariant === 0 ? (
            <SecThree
              width={width}
              CATEGORIES={CATEGORIES}
              handleClick={handleClick}
            />
          ) : (
            <SecThree
              width={width}
              CATEGORIES={BUSINESSCATEGORIES}
              handleClick={handleClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}
