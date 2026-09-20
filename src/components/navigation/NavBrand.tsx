function NavBrand({ className = "" }: { className?: string }) {
  return (
    <a
      href="#profile"
      className={`flex shrink-0 items-center transition-opacity hover:opacity-70 ${className}`}
    >
      <svg
        width="100"
        height="28"
        viewBox="0 0 100 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="21"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="-0.5"
          className="fill-zinc-950 dark:fill-zinc-50"
        >
          mucnjakf
          <tspan className="fill-blue-700 dark:fill-blue-500">.</tspan>
        </text>
      </svg>
    </a>
  );
}

export default NavBrand;
