import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge color={color} fontSize="1rem" paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
