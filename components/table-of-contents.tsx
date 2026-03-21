"use client";

import { useEffect, useState, useCallback } from "react";

interface TocItem {
  id: string;
  text: string;
}

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const article = document.querySelector("article") || document.querySelector("main");
    if (!article) return;

    const headings = article.querySelectorAll("h2");
    const tocItems: TocItem[] = [];

    headings.forEach((heading, index) => {
      const text = heading.textContent?.trim() || "";
      if (!text) return;
      const id =
        heading.id ||
        text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "") ||
        `section-${index}`;
      if (!heading.id) heading.id = id;
      tocItems.push({ id, text });
    });

    setItems(tocItems);
  }, []);

  const handleScroll = useCallback(() => {
    if (items.length === 0) return;
    const scrollY = window.scrollY + 120;

    for (let i = items.length - 1; i >= 0; i--) {
      const el = document.getElementById(items[i].id);
      if (el && el.offsetTop <= scrollY) {
        setActiveId(items[i].id);
        return;
      }
    }
    setActiveId("");
  }, [items]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (items.length < 3) return null;

  return (
    <nav
      className="my-8 rounded-xl border p-5"
      style={{ borderColor: "#fef2f2", backgroundColor: "#fef2f2" + "33" }}
      aria-label="Table of contents"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#dc2626" }}>
          📑 In This Article
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: "#dc2626" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ol className="mt-3 space-y-1.5 list-none pl-0" role="list">
          {items.map((item, index) => (
            <li key={item.id} className="flex items-start gap-2">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center mt-0.5"
                style={{
                  backgroundColor: activeId === item.id ? "#dc2626" : "#fef2f2",
                  color: activeId === item.id ? "#fff" : "#b91c1c",
                }}
              >
                {index + 1}
              </span>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.replaceState(null, "", `#${item.id}`);
                  }
                }}
                className="text-sm leading-snug transition-colors duration-150 no-underline"
                style={{
                  color: activeId === item.id ? "#dc2626" : "#6b7280",
                  fontWeight: activeId === item.id ? 600 : 400,
                }}
                aria-current={activeId === item.id ? "location" : undefined}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
