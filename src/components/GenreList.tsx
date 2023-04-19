import {
  HStack,
  Spinner,
  Image,
  List,
  ListItem,
  Text,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image.url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  if (error) return null;

  return (
    <>
      <List>
        {isLoading &&
          skeleton.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
        ;
        {data.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="ghost"
                alignItems="center"
                width="100%"
                justifyContent="flex-start"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
