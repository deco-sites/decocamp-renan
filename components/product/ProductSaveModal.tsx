import Modal from "../ui/Modal.tsx";
import { useUI } from "../../sdk/useUI.ts";
import Button from "../ui/Button.tsx";
import Image from "apps/website/components/Image.tsx";
import { invoke } from "../../runtime.ts";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

export interface Props {
  productId: number;
  image: string;
  title: string;
  children?: ComponentChildren;
}

export default function ProductSaveModal({
  productId,
  image,
  title,
  children,
}: Props) {
  const { displayProductAdModal } = useUI();
  const comment = useSignal<string>("");

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    const response = await invoke.site.actions.addProductComment({
      productId,
      comment: comment.value,
    });
  };

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
        <form
          onSubmit={handleSubmit}
          class="modal-box max-w-7xl w-full flex gap-4"
        >
          <Image src={image!} width={600} height={400} />
          <div class="w-full">
            <h3>{title}</h3>
            <div class="flex flex-col">
              <label id="comment" name="comment">
                Observações
              </label>
              <textarea
                onInput={(event) => {
                  comment.value = (event.target as HTMLInputElement).value;
                }}
                style={{ resize: "none" }}
                id="comment"
                value={comment.value}
                name="comment"
                type="text"
                required
                rows={4}
                cols={50}
                class="border border-solid border-black p-4"
              />
            </div>
            <div class="flex justify-end items-center gap-4 mt-4">
              <Button onClick={() => (displayProductAdModal.value = false)}>
                Cancelar
              </Button>
              <Button type="submit">Publicar</Button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
