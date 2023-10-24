import { Fragment } from 'react';
import {
  Modal,  ModalOverlay,  ModalContent,  ModalHeader,  ModalCloseButton,  ModalBody,  ModalFooter,  Button,} from '@chakra-ui/react';
import Carrito from '../Cart/Cart';

export default function HeadlessSlideOver({ open, setOpen }) {
  return (
    <Fragment>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent maxW="2xl">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Carrito setOpen={setOpen} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
