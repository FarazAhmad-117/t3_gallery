import FullPageImageView from "~/components/full-page-image-view";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  if (photoId) {
    const idAsNumber = Number(photoId);
    if (isNaN(idAsNumber)) throw new Error("Invalid photo id: " + photoId);
    return <FullPageImageView id={idAsNumber} />;
  }
  return <div>Picture not found</div>;
}
