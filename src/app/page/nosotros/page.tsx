import SeccionCabecera from '@/components/section/seccionCabecera';
import HistorySection from '@/components/section/historiaSeccion';
import VisionMissionSection from '@/components/section/VisionMissionSection';


export default function Nosotros() {

    return (
        <>
            <SeccionCabecera title="Nosotros"
                overlay={true} 
                backgroundImage="/ceviche.png" 
                overlayOpacity="bg-opacity-20" />
                <HistorySection />
                <VisionMissionSection />

        </>
    );
}