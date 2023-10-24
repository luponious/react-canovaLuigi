import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {  collection,  getDocs,  query,  where,
} from 'firebase/firestore';
import Case from './Extra/Case';
import Loader from './Extra/Loader';
import { db } from '../main';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState('Productos');
  const categoria = useParams().categoria;


  useEffect(() => {

    // colección de productos en la base de datos
    const prodData = collection(db, 'productos');

    // Query filtro de productos por categoría
    const categProd = categoria ? query(prodData, where('categoria', '==', categoria)) : prodData;


    // Obtener data de productos
    getDocs(categProd)
      .then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })

    if (categoria) {
      setTitulo(Case(categoria));
    } else {
      setTitulo('Productos');
    }


  }, [categoria, titulo])




  return (
    <>
      <div className='isolate bg-white px-6 py-24 lg:px-8 flex-col justify-center'>
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true">
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div>
          <div className=' mb-8 justify-center mx-auto max-w-2xl text-center'>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{titulo}</h1>
            <p className="mt-4 text-xl text-gray-500">
              Un cuerpo no puede cambiar su estado inicial de reposo o de movimiento recto con una velocidad constante si no se le aplica una o varias fuerzas externas.
            </p>
          </div>
          <section className='flex justify-center'>
            {
              productos <= 0
                ? <div className='mt-24 md:mt-52'>
                  <Loader />
                </div>
                : <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl'>
                  <ItemList productos={productos} titulo={titulo} />
                </div>
            }
          </section>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer