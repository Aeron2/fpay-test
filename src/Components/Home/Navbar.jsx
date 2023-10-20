'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      // offset: 50,
    });
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    // <>
    //
    // </>
    <>
      <div
        className="flex flex-row justify-around   py-2 shadow-2xl z-50 sticky top-0 bg-white rounded-b-md  "
        data-aos="fade-down"
      >
        <div className="hel">
          <Image
            // src={"/Assets/logo/logo-only.png"}
            src={"/Assets/logo/FrancePay-head.png"}
            width={200}
            height={200}
            alt=""
          />
        </div>
        <div className="hel space-x-8">
          <Link className="nav-link" href="/">
            Solution
          </Link>
          <Link className="nav-link" href="/plan-for-merchant">
            Plan for Merchants
          </Link>
          <Link className="nav-link" href="/">
            Press
          </Link>
          <Link className="nav-link" href="/">
            About
          </Link>
          <Link className="nav-link" href="/">
            Contact Us
          </Link>
        </div>
        <div className="hel">
          {/* <div id="google_translate_element"></div> */}
          Translate
        </div>
      </div>
    </>
    // <div className='h-24'></div>
  );
}

export default Navbar;
