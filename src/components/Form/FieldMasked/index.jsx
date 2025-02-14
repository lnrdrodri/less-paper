import { cloneElement } from "react";
import { Controller } from "react-hook-form";
import ReactInputMask from "react-input-mask";

const FormFieldMasked = ({
  name,
  control,
  rules,
  mask,
  inputChild,
}) => {
  return (
    <Controller
      name={name} // Nome do campo
      control={control} // Controlador do react-hook-form
      rules={rules}
      render={({ field }) => (
        <ReactInputMask
          {...field}
          mask={mask} // Máscara do campo
          maskChar={null} // Remove o caractere de preenchimento (_)
        >
          {(inputProps) => {
            const inputWithProps = cloneElement(inputChild, {...inputProps});
            return (inputWithProps);
          }}
        </ReactInputMask>
      )}
    />
  );
};

export default FormFieldMasked;