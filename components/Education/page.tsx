"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const EducationPage = () => {
  const educationBackground: { title: string; periode: string }[] = [
    {
      title: "SMP Kristen Immanuel 2 Sungai Raya",
      periode: "2017 - 2019",
    },
    {
      title: "SMK Kristen Immanuel 2 Sungai Raya",
      periode: "2019 - 2022",
    },
    {
      title: "Institut Teknologi dan Bisnis Sabda Setia",
      periode: "2022 - 2026",
    },
  ];

  const { activeStep } = useSteps({
    index: 2,
    count: educationBackground.length,
  });
  return (
    <Flex
      id="education"
      marginTop="10"
      paddingTop="40"
      flexDir={{
        xl: "row",
        lg: "row",
        md: "column-reverse",
        sm: "column-reverse",
        base: "column-reverse",
      }}
      justifyContent={{
        xl: "space-around",
        lg: "space-around",
        md: "normal",
        sm: "normal",
        base: "normal",
      }}
      alignItems={{
        xl: "center",
        lg: "center",
        md: "center",
        sm: "center",
        base: "center",
      }}
      paddingX={{ xl: "20", lg: "20", md: "20", sm: "0", base: "0" }}
    >
      <Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
        {educationBackground.map((education, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{education.title}</StepTitle>
              <StepDescription>{education.periode}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Heading
        textAlign="center"
        marginBottom={{ md: "5", sm: "5", base: "5" }}
        color="orange.400"
        fontSize={{ xl: "4xl", lg: "3xl", md: "4xl", sm: "2xl", base: "2xl" }}
      >
        Education Background
      </Heading>
    </Flex>
  );
};

export default EducationPage;
