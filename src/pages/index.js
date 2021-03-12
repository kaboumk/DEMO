import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { Container, Stack, Box, Heading, Text, Link } from "@chakra-ui/react";

const HomePage = () => {

  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          title
          excerpt
          uri
        }
      }
    }
  `)
  console.log(data);

  const { allWpPost } = data;

  return (
    <Container maxW="xl" centerContent>
      <Heading as={`h1`} m={5}>#100DaysOfGatsby</Heading>
      <Stack spacing={8}>
        { allWpPost.nodes.map( ({id, title, excerpt, uri}) => (
          <Box key={id} p={5} shadow="md" borderWidth="1px">
            <Heading as={`h2`}>{title}</Heading>
            <Text mt={4}>
              <span dangerouslySetInnerHTML={{__html: excerpt}}></span>
            </Text>
            <Link as={GatsbyLink} to={uri}>Read More >></Link>
          </Box>
        ))}
      </Stack>
    </Container>
  )
    
};

export default HomePage;