import { Flex, Container, Heading, Box, Text } from "@radix-ui/themes";
import { Clapperboard } from "lucide-react";
import PillNav from "./PillNav";

export default function Navbar() {
  return (
    <nav>
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
      <Flex
        justify={"center"}
        align={"center"}
        className="bg-brand-black"
        p={"8px"}
      >
        <PillNav
          logo={<Clapperboard />}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          theme="dark"
          initialLoadAnimation={false}
        />
      </Flex>
    </nav>
  );
}
