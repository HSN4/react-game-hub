import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image.url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <PlatformIconList
          platform={game.parent_platforms.map((p) => p.platform)}
        />
        <HStack justifyContent={"space-between"}>
          <Heading fontSize="22px">{game.name}</Heading>
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
