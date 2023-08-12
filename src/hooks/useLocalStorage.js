import { useEffect, useState } from "react";

function getItemFromLocalStorage(key, initialValue) {
  
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) {
    return savedValue;
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
}

export const useLocalStorage = (key, initialValue) => {

  const [value, setValue] = useState(() => {
    return getItemFromLocalStorage(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
