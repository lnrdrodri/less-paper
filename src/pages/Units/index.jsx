import { CaretSortIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex, ScrollArea, Table, TextField } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useUnitsController } from "./useUnitsController";
import EntityHeader from "../../components/Entity/Header";

import FormUnits from "./form";

// TODOS
// [x] Create a component to header
// [x] Create a component to Add Dialog
// [x] Add in create dialog all fields of unit and participant(based on excel),
//      and confirm the fields with Guilherme

// [ ] Create a component to Table
// [x] Create show pages
// [ ] Create unit header in show page
// [ ] Create edit in show page
// [ ] Create delete in show page
// [ ] Create address in show page
// [ ] Create notes in show page
// [ ] Create responsible in show page

// [x] LOAD INITIAL DATA
// [x] OPEN DIALOG
// [x] MASK ON FIELDS
// [x] VALIDATE FORM
// [x] SUBMIT FORM
// [x] SET LOADING UNTIL GET RESPONSE
// [x] ON SUCCESS, REFRESH DATA AND CLOSE DIALOG
// [x] ON FAIL, SHOW ERROR MESSAGE

const PageUnits = () => {
  const { units, register, control, errors, handleFilter, onSubmit } = useUnitsController();

  return (
    <Box>
      <EntityHeader
        textHeader={`Unidades - ${units.length || 0}`}
        textButton="Unidade"
        textHeaderDialog="Adicionar Unidade"
        onSubmit={onSubmit}
        showAddDialog
        formDialog={
          <FormUnits
            register={register}
            control={control}
            errors={errors}
          />
        }
      />
      <TextField.Root radius="large" placeholder="Pesquisar unidades..." my="4">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <ScrollArea type="auto" scrollbars="vertical" style={{ maxHeight: "85vh" }}>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <Flex gap="2" align="center">
                  <span>Nome</span>
                  <CaretSortIcon onClick={handleFilter} className="cursor-pointer" />
                </Flex>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>CNPJ</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Criado em</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Atualizado em</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body style={{maxHeight: "50vh"}}>
            {units.length === 0 && (
              <Table.Row>
                <Table.Cell colSpan={7} className="text-center">
                  Nenhuma unidade encontrada
                </Table.Cell>
              </Table.Row>
            )}
            {units.map((unit, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Link
                    to={`/units/${unit.id}`}
                    style={{
                      color: 'var(--accent-9)',
                    }}
                  >
                    {unit.id}
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link
                    to={`/units/${unit.id}`}
                    style={{
                      color: 'var(--accent-9)',
                    }}
                  >
                    {unit.name}
                  </Link>
                </Table.Cell>
                <Table.Cell>{unit.cnpj}</Table.Cell>
                <Table.Cell>{unit.created_at}</Table.Cell>
                <Table.Cell>{unit.updated_at}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </ScrollArea>
    </Box>
  );
};

export default PageUnits;