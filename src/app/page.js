'use client';

import Banner from '@/Components/Home/Banner.jsx'

import Comparison from '@/Components/Home/Comparison';
import Download from '@/Components/Home/Download';
import Highlight from '@/Components/Home/Highlight';
import Navbar from '@/Components/Home/Navbar';
import Services from '@/Components/Home/Services';
import SimpleFastSecure from '@/Components/Home/SimpleFastSecure';
import Image from 'next/image'
import WhyToUse from '@/Components/Home/WhyToUse';
import VideoSlide from '@/Components/Home/VideoSlide';
import Testimonial from '@/Components/Home/testimonial';
import Partners from '@/Components/Home/Partners';

export default function Home() {
  return (
    <main className="">
    <Navbar/>
      <Banner />
      <Services />
      <Highlight />
      <Download />
      <SimpleFastSecure />
      <WhyToUse />
      <Comparison />
      <VideoSlide />
      <Testimonial />
      <Partners/>
    </main>
  )
}
