import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />

      <ModalContent maxW="900px" maxH="600px" bgColor="pGray.900">
        <ModalBody p={0}>
          <Image src={imgUrl} maxW="900px" maxH="600px" m="auto" />
        </ModalBody>

        <ModalFooter
          bgColor="pGray.800"
          py="2"
          px="2.5"
          borderBottomRadius="6px"
        >
          <Link href={imgUrl} isExternal fontSize="sm" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
