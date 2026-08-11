function Divider({ className = "" }: { className?: string }) {
  return <hr className={`text-zinc-200 ${className} dark:text-zinc-800`} />;
}

export default Divider;
