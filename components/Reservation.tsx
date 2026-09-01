import { ArrowIcon } from "@/components/ArrowIcon";
import { site } from "@/data/site";

export function Reservation() {
  return (
    <section className="reservation" id="reservation" aria-labelledby="reservation-title">
      <div className="reservation-inner">
        <p className="eyebrow">RESERVATION</p>
        <h2 id="reservation-title">ご予約について</h2>
        <p>ご予約優先。5名以上でのご利用はご予約をお願いします。</p>
        <a className="button button-light" href={site.links.reservation} target="_blank" rel="noreferrer">予約ページを見る<ArrowIcon /></a>
        <a className="reservation-instagram" href={site.links.instagram} target="_blank" rel="noreferrer">Instagramを見る</a>
      </div>
    </section>
  );
}
