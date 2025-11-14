import CaberaPrincipal from "@/components/section/cabeceraPrincipal1";
import RestaurantFrase from "@/components/section/restaurantefrase";
import GaleriaPrincipal from "@/components/section/galeriaPrincipal";
import NuestraHistoriaCorto from "@/components/section/nuestrahistoritacortoseccion";


export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 ">
      <CaberaPrincipal/>
      <NuestraHistoriaCorto/>
      <GaleriaPrincipal/>
      <RestaurantFrase/>
    </div>
  );
}
