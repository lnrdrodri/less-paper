import { Flex, Select, Text } from "@radix-ui/themes";
import { Controller } from "react-hook-form";

const FormSelect = ({
  items = [],
  label = '',
  name,
  control,
  rules,
  error,
  required = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Flex direction="column" gap="1" position="relative">
          <Text as="label" size="2" weight="medium" ml="1">{label}&nbsp;</Text>
          <Select.Root onValueChange={field.onChange} defaultValue={field.value}>
            <Select.Trigger />
            <Select.Content>
              {items.map((item, index) => (
                <Select.Item key={index} value={item.value}>{item.text}</Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          {required && (
            <span
              title="Required"
              style={{
                cursor: "help",
                height: "8px",
                width: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-9)",
                position: "absolute",
                right: 3,
                top: 7
              }}
            >&nbsp;</span>
          )}
          {error && <Text size="1" color="red">{error.message}</Text>}
        </Flex>
      )}
    />
  )
};

export default FormSelect;