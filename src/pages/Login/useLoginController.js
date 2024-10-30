import { useState } from "react";
import { useForm } from "react-hook-form";
import { authService } from "../../app/services/authService";
import { useAuth } from "../../app/hooks/useAuth";

export function useLoginController() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();

  const onSubmitLogin = handleSubmit(async (payload) => {
    try {
      const data = await authService.login(payload);
      console.log(data);
      login(data.token);
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