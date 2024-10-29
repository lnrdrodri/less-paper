import { useState } from "react";
import { useForm } from "react-hook-form";
import { authService } from "../../app/services/authService";

export function useLoginController() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitLogin = handleSubmit(async (payload) => {
    try {
      const data = await authService.login(payload);
      console.log(data);
      
    } catch (error) {
      console.log(error?.response?.data?.error);
    }
  })

  return {
    register,
    errors,
    showPassword,
    setShowPassword,
    onSubmitLogin
  }
}