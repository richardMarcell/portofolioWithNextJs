"use client";

import {
  Box,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Flex,
  Avatar,
  Image,
  Card,
  Stack,
  CardBody,
  Text,
} from "@chakra-ui/react";

const SkillPage = () => {
  const skills: {
    id: number;
    name: string;
    source: string;
    description: string;
  }[] = [
    {
      id: 1,
      name: "HTML5",
      source: "html.svg",
      description:
        "I am proficient in HTML5, the latest version of the Hypertext Markup Language. I can create the structure of a webpage, including headings, paragraphs, lists, and various elements, to ensure proper content presentation and accessibility.",
    },
    {
      id: 2,
      name: "CSS3",
      source: "css.svg",
      description:
        "CSS3 is my expertise. I have hands-on experience in styling web pages using modern CSS features like Flexbox, Grid, and animations. I can design visually appealing and responsive user interfaces.",
    },
    {
      id: 3,
      name: "Javascript",
      source: "javascript.svg",
      description:
        "I have a strong command of JavaScript, the programming language of the web. I can build interactive and dynamic website components, handle events, and interact with APIs to create a seamless user experience.",
    },
    {
      id: 4,
      name: "PHP 8",
      source: "php.svg",
      description:
        "I am skilled in PHP 8, a powerful server-side scripting language. I can develop web applications, handle form data, and work with databases to create dynamic and feature-rich websites.",
    },
    {
      id: 5,
      name: "MySQL",
      source: "mysql.svg",
      description:
        "MySQL is one of my core competencies. I can design and manage relational databases, write complex queries, and ensure efficient data retrieval and storage for web applications.",
    },
    {
      id: 6,
      name: "React Js",
      source: "react.svg",
      description:
        "With expertise in React.js, I can build interactive and reusable user interface components. I can efficiently manage the state of applications and handle complex UI logic.",
    },
    {
      id: 7,
      name: "Laravel 10",
      source: "laravel.svg",
      description:
        "I am experienced in Laravel 10, a popular PHP framework. I can develop robust and scalable web applications following best practices. I am proficient in routing, middleware, and database migrations.",
    },
  ];

  return (
    <Box paddingTop="40" id="skill" paddingX="10">
      <Heading textAlign="center" color="purple.400" marginBottom="5">
        Skill
      </Heading>
      <Flex marginTop="5" justifyContent="center" flexDir="column">
        {skills.map((skill) => (
          <Card
            my="5"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Flex
              justifyContent="center"
              paddingTop={{ xl: "0", lg: "0", md: "0", sm: "0", base: "10" }}
            >
              <Image
                objectFit="cover"
                maxW={{
                  xl: "200px",
                  lg: "200px",
                  md: "200px",
                  sm: "200px",
                  base: "100px",
                }}
                src={"/" + skill.source}
                alt="Caffe Latte"
              />
            </Flex>

            <Stack>
              <CardBody>
                <Heading size="md">{skill.name}</Heading>

                <Text py="2">{skill.description}</Text>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default SkillPage;
