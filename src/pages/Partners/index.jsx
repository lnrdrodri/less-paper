import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import { Box, Button, Dialog, Flex, Heading, Table, TextField } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import FormInput from "../../components/Form/Input";

import { useForm } from "react-hook-form";
import FormSelect from "../../components/Form/Select";
import { httpClient } from "../../app/services/httpClient";
import { useEffect } from "react";

const PagePartners = () => {
  const { register, handleSubmit } = useForm();

  const partners = [
    {
      id: 1,
      name: "Moreira Empreendimentos Mobiliarios",
      cnpj: "12.345.789/0001.89",
      city: "São Paulo",
      uf: "SP",
      createdAt: "28/06/2021",
      updatedAt: "26/05/2024",
    },
    {
      id: 2,
      name: "Translar Transportes LTDA",
      cnpj: "12.345.789/0001.89",
      city: "Belo Horizonte",
      uf: "MG",
      createdAt: "28/06/2021",
      updatedAt: "26/05/2024",
    },
    {
      id: 3,
      name: "Morais Soluções ME",
      cnpj: "12.345.789/0001.89",
      city: "Araçatuba",
      uf: "SP",
      createdAt: "28/06/2021",
      updatedAt: "26/05/2024",
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  function getPartners() {
    httpClient
      .get("/users/units")
      .then((response) => {
        console.log(response?.data);
      });
  }

  useEffect(() => {
    getPartners();
  }, []);

  return (
    <Box>
      <Flex justify="between">
        <Heading size={6}>Partners</Heading>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="solid" radius="large">
              <PlusIcon /> Partner
            </Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="800px">
            <Dialog.Title>Add Partner</Dialog.Title>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex direction="column" gap="2">
                <Flex gap="2">
                  <Box flexGrow="1">
                    <FormInput
                      label="Razão Social"
                      register={register}
                      register_name="name"
                      required 
                    />
                  </Box>
                  <Box flexGrow="1">
                    <FormInput
                      label="CNPJ"
                      register={register}
                      register_name="cnpj"
                      required 
                    />
                  </Box>
                </Flex>
                <FormInput
                  label="Rua"
                />
                <FormInput
                  label="Bairro"
                />
                <FormInput
                  label="Cidade"
                />
                <FormInput
                  label="CEP"
                />
                <FormInput
                  label="UF"
                />
                {/* AUTOCOMPLETE */}
                <TextField.Root radius="large" placeholder="Parceiro" />
                {/* SELECT */}
                <TextField.Root radius="large" placeholder="Regime Tributação"/>
                <FormSelect
                  label="Regime Tributação"
                  radius="large"
                  register={register}
                  register_name="regime"
                  required
                  items={[
                    { value: "1", text: "Simples Nacional" },
                    { value: "2", text: "Lucro Real" },
                    { value: "3", text: "Lucro Presumido" },
                  ]}
                />
                {/* CURRENCY */}
                <TextField.Root radius="large" placeholder="Faturamento"/>
              </Flex>
              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Button type="submit">Save</Button>
              </Flex>
            </form>
          </Dialog.Content>
        </Dialog.Root>
      </Flex>
      <TextField.Root radius="large" placeholder="Search partners…" my="4">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Partner</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>CNPJ</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>City</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>UF</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Updated At</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {partners.map((partner) => (
            <Table.Row key={partner.id}>
              <Table.Cell>
                <Link
                  to={`/partners/${partner.id}`}
                  style={{
                    color: 'var(--accent-9)',
                  }}
                >
                  {partner.id}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link
                  to={`/partners/${partner.id}`}
                  style={{
                    color: 'var(--accent-9)',
                  }}
                >
                  {partner.name}
                </Link>
              </Table.Cell>
              <Table.Cell>{partner.cnpj}</Table.Cell>
              <Table.Cell>{partner.city}</Table.Cell>
              <Table.Cell>{partner.uf}</Table.Cell>
              <Table.Cell>{partner.createdAt}</Table.Cell>
              <Table.Cell>{partner.updatedAt}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default PagePartners;