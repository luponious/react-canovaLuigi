import React, { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardFooter, Stack, Heading, ButtonGroup, Button, Text, Image, Divider } from '@chakra-ui/react';
import Loader from './Loader';

const ItemDetail = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const itemDoc = doc(db, 'productos', id);
                const itemSnapshot = await getDoc(itemDoc);

                if (itemSnapshot.exists()) {
                    const itemData = itemSnapshot.data();
                    setProducto(itemData);
                } else {

                    setProducto(null);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {producto ? (
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
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    ) : (
                        <p>Item not found</p>
                    )}
                </>
            )}
        </>
    );
};

export default ItemDetail;
