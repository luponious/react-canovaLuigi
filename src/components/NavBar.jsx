//APP.jsx {consigna
//component - NavBar.jsx
//Brand 
//li - btn - categorias clickeables
//component CartWidget con icon y una notificacion con numero X
//component ItemListContainer.jsx - prop saludo, container de mesg.
//libreria de estilo - no olvidar de poner icono del carrito}
import React from 'react'
import CartWidget from './CartWidget'
import {
    Menu, MenuButton, MenuList, MenuItem,
    Flex, Box, Spacer
} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
            <Flex>
                <Box p='4'>
                    <h2>RemStore</h2>
                </Box>

                <Spacer />

                <Box>            <Menu>
                    <MenuButton>
                        Ropas
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Verano</MenuItem>
                        <MenuItem>Invierno</MenuItem>
                        <MenuItem>Otoño</MenuItem>
                        <MenuItem>Primavera</MenuItem>
                    </MenuList>
                </Menu>
                </Box>

                <Spacer />

                <Box p='4'>
                    <CartWidget />
                </Box>
            </Flex>
        </>
    )
}

export default NavBar