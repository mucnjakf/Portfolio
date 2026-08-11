function NavBrand({ className = "" }: { className?: string }) {
  return (
    <>
      {/*<a*/}
      {/*  href="#profile"*/}
      {/*  className="me-8 flex shrink-0 items-center gap-1 font-mono text-lg font-bold text-zinc-950 transition-opacity hover:opacity-70 dark:text-zinc-50"*/}
      {/*>*/}
      {/*  <span className="animate-pulse text-blue-900 dark:text-blue-700">*/}
      {/*    {">"}*/}
      {/*  </span>*/}
      {/*  <span>mucnjakf</span>*/}
      {/*  <span className="animate-pulse text-blue-900 dark:text-blue-700">*/}
      {/*    _*/}
      {/*  </span>*/}
      {/*</a>*/}

      {/*<a*/}
      {/*  href="#profile"*/}
      {/*  className="me-8 flex shrink-0 items-center font-mono text-lg font-bold text-zinc-950 transition-opacity hover:opacity-70 dark:text-zinc-50"*/}
      {/*>*/}
      {/*  <span className="animate-pulse text-blue-900 dark:text-blue-700">*/}
      {/*    {"<"}*/}
      {/*  </span>*/}
      {/*  <span className="mx-1">mucnjakf</span>*/}
      {/*  <span className="animate-pulse text-blue-900 dark:text-blue-700">*/}
      {/*    {"/>"}*/}
      {/*  </span>*/}
      {/*</a>*/}

      {/*<a*/}
      {/*  href="#profile"*/}
      {/*  className="me-8 flex shrink-0 items-center gap-1.5 font-mono text-lg font-bold text-zinc-950 transition-opacity hover:opacity-70 dark:text-zinc-50"*/}
      {/*>*/}
      {/*  <span className="animate-pulse text-blue-900 dark:text-blue-700">*/}
      {/*    {"{"}*/}
      {/*  </span>*/}
      {/*  <span>mucnjakf</span>*/}
      {/*  <span className="animate-pulse text-blue-900 dark:text-blue-700">*/}
      {/*    {"}"}*/}
      {/*  </span>*/}
      {/*</a>*/}

      {/*<a*/}
      {/*  href="#profile"*/}
      {/*  className="me-4 flex shrink-0 items-center text-zinc-950 transition-opacity dark:text-zinc-50"*/}
      {/*>*/}
      {/*  <svg*/}
      {/*    width="114"*/}
      {/*    height="36"*/}
      {/*    viewBox="0 0 114 36"*/}
      {/*    fill="none"*/}
      {/*    xmlns="http://www.w3.org/2000/svg"*/}
      {/*  >*/}
      {/*    <rect*/}
      {/*      x="1"*/}
      {/*      y="1"*/}
      {/*      width="112"*/}
      {/*      height="34"*/}
      {/*      rx="5"*/}
      {/*      strokeWidth="0.5"*/}
      {/*      className="fill-zinc-100 stroke-zinc-950 dark:fill-zinc-900 dark:stroke-zinc-50"*/}
      {/*    />*/}

      {/*    <circle cx="10" cy="6.5" r="2.5" fill="#FF5F56" />*/}
      {/*    <circle cx="18" cy="6.5" r="2.5" fill="#FFBD2E" />*/}
      {/*    <circle cx="26" cy="6.5" r="2.5" fill="#27C93F" />*/}

      {/*    <line*/}
      {/*      x1="1"*/}
      {/*      y1="12"*/}
      {/*      x2="113"*/}
      {/*      y2="12"*/}
      {/*      stroke="currentColor"*/}
      {/*      strokeWidth="1"*/}
      {/*      className="opacity-20"*/}
      {/*    />*/}

      {/*    <path*/}
      {/*      d="M8 20 L12 24 L8 28"*/}
      {/*      className="animate-pulse stroke-blue-900 dark:stroke-blue-700"*/}
      {/*      strokeWidth="1.5"*/}
      {/*      strokeLinecap="round"*/}
      {/*      strokeLinejoin="round"*/}
      {/*    />*/}

      {/*    <text*/}
      {/*      x="18"*/}
      {/*      y="28"*/}
      {/*      fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"*/}
      {/*      fontSize="14"*/}
      {/*      fontWeight="bold"*/}
      {/*      className="fill-zinc-900 dark:fill-zinc-300"*/}
      {/*    >*/}
      {/*      mucnjakf*/}
      {/*    </text>*/}

      {/*    <line*/}
      {/*      x1="82"*/}
      {/*      y1="29"*/}
      {/*      x2="88"*/}
      {/*      y2="29"*/}
      {/*      strokeWidth="1.5"*/}
      {/*      strokeLinecap="round"*/}
      {/*      className="animate-pulse stroke-blue-900 dark:stroke-blue-700"*/}
      {/*    />*/}
      {/*  </svg>*/}
      {/*</a>*/}

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
    </>
  );
}

export default NavBrand;
