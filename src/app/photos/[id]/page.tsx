export const dynamicParams = false;

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log(id);
  if (id) {
    return <p>Photo: {id}</p>;
  }
  return <div className="card">Photo</div>;
}
