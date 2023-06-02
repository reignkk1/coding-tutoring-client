import { useState, useCallback } from "react";
import { sign } from "../util/sign/formConfig";

function useSign(formObj: sign) {
  const [form, setForm] = useState(formObj);

  function renderFormInputs() {
    return Object.values(form).map((inputObj) => {
      const { value, label, errorMessage, valid, renderInput } = inputObj;
      return renderInput(onInputChange, value, valid, errorMessage, label);
    });
  }

  const isInputFieldValid = useCallback(
    (inputField: any) => {
      if (!inputField.validationRules.validate(inputField.value, form)) {
        inputField.errorMessage = inputField.validationRules.message;
        return false;
      }
      return true;
    },
    [form]
  );

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      const inputObj = form[name];

      inputObj.value = value;

      const isValidInput = isInputFieldValid(inputObj);

      if (isValidInput && !inputObj.valid) {
        inputObj.valid = true;
      } else if (!isValidInput && inputObj.valid) {
        inputObj.valid = false;
      }

      inputObj.touched = true;
      setForm({ ...form, [name]: inputObj });
    },
    [form, isInputFieldValid]
  );

  const isFormValid = useCallback(
    //이메일 인증 성공시 유효하도록 수정필요함.
    () => {
      let isValid = true;
      const arr = Object.values(form);

      for (let i = 0; i < arr.length; i++) {
        if (!arr[i].valid) {
          isValid = false;
          break;
        }
      }

      return isValid;
    },
    [form]
  );

  return { form, renderFormInputs, isFormValid };
}

export default useSign;
