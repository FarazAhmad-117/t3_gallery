import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <Image
              alt={image.name}
              src={image.url}
              width={400}
              height={400}
              className="h-full w-48 rounded-md border object-contain"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
