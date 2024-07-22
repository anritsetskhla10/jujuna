import { useEffect, useState } from "react";
import i18n from "./i18n"; 
import HomePage from "./view/HomePage";

function App() {

  const [ipAddress, setIpAddress] = useState();
  const [geoInfo, setGeoInfo] = useState();

  useEffect(() => {
    getVisitorIP();
  }, []);

  useEffect(() => {
    if (ipAddress) {
      fetchIPInfo();
    }
  }, [ipAddress]);

  useEffect(() => {
    if (geoInfo) {
      setLanguageBasedOnLocation(geoInfo);
    }
  }, [geoInfo]);

  const getVisitorIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org');
      const data = await response.text();
      setIpAddress(data);

    } catch (error) {
      console.log("Failed to fetch IP:", error);
    }
  };

  const fetchIPInfo = async () => {
    try {
      const response = await fetch(`https://ipinfo.io/${ipAddress}/geo`);
      const data = await response.json();
      setGeoInfo(data);
    } catch (error) {
      console.log("Failed to fetch location info:", error);
    }
  };

  const setLanguageBasedOnLocation = (geoInfo) => {
    const countryLanguageMap = {
      GE: 'ka', 
      US: 'en',
    };

    const language = countryLanguageMap[geoInfo.country] || 'ka';
    i18n.changeLanguage(language);
  };


  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
