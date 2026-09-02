import type { CSSProperties } from "react";
import { ArrowIcon } from "@/components/ArrowIcon";
import { site } from "@/data/site";
import reservationDesktop from "@/public/images/reservation-desktop.jpg";
import reservationMobile from "@/public/images/reservation-mobile.jpg";

const reservationBackground = {
  "--reservation-background-desktop": `url("${reservationDesktop.src}")`,
  "--reservation-background-mobile": `url("${reservationMobile.src}")`,
} as CSSProperties;

export function Reservation() {
  return (
    <section
      className="reservation"
      id="reservation"
      aria-labelledby="reservation-title"
      style={reservationBackground}
    >
      <div className="reservation-inner">
        <p className="eyebrow" data-reveal>RESERVATION</p>
        <h2 id="reservation-title" data-reveal data-reveal-delay="1">ご予約について</h2>
        <p data-reveal data-reveal-delay="1">ご予約優先。5名以上でのご利用はご予約をお願いします。</p>
        <div className="reservation-actions" data-reveal data-reveal-delay="2">
          <a className="button button-light" href={site.links.reservation} target="_blank" rel="noreferrer">予約ページを見る<ArrowIcon /></a>
          <a className="reservation-instagram" href={site.links.instagram} target="_blank" rel="noreferrer">Instagramを見る</a>
        </div>
      </div>
    </section>
  );
}
