import { Menu, MenuButton, MenuList, MenuItem, Link } from "@chakra-ui/react";

const ProdsNavBarBtn = () => {
    return (
        <Menu>
            <MenuButton as="a">
                Temporada
            </MenuButton>
            <MenuList>
                <MenuItem as={Link} to='/productos/Primavera'>
                    Primavera
                </MenuItem>
                <MenuItem as={Link} to='/productos/Verano'>
                    Verano
                </MenuItem>
                <MenuItem as={Link} to='/productos/Otono'>
                    Otoño
                </MenuItem>
                <MenuItem as={Link} to='/productos/Invierno'>
                    Invierno
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default ProdsNavBarBtn;
