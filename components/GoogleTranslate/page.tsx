"use client";
import React, { useEffect } from "react";

const GoogleTranslate = () => {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>....");
  useEffect(() => {
    // Load the Google Translate script
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };
    let duplicate_google_translate_counter = 0; //this stops google adding button multiple times

    // Initialize the Google Translate widget
    window.googleTranslateElementInit = () => {
      if (duplicate_google_translate_counter == 0) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: true,
            includedLanguages: "en,zh-CN,km",
            layout:
              window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          "google_translate_element"
        );
      }
      duplicate_google_translate_counter++;
    };

    addGoogleTranslateScript();
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
