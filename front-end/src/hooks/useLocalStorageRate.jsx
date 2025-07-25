import useLocalStorage from "./useLocalStorage";

const useLocalStorageRate = () => {
  const [rate, setRate] = useLocalStorage("rate", "GEL");

  return [rate, setRate];
};

export default useLocalStorageRate;
