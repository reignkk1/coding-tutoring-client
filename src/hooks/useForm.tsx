import { useState } from "react";

const useForm = (validateFcn: (value: string) => boolean) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateFcn(value);
  const hasError = !isValid && isTouched;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    handleBlur,
    handleChange,
    reset,
  };
};

export default useForm;
