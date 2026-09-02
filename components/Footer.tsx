import { site } from "@/data/site";
import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand" data-reveal>
        <a className="footer-name" href="#top" aria-label={`${site.name} ページ上部へ`}>
          <Wordmark />
        </a>
        <p>タパスバー・レストラン / 弘前</p>
      </div>
      <a href={site.links.instagram} target="_blank" rel="noreferrer" data-reveal data-reveal-delay="1">Instagram</a>
      <p className="sample-label" data-reveal data-reveal-delay="2">営業提案用サンプル</p>
    </footer>
  );
}
