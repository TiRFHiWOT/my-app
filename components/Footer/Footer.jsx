import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward, IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className={'w-full flex items-end justify-between mt-20'}>
            <div className={'w-[40%] max-[800px]:h-14 h-10 bg-gray-200 rounded-tr-full'}></div>
            <div className={'w-auto flex h-14 items-center justify-between px-10 max-[600px]:px-4 gap-7 text-2xl text-[#2983D3] '}>
                <FaFacebookF />
                <FaXTwitter />
                <FaLinkedinIn />
                <IoLogoInstagram />
            </div>
            <div className={'w-[40%] max-[800px]:h-14 h-10 bg-gray-200 rounded-tl-full'}></div>
        </div>
    )
}

export default Footer