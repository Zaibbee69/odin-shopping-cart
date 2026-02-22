import { Heading, Flex, Button } from "@radix-ui/themes";
import { Telescope } from "lucide-react";

export default function CallToAction() {
  return (
    <>
      <Heading as="h3" size="9" className="mt-6! mb-6!">
        <Flex align="center" justify="center" gap="2">
          Explore More
          <Telescope size={64} color="#faa80fff" />
        </Flex>
      </Heading>
      <Flex className="mt-6" align={"center"} justify={"center"} gap="2">
        <Button size="4" variant="soft">
          Rent a Movie
        </Button>
        <Button size="3" variant="surface" radius="full" color="orange">
          About us
        </Button>
      </Flex>
    </>
  );
}
