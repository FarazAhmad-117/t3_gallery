import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://41ulc68tg2.ufs.sh/f/2i3w8zYcIk4q2gBDGFYcIk4qoUX9YPjm8Hly6QOarSAM7NdV",
  "https://41ulc68tg2.ufs.sh/f/2i3w8zYcIk4qcEqMi2lXv5kHjo82QTlJN6SMyOtC0Wp3wrbi",
  "https://41ulc68tg2.ufs.sh/f/2i3w8zYcIk4qCMQH2byvZlkOB29FIGDtMxEKwAbsfuX5nJHj",
  "https://41ulc68tg2.ufs.sh/f/2i3w8zYcIk4q3k7wpgUCE3MaxSlAXikouFHcYbZeO4dqyGUQ",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={image.id + "-" + idx} className="w-48">
            <Image
              alt={"Some Image"}
              src={image.url}
              width={400}
              height={400}
              className="h-full w-48 rounded-md border object-contain"
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {posts.map((post) => (
          <h2 key={post.id} className="text-lg">
            {post.name}
          </h2>
        ))}
      </div>
    </main>
  );
}
