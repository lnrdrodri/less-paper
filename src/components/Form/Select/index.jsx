import { Flex, Select, Text } from "@radix-ui/themes";

const FormSelect = ({
  items = [],
  size = '2',
  radius = 'small',
  placeholder = '',
  label = '',
  register = () => {},
  register_name,
  required
}) => {
  return (
    <Flex direction="column" gap="1">
      <Text as="label" size="2" weight="medium">{label}&nbsp;</Text>
      <Select.Root
        size={size}
        radius={radius}
        // {...register(register_name, { required })}
      >
        <Select.Trigger />
        <Select.Content>
          {items.map((item, index) => (
            <Select.Item key={index} value={item.value}>{item.text}</Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </Flex>
  )
}

export default FormSelect;