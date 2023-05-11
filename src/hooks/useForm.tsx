import { useEffect, useState } from "react";

interface Inputs {
  nickname?: string;
  email: string;
  password: string;
}

interface Valid {
  email: boolean;
  password: boolean;
}

export default function useForm(initialState: Inputs) {
  const [inputs, setInputs] = useState<Inputs>(initialState);

  const [valid, setValid] = useState<Valid>({
    email: false,
    password: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("유효성 검사중");
      setFormIsValid(inputs.email.includes("@") && inputs.password.length >= 8);
    }, 500);

    return () => {
      console.log("클린업");
      clearTimeout(identifier);
    };
  }, [inputs.email, inputs.password]);

  const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.target as HTMLInputElement;
    setInputs({ ...inputs, [name]: value });
  };

  const validHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name } = e.target as HTMLInputElement;
    if (name === "email") {
      setValid({ ...valid, [name]: inputs.email.includes("@") });
    } else {
      setValid({ ...valid, [name]: inputs.password.length >= 8 });
    }
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return {
    changeHandler,
    validHandler,
    submitHandler,
    inputs,
    valid,
    formIsValid,
  };
}
