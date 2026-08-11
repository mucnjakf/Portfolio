function ProfileHighlight({
  text,
  description,
}: {
  text: string;
  description: string;
}) {
  return (
    <>
      <span className="text-3xl font-bold text-zinc-950 dark:text-zinc-300">
        {text}
      </span>
      <span className="text-sm text-zinc-500 dark:text-zinc-500">
        {description}
      </span>
    </>
  );
}

export default ProfileHighlight;
