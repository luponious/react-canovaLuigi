import React, { useState } from 'react';
import {  Box,  Flex,  Spacer,  Heading,  Button,  Link,  Menu,  MenuButton,  MenuList,  MenuItem,  Container,} from '@chakra-ui/react';
import CartWidget from '../cart/CartWidget';
//import ProdsNavBarBtn from './ProdsNavBarBtn';
import HeadlessSlideOver from './HeadlessSlideOver';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: 'Productos', path: '/productos' },
  ];

  return (
    <Flex bgGradient="linear(to-r, #a72fc7, #ef9dff)" alignItems="center">
      <Container maxW="container.xl">
        <Flex>
          <Box p="4">
            <Link as={RouterLink} to="/">
              <Heading as="h2" size="md">
                RemStore
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <MenuButton as={Button} colorScheme="purple">
                Temporada
              </MenuButton>
              <MenuList>
                <MenuItem as={RouterLink} to="/productos/Primavera">
                  Primavera
                </MenuItem>
                <MenuItem as={RouterLink} to="/productos/Verano">
                  Verano
                </MenuItem>
                <MenuItem as={RouterLink} to="/productos/Otono">
                  Otoño
                </MenuItem>
                <MenuItem as={RouterLink} to="/productos/Invierno">
                  Invierno
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          {/* <Box p="4">
            <ProdsNavBarBtn />
          </Box> */}
          <Spacer />
          <Box p="4" onClick={() => setOpen(true)}>
            <CartWidget />
          </Box>
        </Flex>
      </Container>
      <HeadlessSlideOver open={open} setOpen={setOpen} title="Cart Details" />
    </Flex>
  );
};

export default NavBar;
