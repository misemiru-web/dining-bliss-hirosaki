import exteriorNight from "@/public/images/exterior-night.jpg";
import kitchenHerbBakedSeafood from "@/public/images/02-herb-baked-seafood-and-tomato-plate.jpg";
import kitchenSteak from "@/public/images/03-steak-on-wooden-table.jpg";
import kitchenCrispyCutlet from "@/public/images/04-crispy-cutlet-with-tomato-and-herbs.jpg";
import dinnerMediumRareSteak from "@/public/images/05-medium-rare-steak-with-red-wine.jpg";
import lunchCreamySeafoodPasta from "@/public/images/06-creamy-seafood-pasta.jpg";
import heroDemiOmelette from "@/public/images/hero-demi-omelette.jpg";
import interiorCounter from "@/public/images/interior-counter.jpg";
import interiorTable from "@/public/images/interior-table.jpg";

export const site = {
  name: "dining Bliss",
  category: "タパスバー・レストラン",
  area: "弘前",
  address: "青森県弘前市駅前町12-1",
  hours: "11:30〜14:00 / 18:00〜23:00",
  closed: "日曜日 / 臨時休業あり",
  reservation: "予約優先 / 5名以上は予約必須",
  lateCharge: "22時以降は深夜料金10%",
  instagramHandle: "@diningbliss.hirosaki",
  links: {
    reservation:
      "https://hitosara.com/0006138973/?cid=gm_yoyaku_auto_0006138973",
    instagram: "https://www.instagram.com/diningbliss.hirosaki/",
    map: "https://www.google.com/maps/search/?api=1&query=dining%20Bliss%20%E9%9D%92%E6%A3%AE%E7%9C%8C%E5%BC%98%E5%89%8D%E5%B8%82%E9%A7%85%E5%89%8D%E7%94%BA12-1",
  },
  images: {
    hero: heroDemiOmelette,
    food: [kitchenHerbBakedSeafood, kitchenSteak, kitchenCrispyCutlet],
    lunch: lunchCreamySeafoodPasta,
    dinner: dinnerMediumRareSteak,
    counter: interiorCounter,
    table: interiorTable,
    exterior: exteriorNight,
  },
} as const;

export const shopInformation = [
  { label: "店名", value: site.name },
  { label: "業態", value: site.category },
  { label: "住所", value: site.address, provisional: true },
  { label: "営業時間", value: site.hours, provisional: true },
  { label: "定休日", value: site.closed },
  { label: "予約", value: site.reservation },
  { label: "22時以降", value: site.lateCharge },
  { label: "Instagram", value: site.instagramHandle },
] as const;
