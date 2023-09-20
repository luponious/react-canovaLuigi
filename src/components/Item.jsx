import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Button, Text, Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ name, id, description, category, price }) => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
                alt='Remera'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>{name}</Heading>

                    <Text py='2'>
                    <p>Categoria: {category}</p>
                    </Text>

                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                    <Link to={`/item/${id}`}>Ver/Descripcion</Link>
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default Item