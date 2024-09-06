// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language translations
const resources = {
  en: {
    translation: { 
      "Crop Disease Detector": "Crop Disease Detector",
      "News": "News",
      "Policies": "Policy",
      "Analyze Your Crop": "Analyze Your Crop",
      "Crop Details": "Crop Details",
      "Enter crop details...": "Enter crop details...",
      "Crop Image": "Crop Image",
      "Analyze Crop": "Analyze Crop",
      "Analyzing...": "Analyzing...",
      
      "An error occurred while analyzing the crop. Please try again.": "An error occurred while analyzing the crop. Please try again."
    },
  },
  hi: {
    translation: {
      "Crop Disease Detector": "फसल रोग पहचानकर्ता",
      "News": "समाचार",
      "Policies": "नीति",
      "Analyze Your Crop": "अपनी फसल का विश्लेषण करें",
      "Crop Details": "फसल का विवरण",
      "Enter crop details...": "फसल का विवरण दर्ज करें...",
      "Crop Image": "फसल की छवि",
      "Analyze Crop": "फसल का विश्लेषण करें",
      "Analyzing...": "विश्लेषण कर रहा है...",
    
      "An error occurred while analyzing the crop. Please try again.": "फसल का विश्लेषण करते समय एक त्रुटि हुई। कृपया पुनः प्रयास करें।"
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // if translation is missing, use English
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
