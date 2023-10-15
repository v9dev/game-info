import { List, ListItem, Skeleton } from "@chakra-ui/react";

const ListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <Skeleton height="32px" marginY={2} width="168px" />
      </ListItem>
    </List>
  );
};

export default ListSkeleton;
