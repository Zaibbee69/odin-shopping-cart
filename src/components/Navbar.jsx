import CartIcon from "./CartIcon";

import { Flex, Container, Heading, Box, Text } from "@radix-ui/themes";
import Logo from "../assets/logo.svg";
import { ShoppingCart } from "lucide-react";
import PillNav from "./PillNav";

export default function Navbar() {
  return (
    <nav>
      <Container className="bg-brand-red relative" color="grey" p={"24px"}>
        <Flex justify="center" align="center">
          <Heading as="h1" size="9">
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
          baseColor="#457b9d"
          pillColor="#A8DADC"
          hoveredPillTextColor="#ffffffff"
          pillTextColor="#000000"
          theme="dark"
          initialLoadAnimation={false}
        />
      </Flex>
    </nav>
  );
}
