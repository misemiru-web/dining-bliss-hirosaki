import { site } from "@/data/site";

const navigation = [
  { label: "Food", href: "#food" },
  { label: "Space", href: "#space" },
  { label: "Information", href: "#information" },
  { label: "Reservation", href: "#reservation" },
] as const;

export function Header() {
  return (
    <header className="site-header">
      <a className="site-name" href="#top" aria-label={`${site.name} ページ上部へ`}>
        {site.name}
      </a>
      <nav className="desktop-nav" aria-label="メインナビゲーション">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <details className="mobile-menu">
        <summary aria-label="メニューを開く">Menu</summary>
        <nav aria-label="モバイルナビゲーション">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </details>
    </header>
  );
}
