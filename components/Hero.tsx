import Image from "next/image";
import { ArrowIcon } from "@/components/ArrowIcon";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-media">
        <Image
          src={site.images.hero}
          alt="赤い皿に盛り付けたdining Blissのオムライス"
          fill
          preload
          sizes="(max-width: 767px) 100vw, 58vw"
        />
      </div>
      <div className="hero-content">
        <p className="eyebrow">TAPAS BAR / RESTAURANT / HIROSAKI</p>
        <h1 id="hero-title"><span>昼も、夜も。</span><span>Blissのひと皿を。</span></h1>
        <p className="hero-lead">ランチからディナーまで楽しめる、dining Bliss。</p>
        <div className="hero-actions">
          <a className="button button-primary" href={site.links.reservation} target="_blank" rel="noreferrer">
            予約ページを見る<ArrowIcon />
          </a>
          <a className="button button-secondary button-on-dark" href={site.links.instagram} target="_blank" rel="noreferrer">
            Instagramを見る
          </a>
        </div>
      </div>
    </section>
  );
}
