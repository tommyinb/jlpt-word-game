import { useEffect } from "react";
import ReactGa4 from "react-ga4";

export function useAnalytics() {
  useEffect(() => {
    ReactGa4.initialize("G-8JSHE6WFC2");
    ReactGa4.send({ hitType: "pageview", page: "/" });
  }, []);
}
