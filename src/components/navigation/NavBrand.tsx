function NavBrand({ className = "" }: { className?: string }) {
  return (
    <a
      href="#profile"
      aria-label="mucnjakf, back to top"
      className={`flex shrink-0 items-center rounded-md transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-600 ${className}`}
    >
      <svg
        aria-hidden="true"
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
