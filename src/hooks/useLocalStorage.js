import { useEffect, useState } from "react";

const PREFIX = "whatsapp-clone-";
const useLocalStorage = (key, initValue) => {
  const prefixedkey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonVal = localStorage.getItem(prefixedkey);
    if (jsonVal != null) return JSON.parse(jsonVal);
    if (typeof initValue === "function") {
      return initValue();
    } else {
      return initValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(prefixedkey, JSON.stringify(value));
  }, [prefixedkey, value]);
  return [value, setValue];
};

export default useLocalStorage;
