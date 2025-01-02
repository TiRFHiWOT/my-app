"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import { DatePicker, Modal } from "antd";
import input_logo from "@/components/Reilverse_Assets/input_logo.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPremiumData } from "@/store/reducers/PremiumReducer";
import carsvg from "@/components/assets/car.svg";
import { addCarData } from "@/store/reducers/CarDetails";
import { IoIosArrowForward } from "react-icons/io";
import audi from "@/components/Reilverse_Assets/carLogos/audi.webp";
import baic from "@/components/Reilverse_Assets/carLogos/baic.jpeg";
import bestune from "@/components/Reilverse_Assets/carLogos/bestune.webp";
import bmw from "@/components/Reilverse_Assets/carLogos/bmw.png";
import byd from "@/components/Reilverse_Assets/carLogos/byd.png";
import cadillac from "@/components/Reilverse_Assets/carLogos/cadillac.webp";
import changan from "@/components/Reilverse_Assets/carLogos/changan.jpg";
import chevrolet from "@/components/Reilverse_Assets/carLogos/chevrolet.jpg";
import dongfeng from "@/components/Reilverse_Assets/carLogos/dongfeng.jpg";
import ford from "@/components/Reilverse_Assets/carLogos/ford.webp";
import forthing from "@/components/Reilverse_Assets/carLogos/forthing.webp";
import gac from "@/components/Reilverse_Assets/carLogos/gac.jpg";
import gmc from "@/components/Reilverse_Assets/carLogos/gmc.jpg";
import greatwall from "@/components/Reilverse_Assets/carLogos/greatwall.webp";
import hawtai from "@/components/Reilverse_Assets/carLogos/hawtai.webp";
import honda from "@/components/Reilverse_Assets/carLogos/honda.webp";
import hongqi from "@/components/Reilverse_Assets/carLogos/hongqi.webp";
import huanghai from "@/components/Reilverse_Assets/carLogos/huanghai.png";
import hummer from "@/components/Reilverse_Assets/carLogos/hummer.png";
import hyundai from "@/components/Reilverse_Assets/carLogos/hyundai.webp";
import isuzu from "@/components/Reilverse_Assets/carLogos/isuzu.jpg";
import jaguar from "@/components/Reilverse_Assets/carLogos/jaguar.webp";
import jeep from "@/components/Reilverse_Assets/carLogos/jeep.png";
import kaiyi from "@/components/Reilverse_Assets/carLogos/kaiyi.jpeg";
import kia from "@/components/Reilverse_Assets/carLogos/kia.webp";
import landrover from "@/components/Reilverse_Assets/carLogos/landrover.webp";
import lexus from "@/components/Reilverse_Assets/carLogos/lexus.jpg";
import mazda from "@/components/Reilverse_Assets/carLogos/mazda.webp";
import mg from "@/components/Reilverse_Assets/carLogos/mg.webp";
import mini from "@/components/Reilverse_Assets/carLogos/mini.jpg";
import mitsubishi from "@/components/Reilverse_Assets/carLogos/mitsubishi.svg";
import nissan from "@/components/Reilverse_Assets/carLogos/nissan.png";
import Peugeot from "@/components/Reilverse_Assets/carLogos/Peugeot.jpg";
import porsche from "@/components/Reilverse_Assets/carLogos/porshce.webp";
import soueast from "@/components/Reilverse_Assets/carLogos/soueast.webp";
import ssangyong from "@/components/Reilverse_Assets/carLogos/ssangyong.webp";
import suzuki from "@/components/Reilverse_Assets/carLogos/suzuki.jpg";
import toyota from "@/components/Reilverse_Assets/carLogos/toyota.webp";
import volkswagen from "@/components/Reilverse_Assets/carLogos/volkswagen.jpg";
import volvo from "@/components/Reilverse_Assets/carLogos/volvo.webp";
import zhongxing from "@/components/Reilverse_Assets/carLogos/zhongxing.png";
import zotye from "@/components/Reilverse_Assets/carLogos/zotye.jpg";
import subaru from "@/components/Reilverse_Assets/carLogos/subaru.webp";
import maxus from "@/components/Reilverse_Assets/carLogos/maxus.webp";
import Image from "next/image";
import Back from "@/components/Back/page";
import Header from "@/components/Header/page";

const carBrandLogos = [
  {
    brandName: "BAIC",
    brandLogoSrc: baic,
  },
  {
    brandName: "BYD",
    brandLogoSrc: byd,
  },
  {
    brandName: "FORD",
    brandLogoSrc: ford,
  },
  {
    brandName: "MITSUBISHI ",
    brandLogoSrc: mitsubishi,
  },
  {
    brandName: "HONDA",
    brandLogoSrc: honda,
  },
  {
    brandName: "LEXUS",
    brandLogoSrc: lexus,
  },
  {
    brandName: "HYUNDAI ",
    brandLogoSrc: hyundai,
  },
  {
    brandName: "BMW",
    brandLogoSrc: bmw,
  },
  {
    brandName: "HUANGHAI",
    brandLogoSrc: huanghai,
  },
  {
    brandName: "JEEP",
    brandLogoSrc: jeep,
  },
  {
    brandName: "CHANGAN",
    brandLogoSrc: changan,
  },
  {
    brandName: "JAGUAR ",
    brandLogoSrc: jaguar,
  },
  {
    brandName: "NISSAN",
    brandLogoSrc: nissan,
  },
  {
    brandName: "TOYOTA",
    brandLogoSrc: toyota,
  },
  {
    brandName: "VOLVO",
    brandLogoSrc: volvo,
  },
  {
    brandName: "PEUGEOT",
    brandLogoSrc: Peugeot,
  },
  {
    brandName: "Audi",
    brandLogoSrc: audi,
  },
  {
    brandName: "SSANGYONG",
    brandLogoSrc: ssangyong,
  },
  {
    brandName: "MAZDA",
    brandLogoSrc: mazda,
  },
  {
    brandName: "SOUEAST",
    brandLogoSrc: soueast,
  },
  {
    brandName: "LAND ROVER",
    brandLogoSrc: landrover,
  },
  {
    brandName: "Great Wall",
    brandLogoSrc: greatwall,
  },
  {
    brandName: "GAC",
    brandLogoSrc: gac,
  },
  {
    brandName: "FORTHING  ",
    brandLogoSrc: forthing,
  },
  {
    brandName: "KIA",
    brandLogoSrc: kia,
  },
  {
    brandName: "VOLKSWAGEN",
    brandLogoSrc: volkswagen,
  },
  {
    brandName: " CHEVROLET",
    brandLogoSrc: chevrolet,
  },
  {
    brandName: "MG",
    brandLogoSrc: mg,
  },
  {
    brandName: "GMC",
    brandLogoSrc: gmc,
  },
  {
    brandName: "KAIYI",
    brandLogoSrc: kaiyi,
  },
  {
    brandName: "DONGFENG ",
    brandLogoSrc: dongfeng,
  },
  {
    brandName: "SUZUKI",
    brandLogoSrc: suzuki,
  },
  {
    brandName: "HAWTAI",
    brandLogoSrc: hawtai,
  },
  {
    brandName: "HONGQI",
    brandLogoSrc: hongqi,
  },
  {
    brandName: "PORSCHE",
    brandLogoSrc: porsche,
  },
  {
    brandName: "ZOTYE",
    brandLogoSrc: zotye,
  },
  {
    brandName: "BESTUNE",
    brandLogoSrc: bestune,
  },
  {
    brandName: "HUMMER",
    brandLogoSrc: hummer,
  },
  {
    brandName: "MINI",
    brandLogoSrc: mini,
  },
  {
    brandName: "CADILLAC",
    brandLogoSrc: cadillac,
  },
  {
    brandName: "ISUZU",
    brandLogoSrc: isuzu,
  },
  {
    brandName: "ZHONGXING",
    brandLogoSrc: zhongxing,
  },
  {
    brandName: "SUBARU",
    brandLogoSrc: subaru,
  },
  {
    brandName: "MAXUS ",
    brandLogoSrc: maxus,
  },
];

export default function CarBrand() {
  const [activeBrands, setBrands] = useState("");
  const [activeModel, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [engine, setEngine] = useState(0);
  const [engineCapacity, setEngineCapacity] = useState(0);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [activeCity, setCity] = useState("");
  const [carModelsArray, setCarModelsArray] = useState([]);

  const [searchCarBrand, setsearchCarBrand] = useState("");
  const [filteredsearchCarBrand, setfilteredsearchCarBrand] = useState([]);
  const [showCarDropDown, setshowCarDropDown] = useState(false);
  const [models, setModels] = useState([]);
  const engineValue = useRef(null);

  const [searchCarModel, setsearchCarModel] = useState("");
  const [filteredsearchCarModel, setfilteredsearchCarModel] = useState([]);
  const [showCarModelDropDown, setshowCarModelDropDown] = useState(false);

  const [leadCreatorPopup, setLeadCreatorPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({ email: "", mobile: "" });

  const [showSuminusredDropDown, setShowSuminusredDropDown] = useState(false);
  const [suminusredValue, setSuminusredValue] = useState(null);
  const [fiteredSumInsuredValues, setFilteredSumInsuredValues] = useState([]);
  const [searchCity, setsearchCity] = useState("");
  const [filteredCity, setfilteredCity] = useState([]);
  const [showCities, setshowCities] = useState(false);
  const [stateSuminsuredValue, setStateSuminsuredValue] = useState("");

  const modelSection = useRef(null);
  const YearSection = useRef(null);
  const engineSection = useRef(null);

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const otpRefs = useRef([null, null, null, null]);

  console.log(isLoadingData);
  console.log(searchCity);

  const SuminusredData = useMemo(
    () => [
      { value: 10000, id: 1 },
      { value: 11000, id: 2 },
      { value: 12000, id: 3 },
      { value: 13000, id: 4 },
      { value: 14000, id: 5 },
      { value: 15000, id: 6 },
      { value: 16000, id: 7 },
      { value: 17000, id: 8 },
      { value: 18000, id: 9 },
      { value: 19000, id: 10 },
      { value: 20000, id: 11 },
      { value: 21000, id: 12 },
      { value: 22000, id: 13 },
      { value: 23000, id: 14 },
      { value: 24000, id: 15 },
      { value: 25000, id: 16 },
      { value: 26000, id: 17 },
      { value: 27000, id: 18 },
      { value: 28000, id: 19 },
      { value: 29000, id: 20 },
      { value: 30000, id: 21 },
      { value: 31000, id: 22 },
      { value: 32000, id: 23 },
      { value: 33000, id: 24 },
      { value: 34000, id: 25 },
      { value: 35000, id: 26 },
      { value: 36000, id: 27 },
      { value: 37000, id: 28 },
      { value: 38000, id: 29 },
      { value: 39000, id: 30 },
      { value: 40000, id: 31 },
      { value: 41000, id: 32 },
      { value: 42000, id: 33 },
      { value: 43000, id: 34 },
      { value: 44000, id: 35 },
      { value: 45000, id: 36 },
      { value: 46000, id: 37 },
      { value: 47000, id: 38 },
      { value: 48000, id: 39 },
      { value: 49000, id: 40 },
      { value: 50000, id: 41 },
      { value: 51000, id: 42 },
      { value: 52000, id: 43 },
      { value: 53000, id: 44 },
      { value: 54000, id: 45 },
      { value: 55000, id: 46 },
      { value: 56000, id: 47 },
      { value: 57000, id: 48 },
      { value: 58000, id: 49 },
      { value: 59000, id: 50 },
      { value: 60000, id: 51 },
      { value: 61000, id: 52 },
      { value: 62000, id: 53 },
      { value: 63000, id: 54 },
      { value: 64000, id: 55 },
      { value: 65000, id: 56 },
      { value: 66000, id: 57 },
      { value: 67000, id: 58 },
      { value: 68000, id: 59 },
      { value: 69000, id: 60 },
      { value: 70000, id: 61 },
      { value: 71000, id: 62 },
      { value: 72000, id: 63 },
      { value: 73000, id: 64 },
      { value: 74000, id: 65 },
      { value: 75000, id: 66 },
      { value: 76000, id: 67 },
      { value: 77000, id: 68 },
      { value: 78000, id: 69 },
      { value: 79000, id: 70 },
      { value: 80000, id: 71 },
      { value: 81000, id: 72 },
      { value: 82000, id: 73 },
      { value: 83000, id: 74 },
      { value: 84000, id: 75 },
      { value: 85000, id: 76 },
      { value: 86000, id: 77 },
      { value: 87000, id: 78 },
      { value: 88000, id: 79 },
      { value: 89000, id: 80 },
      { value: 90000, id: 81 },
      { value: 91000, id: 82 },
      { value: 92000, id: 83 },
      { value: 93000, id: 84 },
      { value: 94000, id: 85 },
      { value: 95000, id: 86 },
      { value: 96000, id: 87 },
      { value: 97000, id: 88 },
      { value: 98000, id: 89 },
      { value: 99000, id: 90 },
      { value: 100000, id: 91 },
    ],
    []
  );

  const TAB_MENUS = ["Car", "Driver", "Insurance", "Quotes"];

  const [BRANDS, SetBRANDS] = useState([]);
  const [CITIES, setCITIES] = useState([]);
  const [ENGINES, setENGINES] = useState([]);
  console.log(ENGINES);

  const handleSearch = (e) => {
    const value = e.target.value;
    setsearchCarBrand(value);
    const filtered = BRANDS.filter((cars) =>
      cars.brandName.toLowerCase().includes(value.toLowerCase())
    );
    setfilteredsearchCarBrand(filtered);
  };

  const handleItemClick = (cars) => {
    setBrands(cars);
    setshowCarDropDown(false);
    setsearchCarBrand(cars);
    setModel("");
    getCarModel(cars);
    setTimeout(scrollToModelSection, 0);
  };

  const handleSearchCarModel = (e) => {
    const value = e.target.value;
    setsearchCarModel(value);
    const filtered = models.filter((model) =>
      model.Model.toLowerCase().includes(value.toLowerCase())
    );
    setfilteredsearchCarModel(filtered);
  };

  const handleItemCarmodelClick = (model) => {
    setModel(model);
    setshowCarModelDropDown(false);
    setsearchCarModel(model);
    setYear(0);
    setTimeout(scrollToYearSection, 0);
  };

  const handleSearchCity = (e) => {
    const value = e.target.value;
    setsearchCity(value);
    const filtered = CITIES.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );
    setfilteredCity(filtered);
  };

  const handleItemCityClick = (city) => {
    setCity(city.name);
    setshowCities(false);
  };

  useEffect(() => {
    setIsLoadingData(true);
    fetch(`/master/getcmotor`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoadingData(false);
        const companyModels = {};
        const allBrands = [];
        const brandNames = [];

        // Populate the object and brands array
        data.forEach((entry) => {
          const make = entry["Make"];
          const model = entry["Model"];
          const modelCode = entry["ModelCode"];
          const pk = entry["@pk"];
          const dataTableId = entry["DataTableId"];
          const engineCapacity = entry["EngineCapacity"];
          const recordId = entry["RecordId"];
          const recordUsage = entry["RecordUsage"];

          if (!brandNames.includes(make)) {
            const brandSrc = carBrandLogos.find(
              (brand) => brand.brandName === make
            );
            if (brandSrc) {
              const newBrand = {
                brandName: make,
                brandSrc: brandSrc.brandLogoSrc,
              };
              allBrands.push(newBrand);
              brandNames.push(make);
            }
          }
          if (make in companyModels) {
            companyModels[make].push({
              Model: model,
              ModelCode: modelCode,
              "@pk": pk,
              DataTableId: dataTableId,
              RecordId: recordId,
              RecordUsage: recordUsage,
              EngineCapacity: engineCapacity,
            });
          } else {
            companyModels[make] = [
              {
                Model: model,
                ModelCode: modelCode,
                "@pk": pk,
                DataTableId: dataTableId,
                RecordId: recordId,
                RecordUsage: recordUsage,
                EngineCapacity: engineCapacity,
              },
            ];
          }
        });

        SetBRANDS(allBrands);
        setfilteredsearchCarBrand(allBrands);
        setCarModelsArray(companyModels);
        setFilteredSumInsuredValues(SuminusredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [SuminusredData]);

  const getCarModel = async (carBrand) => {
    const modelss = carModelsArray[carBrand];
    setModels(modelss);
    setfilteredsearchCarModel(modelss);
  };

  const getCarEngineSize = async () => {
    axios
      .get(`${api_url}/car/carModelWiseEngine/${activeModel.toLowerCase()}`)
      .then((response) => {
        setENGINES(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getCities = async () => {
    axios
      .get(`${api_url}/city/citylist`)
      .then((response) => {
        setCITIES(response.data);
        setfilteredCity(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onSubmitCarInfo = async () => {
    if (
      activeBrands !== "" &&
      activeModel !== "" &&
      year !== 0 &&
      activeCity !== "" &&
      suminusredValue
    ) {
      const data = {
        activeBrands,
        activeModel,
        year,
        engine,
      };
      dispatch(addCarData(data));

      const leadCreatorData = localStorage.getItem("leadCreatorData");
      if (leadCreatorData) {
        const storedEmail = JSON.parse(localStorage.leadCreatorData).email;
        const storedMobile = JSON.parse(localStorage.leadCreatorData).mobile;
        const newLeadData = {
          email: storedEmail,
          mobileNo: storedMobile,
          carBrand: activeBrands,
          carModel: activeModel,
          carYear: year,
          engineSize: engine,
          suminsuredValue: suminusredValue,
          provinceCity: activeCity,
        };
        try {
          const newLead = await axios.post(
            `${api_url}/lead/createLead`,
            newLeadData
          );
          const leadId = newLead.data?.leadId;
          navigate("/uat/car_payment", {
            state: {
              leadId: leadId,
              engineValue: engine, // Assuming engineValue is defined
              suminusredValue: stateSuminsuredValue,
              suminsured: suminusredValue,
              activeBrands: activeBrands,
              activeModel: activeModel,
              year: year,
            },
          });
        } catch (e) {
          console.log(e, "error while creating a new lead");
          return;
        }
      } else {
        setLeadCreatorPopup(true);
      }
    } else {
      toast.error("Please fill All Fields!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const scrollToModelSection = () => {
    if (modelSection.current) {
      modelSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToYearSection = () => {
    if (YearSection.current) {
      YearSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToEngineSection = () => {
    if (engineSection.current) {
      engineSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  // Function to handle click on brands section
  const handleBrandsClick = (value) => {
    setBrands(value);
    setModel("");
    setsearchCarBrand(value);
    getCarModel(value);
    setTimeout(scrollToModelSection, 0);
  };
  const handleModelsClick = (value) => {
    setModel(value.Model);
    setsearchCarModel(value.Model);
    setEngineCapacity(value.EngineCapacity);
    setYear(0);
    setTimeout(scrollToYearSection, 0);
  };
  const handleYearsClick = (value) => {
    setYear(value?.format("DD/MM/YYYY"));
    setEngine(0);
    getCarEngineSize();
    getCities();
    setTimeout(scrollToEngineSection, 0);
  };

  const handleSuminusredClick = async (value) => {
    setShowSuminusredDropDown(false);
    setSuminusredValue(value?.value);
    setStateSuminsuredValue(value.id);
    setEngine(engineValue.current.value);
    const data = {
      enginecapacity: engineValue.current.value,
      suminsured: value.id,
    };
    dispatch(addPremiumData(data));
  };

  const handleSumInsuredChange = (e) => {
    const value = e.target.value;
    setSuminusredValue(value);
    const filteredValues = SuminusredData.filter((item) => {
      const searchString = value.toString();
      return item.value.toString().startsWith(searchString);
    });
    setFilteredSumInsuredValues(filteredValues);
  };

  const validateEmail = () => {
    const errors = { email: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }
    setFormErrors(errors);
    return !errors.email;
  };

  const validateOtp = () => {
    const errors = { otp: "" };
    if (otp.some((digit) => !digit)) {
      errors.otp = "Please enter all OTP digits";
    }
    setFormErrors(errors);
    return !errors.otp;
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail()) {
      try {
        await axios.post(`${api_url}/lead/requestotp`, { email });
        setIsOtpSent(true);
        toast.success("OTP sent to your email");
      } catch (e) {
        toast.error(e, "something went wrong!!");
      }
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (validateOtp()) {
      try {
        const otpCode = otp.join(""); // Join OTP digits into a single string
        const response = await axios.post(`${api_url}/lead/verifyotp`, {
          email: email,
          otp: otpCode,
        });
        console.log(response);
        if (response.data.status) {
          localStorage.setItem("leadCreatorData", JSON.stringify({ email }));
          toast.success("OTP verified successfully");
          onSubmitCarInfo();
        } else {
          toast.error("enter correct otp Please");
        }
      } catch (e) {
        toast.error(e, "error !!");
      }
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  const handleResendOtp = async () => {
    try {
      await axios.post(`${api_url}/lead/resendotp`, { email });
      toast.success("OTP resent to your email");
    } catch (e) {
      toast.error(e, "error while resending the otp!!");
    }
  };

  const disabledFutureDate = (current) => {
    const today = new Date();
    return current && current.toDate() > today;
  };

  return (
    <>
      <Back />
      <Header />
      <div
        className="mx-auto mt-40  w-full h-auto min-h-[500px] flex flex-col items-center relative overflow-x-clip"
        style={{ fontFamily: `Arboria-Book`, fontWeight: `400` }}
      >
        <ToastContainer />

        {leadCreatorPopup && (
          <Modal
            open={leadCreatorPopup}
            footer={null}
            closable={false}
            className="rounded-[0.8rem] p-0"
          >
            <div className="rounded-2xl p-8 bg-white">
              <button
                className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
                onClick={() => setLeadCreatorPopup(false)}
              >
                &times;
              </button>
              {!isOtpSent ? (
                <form onSubmit={handleEmailSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-[#47740E] text-[20px] max-[500px]:text-[16px] mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`shadow-inner appearance-none border ${
                        formErrors.email
                          ? "border-red-500"
                          : "border-[#13519C86]"
                      } rounded-xl w-full h-[50px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-[#74B5FF]`}
                      placeholder="Enter your email"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs italic">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="overflow-hidden cursor-pointer w-full h-[50px] flex items-center justify-center rounded-2xl text-[24px] text-white font-semibold bg-[#13519C] bg-gradient-to-tl from-[#2983D3] to-[#13519C] relative"
                    >
                      <span className="font-[400]">Submit</span>
                      <IoIosArrowForward className="text-[50px] absolute right-4 opacity-40" />
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleOtpSubmit}>
                  <div className="mb-6">
                    <label className="block text-[#13519C] text-[20px] max-[500px]:text-[16px] mb-2">
                      OTP
                    </label>
                    <div className="flex space-x-2">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          ref={(el) => (otpRefs.current[index] = el)}
                          className={`shadow-inner appearance-none border ${
                            formErrors.otp
                              ? "border-red-500"
                              : "border-[#13519C]"
                          } rounded-xl w-12 h-12 py-2 px-3 text-gray-700 text-center text-2xl leading-tight focus:outline-none focus:shadow-outline placeholder-[#13519C86]`}
                        />
                      ))}
                    </div>
                    {formErrors.otp && (
                      <p className="text-red-500 text-xs italic">
                        {formErrors.otp}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="mt-4 w-full h-[50px] flex items-center justify-center rounded-2xl text-[24px] text-white font-semibold bg-[#13519C] bg-gradient-to-tl from-[#2983D3] to-[#13519C86] relative"
                    >
                      <span className="font-[400]">Verify</span>
                      <IoIosArrowForward className="text-[50px] absolute right-4 opacity-40" />
                    </button>
                    <button
                      type="button"
                      className="mt-2 text-[#13519C86] hover:text-[#13519C]"
                      onClick={handleResendOtp}
                    >
                      Resend OTP
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Modal>
        )}
        <div
          className={
            "w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center pb-20"
          }
        >
          <div
            className={
              "flex items-center self-start gap-1 max-[450px]:flex-wrap "
            }
          >
            {TAB_MENUS.map((value, index) => (
              <div className={"flex items-center  "} key={index}>
                <div
                  key={index}
                  style={{ fontFamily: "Arboria-Medium", fontWeight: "400" }}
                  className="tabs"
                >
                  {value}
                </div>
                <div
                  className={` ${
                    index === 3 ? `hidden` : ``
                  } max-[500px]:hidden max-[1000px]:w-10 w-20 h-0.5 bg-white max-[600px]:mx-0.5 mx-3`}
                ></div>
              </div>
            ))}
          </div>

          <div
            className={
              "w-full flex flex-col items-start bg-gradient-to-b from-white/70 to-white text-start mt-4 px-5 pt-3 rounded-t-xl"
            }
          >
            <span
              className={"text-[36px] max-[500px]:text-[28px] font-semibold "}
            >
              You are looking for a car insurance for…
            </span>
            <span
              className={"text-[18px] max-[500px]:text-[14px] font-[400]  "}
            >
              Fill the questionnaire to get your personalised car insurance
              quote.
            </span>

            <div className={"flex flex-col items-start"}>
              <span
                className={
                  "text-[20px] max-[500px]:text-[16px] font-semibold mt-3"
                }
              >
                Select car brand
              </span>

              <div className={"relative -translate-x-1 mt-2"}>
                <CiSearch
                  className={"text-[28px] absolute top-3 left-2 text-[#13519C]"}
                />
                <input
                  style={{ fontFamily: "Arboria-Light", fontWeight: "400" }}
                  placeholder={"Select car brand"}
                  value={searchCarBrand}
                  className={
                    " max-[500px]:w-[255px] w-[400px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#13519C86]"
                  }
                  onFocus={() => setshowCarDropDown(true)}
                  onBlur={() => setshowCarDropDown(false)}
                  onChange={handleSearch}
                />
                <ul
                  className="list-scroll"
                  style={{
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#A8B5BD7D transparent",
                    WebkitOverflowScrolling: "touch",
                    height: "200px",
                    background: "#fff",
                    border: "2px solid #B7DD7A",
                    borderTop: "0px",
                    borderRadius: "20px",
                    padding: "10px",
                    position: "relative",
                    top: "-15",
                    zIndex: -1,
                    display: `${showCarDropDown === false ? "none" : "block"}`,
                  }}
                >
                  {filteredsearchCarBrand.map((cars, index) => (
                    <li
                      className="dropdown "
                      key={index}
                      style={{ padding: "10px 20px" }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      onClick={() => handleItemClick(cars.brandName)}
                    >
                      {cars.brandName}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <span
              className={
                "text-[20px] max-[500px]:text-[16px] text-[#13519C] mt-4"
              }
            >
              Popular Brands
            </span>

            <div
              className={
                "w-full flex flex-wrap items-start justify-start max-[500px]:justify-around max-[500px]:gap-x-1 gap-x-14  gap-y-8 mt-2"
              }
            >
              {carBrandLogos.map((value, index) => (
                <div
                  key={index}
                  onClick={() => handleBrandsClick(value.brandName)}
                  className={`  cursor-pointer p-[1px] bg-gradient-to-b from-[#13519C] to-transparent rounded-t-xl `}
                >
                  <div
                    className={` ${
                      activeBrands === value.brandName
                        ? `bg-white/50`
                        : `bg-white`
                    }   duration-300 max-[365px]:w-[120px] flex max-[500px]:w-[140px] w-[170px] h-[120px] flex-col items-center justify-center pt-4  rounded-t-xl`}
                  >
                    <Image
                      className={
                        "w-[80px] h-[50px] max-[365px]:w-[60px] object-contain"
                      }
                      src={value.brandLogoSrc}
                      alt={"car brands"}
                    />
                    <span> {value.brandName} </span>
                  </div>
                </div>
              ))}
            </div>
            {activeBrands !== "" && (
              <>
                <div
                  ref={modelSection}
                  className={"flex flex-col items-start mt-7"}
                >
                  <span
                    className={
                      "text-[36px] max-[500px]:text-[28px] font-[400] "
                    }
                  >
                    Select the model of your car
                  </span>
                  <span
                    style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                    className={
                      "text-[18px] max-[500px]:text-[14px] font-[400]  "
                    }
                  >
                    Need Help ?
                  </span>

                  <span className={"text-[20px] max-[500px]:text-[16px] mt-3"}>
                    Select car Model
                  </span>

                  <div className={"relative -translate-x-1 mt-2"}>
                    <CiSearch
                      className={
                        "text-[28px] absolute top-3 left-2 text-[#13519C]"
                      }
                    />
                    <input
                      style={{ fontFamily: "Arboria-Light", fontWeight: "400" }}
                      value={searchCarModel}
                      placeholder={"Select your car model"}
                      className={
                        "max-[500px]:w-[255px] w-[400px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#13519C86]"
                      }
                      onFocus={() => setshowCarModelDropDown(true)}
                      onBlur={() => setshowCarModelDropDown(false)}
                      onChange={handleSearchCarModel}
                    />
                    <ul
                      className="list-scroll"
                      style={{
                        overflowY: "auto",
                        scrollbarWidth: "thin",
                        scrollbarColor: "#A8B5BD7D transparent",
                        WebkitOverflowScrolling: "touch",
                        height: "200px",
                        background: "#fff",
                        border: "2px solid #B7DD7A",
                        borderTop: "0px",
                        borderRadius: "20px",
                        padding: "10px",
                        position: "relative",
                        top: "-15",
                        zIndex: -1,
                        display: `${
                          showCarModelDropDown === false ? "none" : "block"
                        }`,
                      }}
                    >
                      {models &&
                        filteredsearchCarModel.map((model, index) => (
                          <li
                            className="dropdown"
                            key={index}
                            style={{ padding: "10px 20px" }}
                            onMouseDown={(e) => {
                              e.preventDefault();
                            }}
                            onClick={() => handleItemCarmodelClick(model.Model)}
                          >
                            {model.Model}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <span
                  className={
                    "text-[20px] max-[500px]:text-[16px] text-[#13519C] mt-4"
                  }
                >
                  POPULAR {activeBrands} Models
                </span>

                <div
                  className={
                    "w-full max-[500px]:w-full flex flex-wrap items-start justify-start max-[500px]:justify-around max-[500px]:gap-x-1 gap-x-14  gap-y-8 mt-2"
                  }
                >
                  {models &&
                    models.length > 0 &&
                    filteredsearchCarModel.map((value, index) => (
                      <div
                        key={index}
                        onClick={() => handleModelsClick(value)}
                        className={
                          "p-[1px] bg-gradient-to-b from-[#2983D3] to-transparent rounded-t-xl "
                        }
                      >
                        <div
                          className={` ${
                            activeModel === value.Model
                              ? `bg-white/50`
                              : `bg-white`
                          } cursor-pointer duration-300 w-[140px] min-h-[60px] h-fit max-[365px]:w-[100px] max-[500px]:w-[130px]  max-[500px]:h-[120px] flex flex-col items-center text-center justify-center rounded-t-xl`}
                        >
                          {/* <img className={'w-[100px] h-[70px] max-[365px]:w-[70px] object-contain'} src={carsvg} alt={'car brands'}/> */}
                          <span
                            style={{
                              fontFamily: "Arboria-Book",
                              fontWeight: "400",
                            }}
                          >
                            {value.Model}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
                {activeModel !== "" && (
                  <>
                    <div
                      ref={YearSection}
                      className={"flex flex-col items-start mt-7"}
                    >
                      <span
                        className={
                          "text-[36px] max-[500px]:text-[28px] font-[400] "
                        }
                      >
                        In which year was your car manufactured ?
                      </span>
                      <span
                        style={{
                          fontFamily: "Arboria-Book",
                          fontWeight: "400",
                        }}
                        className={
                          "text-[18px] max-[500px]:text-[14px] font-[400]  "
                        }
                      >
                        Need Help ?
                      </span>
                      <div className={"relative -translate-x-1 mt-2"}>
                        <DatePicker
                          className={
                            " max-[500px]:w-[200px] w-[250px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#13519C]"
                          }
                          picker="date"
                          format="DD-MM-YYYY"
                          suffixIcon={
                            <Image
                              src={input_logo}
                              alt={"input logo"}
                              className={"w-[24px] h-[18px] object-contain"}
                            />
                          }
                          placeholder="16-06-2005"
                          style={{ borderColor: "#13519C" }}
                          onChange={(value) => handleYearsClick(value)}
                          disabledDate={disabledFutureDate}
                        />
                      </div>
                    </div>
                    {year !== 0 && (
                      <>
                        <div
                          ref={engineSection}
                          className={"flex flex-col items-start mt-7"}
                        >
                          <span
                            className={
                              "text-[36px] max-[500px]:text-[28px] font-[400] "
                            }
                          >
                            What is the engine Capacity ?
                          </span>
                          <span
                            style={{
                              fontFamily: "Arboria-Book",
                              fontWeight: "400",
                            }}
                            className={
                              "text-[18px] max-[500px]:text-[14px] font-[400]  "
                            }
                          >
                            Need Help ?
                          </span>
                          <input
                            ref={engineValue}
                            type="number"
                            value={engineCapacity}
                            className=" max-[500px]:w-[200px] w-[250px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#13519C]"
                            onChange={(e) => {
                              const value = Math.max(Number(e.target.value), 1);
                              setEngineCapacity(value);
                            }}
                            min={1}
                          />
                        </div>
                        {engineValue.current !== null && (
                          <>
                            <div className={"flex flex-col items-start mt-7"}>
                              <span
                                className={
                                  "text-[36px] max-[500px]:text-[28px] font-[400] "
                                }
                              >
                                What is the Sum Insured ?
                              </span>
                              <span
                                style={{
                                  fontFamily: "Arboria-Book",
                                  fontWeight: "400",
                                }}
                                className={
                                  "text-[18px] max-[500px]:text-[14px] font-[400]  "
                                }
                              >
                                Need Help ?
                              </span>
                              <div className={"relative -translate-x-1 mt-2"}>
                                {/* <CiSearch className={'text-[28px] absolute top-3 left-2 text-[#8DC14B]'} /> */}
                                <input
                                  style={{
                                    fontFamily: "Arboria-Light",
                                    fontWeight: "800",
                                  }}
                                  placeholder={"100000"}
                                  value={suminusredValue}
                                  className={
                                    " cursor-pointer max-[500px]:w-[255px] w-[246px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#13519C]"
                                  }
                                  onFocus={() =>
                                    setShowSuminusredDropDown(true)
                                  }
                                  onBlur={() =>
                                    setShowSuminusredDropDown(false)
                                  }
                                  onChange={handleSumInsuredChange}
                                  required
                                />

                                <ul
                                  className="list-scroll"
                                  style={{
                                    overflowY: "auto",
                                    scrollbarWidth: "thin",
                                    scrollbarColor: "#A8B5BD7D transparent",
                                    WebkitOverflowScrolling: "touch",
                                    height: "200px",
                                    background: "#fff",
                                    border: "2px solid #13519C",
                                    borderTop: "0px",
                                    borderRadius: "20px",
                                    padding: "10px",
                                    position: "relative",
                                    top: "-15",
                                    zIndex: -1,
                                    display: `${
                                      showSuminusredDropDown === false
                                        ? "none"
                                        : "block"
                                    }`,
                                  }}
                                >
                                  {fiteredSumInsuredValues.map((des, index) => (
                                    <li
                                      className=" cursor-pointer hover:scale-[1.01]"
                                      key={index}
                                      style={{ padding: "10px 20px" }}
                                      onClick={() => handleSuminusredClick(des)}
                                      onMouseDown={(e) => {
                                        e.preventDefault();
                                      }}
                                    >
                                      {des.value}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {SuminusredData && (
                              <>
                                <div
                                  className={"flex flex-col items-start mt-7"}
                                >
                                  <span
                                    className={
                                      "text-[36px] max-[500px]:text-[28px] font-[400] "
                                    }
                                  >
                                    Which car is it exactly ?
                                  </span>
                                  <span
                                    style={{
                                      fontFamily: "Arboria-Book",
                                      fontWeight: "400",
                                    }}
                                    className={
                                      "text-[18px] max-[500px]:text-[14px] font-[400]  "
                                    }
                                  >
                                    Need Help ?
                                  </span>
                                  <div
                                    className={
                                      "relative flex flex-wrap items-center max-[500px]:gap-x-1 gap-x-14  gap-y-8 -translate-x-1 mt-7"
                                    }
                                  >
                                    <div
                                      className={
                                        "bg-gradient-to-b from-[#2983D3] to-transparent p-[1px] rounded-t-xl relative"
                                      }
                                    >
                                      <div
                                        className={
                                          "bg-gradient-to-b from-[#2983D3] to-transparent p-[1px] rounded-t-xl  absolute -top-[31px] right-10 max-[800px]:hidden"
                                        }
                                      >
                                        <div
                                          onClick={scrollToTop}
                                          className={
                                            " cursor-pointer w-[170px] h-[30px]  bg-white/70 rounded-t-xl flex justify-center "
                                          }
                                        >
                                          Change Car
                                        </div>
                                      </div>
                                      <div
                                        className={
                                          "w-[580px] max-[800px]:w-[200px] max-[800px]:h-auto  h-[135px] flex max-[800px]:flex-col items-start max-[800px]:items-center rounded-t-xl p-4 bg-white"
                                        }
                                      >
                                        <div
                                          className={
                                            "flex flex-col gap-3 items-center"
                                          }
                                        >
                                          <Image
                                            className={
                                              "max-w-[75px] h-fit max-h-[45px] object-contain"
                                            }
                                            src={carsvg}
                                            alt={"brand"}
                                          />
                                          <span
                                            style={{
                                              fontFamily: "Arboria-Book",
                                              fontWeight: "400",
                                            }}
                                            className={"text-[16px] "}
                                          >
                                            {activeBrands}
                                          </span>
                                        </div>
                                        <div
                                          className={
                                            "ml-3 flex flex-col items-start text-start"
                                          }
                                        >
                                          <span
                                            style={{
                                              fontFamily: "Arboria-Book",
                                              fontWeight: "400",
                                            }}
                                            className={
                                              "text-[16px] text-[#13519C] "
                                            }
                                          >
                                            {activeBrands +
                                              " " +
                                              activeModel +
                                              " " +
                                              year +
                                              " " +
                                              engine}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className={'w-full flex max-[1150px]:flex-wrap items-start  gap-y-10 mt-10'}>
                                                                <div className={'w-0.5 h-20 bg-[#13519C] max-[660px]:hidden self-center'}></div>
                                                                <div className={'h-[140px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                                                                    <div className={'flex flex-col items-start  '}>
                                                                        <span className={'text-[21px] px-[1rem]'}>What is your driving purpose?</span>
                                                                        <span style={{ fontFamily: "Arboria-Book", fontWeight: "400" }} className={' px-[1rem] text-[14px] mb-6'}>Need Help ?</span>
                                                                    </div>
                                                                    <Switcher onYes={() => setPurpose('personal')} onNo={() => setPurpose('commercial')} className={' mx-[1rem] max-[365px]:w-[260px] max-[600px]:w-[300px] w-[400px]'} first={'Personal usage'} second={'Commercial usage'} />
                                                                </div>
                                                            </div> */}
                                <div
                                  className={"flex flex-col items-start mt-7"}
                                >
                                  <span
                                    className={
                                      "text-[36px] max-[500px]:text-[28px] font-[400] "
                                    }
                                  >
                                    In which province is your car registered ?
                                  </span>
                                  <span
                                    style={{
                                      fontFamily: "Arboria-Book",
                                      fontWeight: "400",
                                    }}
                                    className={
                                      "text-[18px] max-[500px]:text-[14px] font-[400]  "
                                    }
                                  >
                                    Need Help ?
                                  </span>
                                  <div
                                    className={"relative -translate-x-1 mt-2"}
                                  >
                                    <CiSearch
                                      className={
                                        "text-[28px] absolute top-3 left-2 text-[#13519C]"
                                      }
                                    />
                                    <input
                                      style={{
                                        fontFamily: "Arboria-Light",
                                        fontWeight: "400",
                                      }}
                                      placeholder={"Select City"}
                                      className={
                                        "max-[500px]:w-[255px] w-[400px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#13519C]"
                                      }
                                      onFocus={() => setshowCities(true)}
                                      onChange={handleSearchCity}
                                    />
                                    <ul
                                      className="list-scroll"
                                      style={{
                                        overflowY: "auto",
                                        scrollbarWidth: "thin",
                                        scrollbarColor: "#A8B5BD7D transparent",
                                        WebkitOverflowScrolling: "touch",
                                        height: "200px",
                                        background: "#fff",
                                        border: "2px solid #13519C",
                                        borderTop: "0px",
                                        borderRadius: "20px",
                                        padding: "10px",
                                        position: "relative",
                                        top: "-15",
                                        zIndex: -1,
                                        display: `${
                                          showCities === false
                                            ? "none"
                                            : "block"
                                        }`,
                                      }}
                                    >
                                      {filteredCity.map((city, index) => (
                                        <li
                                          className="dropdown"
                                          key={index}
                                          style={{ padding: "10px 20px" }}
                                          onClick={() =>
                                            handleItemCityClick(city)
                                          }
                                        >
                                          {city.name}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                <span
                                  className={
                                    "text-[20px] max-[500px]:text-[16px] text-[#13519C] mt-4"
                                  }
                                >
                                  POPULAR CITIES
                                </span>
                                <div
                                  className={
                                    "relative flex flex-wrap items-center max-[500px]:justify-around max-[500px]:gap-x-1 gap-x-14  gap-y-8 -translate-x-1 mt-2"
                                  }
                                >
                                  {CITIES.map((value, index) => (
                                    <div
                                      onClick={() => setCity(value.name)}
                                      key={index}
                                      className={
                                        "bg-gradient-to-b from-[#13519C] to-transparent p-[1px] rounded-t-xl"
                                      }
                                    >
                                      <div
                                        className={` ${
                                          activeCity === value.name
                                            ? `bg-white/50`
                                            : `bg-white`
                                        } duration-300 cursor-pointer max-[365px]:w-[120px] max-[500px]:w-[140px] w-[170px] h-[60px] rounded-t-xl flex justify-center pt-4 text-[14px]`}
                                      >
                                        {value.name}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div
                                  onClick={onSubmitCarInfo}
                                  className={
                                    "overflow-hidden mt-20  cursor-pointer my-4 z-0 w-48 h-12 max-[630px]:w-24 max-[630px]:h-10 max-[850px]:w-36 max-[850px]:h-12 max-[1200px]:w-40 max-[1200px]:h-14 flex pl-5 max-[630px]:text-start items-center rounded-lg max-[630px]:text-[12px] max-[850px]:text-lg text-[18px] text-white font-semibold bg-[#13519C] bg-gradient-to-tl from-[#2983D3] to-[#13519C] relative"
                                  }
                                >
                                  <span
                                    className={
                                      "font-[400] max-[630px]:-translate-x-2"
                                    }
                                  >
                                    Get Quote
                                  </span>
                                  <IoIosArrowForward
                                    className={
                                      "text-[150px] absolute -right-6 max-[630px]:-right-10 max-[630px]:text-[100px] max-[850px]:text-[120px] max-[850px]:-right-12 max-[1200px]:-right-14 opacity-40"
                                    }
                                  />
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
            <div className={"flex flex-col items-start text-start mt-16"}>
              <span className={"text-[21px] max-[500px]:text-[17px]"}>
                Remark
              </span>
              <p>
                Please answer all the above questions truthfully. If the insured
                conceals the truth or making a false statement will result in
                the voiding of this insurance contract. The insurance company
                has the right to terminate the insurance contract under Section
                865 of the Civil and Commercial Code, and may refuse to pay
                compensation <br />
                <br />
                The Company does not contact customers through other
                (communication) channels apart from the Company’s official
                channels under any circumstances.
                <br />
                <br />
                Please note that under no circumstances shall the Company be
                held liable or responsible for any claims, losses, damages,
                expenses, or other inconvenience resulting from or in any way
                connected with such communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
