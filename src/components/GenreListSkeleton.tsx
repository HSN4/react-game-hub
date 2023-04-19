import {
  Card,
  Skeleton,
  CardBody,
  SkeletonText,
  List,
  ListItem,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <Skeleton height="34px" />
      <ListItem paddingY="5px"></ListItem>
    </List>
  );
};

export default GenreListSkeleton;
