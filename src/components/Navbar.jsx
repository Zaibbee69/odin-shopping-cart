import CartIcon from "./CartIcon";

import { Flex, Container, Heading, Box, Text } from "@radix-ui/themes";
import Logo from "../assets/logo.svg";
import PillNav from "./PillNav";

export default function Navbar() {
  return (
    <nav>
      <Flex
        justify={"center"}
        align={"center"}
        className="bg-brand-space"
        p={"8px"}
      >
        <PillNav
          logo={Logo}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "Rent", href: "/rent" },
            { label: "About", href: "/about" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#9e0031ff"
          pillColor="#1c0221ff"
          hoveredPillTextColor="#fffeffff"
          pillTextColor="#fffeffff"
          theme="dark"
          initialLoadAnimation={false}
        />
      </Flex>
      <Container className="bg-brand-red relative" color="grey" p={"12px"}>
        <Flex justify="center" align="center">
          <Heading as="h1" size="4">
            Cineon
          </Heading>
        </Flex>
        <Box className="absolute right-4 top-1/2 -translate-y-1/2">
          <Flex gap="3">
            <Text>
              <CartIcon count={3} />
            </Text>
          </Flex>
        </Box>
      </Container>
    </nav>
  );
}
