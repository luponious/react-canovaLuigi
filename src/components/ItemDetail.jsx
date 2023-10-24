import { Card, CardBody, CardFooter, Stack, Heading, ButtonGroup, Button, Text, Image, Divider } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { ItemCounter } from "./ItemCounter";


const ItemDetail = ({ producto }) => {

    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image src={producto.imag} alt={producto.description} borderRadius='lg' />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{producto.name}</Heading>
                        <Text pt='2' fontSize='sm'>
                            Descrip.: {producto.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $ {producto.price}
                        </Text>
                        <ItemCounter producto={producto} /> 
                        <Text pt='2' fontSize='sm'>
                            {producto.category}
                        </Text>
                        <Text>ID: {producto.id}</Text>
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
                        <Button as={Link} to='/productos' className="text-tiny self-start text-white bg-slate-500" radius="full" size="sm">
                            Volver
                        </Button>
                    </ButtonGroup>

                </CardFooter>
            </Card>
        </>
    )
}

export default ItemDetail;
