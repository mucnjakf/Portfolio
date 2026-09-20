function StudioWordmark({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-baseline gap-[0.26em] font-archivo font-medium tracking-[-0.035em] uppercase ${className}`}
    >
      {text}
      <span className="h-[0.2em] w-[0.2em] flex-none bg-current" />
    </span>
  );
}

export default StudioWordmark;
