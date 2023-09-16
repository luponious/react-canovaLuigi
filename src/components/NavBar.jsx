import React from 'react'
import CartWidget from './CartWidget'
import {
    Menu, MenuButton, MenuList, MenuItem,
    Flex, Box, Spacer,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Flex bgGradient="linear(to-r, #a72fc7, #ef9dff)">
                <Box p='4'>
                    <Link to={"/"}>
                        <h2>RemStore</h2>
                    </Link>
                </Box>

                <Spacer />

                <Box>            <Menu>
                    <MenuButton>
                        Categorias/Temporada
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to={`/categoria/${'Primavera'}`}>Primavera</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/categoria/${'Verano'}`}>Verano</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/categoria/${'Otono'}`}>Otoño</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/categoria/${'Invierno'}`}>Invierno</Link>
                        </MenuItem>
                        <MenuItem><Link to="/item/itemdetail">Todas las temporadas con descripcion :D</Link></MenuItem>
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