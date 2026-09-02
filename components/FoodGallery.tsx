import Image from "next/image";
import { site } from "@/data/site";

const foodAlt = [
  "赤い皿に盛り付けた揚げ物とトマト",
  "白い皿に盛り付けた肉料理と赤ワイン",
  "白い皿に盛り付けたパスタ",
] as const;

export function FoodGallery() {
  return (
    <section className="section food" id="food" aria-labelledby="food-title">
      <div className="container">
        <div className="section-heading food-heading">
          <div data-reveal><p className="eyebrow">FROM THE KITCHEN</p><h2 id="food-title">Blissの料理</h2></div>
          <p data-reveal data-reveal-delay="1">ランチからディナーまで。料理の彩りや質感を、実際の店舗写真でご覧いただけます。</p>
        </div>
        <div className="food-grid">
          {site.images.food.map((image, index) => (
            <figure className={`food-photo food-photo-${index + 1}`} key={image.src} data-reveal>
              <Image
                src={image}
                alt={foodAlt[index]}
                fill
                sizes={index === 0 ? "(max-width: 767px) 100vw, 62vw" : "(max-width: 767px) 100vw, 38vw"}
              />
            </figure>
          ))}
        </div>
        <a className="food-instagram-link" href={site.links.instagram} target="_blank" rel="noreferrer" data-reveal>
          Instagramで料理を見る →
        </a>
      </div>
    </section>
  );
}
