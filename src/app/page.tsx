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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
