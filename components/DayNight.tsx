import Image from "next/image";
import { site } from "@/data/site";

export function DayNight() {
  return (
    <section className="day-night" id="day-night" aria-label="ランチとディナー">
      <article className="day-night-panel lunch-panel">
        <div className="day-night-copy"><p className="eyebrow">DAYTIME</p><h2>Lunch</h2><p>昼のBlissを、料理写真から。</p></div>
        <figure><Image src={site.images.lunch} alt="白い皿に盛り付けたランチのパスタ" fill sizes="(max-width: 767px) 100vw, 50vw" /></figure>
      </article>
      <article className="day-night-panel dinner-panel">
        <div className="day-night-copy"><p className="eyebrow">AFTER DARK</p><h2>Dinner</h2><p>料理とお酒を楽しむ夜。</p></div>
        <figure><Image src={site.images.dinner} alt="赤ワインと肉料理が並ぶディナーのテーブル" fill sizes="(max-width: 767px) 100vw, 50vw" /></figure>
      </article>
    </section>
  );
}
