import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Card, CardBody, CardFooter, Stack, Heading, Button, Text, Image } from '@chakra-ui/react';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Item = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const itemCollection = collection(db, 'productos');
        const snapshot = await getDocs(itemCollection);
        const docs = snapshot.docs.map((doc) => doc.data());
        setProductos(docs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(productos);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        productos.map((p) => (
          <Card
            key={p.id}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={p.imag}
              alt={p.description}
            />

            <Stack>
              <CardBody>
                <Heading size='md'>{p.name}</Heading>

                <Text py='2'>
                  Categoria: {p.category}
                </Text>
              </CardBody>

              <CardFooter>
              <Button variant='solid' colorScheme='blue'>
  <Link to={`/item/${p.id}`}>Ver/Descripcion</Link>
</Button>

              </CardFooter>
            </Stack>
          </Card>
        ))
      )}
    </div>
  );
};

export default Item;