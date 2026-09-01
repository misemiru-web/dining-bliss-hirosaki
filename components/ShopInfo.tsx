import Image from "next/image";
import { ArrowIcon } from "@/components/ArrowIcon";
import { shopInformation, site } from "@/data/site";

export function ShopInfo() {
  return (
    <section className="section information" id="information" aria-labelledby="information-title">
      <div className="container information-layout">
        <div className="information-heading">
          <p className="eyebrow">SHOP &amp; ACCESS</p>
          <h2 id="information-title">Information</h2>
        </div>
        <div className="information-photo"><Image src={site.images.exterior} alt="夜のdining Bliss外観と丸い看板" fill sizes="(max-width: 899px) 100vw, 46vw" /></div>
        <div className="information-content">
          <dl className="information-list">
            {shopInformation.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="information-note">※営業時間・予約方法等は営業提案用サンプル作成時点の公開情報をもとにしています。正式制作時に店舗確認のうえ更新します。</p>
          <div className="information-actions">
            <a className="button button-primary" href={site.links.reservation} target="_blank" rel="noreferrer">予約ページを見る<ArrowIcon /></a>
            <div className="sub-actions">
              <a className="button button-secondary" href={site.links.map} target="_blank" rel="noreferrer">地図を見る</a>
              <a className="button button-secondary" href={site.links.instagram} target="_blank" rel="noreferrer">Instagramを見る</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
