import Heading from "../heading/Heading";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/outline";
import React,{useEffect} from "react";
import Data from "@/Data/Home/home.json";
// import useTranslation from "next-translate/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
const VideoSlide = () => {
  // const { t } = useTranslation("home");
 useEffect(() => {
   AOS.init({
     duration: 1000,
     once: true,
     offset: 50,
   });
 }, []);
  return (
    <div data-aos="fade-up">
      <Heading
        main={Data["video-slide"].main}
        redMain={Data["video-slide"].redMain}
        tagline={Data["video-slide"].tagline}
        subheading={Data["video-slide"].subheading}
      />
      <div className="flex justify-center items-center py-10 px-4 gap-2 md:gap-4">
        <a
          href="https://www.youtube.com/watch?v=K6H_ldUaKQw"
          target="_blank"
          rel="noreferrer"
          className="relative group hidden  overflow-hidden md:flex rounded-[1.5rem] md:rounded-[2.5rem] z-0 hover:z-50 hover:scale-110 transition-all ease-in-out duration-500 "
        >
          <Image
            src="/Assets/VideoSlide/videoSlide(3).jpg"
            height={200}
            width={140}
            alt="Video slide 1"
            className="rounded-[1.5rem] md:rounded-[2.5rem] object-cover hover:scale-150 transition duration-500 ease-in-out brightness-75  hover:brightness-90"
          />
          <div className="flex absolute items-center justify-center w-full h-full">
            <PlayIcon className="text-transparent h-16 w-16 text-center group-hover:text-white transition duration-500 ease-in-out" />
          </div>
        </a>
        <a
          href="https://www.youtube.com/watch?v=lnzxwBf9444"
          target="_blank"
          rel="noreferrer"
          className="relative group overflow-hidden flex rounded-[1.5rem] md:rounded-[3rem] z-0 hover:z-50 hover:scale-110 transition-all ease-in-out duration-500"
        >
          <Image
            src="/Assets/VideoSlide/videoSlide(1).jpg"
            height={300}
            width={180}
            alt="Video slide 2"
            className="rounded-[1.5rem] md:rounded-[3rem] object-cover hover:scale-150 transition duration-500 ease-in-out brightness-75 hover:brightness-90"
          />
          <div className="flex absolute items-center justify-center w-full h-full">
            <PlayIcon className="text-transparent h-16 w-16 text-center group-hover:text-white transition duration-500 ease-in-out" />
          </div>
        </a>
        <a
          href="https://www.youtube.com/watch?v=Aesphb-j_D4"
          target="_blank"
          rel="noreferrer"
          className="relative group overflow-hidden flex rounded-[1.5rem] md:rounded-[3rem] z-0 hover:z-50 hover:scale-110 transition-all ease-in-out duration-500"
        >
          <Image
            src="/Assets/VideoSlide/videoSlide(1).jpg"
            height={400}
            width={210}
            alt="Video slide 3"
            className="rounded-[1.5rem] md:rounded-[3rem] object-cover hover:scale-150 transition duration-500 ease-in-out brightness-75 hover:brightness-90"
          />
          <div className="flex absolute items-center justify-center w-full h-full">
            <PlayIcon className="text-transparent h-20 w-20 text-center group-hover:text-white transition duration-500 ease-in-out" />
          </div>
        </a>
        <a
          href="https://www.youtube.com/watch?v=pyAw2lOremw"
          target="_blank"
          rel="noreferrer"
          className="relative group overflow-hidden flex rounded-[1.5rem] md:rounded-[3rem] z-0 hover:z-50 hover:scale-110 transition-all ease-in-out duration-500"
        >
          <Image
            src="/Assets/VideoSlide/videoSlide(4).jpg"
            height={300}
            width={180}
            alt="Video slide 4"
            className="rounded-[1.5rem] md:rounded-[3rem] object-cover hover:scale-150 transition duration-500 ease-in-out brightness-75 hover:brightness-90"
          />
          <div className="flex absolute items-center justify-center w-full h-full">
            <PlayIcon className="text-transparent h-16 w-16 text-center group-hover:text-white transition duration-500 ease-in-out" />
          </div>
        </a>
        <a
          href="https://www.youtube.com/watch?v=CC8FDHBj1zw"
          target="_blank"
          rel="noreferrer"
          className="relative group hidden overflow-hidden md:flex rounded-[1.5rem] md:rounded-[2.5rem] z-0 hover:z-50 hover:scale-110 transition-all ease-in-out duration-500"
        >
          <Image
            src="/Assets/VideoSlide/videoSlide(5).jpg"
            height={200}
            width={140}
            alt="Video slide 5"
            className="rounded-[1.5rem] md:rounded-[2.5rem] object-cover hover:scale-150 transition duration-500 ease-in-out brightness-75 hover:brightness-90"
          />
          <div className="flex absolute items-center justify-center w-full h-full">
            <PlayIcon className="text-transparent h-16 w-16 text-center group-hover:text-white transition duration-500 ease-in-out" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default VideoSlide;
