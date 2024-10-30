import { CrumpledPaperIcon, EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import FormInput from "../../components/Form/Input";
import { Box, Button, Flex } from "@radix-ui/themes";
import { useLoginController } from "./useLoginController";

const LoginPage = () => {
  const { onSubmitLogin, showPassword, setShowPassword, register, errors} = useLoginController();

  return (
    <Flex align="start" justify="center" pt="15%" width="100%" height="100%">
      <Box minHeight="40vh" className="md:w-1/2 lg:w-1/4 2xl:w-1/5 border border-zinc-700 rounded-md">
        <Flex direction="column" align="stretch" px="6" py="8">
          <div className="flex items-center gap-2 mb-4 mx-auto">
            <CrumpledPaperIcon width={48} height={48}/>
          </div>
          <form onSubmit={onSubmitLogin} className="flex flex-col items-stretch gap-3">
            <FormInput
              label="E-mail"
              type="email"
              {...register("email", { required: { message: "E-mail is required", value: true} })}
              error={errors.email}
            />
            <FormInput
              label="Password"
              {...register("password", { required: { message: "Password is required", value: true} })}
              error={errors.password}
              type={showPassword ? 'text' : 'password'}
              icon_right={
                showPassword
                  ? <EyeOpenIcon width={16} height={16} onClick={() => setShowPassword(false)} />
                  : <EyeClosedIcon width={16} height={16} onClick={() => setShowPassword(true)} />
              }
            />
            <Button type="submit" mt="4">Login</Button>
          </form>
        </Flex>
      </Box>
    </Flex>
  );
}; 

export default LoginPage;