import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ? Autism Assessment Platform */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Right image (now on the right for desktop) */}
          <div className="md:col-start-7 md:col-span-6 col-span-12 flex justify-center items-center order-1 md:order-2 relative group">
            {/* Hover overlay effect */}
            <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 group-hover:opacity-0 hover:cursor-pointer duration-300 z-10"></div>
            <Img src={"/autism.jpg"} alt={"Autism Platform Screenshot"} className={`w-full rounded h-full max-h-96 object-contain`} />
          </div>
          {/* Left content (now on the left for desktop) */}
          <div className="md:col-span-6 col-span-12 flex flex-col items-start space-y-3 px-8 pt-8 sm:pt-12 md:py-0 order-2 md:order-1">
            <div className="flex flex-col space-y-1 z-10">
              <span className="text-AAsecondary text-base">Featured Project</span>
              <span className="md:text-gray-200 text-AAsecondary font-bold text-2xl md:text-2xl hover:cursor-pointer">
                Purplebutterfly
              </span>
              
              <span className="text-gray-400 text-base md:text-lg font-semibold mt-1">(Autism Spectrum Disorder Project)</span>
            </div>
            <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
          


        </ul>
            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
              <ul className="list-disc pl-6 mt-2 text-gray-300 md:text-gray-400 text-left space-y-2">
                <li><span className="text-AAsecondary font-bold">Comprehensive assessment</span>, <span className="text-AAsecondary font-bold">skill tracking</span> (VB-MAPP, ABLLS), and <span className="text-AAsecondary font-bold">progress monitoring</span> for autism care.</li>
                <li><span className="text-AAsecondary font-bold">Integrated therapy management</span>, including speech therapy, video consultations, and digital prescriptions for remote and in-clinic support.</li>
                <li><span className="text-AAsecondary font-bold">Centralized technology platform</span> connecting doctors, therapists, and patients, supporting child development with data-driven insights.</li>
                <li><span className="text-AAsecondary font-bold">Laterly, migrated the project React to Next.js</span> leveraging server-side rendering and creating reusable components to improve performance and scalability.</li>
              </ul>
            </div>
    
          </div>
        </div>
        {/* Bhairavi Child Development Center Project */}
        <div data-aos="fade-up" className=" relative md:grid md:grid-cols-12 w-full md:h-96 mt-16">
          {/* Right image */}
          <div className="md:col-start-7 md:col-span-6 col-span-12 flex justify-center items-center order-1 md:order-2 relative group">
            <Img src={"/bhairavi.jpeg"} alt={"Bhairavi Child Development Center Screenshot"} className={`w-full rounded h-full max-h-96 object-contain`} />
            {/* Hover overlay effect for live project */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded z-20">
              <span className="text-green-400 text-lg font-bold mb-2 flex items-center">
                Live
                <svg className="ml-2 w-6 h-6 text-green-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
              <a href="https://growthtracking.in/" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-AAsecondary text-white rounded font-semibold hover:bg-AAprimary transition-colors">
                Visit Project
              </a>
            </div>
          </div>
          {/* Left content */}
          <div className="md:col-span-6 col-span-12 flex flex-col items-start space-y-3 px-8 pt-8 sm:pt-12 md:py-0 order-2 md:order-1">
            <div className="flex flex-col space-y-1 z-10">
              <span className="text-AAsecondary text-base">Live Platform Project</span>
              <span className="md:text-gray-200 text-AAsecondary font-bold text-2xl md:text-2xl hover:cursor-pointer">
                Bhairavi Child Development Center
              </span>
            </div>
           
            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
              <ul className="list-disc pl-6 mt-2 text-gray-300 md:text-gray-400 text-left space-y-2">
                <li><span className="text-AAsecondary font-bold">Practice Management System:</span> Streamlined platform for doctors, therapists, and parents to manage consultations and appointments.</li>
                <li><span className="text-AAsecondary font-bold">Child Progress Tracking:</span> Tools for setting timelines, monitoring milestones, and tracking developmental progress.</li>
                <li><span className="text-AAsecondary font-bold">Online Appointment Booking & Payments:</span> Easy slot booking, secure payment integration, and efficient treatment management.</li>
                <li><span className="text-AAsecondary font-bold">Compassionate, Innovative Care:</span> Empowering families with free access, real-time collaboration, and a focus on holistic child development.</li>
              </ul>
              <div className="mt-4">
                <a href="https://growthtracking.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-AAsecondary text-white font-bold rounded hover:bg-AAprimary transition-colors">
                  Visit Bhairavi Child Development Center &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
