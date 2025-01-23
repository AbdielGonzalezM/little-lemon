import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';

export default function SuccessScreen({ onGoHome }) {
  return (
    <Box
      px={{ base: 4, md: 16 }}
      py={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Image
        src="https://cdn-icons-png.flaticon.com/512/14929/14929458.png"
        alt="Reserva exitosa"
        width={160}
        height={170}
        mb={4}
      />
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        ¡Felicidades!
      </Text>
      <Text mb={6}>
        Se ha agendado tu visita exitosamente. <br />
        Recuerda llegar con al menos 15 minutos de anticipación.
      </Text>
      <Button colorScheme="green" onClick={onGoHome}>
        Regresar a Inicio
      </Button>
    </Box>
  );
}
