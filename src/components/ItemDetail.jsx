import React from 'react';
import { Card, CardBody, CardFooter, Stack, Heading, ButtonGroup, Button, Text, Image, Divider } from '@chakra-ui/react';

const ItemDetail = ({ producto }) => {
    const {name, description, price, category, id } = producto;

    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
                    alt='remera generica description'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        <p>Descrip.: {description}</p>
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        <p> $ {price}</p>
                    </Text>
                    <Text>
                        <p>{category}</p>
                    </Text>
                    <Text>ID: {id}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Comprar ahora
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Agregar al carrito
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default ItemDetail;
