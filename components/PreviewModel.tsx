import { usePreviewModel } from "@/hooks/usePreviewModel";
import { Modal } from "./Modal";
import { Gallery } from "./Gallery";
import { Info } from "./Info";
import { useCart } from "@/hooks/useCartStore";

export const PreviewModal = () => {
  const previewModel = usePreviewModel();

  const product = usePreviewModel((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal open={previewModel.isOpen} onClose={previewModel.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};
