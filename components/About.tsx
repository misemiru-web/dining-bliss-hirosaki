import Image from "next/image";
import { site } from "@/data/site";

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about-layout">
        <div className="about-copy">
          <p className="eyebrow">ABOUT</p>
          <h2 id="about-title">dining Bliss</h2>
          <p>ランチとディナーを楽しめる、弘前のタパスバー・レストラン。料理と店内の雰囲気を、写真を中心にご紹介します。</p>
        </div>
        <figure className="about-photo image-frame">
          <Image src={site.images.counter} alt="dining Blissのカウンター席と厨房" fill sizes="(max-width: 767px) 100vw, 58vw" />
        </figure>
      </div>
    </section>
  );
}
