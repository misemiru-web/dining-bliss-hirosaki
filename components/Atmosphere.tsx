import Image from "next/image";
import { site } from "@/data/site";

export function Atmosphere() {
  return (
    <section className="section atmosphere" id="space" aria-labelledby="space-title">
      <div className="container">
        <div className="section-heading atmosphere-heading">
          <div><p className="eyebrow">ATMOSPHERE</p><h2 id="space-title">店内の雰囲気</h2></div>
          <p>カウンター席とテーブル席のある店内。実際の店舗写真で、来店前に雰囲気をご確認いただけます。</p>
        </div>
        <div className="atmosphere-grid">
          <figure className="atmosphere-counter"><Image src={site.images.counter} alt="暖色の照明が灯るカウンター席" fill sizes="(max-width: 767px) 100vw, 68vw" /></figure>
          <figure className="atmosphere-table"><Image src={site.images.table} alt="窓辺にある木製のテーブル席" fill sizes="(max-width: 767px) 100vw, 32vw" /></figure>
        </div>
      </div>
    </section>
  );
}
