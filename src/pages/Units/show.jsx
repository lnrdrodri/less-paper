import { ArrowLeftIcon, DotsVerticalIcon, PlusCircledIcon, PlusIcon } from "@radix-ui/react-icons";
import { AlertDialog, Box, Button, Dialog, DropdownMenu, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import FormUnits from "./form";
import { useUnitController } from "./useUnitController";

const PageUnitsShow = () => {
  const {
    unit,
    isOpen,
    setIsOpen,
    isOpenDelete,
    setIsOpenDelete,
    register,
    control,
    errors,
    onSubmitUpdate,
    deleteUnit
  } = useUnitController();

  return (
    <Box>
      <Flex align="center" gap="4">
        <Link to="/units">
          <ArrowLeftIcon width="22" height="22" className="text-primary-400" />
        </Link>
        <Heading size={6}>Unidade</Heading>
      </Flex>
      <Flex mt="4" justify="between" className="bg-gray rounded-md px-6 py-4">
        <Box width="100%">
          <Text className="text-zinc-300 font-semibold">Unidade ID: #{unit?.id}</Text>
          <Flex justify="between" mb="2">
            <Heading size={6}>{unit?.name}</Heading>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="soft">
                  Opções
                  <DropdownMenu.TriggerIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content variant="soft" color="gray">
                <DropdownMenu.Item onClick={() => setIsOpen(true)}>
                  Editar
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item color="red" onClick={() => setIsOpenDelete(true)}>
                  Excluir
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
          <Text className="text-zinc-300">{unit?.cnpj}</Text>
        </Box>
      </Flex>

      <Grid columns="2" gap="4" mt="4">
        <Box width="100%" className="bg-gray rounded-md px-6 py-4">
          <Flex justify="between" mb="4">
            <Text className="font-bold">Endereços</Text>
            <Button variant="soft" onClick={() => console.log("Add address")}>
              <PlusIcon />
            </Button>
          </Flex>
        </Box>
        <Box width="100%" className="bg-gray rounded-md px-6 py-4">
          <Flex justify="between" mb="4">
            <Text className="font-bold">Responsáveis</Text>
            <Button variant="soft" onClick={() => console.log("Add address")}>
              <PlusIcon />
            </Button>
          </Flex>
        </Box>
      </Grid>
      <Grid columns="2" gap="4" mt="4">
        <Box width="100%" className="bg-gray rounded-md px-6 py-4">
          <Flex justify="between" mb="4">
            <Text className="font-bold">Anotações</Text>
            <Button variant="soft" onClick={() => console.log("Add address")}>
              <PlusIcon />
            </Button>
          </Flex>
        </Box>
      </Grid>
      
      <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e)}>
        <Dialog.Content maxWidth="800px">
          <Dialog.Title mb="5">Editar unidade</Dialog.Title>
          <form onSubmit={onSubmitUpdate}>
            <FormUnits register={register} control={control} errors={errors} />
            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray" onClick={() => setIsOpen(false)}>
                  Cancelar
                </Button>
              </Dialog.Close>
              <Button type="submit">Salvar</Button>
            </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>

      <AlertDialog.Root open={isOpenDelete} onOpenChange={(e) => setIsOpenDelete(e)}>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Excluir unidade</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Você tem certeza? Essa unidade será excluída!
          </AlertDialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Não
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={deleteUnit}>
                Sim, excluir
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Box>
  );
};

export default PageUnitsShow;