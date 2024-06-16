import Modal from "../ui/Modal.tsx";
import { ComponentChildren } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { useUI } from "../../sdk/useUI.ts";
import Button from "../ui/Button.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  image: string;
  title: string;
  children?: ComponentChildren;
}

export default function ProductSaveModal({ image, title, children }: Props) {
  const { displayProductAdModal } = useUI();

  return (
    <>
      <button class="btn" onClick={() => (displayProductAdModal.value = true)}>
        <div>
          <span>Salvar</span>
        </div>
        {children}
      </button>

      <Modal
        loading="lazy"
        open={displayProductAdModal.value}
        onClose={() => (displayProductAdModal.value = false)}
      >
        <div class="modal-box max-w-7xl w-full flex gap-4">
          <Image src={image!} width={600} height={400} />
          <div class="w-full">
            <h3>{title}</h3>
            <div class="flex flex-col">
              <label id="obs" name="obs">
                Observações
              </label>
              <textarea
                style={{ resize: "none" }}
                id="obs"
                name="obs"
                type="text"
                rows={4}
                cols={50}
                class="border border-solid border-black p-4"
              />
            </div>
            <div class="flex justify-end items-center gap-4 mt-4">
              <Button onClick={() => (displayProductAdModal.value = false)}>
                Cancelar
              </Button>
              <Button>Publicar</Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
