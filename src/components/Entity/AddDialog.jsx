import { PlusIcon } from "@radix-ui/react-icons";
import { Button, Dialog, Flex } from "@radix-ui/themes";
import { useAddDialog } from "../../app/hooks/useAddDialog";

const EntityAddDialog = ({
  form,
  textButton,
  textHeaderDialog,
  onSubmit,
}) => {
  const {isOpen, close, open, isLoading} = useAddDialog();
  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => e ? open : close}>
      <Dialog.Trigger>
        <Button variant="solid" radius="large" onClick={open}>
          <PlusIcon /> {textButton}
        </Button>
      </Dialog.Trigger>

        <Dialog.Content maxWidth="800px">
          <Dialog.Title mb="5">{textHeaderDialog}</Dialog.Title>
          <form
            onSubmit={onSubmit}
          >
            {form}
            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray" onClick={close}>
                  Cancelar
                </Button>
              </Dialog.Close>
              <Button loading={isLoading} type="submit">Salvar</Button>
            </Flex>
          </form>
        </Dialog.Content>
    </Dialog.Root>
  );
};

export default EntityAddDialog;