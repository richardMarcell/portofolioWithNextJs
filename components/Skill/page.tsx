"use client";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
} from "@chakra-ui/react";

const SkillPage = () => {
  return (
    <Box marginTop="40" height="1000px">
      <Heading textAlign="center" color="purple.400" marginBottom="5">
        Skill
      </Heading>
      <Tabs isFitted variant="enclosed-colored">
        <TabList mb="1em">
          <Tab fontWeight="bold">Front End</Tab>
          <Tab fontWeight="bold">Back End</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SkillPage;
