import SeccionCabecera from '@/components/section/seccionCabecera';
import Contactos from "./contacto";

export default function Contactospage() {
  return (
    <>
      <SeccionCabecera title="Contacto"
        overlay={true}
        backgroundImage="/ceviche.png"
        overlayOpacity="bg-opacity-20" />
      <Contactos />
    </>
  );
}



