//APP.jsx {consigna
//component - NavBar.jsx
//Brand 
//li - btn - categorias clickeables
//component CartWidget con icon y una notificacion con numero X
//component ItemListContainer.jsx - prop saludo, container de mesg.
//libreria de estilo}
import React from 'react'
import CartWidget from './CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
            <Menu>
                <MenuButton>
                    Productos
                </MenuButton>
                <MenuList>
                    <MenuItem minH='48px'>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='https://placekitten.com/100/100'
                            alt='Fluffybuns the destroyer'
                            mr='12px'
                        />
                        <span>Fluffybuns the Destroyer</span>
                    </MenuItem>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='https://placekitten.com/120/120'
                            alt='Simon the pensive'
                            mr='12px'
                        />
                        <span>Simon the pensive</span>
                    </MenuItem>
                </MenuList>
            </Menu>

            <CartWidget />

        </>
    )
}

export default NavBar