import Image from "apps/website/components/Image.tsx";
import Button from "../../components/ui/Button.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../../components/ui/Icon.tsx";

export interface Props {
  product: {
    title?: string;
    description?: string;
    price?: string;
    imageSrc?: ImageWidget;
  };
  adDescription?: string;
  vertical?: boolean;
}

export function LoadingFallback() {
  return (
    <ProductAd
      product={{
        title: "loading",
        imageSrc:
          "https://t4.ftcdn.net/jpg/03/16/15/47/360_F_316154790_pnHGQkERUumMbzAjkgQuRvDgzjAHkFaQ.jpg",
      }}
      adDescription="loading"
    />
  );
}

export function ErrorFallback() {
  return (
    <>
      <ProductAd
        product={{ title: "Lasanha", imageSrc: "https://static.itdg.com.br/images/360-240/ec2a5e38702c60bf1ace0b5f1c8e9415/shutterstock-739787011.jpg" }}
        adDescription={"Lasanha é um prato típico da culinária italiana, que consiste em camadas de massa intercaladas com molho de carne, molho branco e queijo."}
      />
      <a href="/culturas">
        <Button>para saber mais</Button>
      </a>
    </>
  );
}

export default function ProductAd(props: Props) {
  const { product, adDescription } = props;
  const description = adDescription ?? product.description;

  return (
    <div
      class={`w-full container px-4 py-8 flex flex-col gap-8 lg:gap-10 lg:py-10 lg:px-0 lg:flex-row`}
    >
      <div class="max-w-full overflow-hidden relative">
        <div class="relative">
          <Image
            src={product.imageSrc!}
            height={400}
            width={600}
            class="rounded-2xl mx-auto hover:scale-150 transition-all"
          />
          <div class="lg:hidden absolute top-2 right-2">
            <Icon
              id="Heart"
              size={24}
              class="fill-red-300 hover:fill-red-700"
              strokeWidth={0.01}
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-1 justify-between m-4 gap-16 lg:gap-0">
        <div class="flex justify-center lg:items-center lg:justify-between">
          <div class="gap-4 lg:gap-8">
            <h3 class="text-center lg:text-left">{product.title}</h3>
            <p class="text-center lg:text-left">{description}</p>
          </div>
          <div class="hidden lg:block self-end rounded-full">
            <Icon
              id="Heart"
              size={24}
              class="fill-red-300 hover:fill-red-700"
              strokeWidth={0.01}
            />
          </div>
        </div>

        <div class="flex flex-col justify-center items-center lg:items-end lg:justify-end gap-4 lg:gap-8">
          <span>R$ {product.price ?? 0}</span>
          <div class="flex flex-col lg:flex-row items-center gap-4">
            <Button>Mais Detalhes</Button>
            <Button>Comprar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}