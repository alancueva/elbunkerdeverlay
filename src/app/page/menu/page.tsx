import SeccionCabecera from '@/components/section/seccionCabecera';
import CevicheMenu from './ceviche';

export default function Menu() {

    return (
        <>
            <SeccionCabecera title="Menu"
                overlay={true} 
                backgroundImage="/ceviche.png" 
                overlayOpacity="bg-opacity-20" />
                <CevicheMenu />

        </>
    );
}