import React, { useEffect, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  const [isAndroidWebView, setIsAndroidWebView] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    // Check for Android WebView by inspecting the user agent
    if (/android/i.test(userAgent) && /wv/.test(userAgent)) {
      setIsAndroidWebView(true);
    }
  }, []);
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-8 w-full bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center space-x-4">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 04.</span>
        <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl opacity-85">What's Next?</span>
        <div className="bg-gray-400 h-[0.2px] w-24 md:w-48"></div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-100 text-center">Get In Touch</h2>
      <p className="text-gray-400 text-lg text-center max-w-2xl">
        Interested in working together or have a project in mind? I’m always open to new opportunities and collaborations. Let’s connect!
      </p>
      <div className="flex flex-row space-x-6 pt-4">
        <a
          href="mailto:ajith163210@gmail.com"
          className="px-6 py-3 bg-AAsecondary text-white rounded font-semibold hover:bg-AAprimary transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/ajith-kumar-jayaraman-1a15b7248/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-AAsecondary text-white rounded font-semibold hover:bg-AAprimary transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
