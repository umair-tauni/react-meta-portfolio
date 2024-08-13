import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

// Implement the UI for the Card component according to the instructions.
// You should be able to implement the component with the elements imported above.
// Feel free to import other UI components from Chakra UI if you wish to.

const Card = ({ title, description, imageSrc }) => {
  console.log("Image source:", imageSrc);
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      spacing={0}
      align="stretch"
      backgroundColor="white"
    >
      <Box height="200px" width="100%">
        <Image 
          src={imageSrc}
          alt={title} 
          objectFit="cover"
          width="100%"
          height="100%"
          fallbackSrc="https://via.placeholder.com/300x200?text=Image+Not+Available"
        />
      </Box>
      <VStack padding={5} spacing={3} align="start">
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
        <HStack spacing={2}>
          <Text color="blue.600" fontWeight="semibold">
            Learn more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#3182CE" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
