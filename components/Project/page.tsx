"use client";

import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";

const ProjectPage = () => {
  const projects: {
    id: number;
    name: string;
    source: string;
    description: string;
  }[] = [
    {
      id: 1,
      name: "Christmast Friend",
      source: "cFriend.svg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis exercitationem iure repellat eaque laudantium maxime laborum veritatis unde sed omnis",
    },
    {
      id: 2,
      name: "Catat Hanura",
      source: "hanura.svg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis exercitationem iure repellat eaque laudantium maxime laborum veritatis unde sed omnis",
    },
    {
      id: 3,
      name: "Kelontongers",
      source: "kelontongers.svg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis exercitationem iure repellat eaque laudantium maxime laborum veritatis unde sed omnis",
    },
    {
      id: 4,
      name: "Notaku App",
      source: "notaku.svg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis exercitationem iure repellat eaque laudantium maxime laborum veritatis unde sed omnis",
    },
    {
      id: 5,
      name: "Nursing Home",
      source: "nursingHome.svg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis exercitationem iure repellat eaque laudantium maxime laborum veritatis unde sed omnis",
    },
    {
      id: 6,
      name: "Optipro",
      source: "optipro.svg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis exercitationem iure repellat eaque laudantium maxime laborum veritatis unde sed omnis",
    },
    {
      id: 7,
      name: "Pokemon Catalogue",
      source: "pokemon.svg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis exercitationem iure repellat eaque laudantium maxime laborum veritatis unde sed omnis",
    },
    {
      id: 8,
      name: "Toko Ajun",
      source: "tokoAjun.svg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis exercitationem iure repellat eaque laudantium maxime laborum veritatis unde sed omnis",
    },
  ];

  return (
    <Box id="project" paddingTop="40">
      <Heading textAlign="center" color="orange.400">
        Projects
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        {projects.map((project) => (
          <Card maxW="sm" margin="4">
            <CardBody>
              <Image
                src={"/project/" + project.source}
                alt={project.name + "Image"}
                width="100%"
                height="300px"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{project.name}</Heading>
                <Text>{project.description}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default ProjectPage;
