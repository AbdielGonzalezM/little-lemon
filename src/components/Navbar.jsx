import React from 'react';
import { Box, Flex, IconButton, Select, Input, useDisclosure, InputGroup, InputLeftElement } from '@chakra-ui/react';
// Puedes reemplazar el ícono con uno de Chakra o un SVG
import { HamburgerIcon } from '@chakra-ui/icons';
import { MapPin } from 'lucide-react';
import { base } from 'framer-motion/client';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" px={4} py={2}>
      <Flex gap={2} flexDirection={{ base: 'column', md: 'row' }} >
        <Flex  display={{ base: 'flex' }} gap={4}>
          <Select placeholder="Ene 22" width="60">
            <option value="ene22">Ene 22</option>
            <option value="ene23">Ene 23</option>
            {/* etc... */}
          </Select>
            <Select placeholder="20:00" width={{ md: '60', base: 'full' }}>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                {/* etc... */}
            </Select>
            
        </Flex>
          <Flex flexDirection={{ md: 'row', base: 'row' }} gap={2}>
            <Select placeholder="2 personas" width="60" />
            <InputGroup>
                <InputLeftElement className='inputLeft' pointerEvents={'none'}>
                    <MapPin size={16} />
                </InputLeftElement>
                <Input placeholder={`Monterrey, Nuevo León`} width={ { base: 'full', md: '600'  } } />
            </InputGroup>
          </Flex>
      </Flex>
    </Box>
  );
}
