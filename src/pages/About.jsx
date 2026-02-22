import { Container, Box, Heading, Text, Flex, Card } from "@radix-ui/themes";

import CallToAction from "../components/CallToAction";

export default function About() {
  return (
    <Box className=" text-[var(--color-brand-white)] min-h-screen">
      {/* Hero Section */}
      <Container size="3" className="py-24 text-center">
        <Flex direction="column" align="center" gap="4">
          {/* Logo */}
          <Box className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-brand-red)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
              <path d="m6.2 5.3 3.1 3.9" />
              <path d="m12.4 3.4 3.1 4" />
              <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
            </svg>
          </Box>

          <Heading size="9" className="text-[var(--color-brand-red)]">
            About Cineon
          </Heading>

          <Text size="4" className="max-w-2xl text-white/70">
            cineon is a modern movie rental platform built for film lovers. We
            bring trending, classic, and top-rated movies together in one
            seamless, cinematic experience.
          </Text>
        </Flex>
      </Container>

      {/* Mission Section */}
      <Container size="3" className="py-16">
        <Card className="bg-[var(--color-brand-space)] border border-white/10 p-10 rounded-2xl">
          <Flex direction="column" gap="4">
            <Heading size="6" className="text-[var(--color-brand-frost)]">
              Our Mission
            </Heading>
            <Text size="3" className="text-white/70 leading-relaxed">
              We believe discovering great films should feel as immersive as
              watching them. Cineon is designed to make browsing, renting, and
              exploring cinema intuitive, elegant, and visually engaging.
            </Text>
          </Flex>
        </Card>
      </Container>

      {/* Values Section */}
      <Container size="4" className="py-16">
        <Flex wrap="wrap" gap="6" justify="center">
          <Card className="bg-[var(--color-brand-space)] border border-white/10 p-8 rounded-2xl w-[320px]">
            <Heading size="5" className="text-[var(--color-brand-red)]">
              🎬 Passion for Cinema
            </Heading>
            <Text size="3" className="text-white/70 mt-3">
              We celebrate storytelling and visual artistry from around the
              world.
            </Text>
          </Card>

          <Card className="bg-[var(--color-brand-space)] border border-white/10 p-8 rounded-2xl w-[320px]">
            <Heading size="5" className="text-[var(--color-brand-red)]">
              🚀 Innovation
            </Heading>
            <Text size="3" className="text-white/70 mt-3">
              Built with modern technology to deliver smooth and beautiful
              experiences.
            </Text>
          </Card>

          <Card className="bg-[var(--color-brand-space)] border border-white/10 p-8 rounded-2xl w-[320px]">
            <Heading size="5" className="text-[var(--color-brand-red)]">
              ✨ Simplicity
            </Heading>
            <Text size="3" className="text-white/70 mt-3">
              Clean design, intuitive layout, and effortless discovery.
            </Text>
          </Card>
        </Flex>
      </Container>

      <CallToAction />
    </Box>
  );
}
