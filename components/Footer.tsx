import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><a className="footer-name" href="#top">{site.name}</a><p>タパスバー・レストラン / 弘前</p></div>
      <a href={site.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
      <p className="sample-label">営業提案用サンプル</p>
    </footer>
  );
}
