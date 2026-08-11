function Title({ text, brow }: { text: string; brow?: string }) {
  return (
    <>
      {brow && (
        <div className="text-xs font-bold tracking-widest text-blue-700 uppercase dark:text-blue-600">
          {brow}
        </div>
      )}
      <h1 className="text-4xl font-bold text-zinc-950 dark:text-zinc-50">
        {text}
      </h1>
    </>
  );
}

export default Title;
