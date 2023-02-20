import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

export default function Minicard({title, data, unity, icon}) {
  const bgCard = useColorModeValue("white", "gray.600");
  const colortext = useColorModeValue("#594B7E", "white");
  return (
    <>
      <Box w="18%" boxShadow={"md"} p="20px"               bg={bgCard}
               borderRadius={"20px"}>
        <Flex justifyContent={"space-between"} alignItems="center">
          <Flex direction="column">
            <Flex
              color="gray.400"
              fontFamily={"Kanit"}
              fontSize="xs"
              fontWeight="bold"
            >
              {title}
            </Flex>
            <Text fontFamily={"Kanit"} fontSize="xl" fontWeight="bold" color={colortext}>
              {data} {unity}
            </Text>
          </Flex>
          <Flex
            h="40px"
            w="40px"
            me="12px"
            borderRadius="10px"
            bgColor="#9FACE6"
            alignItems={"center"}
            justifyContent="center"
            alignContent={"center"}
          >
            <Icon color="white" as={icon} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
