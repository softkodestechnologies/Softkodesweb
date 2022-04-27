import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

const GeneralContext = React.createContext();
export const useGeneralContext = () => useContext(GeneralContext);

const GeneralContextProvider = ({ children }) => {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleRouteChange = (url) => {
      setNavOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <GeneralContext.Provider
      value={{ navOpen, setNavOpen, loading, setLoading }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
