function Subtitle({
  text,
  id,
  brow,
  description,
}: {
  text: string;
  id?: string;
  brow?: string;
  description?: string;
}) {
  return (
    <div id={id} className="flex scroll-mt-22 flex-col gap-2">
      {brow && (
        <div className="text-xs font-bold tracking-widest text-blue-700 uppercase dark:text-blue-600">
          {brow}
        </div>
      )}
      <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">
        {text}
      </h3>

      {description && (
        <h5 className="text-zinc-500 dark:text-zinc-400">{description}</h5>
      )}
    </div>
  );
}

export default Subtitle;
