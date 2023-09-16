import React from 'react'
import CartWidget from './CartWidget'
import {
    Menu, MenuButton, MenuList, MenuItem,
    Flex, Box, Spacer, IconButton,
} from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa';
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
                        Ropas
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                        <Link to={`/categoria/${'Verano'}`}>Verano</Link>
                        </MenuItem>
                        
                        <MenuItem>
                        <Link to={`/categoria/${'Invierno'}`}>Invierno</Link>
                        </MenuItem>
                        <MenuItem>
                        <Link to={`/categoria/${'Otono'}`}>Otoño</Link>
                        </MenuItem>
                        <MenuItem>
                        <Link to={`/categoria/${'Primavera'}`}>Primavera</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
                </Box>

                <Spacer />

                <Box p='4'>
                    <Link to={"/cart"}>
                        <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='teal'
                            aria-label='Done'
                            fontSize='20px'
                            icon={<FaShoppingCart />}
                        />
                    </Link>
                    <CartWidget />
                </Box>
            </Flex>
        </>
    )
}

export default NavBar