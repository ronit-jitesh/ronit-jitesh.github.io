export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-10 bg-[color:var(--bg-elev)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-display text-xl">Ronit Jitesh</div>
          <div className="text-xs text-[color:var(--ink-soft)] mt-1">
            Built in Edinburgh · {new Date().getFullYear()}
          </div>
        </div>
        <div className="flex items-center gap-5 text-xs font-mono uppercase tracking-[0.12em] text-[color:var(--ink-soft)]">
          <a href="#top" className="hover:text-[color:var(--ink)]">
            Top
          </a>
          <a href="#work" className="hover:text-[color:var(--ink)]">
            Work
          </a>
          <a href="#contact" className="hover:text-[color:var(--ink)]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
