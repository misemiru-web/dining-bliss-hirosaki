import Image from "next/image";
import logoArt from "../public/images/brand/logo-original.jpg";
import heroOmelette from "../public/images/hero/omelette-demiglace.png";
import blissBox from "../public/images/menu/bliss-box.jpg";
import peachParfait from "../public/images/menu/peach-panna-cotta-parfait.jpg";
import porkCutlet from "../public/images/menu/pork-cutlet-checca.jpg";
import exteriorEntrance from "../public/images/store/exterior-entrance.png";
import exteriorEvening from "../public/images/store/exterior-evening.png";
import interiorCounter from "../public/images/store/interior-counter.png";
import interiorTable from "../public/images/store/interior-table.png";

const RESERVATION_URL =
  "https://hitosara.com/0006138973/?cid=gm_yoyaku_auto_0006138973";
const INSTAGRAM_URL = "https://www.instagram.com/diningbliss.hirosaki/";
const THREADS_URL =
  "https://www.threads.com/@diningbliss.hirosaki?xmt=AQG08oY2MK92fnXGyR0o0althwwSv3kouZD6FM3toANxG2k";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="dining Bliss ページ上部へ">
          <span>dining</span> Bliss
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#about">お店について</a>
          <a href="#menu">料理</a>
          <a href="#gallery">店内</a>
          <a href="#access">店舗情報</a>
        </nav>
        <a className="button button-small" href={RESERVATION_URL} target="_blank" rel="noreferrer">
          席を予約する
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image-wrap">
          <Image
            className="hero-image"
            src={heroOmelette}
            alt="デミグラスソースをかけたdining Blissのオムライス"
            loading="eager"
            sizes="(max-width: 979px) 100vw, 52vw"
          />
          <p className="hero-image-label">Weekday Lunch</p>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">弘前駅近くのイタリアン</p>
          <h1>
            <span>こだわりのひと皿を、</span>
            <span>気軽に、ゆっくり。</span>
          </h1>
          <p className="hero-lead">
            弘前駅近くの落ち着いた空間で、丁寧に仕上げた料理を気軽に。
            ランチからディナーまで、心ほどけるひとときをお楽しみください。
          </p>
          <div className="hero-actions">
            <a className="button" href={RESERVATION_URL} target="_blank" rel="noreferrer">
              ヒトサラで席を予約する
              <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="tel:0172809065">電話で問い合わせる</a>
          </div>
          <p className="hours-brief">
            <span>Lunch 11:30–14:00</span>
            <span>Dinner 18:00–23:00</span>
            <span>日曜定休</span>
          </p>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-copy">
          <p className="section-kicker">About Bliss</p>
          <h2 className="section-title">日常に寄り添う、<br />落ち着いたイタリアン</h2>
          <p>
            dining Blissは、弘前駅近くでこだわりの料理を気軽に楽しめるイタリアンです。
            温かな照明に包まれた店内には、ゆっくり過ごせるテーブル席と、お一人でも利用しやすいカウンター席をご用意しています。
          </p>
          <p>普段のランチから、大切な方とのディナーまで。思い思いの時間をお過ごしください。</p>
        </div>
        <figure className="brand-figure">
          <Image src={logoArt} alt="dining Blissのアインシュタインを描いたアート" sizes="(max-width: 767px) 88vw, 38vw" />
          <figcaption>We don&apos;t stop playing because we grow old.</figcaption>
        </figure>
      </section>

      <section className="featured-menu" id="menu">
        <div className="featured-photo">
          <Image src={heroOmelette} alt="牛肉とデミグラスソースを添えた平日限定オムライス" sizes="(max-width: 899px) 100vw, 54vw" />
        </div>
        <div className="featured-copy">
          <p className="section-kicker">Weekday Special</p>
          <h2 className="section-title">平日ランチのおすすめ</h2>
          <p className="menu-name">平日限定オムライスセット</p>
          <p className="menu-price">¥1,650 <small>税込</small></p>
          <p>
            ふんわりと仕上げた卵に、コク深いデミグラスソースを合わせたオムライス。
            サラダ・スープ・ドリンク付きの、平日限定ランチセットです。
          </p>
          <p className="note">※提供内容や数量は変更になる場合があります。</p>
        </div>
      </section>

      <section className="menu-section section-shell" aria-labelledby="dish-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">From Our Kitchen</p>
            <h2 className="section-title" id="dish-title">その日の楽しみと出会える料理</h2>
          </div>
          <p>
            定番のランチから、季節の食材を使ったひと皿まで。
            その時々のおすすめを、dining Blissらしいスタイルでご用意しています。
          </p>
        </div>

        <div className="dish-grid">
          <article className="dish-card">
            <div className="dish-image">
              <Image src={porkCutlet} alt="国産豚のカツレツ チェッカソース" sizes="(max-width: 699px) 100vw, 33vw" />
            </div>
            <div className="dish-copy">
              <p className="dish-tag">Dinner</p>
              <h3>国産豚のカツレツ<br />チェッカソース</h3>
              <p>香ばしく仕上げた国産豚のカツレツを、トマトを使ったチェッカソースとともに。</p>
            </div>
          </article>

          <article className="dish-card dish-card-offset">
            <div className="dish-image dish-image-box">
              <Image src={blissBox} alt="料理を詰め合わせた予約制のBLISS.BOX" sizes="(max-width: 699px) 100vw, 33vw" />
            </div>
            <div className="dish-copy">
              <p className="dish-tag">Reservation</p>
              <h3>BLISS.BOX</h3>
              <p>dining Blissの料理を詰め合わせた、予約制の特製ボックスです。</p>
              <p className="dish-meta">2人前 ¥5,400（税込）／3日前までの要予約</p>
            </div>
          </article>

          <article className="dish-card">
            <div className="dish-image dish-image-dessert">
              <Image src={peachParfait} alt="桃とパンナコッタを使った季節のパフェ" sizes="(max-width: 699px) 100vw, 33vw" />
            </div>
            <div className="dish-copy">
              <p className="dish-tag">Seasonal</p>
              <h3>季節のデザート</h3>
              <p>旬の果物を使ったデザートも期間限定で登場します。</p>
            </div>
          </article>
        </div>

        <div className="menu-follow">
          <p>季節メニューや提供状況は、公式Instagramでお知らせしています。</p>
          <a className="outline-button" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagramで最新の料理を見る <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
        <div className="section-shell gallery-heading">
          <p className="section-kicker">Inside Bliss</p>
          <h2 className="section-title" id="gallery-title">肩の力を抜いて過ごせる空間</h2>
          <p>
            温かみのある照明と落ち着いた色合いの店内。
            お一人での食事から、ご家族や大切な方との時間まで、気兼ねなくお過ごしいただけます。
          </p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-item gallery-table">
            <Image src={interiorTable} alt="温かな照明のテーブル席" sizes="(max-width: 699px) 50vw, 34vw" />
            <figcaption>Table</figcaption>
          </figure>
          <figure className="gallery-item gallery-counter">
            <Image src={interiorCounter} alt="厨房を望むカウンター席" sizes="(max-width: 699px) 50vw, 34vw" />
            <figcaption>Counter</figcaption>
          </figure>
          <figure className="gallery-item gallery-exterior">
            <Image src={exteriorEntrance} alt="dining Blissの店舗入口" sizes="(max-width: 699px) 100vw, 34vw" />
            <figcaption>Entrance</figcaption>
          </figure>
        </div>
      </section>

      <section className="access-section section-shell" id="access">
        <div className="access-photo">
          <Image src={exteriorEvening} alt="夕方のdining Bliss外観と丸いBlissの看板" sizes="(max-width: 899px) 100vw, 52vw" />
          <span className="access-photo-caption">黒い外壁と丸い看板が目印です</span>
        </div>
        <div className="access-copy">
          <p className="section-kicker">Information</p>
          <h2 className="section-title">店舗情報</h2>
          <dl className="info-list">
            <div><dt>店名</dt><dd>dining Bliss</dd></div>
            <div><dt>住所</dt><dd>青森県弘前市駅前町12-1</dd></div>
            <div><dt>営業時間</dt><dd>11:30–14:00<br />18:00–23:00</dd></div>
            <div><dt>定休日</dt><dd>日曜日</dd></div>
            <div><dt>電話番号</dt><dd><a href="tel:0172809065">0172-80-9065</a></dd></div>
            <div><dt>ご予約</dt><dd>ヒトサラまたは電話</dd></div>
          </dl>
          <div className="access-actions">
            <a className="button" href={RESERVATION_URL} target="_blank" rel="noreferrer">ヒトサラで席を予約する</a>
            <a className="outline-button" href="tel:0172809065">電話する</a>
          </div>
        </div>
      </section>

      <section className="reservation-section" id="reservation">
        <div className="reservation-inner">
          <p className="section-kicker light">Reservation</p>
          <h2>ご予約はこちらから</h2>
          <p>
            お席のご予約は、ヒトサラから受け付けています。
            ご希望の日時と人数を選択してご予約ください。
          </p>
          <a className="button button-light" href={RESERVATION_URL} target="_blank" rel="noreferrer">
            ヒトサラで席を予約する <span aria-hidden="true">↗</span>
          </a>
          <p className="reservation-note">当日の営業状況や大人数でのご利用については、店舗へ直接お問い合わせください。</p>

          <details className="cancel-details">
            <summary>キャンセルポリシーを確認する</summary>
            <div className="cancel-content">
              <p>食材準備と円滑な店舗運営のため、予約のキャンセル・人数変更について、以下のキャンセル料をお願いしています。</p>
              <h3>席のみのご予約</h3>
              <div className="table-scroll">
                <table>
                  <thead><tr><th>時間帯</th><th>前日</th><th>当日</th><th>無断</th></tr></thead>
                  <tbody>
                    <tr><th>ランチ</th><td>¥2,000</td><td>¥2,000</td><td>¥2,000</td></tr>
                    <tr><th>ディナー</th><td>¥3,500</td><td>¥5,000</td><td>¥5,000</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="table-note">金額は1名様あたりです。</p>
              <h3>コース料理のご予約</h3>
              <div className="table-scroll">
                <table>
                  <thead><tr><th>前日</th><th>当日</th><th>無断</th></tr></thead>
                  <tbody><tr><td>料理代金の80%</td><td>料理代金の100%</td><td>料理代金の100%</td></tr></tbody>
                </table>
              </div>
              <ul>
                <li>人数変更は前日までにご連絡ください。</li>
                <li>キャンセル料は銀行振込でのお支払いをお願いしています。振込先は店舗からご案内します。</li>
                <li>無断キャンセルが続く場合は、今後のご予約をお断りする場合があります。</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      <section className="final-cta">
        <p className="section-kicker">A Moment at Bliss</p>
        <h2>dining Blissで、<br />心ほどけるひとときを。</h2>
        <p>ランチにも、ゆっくり楽しむディナーにも。皆さまのご来店をお待ちしています。</p>
        <div className="final-actions">
          <a className="button" href={RESERVATION_URL} target="_blank" rel="noreferrer">ヒトサラで席を予約する</a>
          <a className="text-link" href="tel:0172809065">電話で問い合わせる</a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <p className="footer-wordmark"><span>dining</span> Bliss</p>
          <p>青森県弘前市駅前町12-1</p>
          <p>11:30–14:00 ／ 18:00–23:00<br />日曜定休</p>
          <div className="social-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href={THREADS_URL} target="_blank" rel="noreferrer">Threads ↗</a>
          </div>
        </div>
        <div className="sample-notice">
          <p>本ページは営業提案用に制作されたサンプルLPです。実際の店舗公式サイトではありません。</p>
          <p>メニューや営業時間などの最新情報は、店舗の公式Instagramまたは予約ページをご確認ください。</p>
        </div>
        <a className="back-to-top" href="#top">ページ上部へ ↑</a>
      </footer>

      <div className="mobile-reserve-bar">
        <a href={RESERVATION_URL} target="_blank" rel="noreferrer">ヒトサラで席を予約する</a>
      </div>
    </main>
  );
}
