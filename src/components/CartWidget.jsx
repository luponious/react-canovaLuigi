import React from 'react'
import {IconButton,} from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <>
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
        <p>11</p>
        </>
    )
}

export default CartWidget