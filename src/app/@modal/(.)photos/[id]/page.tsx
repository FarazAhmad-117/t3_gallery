export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  if (photoId) {
    return <p>Photo: {photoId}</p>;
  }
  return <div>Just Modal</div>;
}
