function Paragraph({ text }: { text: string }) {
  return (
    <p className="leading-7 font-medium text-zinc-500 dark:text-zinc-400">
      {text}
    </p>
  );
}

export default Paragraph;
