import type { Temperature } from "apps/weather/loaders/temperature.ts";
import BannerCarousel, {
  Props as BannerCarouselProps,
} from "../../components/ui/BannerCarousel.tsx";

export interface Props {
  banners?: BannerCarouselProps;
  temperature: Temperature | null;
  text: string;
}

function Lugar({ temperature, text, banners }: Props) {
  return (
    <div class="container flex flex-col gap-4">
      {banners && <BannerCarousel {...banners} />}
      <span class="uppercase">
        {`Temperatura: ${temperature?.celsius.toLocaleString("pt-BR")}`}
      </span>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

export default Lugar;
