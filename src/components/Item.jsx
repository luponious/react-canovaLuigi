import { Card, CardBody, CardFooter, Stack, Heading, Button, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({producto }) => {
   return (
    <>
            <Card
            key={producto.id}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={producto.imag}
              alt={producto.description}
            />

            <Stack>
              <CardBody>
                <Heading size='md'>{producto.name}</Heading>

                <Text py='2'>
                  Categoria: {producto.category}
                </Text>
              </CardBody>

              <CardFooter>
              <Button variant='solid' colorScheme='blue'>
  <Link to={`/item/${producto.id}`}>Ver más</Link>
</Button>
    <Text py='1'>Valor ${producto.precio}</Text>
              </CardFooter>
            </Stack>
          </Card>
      </>
  )
}

export default Item;