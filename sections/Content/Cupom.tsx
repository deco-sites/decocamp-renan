import Icon, { AvailableIcons } from "../../components/ui/Icon.tsx";

export interface Props {
  /**
   * @format icon-select
   * @options site/loaders/availableIcons.ts
   */
  icon: AvailableIcons;
  description?: string;
  code?: string;
}

export default function Benefits(props: Props) {
  const {
    code = "BEMVINDO",
    description = "Use o cupom e ganhe 10% de desconto na sua primeira compra",
    icon = "Discount",
  } = props;

  return (
    <>
      <div class="w-full container px-4 py-8 flex flex-col gap-8 lg:gap-10 lg:py-10 lg:px-0">
        <div class={`flex gap-4`}>
          <div class="flex-none">
            <Icon
              id={icon}
              class={"text-base-content"}
              width={36}
              height={36}
              strokeWidth={0.01}
              fill="currentColor"
            />
          </div>
          <div class="flex-auto flex flex-col gap-1 lg:gap-2">
            <div class={`text-base lg:text-xl leading-7 text-base-content`}>
              {code}
            </div>
            <p class={`text-sm leading-5 text-base-content`}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
