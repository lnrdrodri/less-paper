import FormSelect from "../../components/Form/Select";
import FormInput from "../../components/Form/Input";
import { Box, Flex } from "@radix-ui/themes";

const FormUnits = ({ register, control, errors }) => {
  return (
    <Flex direction="column" gap="4">
      <Flex gap="2">
        <Box flexGrow="1" flexShrink="1" flexBasis="0%">
          <FormInput
            label="Nome"
            {...register("name", { required: { message: "Nome é obrigatório", value: true} })}
            error={errors.name}
            required
          />
        </Box>
        <Box flexGrow="1" flexShrink="1" flexBasis="0%">
          <FormInput
            label="CPF/CNPJ"
            {...register("cnpj", { required: { message: "CPF/CNPJ é obrigatório", value: true} })}
            error={errors.cnpj}
            required
          />
        </Box>
      </Flex>
      <Flex gap="2">
        <Box flexGrow="1" flexShrink="1" flexBasis="0%">
          <FormInput
            label="Percentual de êxito (%)"
            {...register("percentage", { required: { message: "Percentual de êxito é obrigatório", value: true} })}
            error={errors.percentage}
            required
          />
        </Box>
        <Box flexGrow="1" flexShrink="1" flexBasis="0%">
          <FormSelect
            label="Royalties"
            name="royalties"
            control={control}
            error={errors.royalties}
            rules={{
              required: { message: "Royalties é obrigatório", value: true}
            }}
            items={[
              {text: "Padrão", value: "1"},
              {text: "Isenção integral", value: "2"},
              {text: "Isenção parcial", value: "3"},
            ]}
            required
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default FormUnits;