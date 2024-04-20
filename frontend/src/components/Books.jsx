import { Link } from "react-router-dom";
import {
  Box,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        my={4}
        p={4}
        cursor="pointer"
        width="600px"
        height="400px"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          w={{ base: "100%", sm: "auto" }}
          src={`http://localhost:8000/${image}`}
          alt={title}
        />
        <Stack flex={1} ml={{ base: 0, sm: 4 }} spacing={2}>
          <CardBody>
            <Heading size="md" mb={2}>
              {title} ({year})
            </Heading>
            <Text>{author}</Text>
            <Text>
              <span>Publisher: </span>
              {publisher}
            </Text>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Edit Book
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Link>
  );
}

// Extracted components for clarity
const CardBody = ({ children }) => <Stack spacing={2}>{children}</Stack>;

const CardFooter = ({ children }) => <Stack spacing={2}>{children}</Stack>;
