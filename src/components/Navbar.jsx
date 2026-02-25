import CartIcon from "./CartIcon";

import {
  Flex,
  Container,
  Heading,
  Box,
  Text,
  Popover,
  Grid,
  Inset,
  Button,
  IconButton,
} from "@radix-ui/themes";
import Logo from "../assets/logo.svg";
import PillNav from "./PillNav";

export default function Navbar({ items }) {
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
            <Popover.Root>
              <Popover.Trigger>
                <IconButton variant="soft">
                  <CartIcon count={items.length} />
                </IconButton>
              </Popover.Trigger>
              <Popover.Content width="360px">
                {items.length === 0 ? (
                  <Text size="2" color="gray">
                    Your cart is empty
                  </Text>
                ) : (
                  <Flex direction="column" gap="3">
                    {items.map((movie) => (
                      <Grid
                        key={movie.id}
                        columns="130px 1fr"
                        gap="3"
                        align="center"
                      >
                        {/* Movie Image */}
                        <Inset side="left" pr="current">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={movie.title}
                            style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                              borderRadius: "8px",
                            }}
                          />
                        </Inset>

                        {/* Movie Info */}
                        <Flex direction="column" justify="between">
                          <Heading size="2">{movie.title}</Heading>

                          <Text size="2" weight="bold">
                            ${movie.price}
                          </Text>
                        </Flex>
                      </Grid>
                    ))}
                  </Flex>
                )}
              </Popover.Content>
            </Popover.Root>
          </Flex>
        </Box>
      </Container>
    </nav>
  );
}
