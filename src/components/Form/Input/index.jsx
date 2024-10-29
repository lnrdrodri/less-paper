import { Flex, Text, TextField } from "@radix-ui/themes";
import { forwardRef } from "react";

const FormInput = forwardRef(({
  type = 'text',
  size = '2',
  radius = 'small',
  placeholder = '',
  label = '',
  icon_left = null,
  icon_right = null,
  name,
  onChange,
  onBlur,
  error
}, ref) => {
  return (
    <Flex direction="column" gap="1" position="relative">
      <Text as="label" size="2" weight="medium">{label}&nbsp;</Text>
      <TextField.Root
        size={size}
        radius={radius}
        placeholder={placeholder}
        type={type}
        ref={ref}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      >
        <TextField.Slot className="!cursor-pointer">
          {icon_left}
        </TextField.Slot>
        <TextField.Slot className="!cursor-pointer">
          {icon_right}
        </TextField.Slot>
      </TextField.Root>
      {name && (
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
  )
});

export default FormInput;