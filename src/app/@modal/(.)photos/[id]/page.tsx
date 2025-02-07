import { Modal } from "./modal";
import FullPageImageView from "~/components/full-page-iage-view";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  if (photoId) {
    const idAsNumber = Number(photoId);
    if (isNaN(idAsNumber)) throw new Error("Invalid photo id: " + photoId);
    return (
      <Modal>
        <FullPageImageView id={idAsNumber} />
      </Modal>
    );
  }
  return <div>Picture not found</div>;
}
