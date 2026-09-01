"use client";

import { useEffect, useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Food", href: "#food" },
  { label: "Lunch & Dinner", href: "#day-night" },
  { label: "Space", href: "#space" },
  { label: "Information", href: "#information" },
  { label: "Reservation", href: "#reservation" },
] as const;

const siteName = "dining Bliss";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHasScrolled(window.scrollY > 20);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`site-header${hasScrolled ? " is-scrolled" : ""}${isMenuOpen ? " is-menu-open" : ""}`}
    >
      <a
        className="site-name"
        href="#top"
        aria-label={`${siteName} ページ上部へ`}
        onClick={closeMenu}
      >
        {siteName}
      </a>
      <nav className="desktop-nav" aria-label="メインナビゲーション">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <button
        className="mobile-menu-button"
        type="button"
        aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className="mobile-nav"
        id="mobile-navigation"
        aria-label="モバイルナビゲーション"
        hidden={!isMenuOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
        ))}
      </nav>
    </header>
  );
}
