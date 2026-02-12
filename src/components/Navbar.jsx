import { Grid, Flex, Container, Heading, Box, Text } from "@radix-ui/themes";

export default function Navbar() {
  return (
    <nav>
      <Grid columns="1" rows="1fr, 2fr">
        <Container className="bg-brand-red relative" color="grey" p={"24px"}>
          <Flex justify="center" align="center">
            <Heading as="h1" size="9">
              Store
            </Heading>
          </Flex>
          <Box className="absolute right-4 top-1/2 -translate-y-1/2">
            <Flex gap="3">
              <Text>Icon 1</Text>
              <Text>Icon 2</Text>
            </Flex>
          </Box>
        </Container>
        <Container className="bg-brand-black">
          <Text>YEAH</Text>
        </Container>
      </Grid>
    </nav>
  );
}
