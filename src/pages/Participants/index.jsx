import { CaretSortIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex, Table, TextField } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import FormInput from "../../components/Form/Input";
import { useParticipantsController } from "./useParticipantsController";
import EntityHeader from "../../components/Entity/Header";

// TODOS
// [] Create a component to header
// [] Create a component to Add Dialog
// [] Create a component to Table

// [] LOAD INITIAL DATA
// [] OPEN DIALOG
// [] VALIDATE FORM
// [] SUBMIT FORM
// [] SET LOADING UNTIL GET RESPONSE
// [] ON SUCCESS, REFRESH DATA AND CLOSE DIALOG
// [] ON FAIL, SHOW ERROR MESSAGE

const PageParticipants = () => {
  const { participants, register, errors, handleFilter, onSubmit } = useParticipantsController();

  return (
    <Box>
      <EntityHeader
        textHeader="Participantes"
        textButton="Participante"
        textHeaderDialog="Adicionar Participante"
        onSubmit={onSubmit}
        showAddDialog
        formDialog={
          <Flex direction="column" gap="2">
            <Flex gap="2">
              <Box flexGrow="1">
                <FormInput
                  label="Nome"
                  {...register("name", { required: { message: "Nome é obrigatório", value: true} })}
                  error={errors.name}
                />
              </Box>
              <Box flexGrow="1">
                <FormInput
                  label="CNPJ"
                  {...register("cnpj", { required: { message: "CNPJ é obrigatório", value: true} })}
                  error={errors.cnpj}
                />
              </Box>
            </Flex>
          </Flex>
        }
      />
      <TextField.Root radius="large" placeholder="Pesquisar participantes..." my="4">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              <Flex gap="2" align="center">
                <span>Participant</span>
                <CaretSortIcon onClick={handleFilter} className="cursor-pointer" />
              </Flex>
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>CNPJ</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Updated At</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {participants.length === 0 && (
            <Table.Row>
              <Table.Cell colSpan={7} className="text-center">
                No participants found
              </Table.Cell>
            </Table.Row>
          )}
          {participants.map((participant) => (
            <Table.Row key={participant.id}>
              <Table.Cell>
                <Link
                  to={`/participants/${participant.id}`}
                  style={{
                    color: 'var(--accent-9)',
                  }}
                >
                  {participant.id}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link
                  to={`/participants/${participant.id}`}
                  style={{
                    color: 'var(--accent-9)',
                  }}
                >
                  {participant.name}
                </Link>
              </Table.Cell>
              <Table.Cell>{participant.cnpj}</Table.Cell>
              <Table.Cell>{participant.created_at}</Table.Cell>
              <Table.Cell>{participant.updated_at}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default PageParticipants;