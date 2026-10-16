function Subtitle({
  text,
  id,
  brow,
  description,
  as: Heading = "h2",
}: {
  text: string;
  id?: string;
  brow?: string;
  description?: string;
  as?: "h2" | "h3";
}) {
  return (
    <div id={id} className="flex scroll-mt-22 flex-col gap-2">
      {brow && (
        <div className="text-xs font-bold tracking-widest text-blue-700 uppercase dark:text-blue-600">
          {brow}
        </div>
      )}
      <Heading className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">
        {text}
      </Heading>

      {description && (
        <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
      )}
    </div>
  );
}

export default Subtitle;
