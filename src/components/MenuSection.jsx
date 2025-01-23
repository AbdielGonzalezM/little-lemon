import React from 'react';
import { Box, Text, Image, Button, SimpleGrid, Flex } from '@chakra-ui/react';

export default function MenuSection() {
  return (
    <Box px={{ base: 4, md: 16 }} py={8} bg="gray.50">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {/* Tarjeta 1 */}
        <Box bg="white" boxShadow="md" p={4} borderRadius="md">
          <Flex flexDirection={{ base: 'column', md: 'column' }} mb={4}>
            <Text fontSize="3xl" fontWeight={'bold'} color="yellow.600">
              Tacos
            </Text>
            <Text fontSize={'2xl'} fontWeight={'semibold'} style={{ color: 'gray' }}>Mediterraneo</Text>
          </Flex>
          <Text mb={4}>
            We are a family owned Mediterranean restaurant, focused on traditional recipes
            served with a modern twist.
          </Text>
          <Image
            src="https://proveedorderestauranteselsalvador.wordpress.com/wp-content/uploads/2020/09/cortes-de-carne.jpg?w=688"
            alt="Cortes Italianos"
            mb={4}
            width={147}
            height={152}
            borderRadius={'md'}
          />
          <Button colorScheme="yellow">Ver menú</Button>
        </Box>

        {/* Tarjeta 2 */}
        <Box bg="white" boxShadow="md" p={4} borderRadius="md">
          <Flex flexDirection={{ base: 'column', md: 'column' }} mb={4}>
            <Text fontSize="3xl" fontWeight={'bold'} color="yellow.600">
              Cortes de carne 
            </Text>
            <Text fontSize={'2xl'} fontWeight={'semibold'} style={{ color: 'gray' }}>Italian</Text>
          </Flex>
          <Text mb={4}>
            We are a family owned Mediterranean restaurant, focused on traditional recipes
            served with a modern twist.
          </Text>
          <Image
            src="https://proveedorderestauranteselsalvador.wordpress.com/wp-content/uploads/2020/09/cortes-de-carne.jpg?w=688"
            alt="Cortes Italianos"
            mb={4}
            width={147}
            height={152}
            borderRadius={'md'}
          />
          <Button colorScheme="yellow">Ver menú</Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
