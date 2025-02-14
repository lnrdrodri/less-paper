import { Flex, Heading } from "@radix-ui/themes";
import EntityAddDialog from "./AddDialog";

const EntityHeader = ({
  textHeader,
  textButton,
  textHeaderDialog,
  formDialog,
  onSubmit,
  showAddDialog,
}) => {
  return (
    <Flex justify="between">
      <Heading size={6}>{textHeader}</Heading>
      {showAddDialog && (
        <EntityAddDialog
          textButton={textButton}
          textHeaderDialog={textHeaderDialog}
          form={formDialog}
          onSubmit={onSubmit}
        />
      )}
    </Flex>
  );
};

export default EntityHeader;