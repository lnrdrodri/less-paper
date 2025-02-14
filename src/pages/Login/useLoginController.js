import { useState } from "react";
import { useForm } from "react-hook-form";
import { authService } from "../../app/services/authService";
import { useAuth } from "../../app/hooks/useAuth";
import toast from "react-hot-toast";

export function useLoginController() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();

  const onSubmitLogin = handleSubmit(async (payload) => {
    try {
      const data = await authService.login(payload);
      toast.success('Logged in successfully');
      login(data.token);
    } catch (error) {
      toast.error('Invalid credentials');
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