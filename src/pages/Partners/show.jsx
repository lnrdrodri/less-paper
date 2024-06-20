import { MagnifyingGlassIcon, PlusIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { Box, Button, Dialog, Flex, Heading, Table, TextField } from "@radix-ui/themes";
import { Link, useParams } from "react-router-dom";

const PagePartnersShow = () => {
  const { id } = useParams();
  console.log(id);
  
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

  const partner = partners.find((partner) => partner.id === Number(id));

  return (
    <Box>
      <Flex align="center" gap="4">
        <Link to="/partners">
          <ArrowLeftIcon width="22" height="22" />
        </Link>
        <Heading size={6}>Partners</Heading>
      </Flex>
      <Flex mt="4">
        <Heading size={6}>{partner.name}</Heading>
      </Flex>
    </Box>
  );
};

export default PagePartnersShow;