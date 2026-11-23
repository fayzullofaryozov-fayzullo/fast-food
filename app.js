// Barcha UI va kategoriya SVG ikonkalari
const SVG_ICONS = {
  logo: `<svg class="svg-icon" width="32" height="32" viewBox="0 0 64 64" fill="none">
    <path d="M18 46L42 22C45.3 18.7 50.7 18.7 54 22C57.3 25.3 57.3 30.7 54 34L30 58C26.7 61.3 21.3 61.3 18 58C14.7 54.7 14.7 49.3 18 46Z" fill="#FDE68A" stroke="#92400E" stroke-width="2.5"/>
    <circle cx="43" cy="23" r="4" fill="#16A34A"/>
    <circle cx="48" cy="26" r="3.5" fill="#DC2626"/>
    <circle cx="45" cy="30" r="3.5" fill="#F59E0B"/>
    <path d="M23 41L36 28" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M27 47L41 33" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M15 43L27 55L21 61C17.7 64.3 12.3 64.3 9 61C5.7 57.7 5.7 52.3 9 49L15 43Z" fill="#FFFFFF" stroke="#E4E4E7" stroke-width="2"/>
  </svg>`,
  search: `<svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>`,
  heart: `<svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 20s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 5.5 5.5 5.5 0 0 1 21.5 11c-2.5 4.5-9.5 9-9.5 9z"/></svg>`,
  heartFilled: `<svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="#dc2626" stroke="#dc2626" stroke-width="2"><path d="M12 20s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 5.5 5.5 5.5 0 0 1 21.5 11c-2.5 4.5-9.5 9-9.5 9z"/></svg>`,
  cart: `<svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/><path d="M3 4h2l2.4 12h10.8l2-9H6.5"/></svg>`,
  user: `<svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6"/></svg>`,
  flame: `<svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="#ffb703"><path d="M12 2c2.5 3.5 6 6.2 6 11a6 6 0 1 1-12 0c0-3 1.5-5.2 3-7-.3 1.8.5 3.2 1.8 3.8C10.2 8.2 11 5 12 2z"/></svg>`,
  home: `<svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z"/></svg>`,
  menu: `<svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  promo: `<svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 12v9H4v-9M2 7h20v5H2V7zm10 0v14m0-14c-1.5 0-4-1-4-3s2.5-2 4 3zm0 0c1.5 0 4-1 4-3s-2.5-2-4 3z"/></svg>`,
  lavash: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#d90429"/><path d="M6 17L16.5 6.5a2.5 2.5 0 0 1 3.5 3.5L9.5 20.5A2.5 2.5 0 0 1 6 17Z" fill="#fde68a"/><path d="M9 14l5-5" stroke="#d97706" stroke-width="1.8" stroke-linecap="round"/><circle cx="17" cy="7" r="1.6" fill="#16a34a"/></svg>`,
  hotdog: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#b45309"/><ellipse cx="12" cy="12" rx="8" ry="4" transform="rotate(-25 12 12)" fill="#fde68a"/><path d="M6 15l12-6" stroke="#dc2626" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  pizza: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#9b001c"/><path d="M12 4L20 18a14 14 0 0 1-16 0L12 4Z" fill="#fbbf24"/><circle cx="12" cy="13" r="1.6" fill="#dc2626"/><circle cx="9.5" cy="16" r="1.4" fill="#16a34a"/></svg>`,
  burger: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#7c2d12"/><path d="M5 10a7 7 0 0 1 14 0H5Z" fill="#fbbf24"/><rect x="5" y="11.5" width="14" height="2.2" rx="1" fill="#16a34a"/><rect x="5" y="14.5" width="14" height="3" rx="1.5" fill="#92400e"/></svg>`,
  sets: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#881337"/><rect x="4" y="6" width="7" height="5" rx="1.5" fill="#fde68a"/><rect x="13" y="6" width="7" height="5" rx="1.5" fill="#fbbf24"/><rect x="4" y="13" width="16" height="5" rx="1.5" fill="#f97316"/></svg>`,
  fries: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#b45309"/><path d="M8 6v6M12 5v7M16 6v6" stroke="#fde047" stroke-width="2.2" stroke-linecap="round"/><path d="M7 12h10l-1.2 7H8.2L7 12Z" fill="#dc2626"/></svg>`,
  nuggets: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#c2410c"/><ellipse cx="9.5" cy="11" rx="3.5" ry="2.5" fill="#fde047"/><ellipse cx="14.5" cy="14" rx="3.5" ry="2.5" fill="#fbbf24"/></svg>`,
  sandwich: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#be123c"/><path d="M4 11l8-5 8 5v7H4v-7Z" fill="#fef08a"/><rect x="4" y="12.5" width="16" height="2" fill="#16a34a"/></svg>`,
  cold_drink: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#0369a1"/><path d="M8 7h8l-1.2 12H9.2L8 7Z" fill="#bae6fd"/><path d="M12 7l2-3h2" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></svg>`,
  soda: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#18181b"/><path d="M8 7h8l-1.2 12H9.2L8 7Z" fill="#dc2626"/><circle cx="11" cy="12" r="1" fill="#fde68a"/><circle cx="13.5" cy="15" r="1" fill="#fde68a"/></svg>`,
  juice: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#ea580c"/><rect x="7" y="8" width="10" height="11" rx="2" fill="#fed7aa"/><path d="M12 8V4h3" stroke="#16a34a" stroke-width="2" stroke-linecap="round"/></svg>`,
  tea_coffee: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#451a03"/><path d="M6 10h10v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-5Z" fill="#fbbf24"/><path d="M16 11h2a2 2 0 0 1 0 4h-2" stroke="#fbbf24" stroke-width="2"/></svg>`,
  sauce: `<svg class="cat-svg-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#a16207"/><path d="M6 12h12c0 3.5-2.7 6-6 6s-6-2.5-6-6Z" fill="#fef08a"/><path d="M12 12V7" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/></svg>`
};

function getCategorySvg(iconKey) {
  return SVG_ICONS[iconKey] || SVG_ICONS.lavash;
}

// Har bir mahsulot uchun o'ziga xos rasm (data-URL + fotosurat uslubi)
function makeFoodPhoto(badgeSvg, bg1, bg2, title, categoryLabel) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg1}"/>
        <stop offset="100%" stop-color="${bg2}"/>
      </linearGradient>
    </defs>
    <rect width="480" height="300" rx="20" fill="url(#g)"/>
    <circle cx="80" cy="65" r="85" fill="rgba(255,255,255,0.12)"/>
    <circle cx="405" cy="230" r="105" fill="rgba(0,0,0,0.18)"/>
    <circle cx="240" cy="112" r="64" fill="rgba(255,255,255,0.22)"/>
    <g transform="translate(208, 80) scale(1)">
      ${badgeSvg.replace(/class="cat-svg-icon"/g, 'width="64" height="64"')}
    </g>
    <rect x="34" y="202" width="412" height="68" rx="14" fill="rgba(17,17,17,0.85)"/>
    <text x="240" y="231" text-anchor="middle" fill="#ffd166" font-family="system-ui,sans-serif" font-size="19" font-weight="800">${title}</text>
    <text x="240" y="255" text-anchor="middle" fill="#f4f4f5" font-family="system-ui,sans-serif" font-size="12">${categoryLabel}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const DEFAULT_CATEGORIES = [
  { id: "lavash", name: "Lavashlar", icon: "lavash" },
  { id: "hotdog", name: "Hot-doglar", icon: "hotdog" },
  { id: "pizza", name: "Pitsalar", icon: "pizza" },
  { id: "burger", name: "Burgerlar", icon: "burger" },
  { id: "sets", name: "Setlar", icon: "sets" },
  { id: "fries", name: "Fri kartoshka", icon: "fries" },
  { id: "nuggets", name: "Nuggets", icon: "nuggets" },
  { id: "sandwiches", name: "Sendvichlar", icon: "sandwich" },
  { id: "cold_drinks", name: "Salqin ichimliklar", icon: "cold_drink" },
  { id: "soda_drinks", name: "Gazli ichimliklar", icon: "soda" },
  { id: "juices", name: "Sharbatlar", icon: "juice" },
  { id: "tea_coffee", name: "Choy va kofe", icon: "tea_coffee" },
  { id: "sauces", name: "Souslar", icon: "sauce" }
];

const DEFAULT_PRODUCTS = [
  {
    id: "p1",
    name: "Pishloqli Lavash",
    category: "lavash",
    price: 34000,
    oldPrice: 39000,
    rating: 4.9,
    ingredients: "Mol go‘shti, cheddar pishloq, lavash, pomidor, chips, oq sous",
    desc: "Eritilgan pishloq va sersuv go‘shtli eng sevimli lavash.",
    image: makeFoodPhoto(SVG_ICONS.lavash, "#d90429", "#ff7b00", "Pishloqli Lavash", "Lavashlar • Andijon"),
    popular: true,
    bestSeller: true,
    isNew: false,
    familySet: false
  },
  {
    id: "p2",
    name: "Klassik Lavash",
    category: "lavash",
    price: 30000,
    oldPrice: null,
    rating: 4.8,
    ingredients: "Mol go‘shti, lavash, pomidor, bodring, chips, firma sousi",
    desc: "An’anaviy usulda tayyorlangan issiq lavash.",
    image: makeFoodPhoto(SVG_ICONS.lavash, "#9b001c", "#f59e0b", "Klassik Lavash", "Lavashlar • Issiq taom"),
    popular: true,
    bestSeller: true,
    isNew: false,
    familySet: false
  },
  {
    id: "p3",
    name: "Kanada Hot-Dogi",
    category: "hotdog",
    price: 24000,
    oldPrice: 27000,
    rating: 4.7,
    ingredients: "Sosiska, yumshoq bulochka, pishloq, piyoz, maxsus sous",
    desc: "Boy ta’mli sosiska va pishloqli hot-dog.",
    image: makeFoodPhoto(SVG_ICONS.hotdog, "#dc2626", "#eab308", "Kanada Hot-Dogi", "Hot-doglar"),
    popular: true,
    bestSeller: false,
    isNew: true,
    familySet: false
  },
  {
    id: "p4",
    name: "Pepperoni Pitsa",
    category: "pizza",
    price: 68000,
    oldPrice: 78000,
    rating: 4.9,
    ingredients: "Mozzarella pishloq, pepperoni, pomidor sousi, oregano",
    desc: "Qarsildoq chetli va mo‘l pishloqli Pepperoni pitsa.",
    image: makeFoodPhoto(SVG_ICONS.pizza, "#b91c1c", "#fbbf24", "Pepperoni Pitsa", "Pitsalar"),
    popular: true,
    bestSeller: true,
    isNew: false,
    familySet: false
  },
  {
    id: "p5",
    name: "Double Cheeseburger",
    category: "burger",
    price: 44000,
    oldPrice: 49000,
    rating: 4.9,
    ingredients: "2 ta mol go‘shti kotleti, 2 qavat pishloq, bulochka, sous",
    desc: "Ikki hissa go‘sht va pishloqqa boy sersuv burger.",
    image: makeFoodPhoto(SVG_ICONS.burger, "#7c2d12", "#facc15", "Double Cheeseburger", "Burgerlar"),
    popular: true,
    bestSeller: true,
    isNew: true,
    familySet: false
  },
  {
    id: "p6",
    name: "Andijon Oilaviy Set",
    category: "sets",
    price: 155000,
    oldPrice: 180000,
    rating: 5.0,
    ingredients: "1 ta Pitsa, 2 ta Lavash, 2 ta Burger, Fri, 4 ta ichimlik",
    desc: "Butun oila yoki davra uchun barakali katta set.",
    image: makeFoodPhoto(SVG_ICONS.sets, "#881337", "#f59e0b", "Andijon Oilaviy Set", "Setlar"),
    popular: true,
    bestSeller: true,
    isNew: false,
    familySet: true
  },
  {
    id: "p7",
    name: "Qarsildoq Fri Kartoshka",
    category: "fries",
    price: 18000,
    oldPrice: null,
    rating: 4.7,
    ingredients: "Kartoshka, tuz, ziravorlar",
    desc: "Tashqarisi qarsildoq, ichi yumshoq oltinrang fri.",
    image: makeFoodPhoto(SVG_ICONS.fries, "#b45309", "#fde047", "Fri Kartoshka", "Fri kartoshka"),
    popular: false,
    bestSeller: true,
    isNew: false,
    familySet: false
  },
  {
    id: "p8",
    name: "Tovuq Nuggets (8 dona)",
    category: "nuggets",
    price: 26000,
    oldPrice: 30000,
    rating: 4.8,
    ingredients: "Tovuq filesi, qarsildoq qobiq, ziravorlar",
    desc: "Yumshoq tovuq bo‘laklaridan tayyorlangan mazali nuggets.",
    image: makeFoodPhoto(SVG_ICONS.nuggets, "#c2410c", "#fde047", "Tovuq Nuggets", "Nuggets"),
    popular: false,
    bestSeller: false,
    isNew: true,
    familySet: false
  },
  {
    id: "p9",
    name: "Klub Sendvich",
    category: "sandwiches",
    price: 28000,
    oldPrice: null,
    rating: 4.6,
    ingredients: "Toster non, tovuq, pishloq, pomidor, salat bargi, sous",
    desc: "Qatlamali va to‘yimli klub sendvich.",
    image: makeFoodPhoto(SVG_ICONS.sandwich, "#be123c", "#fcd34d", "Klub Sendvich", "Sendvichlar"),
    popular: false,
    bestSeller: false,
    isNew: true,
    familySet: false
  },
  {
    id: "p10",
    name: "Muzdek Limon-Yalpiz",
    category: "cold_drinks",
    price: 15000,
    oldPrice: null,
    rating: 4.8,
    ingredients: "Limon sharbati, yangi yalpiz, muz, suv",
    desc: "Salqin ichimlik: issiq kunda tetiklantiruvchi limonad.",
    image: makeFoodPhoto(SVG_ICONS.cold_drink, "#0369a1", "#38bdf8", "Salqin Limonad", "Salqin ichimliklar"),
    popular: true,
    bestSeller: false,
    isNew: true,
    familySet: false
  },
  {
    id: "p11",
    name: "Coca-Cola (Gazli)",
    category: "soda_drinks",
    price: 12000,
    oldPrice: null,
    rating: 4.9,
    ingredients: "Gazlangan ichimlik, shakar, karamel rangi",
    desc: "Gazli ichimlik: taomlar bilan mukammal uyg‘unlashadi.",
    image: makeFoodPhoto(SVG_ICONS.soda, "#18181b", "#dc2626", "Gazli Ichimlik", "Gazli ichimliklar"),
    popular: true,
    bestSeller: true,
    isNew: false,
    familySet: false
  },
  {
    id: "p12",
    name: "Tabiiy Apelsin Sharbati",
    category: "juices",
    price: 16000,
    oldPrice: null,
    rating: 4.7,
    ingredients: "Tabiiy apelsin sharbati",
    desc: "Shirin va vitaminli meva sharbati.",
    image: makeFoodPhoto(SVG_ICONS.juice, "#ea580c", "#fb923c", "Apelsin Sharbati", "Sharbatlar"),
    popular: false,
    bestSeller: false,
    isNew: false,
    familySet: false
  },
  {
    id: "p13",
    name: "Qora Choy / Latte Kofe",
    category: "tea_coffee",
    price: 14000,
    oldPrice: null,
    rating: 4.7,
    ingredients: "Saralangan choy bargi yoki espresso va sut",
    desc: "Issiq choy yoki yumshoq sutli kofe.",
    image: makeFoodPhoto(SVG_ICONS.tea_coffee, "#451a03", "#d97706", "Choy va Kofe", "Choy va kofe"),
    popular: false,
    bestSeller: false,
    isNew: false,
    familySet: false
  },
  {
    id: "p14",
    name: "Pishloqli / Sarimsoqli Sous",
    category: "sauces",
    price: 5000,
    oldPrice: null,
    rating: 4.8,
    ingredients: "Pishloq yoki sarimsoq, kaymoq, ziravorlar",
    desc: "Fri, nuggets va lavash uchun maxsus sous.",
    image: makeFoodPhoto(SVG_ICONS.sauce, "#a16207", "#fef08a", "Maxsus Sous", "Souslar"),
    popular: false,
    bestSeller: false,
    isNew: false,
    familySet: false
  }
];

const DEFAULT_DISTRICTS = [
  { name: "Andijon shahri", type: "Shahar", fee: 10000, time: "25–40 daqiqa" },
  { name: "Asaka tumani", type: "Tuman", fee: 18000, time: "40–60 daqiqa" },
  { name: "Shahrixon tumani", type: "Tuman", fee: 18000, time: "40–60 daqiqa" },
  { name: "Xo‘jaobod tumani", type: "Tuman", fee: 16000, time: "35–55 daqiqa" },
  { name: "Marhamat tumani", type: "Tuman", fee: 20000, time: "45–65 daqiqa" },
  { name: "Oltinko‘l tumani", type: "Tuman", fee: 16000, time: "35–55 daqiqa" },
  { name: "Izboskan tumani", type: "Tuman", fee: 20000, time: "45–65 daqiqa" },
  { name: "Paxtaobod tumani", type: "Tuman", fee: 22000, time: "50–70 daqiqa" },
  { name: "Baliqchi tumani", type: "Tuman", fee: 22000, time: "50–70 daqiqa" },
  { name: "Bo‘ston tumani", type: "Tuman", fee: 22000, time: "50–70 daqiqa" },
  { name: "Buloqboshi tumani", type: "Tuman", fee: 20000, time: "45–65 daqiqa" },
  { name: "Jalaquduq tumani", type: "Tuman", fee: 18000, time: "40–60 daqiqa" },
  { name: "Qo‘rg‘ontepa tumani", type: "Tuman", fee: 25000, time: "55–75 daqiqa" },
  { name: "Ulug‘nor tumani", type: "Tuman", fee: 30000, time: "65–90 daqiqa" },
  { name: "Andijon tumani", type: "Tuman", fee: 15000, time: "30–50 daqiqa" }
];

const DEFAULT_PROMOS = [
  {
    id: "pr1",
    title: "1+1 Lavash va Burger Kuni",
    code: "SET1+1",
    discountPercent: 20,
    period: "Har hafta seshanba va payshanba • 2026",
    desc: "Tanlangan set va juftlik buyurtmalariga 20% chegirma (demo promo-kod)."
  },
  {
    id: "pr2",
    title: "Andijon Mijozlariga 10% Chegirma",
    code: "ANDIJON10",
    discountPercent: 10,
    period: "Doimiy aksiya",
    desc: "Savatchada ANDIJON10 kodini kiriting va buyurtma summasidan 10% tejang."
  },
  {
    id: "pr3",
    title: "Oilaviy Davra Taklifi",
    code: "OILA15",
    discountPercent: 15,
    period: "Juma – Yakshanba",
    desc: "Katta set va pitsalarga qo‘shimcha 15% chegirma."
  }
];

const BENEFITS = [
  { icon: "flame", title: "Tezkor yetkazish", desc: "Andijon shahri va tumanlariga issiq va tartibli yetkazib berish." },
  { icon: "lavash", title: "Yangi mahsulotlar", desc: "Har kuni yangi kesilgan sabzavotlar va sifatli go‘sht/pishloq." },
  { icon: "sets", title: "3 xil hajm", desc: "Kichik, O‘rta va Katta hajmlarni tanlash — narx avtomatik hisoblanadi." },
  { icon: "cold_drink", title: "Alohida ichimliklar", desc: "Salqin, gazli ichimliklar, sharbatlar va choy-kofe alohida bo‘limlarda." }
];

const ORDER_STATUSES = [
  "Yangi buyurtma",
  "Qabul qilindi",
  "Tayyorlanmoqda",
  "Yetkazib berilmoqda",
  "Yetkazib berildi",
  "Bekor qilindi"
];

const SIZE_MULTIPLIERS = {
  Kichik: { factor: 0.85, label: "Kichik" },
  "O‘rta": { factor: 1.0, label: "O‘rta" },
  Katta: { factor: 1.25, label: "Katta" }
};

const KEYS = {
  products: "aff_products_v4",
  categories: "aff_categories_v4",
  districts: "aff_districts_v4",
  promos: "aff_promos_v4",
  cart: "aff_cart_v4",
  favs: "aff_favs_v4",
  orders: "aff_orders_v4",
  user: "aff_user_v4",
  contact: "aff_contact_v4"
};

function readStore(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

const DEFAULT_CONTACT = {
  phone: "+998 74 220 00 00 (Demo)",
  telegram: "@andijon_fastfood_demo",
  instagram: "@andijon_fastfood_demo",
  hours: "Har kuni 09:00 – 23:30",
  address: "Andijon shahri, Amir Temur shoh ko‘chasi, 28-uy (Demo filial)"
};

let state = {
  page: "home",
  category: "all",
  search: "",
  sort: "popular",
  selectedSizes: {},
  appliedPromo: null,
  products: readStore(KEYS.products, DEFAULT_PRODUCTS),
  categories: readStore(KEYS.categories, DEFAULT_CATEGORIES),
  districts: readStore(KEYS.districts, DEFAULT_DISTRICTS),
  promos: readStore(KEYS.promos, DEFAULT_PROMOS),
  cart: readStore(KEYS.cart, []),
  favs: readStore(KEYS.favs, ["p1", "p4"]),
  orders: readStore(KEYS.orders, []),
  user: readStore(KEYS.user, null),
  contact: readStore(KEYS.contact, DEFAULT_CONTACT)
};

function persistAll() {
  writeStore(KEYS.products, state.products);
  writeStore(KEYS.categories, state.categories);
  writeStore(KEYS.districts, state.districts);
  writeStore(KEYS.promos, state.promos);
  writeStore(KEYS.cart, state.cart);
  writeStore(KEYS.favs, state.favs);
  writeStore(KEYS.orders, state.orders);
  writeStore(KEYS.user, state.user);
  writeStore(KEYS.contact, state.contact);
}

function formatUZS(num) {
  return `${Math.round(Number(num) || 0).toLocaleString("uz-UZ")} so‘m`;
}

function getSizePrice(basePrice, size = "O‘rta") {
  const mult = SIZE_MULTIPLIERS[size]?.factor ?? 1;
  return Math.round((basePrice * mult) / 500) * 500;
}

function getCategoryName(catId) {
  return state.categories.find((c) => c.id === catId)?.name || catId;
}

function hydrateStaticIcons() {
  document.getElementById("brandLogoIcon").innerHTML = SVG_ICONS.logo;
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const key = el.dataset.icon;
    if (SVG_ICONS[key]) {
      el.innerHTML = SVG_ICONS[key];
    }
  });
  document.querySelectorAll("[data-m-icon]").forEach((el) => {
    const key = el.dataset.mIcon;
    if (SVG_ICONS[key]) {
      el.innerHTML = SVG_ICONS[key];
    }
  });
}

let toastTimer;
function showToast(msg) {
  const el = document.getElementById("toastMsg");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2500);
}

function navigateTo(pageName) {
  state.page = pageName;
  document.querySelectorAll(".page-section").forEach((sec) => {
    sec.classList.toggle("active", sec.id === `page-${pageName}`);
  });
  document.querySelectorAll(".desktop-nav .nav-link").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.page === pageName);
  });
  document.querySelectorAll(".mobile-bottom-nav .m-nav-btn[data-page]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.page === pageName);
  });

  if (pageName === "admin") {
    renderAdmin();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProductCard(prod) {
  const activeSize = state.selectedSizes[prod.id] || "O‘rta";
  const unitPrice = getSizePrice(prod.price, activeSize);
  const unitOldPrice = prod.oldPrice ? getSizePrice(prod.oldPrice, activeSize) : null;
  const isFav = state.favs.includes(prod.id);

  return `
    <article class="product-card">
      <div class="product-img-box" onclick="openProductDetail('${prod.id}')">
        <img src="${prod.image}" alt="${prod.name}" />
        <span class="product-rating-pill">★ ${prod.rating}</span>
        <button type="button" class="fav-toggle-btn" onclick="event.stopPropagation(); toggleFavorite('${prod.id}')" title="Sevimlilar">
          ${isFav ? SVG_ICONS.heartFilled : SVG_ICONS.heart}
        </button>
      </div>
      <div class="product-body">
        <h3 class="product-title" onclick="openProductDetail('${prod.id}')">${prod.name}</h3>
        <p class="product-desc">${prod.desc}</p>
        <div class="product-ingredients"><strong>Tarkibi:</strong> ${prod.ingredients}</div>
        <div class="size-selector" role="group" aria-label="Hajm tanlash">
          ${["Kichik", "O‘rta", "Katta"]
            .map(
              (sz) => `<button type="button" class="size-btn ${activeSize === sz ? "active" : ""}" onclick="setProductSize('${prod.id}', '${sz}')">${sz}</button>`
            )
            .join("")}
        </div>
      </div>
      <div class="product-foot">
        <div class="price-wrap">
          ${unitOldPrice && unitOldPrice > unitPrice ? `<span class="old-price">${formatUZS(unitOldPrice)}</span>` : ""}
          <span class="current-price">${formatUZS(unitPrice)}</span>
        </div>
        <button type="button" class="btn btn-sm btn-red" onclick="addProductToCart('${prod.id}')">
          Savatchaga qo‘shish
        </button>
      </div>
    </article>
  `;
}

window.setProductSize = function (prodId, size) {
  state.selectedSizes[prodId] = size;
  renderAllProductViews();
};

window.toggleFavorite = function (prodId) {
  const idx = state.favs.indexOf(prodId);
  if (idx >= 0) {
    state.favs.splice(idx, 1);
    showToast("Sevimlilardan o‘chirildi");
  } else {
    state.favs.push(prodId);
    showToast("Sevimlilarga qo‘shildi");
  }
  persistAll();
  updateBadges();
  renderAllProductViews();
  renderFavoritesModal();
};

window.addProductToCart = function (prodId, customSize = null) {
  const prod = state.products.find((p) => p.id === prodId);
  if (!prod) return;
  const size = customSize || state.selectedSizes[prodId] || "O‘rta";
  const price = getSizePrice(prod.price, size);
  const key = `${prod.id}__${size}`;

  const existing = state.cart.find((item) => item.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      key,
      productId: prod.id,
      name: prod.name,
      size,
      price,
      qty: 1
    });
  }
  persistAll();
  updateBadges();
  renderCartDrawer();
  showToast(`${prod.name} (${size}) savatchaga qo‘shildi`);
};

window.openProductDetail = function (prodId) {
  const prod = state.products.find((p) => p.id === prodId);
  if (!prod) return;
  const size = state.selectedSizes[prod.id] || "O‘rta";
  const price = getSizePrice(prod.price, size);
  const isFav = state.favs.includes(prod.id);

  document.getElementById("productDetailBody").innerHTML = `
    <div style="display:grid;gap:16px;">
      <img src="${prod.image}" alt="${prod.name}" style="width:100%;max-height:260px;object-fit:cover;border-radius:14px;" />
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <h2>${prod.name}</h2>
        <span class="tag-pill">${getCategoryName(prod.category)} • ★ ${prod.rating}</span>
      </div>
      <p>${prod.desc}</p>
      <div class="product-ingredients"><strong>Tarkibi:</strong> ${prod.ingredients}</div>
      <div class="size-selector">
        ${["Kichik", "O‘rta", "Katta"]
          .map(
            (sz) => `<button type="button" class="size-btn ${size === sz ? "active" : ""}" onclick="state.selectedSizes['${prod.id}']='${sz}'; openProductDetail('${prod.id}'); renderAllProductViews();">${sz} (${formatUZS(getSizePrice(prod.price, sz))})</button>`
          )
          .join("")}
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;padding-top:10px;border-top:1px solid var(--border);">
        <strong style="font-size:1.25rem;color:var(--red);">${formatUZS(price)}</strong>
        <div style="display:flex;gap:8px;">
          <button type="button" class="btn btn-outline-red" onclick="toggleFavorite('${prod.id}'); openProductDetail('${prod.id}');">
            ${isFav ? "Sevimlida" : "Sevimliga"}
          </button>
          <button type="button" class="btn btn-red" onclick="addProductToCart('${prod.id}', '${size}'); closeModal('productDetailModal');">
            Savatchaga qo‘shish
          </button>
        </div>
      </div>
    </div>
  `;
  openModal("productDetailModal");
};

function renderHome() {
  const featured = state.products.find((p) => p.familySet) || state.products[0];
  if (featured) {
    document.getElementById("heroFeaturedCard").innerHTML = `
      <span class="tag-pill">MAXSUS TAKLIF</span>
      <img src="${featured.image}" alt="${featured.name}" />
      <h3>${featured.name}</h3>
      <p class="subtitle" style="margin:6px 0 12px;">${featured.desc}</p>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <strong style="font-size:1.15rem;color:var(--red);">${formatUZS(featured.price)}</strong>
        <button type="button" class="btn btn-sm btn-red" onclick="addProductToCart('${featured.id}'); openCartDrawer();">Buyurtma</button>
      </div>
    `;
  }

  document.getElementById("homePopularGrid").innerHTML = state.products
    .filter((p) => p.popular)
    .slice(0, 4)
    .map(renderProductCard)
    .join("");

  document.getElementById("homeBestSellersGrid").innerHTML = state.products
    .filter((p) => p.bestSeller)
    .slice(0, 4)
    .map(renderProductCard)
    .join("");

  document.getElementById("homeNewGrid").innerHTML = state.products
    .filter((p) => p.isNew)
    .slice(0, 4)
    .map(renderProductCard)
    .join("");

  const discounted = state.products.filter((p) => p.oldPrice && p.oldPrice > p.price);
  document.getElementById("homeDiscountsGrid").innerHTML = (discounted.length ? discounted : state.products.slice(0, 3))
    .slice(0, 3)
    .map(renderProductCard)
    .join("");

  const benefitsHtml = BENEFITS.map(
    (b) => `<div class="benefit-card"><div class="benefit-card-head">${getCategorySvg(b.icon)}<h3>${b.title}</h3></div><p>${b.desc}</p></div>`
  ).join("");
  document.getElementById("homeBenefitsGrid").innerHTML = benefitsHtml;
  document.getElementById("aboutBenefitsGrid").innerHTML = benefitsHtml;
}

function renderCategoryTabs() {
  const tabsEl = document.getElementById("categoryTabs");
  const allBtn = `<button type="button" class="cat-tab ${state.category === "all" ? "active" : ""}" data-cat="all">${getCategorySvg("sets")} <span>Barchasi</span></button>`;
  const catBtns = state.categories
    .map(
      (c) => `<button type="button" class="cat-tab ${state.category === c.id ? "active" : ""}" data-cat="${c.id}">${getCategorySvg(c.icon)} <span>${c.name}</span></button>`
    )
    .join("");
  tabsEl.innerHTML = allBtn + catBtns;

  tabsEl.querySelectorAll(".cat-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.cat;
      renderMenuPage();
    });
  });
}

function renderMenuPage() {
  renderCategoryTabs();
  const q = state.search.trim().toLowerCase();

  let list = state.products.filter((p) => {
    const matchCat = state.category === "all" || p.category === state.category;
    const matchQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.ingredients.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  if (state.sort === "price_asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sort === "price_desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sort === "rating_desc") {
    list.sort((a, b) => b.rating - a.rating);
  } else {
    list.sort((a, b) => Number(b.popular) - Number(a.popular));
  }

  document.getElementById("menuResultCount").textContent = `Topilgan mahsulotlar: ${list.length} ta`;
  document.getElementById("activeCategoryName").textContent = `Kategoriya: ${
    state.category === "all" ? "Barchasi" : getCategoryName(state.category)
  }`;

  const grid = document.getElementById("menuProductsGrid");
  if (!list.length) {
    grid.innerHTML = `<div class="about-card-box" style="grid-column:1/-1;text-align:center;"><h3>Mahsulot topilmadi</h3><p class="subtitle">Boshqa kalit so‘z yoki kategoriyani sinab ko‘ring.</p></div>`;
    return;
  }
  grid.innerHTML = list.map(renderProductCard).join("");
}

function renderPromotionsPage() {
  document.getElementById("promotionsCardsGrid").innerHTML = state.promos
    .map(
      (pr) => `
      <div class="promo-offer-card">
        <div>
          <span class="promo-code-chip">PROMO-KOD: ${pr.code} (-${pr.discountPercent}%)</span>
          <h3 style="margin-top:10px;font-size:1.2rem;">${pr.title}</h3>
          <p style="font-size:0.9rem;color:#e4e4e7;margin-top:6px;">${pr.desc}</p>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;padding-top:10px;border-top:1px solid rgba(255,255,255,0.16);">
          <small style="color:var(--yellow-bright);">${pr.period}</small>
          <button type="button" class="btn btn-sm btn-yellow" onclick="applyPromoCodeDirect('${pr.code}')">Koddan foydalanish</button>
        </div>
      </div>
    `
    )
    .join("");

  const disc = state.products.filter((p) => p.oldPrice && p.oldPrice > p.price);
  document.getElementById("promoDiscountedProducts").innerHTML = (disc.length ? disc : state.products.slice(0, 3))
    .map(renderProductCard)
    .join("");

  const family = state.products.filter((p) => p.familySet || p.category === "sets");
  document.getElementById("promoFamilySetsGrid").innerHTML = family.map(renderProductCard).join("");
}

window.applyPromoCodeDirect = function (code) {
  document.getElementById("promoCodeInput").value = code;
  applyPromoCode();
  openCartDrawer();
};

function renderAboutAndContact() {
  const tbody = document.querySelector("#deliveryZonesTable tbody");
  tbody.innerHTML = state.districts
    .map(
      (d) => `
      <tr>
        <td><strong>${d.name}</strong></td>
        <td>${d.type}</td>
        <td>${formatUZS(d.fee)}</td>
        <td>${d.time}</td>
      </tr>
    `
    )
    .join("");

  document.getElementById("contactDetailsBox").innerHTML = `
    <h3 style="margin-bottom:12px;">Aloqa ma’lumotlari</h3>
    <p style="margin-bottom:8px;"><strong>Telefon:</strong> ${state.contact.phone}</p>
    <p style="margin-bottom:8px;"><strong>Telegram:</strong> ${state.contact.telegram}</p>
    <p style="margin-bottom:8px;"><strong>Instagram:</strong> ${state.contact.instagram}</p>
    <p style="margin-bottom:8px;"><strong>Ish vaqti:</strong> ${state.contact.hours}</p>
    <p><strong>Manzil:</strong> ${state.contact.address}</p>
  `;

  document.getElementById("footerContactBox").innerHTML = `
    <div>Tel: ${state.contact.phone}</div>
    <div>Telegram: ${state.contact.telegram}</div>
    <div>Instagram: ${state.contact.instagram}</div>
    <div>Ish vaqti: ${state.contact.hours}</div>
  `;

  document.getElementById("footerCategoriesList").innerHTML = state.categories
    .slice(0, 8)
    .map(
      (c) => `<li><button type="button" onclick="state.category='${c.id}'; navigateTo('menu'); renderMenuPage();">${getCategorySvg(c.icon)} <span>${c.name}</span></button></li>`
    )
    .join("");
}

function getSelectedDistrictObj() {
  const distName = document.getElementById("orderDistrict")?.value || state.districts[0]?.name;
  return state.districts.find((d) => d.name === distName) || state.districts[0];
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  let discount = 0;
  if (state.appliedPromo && subtotal > 0) {
    discount = Math.round((subtotal * state.appliedPromo.discountPercent) / 100);
  }
  const regionVal = document.getElementById("orderRegion")?.value || "Andijon viloyati";
  const distObj = getSelectedDistrictObj();
  const deliveryFee =
    subtotal === 0 ? 0 : regionVal !== "Andijon viloyati" ? 0 : distObj?.fee || 10000;
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);
  return { subtotal, discount, deliveryFee, grandTotal };
}

function applyPromoCode() {
  const input = document.getElementById("promoCodeInput");
  const fb = document.getElementById("promoFeedback");
  const code = input.value.trim().toUpperCase();
  if (!code) {
    state.appliedPromo = null;
    fb.textContent = "Promo-kod kiritilmadi.";
    renderCartDrawer();
    return;
  }
  const found = state.promos.find((p) => p.code.toUpperCase() === code);
  if (found) {
    state.appliedPromo = found;
    fb.style.color = "#15803d";
    fb.textContent = `✓ ${found.code} qo‘llandi (-${found.discountPercent}%)`;
  } else {
    state.appliedPromo = null;
    fb.style.color = "#dc2626";
    fb.textContent = "Noto‘g‘ri promo-kod. Sinab ko‘ring: ANDIJON10 yoki SET1+1";
  }
  renderCartDrawer();
}

window.changeCartQty = function (key, delta) {
  const item = state.cart.find((c) => c.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((c) => c.key !== key);
  }
  persistAll();
  updateBadges();
  renderCartDrawer();
};

window.removeCartItem = function (key) {
  state.cart = state.cart.filter((c) => c.key !== key);
  persistAll();
  updateBadges();
  renderCartDrawer();
};

function renderCartDrawer() {
  const listEl = document.getElementById("cartItemsList");
  if (!state.cart.length) {
    listEl.innerHTML = `<div style="text-align:center;padding:40px 12px;color:var(--muted);">${SVG_ICONS.cart}<p style="margin-top:8px;"><strong>Savatchangiz bo‘sh</strong></p><p style="font-size:0.86rem;">Menyudan mahsulot qo‘shing.</p></div>`;
  } else {
    listEl.innerHTML = state.cart
      .map(
        (item) => `
        <div class="cart-row-card">
          <div class="cart-row-top">
            <span>${item.name} (${item.size})</span>
            <button type="button" class="close-icon-btn" style="width:26px;height:26px;" onclick="removeCartItem('${item.key}')">✕</button>
          </div>
          <div class="cart-row-bottom">
            <div class="qty-group">
              <button type="button" class="qty-btn" onclick="changeCartQty('${item.key}', -1)">−</button>
              <strong>${item.qty}</strong>
              <button type="button" class="qty-btn" onclick="changeCartQty('${item.key}', 1)">+</button>
            </div>
            <strong>${formatUZS(item.price * item.qty)}</strong>
          </div>
        </div>
      `
      )
      .join("");
  }

  const { subtotal, discount, deliveryFee, grandTotal } = calculateCartTotals();
  document.getElementById("cartSubtotalText").textContent = formatUZS(subtotal);
  document.getElementById("cartDiscountText").textContent = `-${formatUZS(discount)}`;
  document.getElementById("cartDeliveryText").textContent = formatUZS(deliveryFee);
  document.getElementById("cartGrandTotalText").textContent = formatUZS(grandTotal);
  document.getElementById("checkoutFinalAmount").textContent = formatUZS(grandTotal);
}

function updateBadges() {
  const totalItems = state.cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cartCountBadge").textContent = totalItems;
  document.getElementById("favCountBadge").textContent = state.favs.length;
  document.getElementById("headerAuthLabel").textContent = state.user ? state.user.name : "Kirish";
}

function populateCheckoutDistricts() {
  const sel = document.getElementById("orderDistrict");
  sel.innerHTML = state.districts
    .map((d) => `<option value="${d.name}">${d.name} — ${formatUZS(d.fee)} (${d.time})</option>`)
    .join("");
  if (state.user?.address) {
    document.getElementById("orderStreet").value = state.user.address.street || "";
    document.getElementById("orderHouse").value = state.user.address.house || "";
  }
  updateCheckoutZoneInfo();
}

function updateCheckoutZoneInfo() {
  const regionVal = document.getElementById("orderRegion").value;
  const infoBox = document.getElementById("checkoutZoneInfo");
  const { deliveryFee, grandTotal } = calculateCartTotals();
  document.getElementById("checkoutFinalAmount").textContent = formatUZS(grandTotal);

  if (regionVal !== "Andijon viloyati") {
    infoBox.style.background = "#fee2e2";
    infoBox.style.borderColor = "#dc2626";
    infoBox.style.color = "#991b1b";
    infoBox.textContent = "Diqqat: Biz faqat Andijon shahri va Andijon viloyati tumanlariga yetkazib beramiz!";
  } else {
    const d = getSelectedDistrictObj();
    infoBox.style.background = "#fef3c7";
    infoBox.style.borderColor = "#ffb703";
    infoBox.style.color = "#111111";
    infoBox.textContent = `Hudud: ${d.name} • Yetkazish: ${formatUZS(deliveryFee)} • Vaqt: ${d.time}`;
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  if (!state.cart.length) {
    showToast("Savatchangiz bo‘sh!");
    return;
  }
  const regionVal = document.getElementById("orderRegion").value;
  if (regionVal !== "Andijon viloyati") {
    showToast("Yetkazib berish hududidan tashqari manzil! Andijon hududini tanlang.");
    return;
  }

  const distObj = getSelectedDistrictObj();
  const { subtotal, discount, deliveryFee, grandTotal } = calculateCartTotals();
  const order = {
    id: `AND-${Math.floor(100000 + Math.random() * 900000)}`,
    customerName: document.getElementById("orderName").value.trim(),
    phone: document.getElementById("orderPhone").value.trim(),
    region: regionVal,
    district: distObj.name,
    street: document.getElementById("orderStreet").value.trim(),
    house: document.getElementById("orderHouse").value.trim(),
    landmark: document.getElementById("orderLandmark").value.trim(),
    comment: document.getElementById("orderComment").value.trim(),
    payment: document.getElementById("orderPayment").value,
    items: [...state.cart],
    subtotal,
    discount,
    deliveryFee,
    grandTotal,
    status: "Yangi buyurtma",
    createdAt: new Date().toLocaleString("uz-UZ")
  };

  state.orders.unshift(order);
  state.cart = [];
  state.appliedPromo = null;
  document.getElementById("promoCodeInput").value = "";
  document.getElementById("promoFeedback").textContent = "";
  persistAll();
  updateBadges();
  renderCartDrawer();
  closeModal("checkoutModal");

  document.getElementById("orderReceiptContent").innerHTML = `
    <div><strong>Buyurtma raqami:</strong> ${order.id}</div>
    <div><strong>Holati:</strong> ${order.status}</div>
    <div><strong>Mijoz:</strong> ${order.customerName} (${order.phone})</div>
    <div><strong>Manzil:</strong> ${order.region}, ${order.district}, ${order.street}, ${order.house}</div>
    <div><strong>To‘lov usuli:</strong> ${order.payment}</div>
    <div><strong>Mahsulotlar:</strong> ${order.items.map((i) => `${i.name} [${i.size}] ×${i.qty}`).join(", ")}</div>
    <div><strong>Yakuniy summa:</strong> <strong style="color:var(--red);">${formatUZS(order.grandTotal)}</strong></div>
  `;
  e.target.reset();
  openModal("orderSuccessModal");
  showToast("Buyurtma muvaffaqiyatli rasmiylashtirildi!");
}

function renderFavoritesModal() {
  const body = document.getElementById("favoritesModalBody");
  const favProds = state.products.filter((p) => state.favs.includes(p.id));
  if (!favProds.length) {
    body.innerHTML = `<p class="subtitle" style="grid-column:1/-1;text-align:center;">Sevimlilar ro‘yxati hozircha bo‘sh.</p>`;
    return;
  }
  body.innerHTML = favProds.map(renderProductCard).join("");
}

function renderAuthModal() {
  const titleEl = document.getElementById("authModalTitle");
  const bodyEl = document.getElementById("authModalBody");

  if (!state.user) {
    titleEl.textContent = "Kirish / Ro‘yxatdan o‘tish (Frontend Demo)";
    bodyEl.innerHTML = `
      <p class="subtitle" style="margin-bottom:14px;">Eslatma: Frontend demosida autentifikatsiya lokal brauzerda ishlaydi; haqiqiy xavfsizlik uchun backend server kerak.</p>
      <form id="loginRegisterForm" class="modal-form">
        <div class="form-group">
          <label for="authNameInput">Ismingiz *</label>
          <input type="text" id="authNameInput" required placeholder="Masalan: Azizbek" />
        </div>
        <div class="form-group">
          <label for="authPhoneInput">Telefon raqami *</label>
          <input type="tel" id="authPhoneInput" required placeholder="+998 91 490 00 00" />
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label for="authDistrictInput">Tuman / Shahar</label>
            <input type="text" id="authDistrictInput" value="Andijon shahri" />
          </div>
          <div class="form-group">
            <label for="authStreetInput">Ko‘cha va uy</label>
            <input type="text" id="authStreetInput" placeholder="Amir Temur ko‘chasi, 10" />
          </div>
        </div>
        <button type="submit" class="btn btn-red btn-block">Kabinetga kirish / Ro‘yxatdan o‘tish</button>
      </form>
    `;

    document.getElementById("loginRegisterForm").addEventListener("submit", (e) => {
      e.preventDefault();
      state.user = {
        name: document.getElementById("authNameInput").value.trim(),
        phone: document.getElementById("authPhoneInput").value.trim(),
        address: {
          district: document.getElementById("authDistrictInput").value.trim(),
          street: document.getElementById("authStreetInput").value.trim()
        }
      };
      persistAll();
      updateBadges();
      renderAuthModal();
      showToast("Kabinetga kirdingiz!");
    });
  } else {
    titleEl.textContent = "Foydalanuvchi kabineti";
    const favList = state.products.filter((p) => state.favs.includes(p.id));
    bodyEl.innerHTML = `
      <div style="display:grid;gap:14px;">
        <div class="about-card-box">
          <h4>Shaxsiy ma’lumotlar</h4>
          <p><strong>Ism:</strong> ${state.user.name}</p>
          <p><strong>Telefon:</strong> ${state.user.phone}</p>
          <p><strong>Manzil:</strong> ${state.user.address?.district || ""}, ${state.user.address?.street || ""}</p>
        </div>
        <div class="about-card-box">
          <h4>Sevimlilar (${favList.length} ta)</h4>
          <p class="subtitle">${favList.length ? favList.map((f) => f.name).join(", ") : "Hali sevimlilar yo‘q"}</p>
        </div>
        <div class="about-card-box">
          <h4>Buyurtmalar tarixi (${state.orders.length} ta)</h4>
          ${
            state.orders.length
              ? state.orders
                  .map(
                    (o) => `<div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:0.88rem;"><strong>${o.id}</strong> • ${o.district} • ${o.status} • <strong>${formatUZS(o.grandTotal)}</strong></div>`
                  )
                  .join("")
              : `<p class="subtitle">Hali buyurtmalar mavjud emas.</p>`
          }
        </div>
        <button type="button" class="btn btn-outline-red btn-block" id="logoutUserBtn">Chiqish</button>
      </div>
    `;

    document.getElementById("logoutUserBtn").addEventListener("click", () => {
      state.user = null;
      persistAll();
      updateBadges();
      renderAuthModal();
      showToast("Kabinetdan chiqildi");
    });
  }
}

function renderAdmin() {
  const totalSales = state.orders
    .filter((o) => o.status !== "Bekor qilindi")
    .reduce((s, o) => s + o.grandTotal, 0);

  document.getElementById("adminStatsGrid").innerHTML = `
    <div class="stat-card"><strong>${state.products.length}</strong><span>Jami mahsulotlar</span></div>
    <div class="stat-card"><strong>${state.categories.length}</strong><span>Kategoriyalar</span></div>
    <div class="stat-card"><strong>${state.orders.length}</strong><span>Buyurtmalar soni</span></div>
    <div class="stat-card"><strong>${formatUZS(totalSales)}</strong><span>Umumiy savdo</span></div>
  `;

  document.getElementById("prodCategory").innerHTML = state.categories
    .map((c) => `<option value="${c.id}">${c.name}</option>`)
    .join("");

  document.querySelector("#adminProductsTable tbody").innerHTML = state.products
    .map(
      (p) => `
      <tr>
        <td><img src="${p.image}" alt="${p.name}" style="width:62px;height:40px;object-fit:cover;border-radius:6px;" /></td>
        <td><strong>${p.name}</strong></td>
        <td>${getCategoryName(p.category)}</td>
        <td>${formatUZS(p.price)}</td>
        <td>★ ${p.rating}</td>
        <td>
          <button type="button" class="btn btn-sm btn-yellow" onclick="startEditProduct('${p.id}')">Tahrir</button>
          <button type="button" class="btn btn-sm btn-red" onclick="deleteProduct('${p.id}')">O‘chirish</button>
        </td>
      </tr>
    `
    )
    .join("");

  document.getElementById("adminCategoriesList").innerHTML = state.categories
    .map((c) => `<div class="chip-item">${getCategorySvg(c.icon)} <span>${c.name}</span></div>`)
    .join("");

  document.querySelector("#adminOrdersTable tbody").innerHTML = state.orders.length
    ? state.orders
        .map(
          (o) => `
          <tr>
            <td><strong>${o.id}</strong></td>
            <td>${o.customerName}<br><small>${o.phone}</small></td>
            <td>${o.district}</td>
            <td><strong>${formatUZS(o.grandTotal)}</strong></td>
            <td>
              <select onchange="updateOrderStatus('${o.id}', this.value)">
                ${ORDER_STATUSES.map((st) => `<option value="${st}" ${o.status === st ? "selected" : ""}>${st}</option>`).join("")}
              </select>
            </td>
          </tr>
        `
        )
        .join("")
    : `<tr><td colspan="5">Hali buyurtmalar yo‘q.</td></tr>`;

  document.getElementById("adminDeliveryGrid").innerHTML = state.districts
    .map(
      (d, idx) => `
      <div class="form-group">
        <label>${d.name}</label>
        <input type="number" step="500" min="0" data-dist-idx="${idx}" value="${d.fee}" />
      </div>
    `
    )
    .join("");

  document.getElementById("contactPhoneInput").value = state.contact.phone;
  document.getElementById("contactHoursInput").value = state.contact.hours;
  document.getElementById("contactTelegramInput").value = state.contact.telegram;
  document.getElementById("contactInstagramInput").value = state.contact.instagram;
}

window.startEditProduct = function (prodId) {
  const p = state.products.find((item) => item.id === prodId);
  if (!p) return;
  document.getElementById("adminProductFormTitle").textContent = `Mahsulotni tahrirlash: ${p.name}`;
  document.getElementById("editProductId").value = p.id;
  document.getElementById("prodName").value = p.name;
  document.getElementById("prodCategory").value = p.category;
  document.getElementById("prodPrice").value = p.price;
  document.getElementById("prodOldPrice").value = p.oldPrice || "";
  document.getElementById("prodRating").value = p.rating;
  document.getElementById("prodImage").value = p.image.startsWith("data:image/svg+xml") ? "" : p.image;
  document.getElementById("prodIngredients").value = p.ingredients;
  document.getElementById("prodDesc").value = p.desc;
  document.getElementById("prodPopular").checked = Boolean(p.popular);
  document.getElementById("prodBestSeller").checked = Boolean(p.bestSeller);
  document.getElementById("prodNew").checked = Boolean(p.isNew);
  document.getElementById("prodFamilySet").checked = Boolean(p.familySet);
};

window.deleteProduct = function (prodId) {
  state.products = state.products.filter((p) => p.id !== prodId);
  persistAll();
  renderAllProductViews();
  renderAdmin();
  showToast("Mahsulot o‘chirildi");
};

window.updateOrderStatus = function (orderId, newStatus) {
  const ord = state.orders.find((o) => o.id === orderId);
  if (ord) {
    ord.status = newStatus;
    persistAll();
    showToast(`Buyurtma ${orderId} holati: ${newStatus}`);
  }
};

function renderAllProductViews() {
  renderHome();
  renderMenuPage();
  renderPromotionsPage();
  renderAboutAndContact();
  renderCartDrawer();
}

function openCartDrawer() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("backdrop").classList.add("open");
}

function closeCartDrawer() {
  document.getElementById("cartDrawer").classList.remove("open");
  if (!document.querySelector(".modal-overlay.open")) {
    document.getElementById("backdrop").classList.remove("open");
  }
}

function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.getElementById("backdrop").classList.add("open");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  if (!document.getElementById("cartDrawer").classList.contains("open") && !document.querySelector(".modal-overlay.open")) {
    document.getElementById("backdrop").classList.remove("open");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
  hydrateStaticIcons();
  updateBadges();
  renderAllProductViews();
  populateCheckoutDistricts();

  document.querySelectorAll("[data-page]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(el.dataset.page);
    });
  });

  document.querySelectorAll("[data-go-menu]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.goMenu || "all";
      navigateTo("menu");
      renderMenuPage();
    });
  });

  document.getElementById("heroSeeMenuBtn").addEventListener("click", () => navigateTo("menu"));
  document.getElementById("heroOrderNowBtn").addEventListener("click", () => {
    if (!state.cart.length) {
      addProductToCart("p1");
    }
    populateCheckoutDistricts();
    renderCartDrawer();
    openModal("checkoutModal");
  });

  const qBar = document.getElementById("quickSearchBar");
  document.getElementById("headerSearchBtn").addEventListener("click", () => {
    qBar.classList.toggle("open");
    document.getElementById("globalSearchInput").focus();
  });
  document.getElementById("closeGlobalSearchBtn").addEventListener("click", () => qBar.classList.remove("open"));
  document.getElementById("applyGlobalSearchBtn").addEventListener("click", () => {
    state.search = document.getElementById("globalSearchInput").value;
    document.getElementById("menuSearchInput").value = state.search;
    qBar.classList.remove("open");
    navigateTo("menu");
    renderMenuPage();
  });

  const mSearch = document.getElementById("menuSearchInput");
  mSearch.addEventListener("input", () => {
    state.search = mSearch.value;
    renderMenuPage();
  });
  document.getElementById("clearMenuSearchBtn").addEventListener("click", () => {
    mSearch.value = "";
    state.search = "";
    renderMenuPage();
  });
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderMenuPage();
  });

  document.getElementById("headerCartBtn").addEventListener("click", openCartDrawer);
  document.getElementById("mobileCartBtn").addEventListener("click", openCartDrawer);
  document.getElementById("closeCartDrawerBtn").addEventListener("click", closeCartDrawer);
  document.getElementById("applyPromoBtn").addEventListener("click", applyPromoCode);

  document.getElementById("proceedCheckoutBtn").addEventListener("click", () => {
    if (!state.cart.length) {
      showToast("Avval savatchaga mahsulot qo‘shing!");
      return;
    }
    closeCartDrawer();
    populateCheckoutDistricts();
    renderCartDrawer();
    openModal("checkoutModal");
  });

  document.getElementById("orderRegion").addEventListener("change", updateCheckoutZoneInfo);
  document.getElementById("orderDistrict").addEventListener("change", updateCheckoutZoneInfo);
  document.getElementById("checkoutForm").addEventListener("submit", handleCheckoutSubmit);

  document.getElementById("closeProductDetailBtn").addEventListener("click", () => closeModal("productDetailModal"));
  document.getElementById("closeCheckoutModalBtn").addEventListener("click", () => closeModal("checkoutModal"));
  document.getElementById("closeOrderSuccessBtn").addEventListener("click", () => closeModal("orderSuccessModal"));

  document.getElementById("headerFavBtn").addEventListener("click", () => {
    renderFavoritesModal();
    openModal("favoritesModal");
  });
  document.getElementById("mobileFavBtn").addEventListener("click", () => {
    renderFavoritesModal();
    openModal("favoritesModal");
  });
  document.getElementById("closeFavoritesModalBtn").addEventListener("click", () => closeModal("favoritesModal"));

  document.getElementById("headerAuthBtn").addEventListener("click", () => {
    renderAuthModal();
    openModal("authModal");
  });
  document.getElementById("closeAuthModalBtn").addEventListener("click", () => closeModal("authModal"));
  document.getElementById("footerOpenAdminBtn").addEventListener("click", () => navigateTo("admin"));

  document.getElementById("backdrop").addEventListener("click", () => {
    closeCartDrawer();
    ["productDetailModal", "checkoutModal", "orderSuccessModal", "favoritesModal", "authModal"].forEach(closeModal);
  });

  document.querySelectorAll(".admin-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".admin-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(".admin-panel-box").forEach((box) => box.classList.remove("active"));
      document.getElementById(`admin-tab-${btn.dataset.adminTab}`).classList.add("active");
    });
  });

  document.getElementById("adminProductForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const editId = document.getElementById("editProductId").value;
    const name = document.getElementById("prodName").value.trim();
    const category = document.getElementById("prodCategory").value;
    const price = Number(document.getElementById("prodPrice").value);
    const oldRaw = Number(document.getElementById("prodOldPrice").value);
    const oldPrice = oldRaw > price ? oldRaw : null;
    const rating = Math.min(5, Math.max(1, Number(document.getElementById("prodRating").value) || 4.8));
    const imgInput = document.getElementById("prodImage").value.trim();
    const catObj = state.categories.find((c) => c.id === category);
    const image = imgInput || makeFoodPhoto(getCategorySvg(catObj?.icon || "lavash"), "#d90429", "#ffb703", name, catObj?.name || "Menyu");
    const ingredients = document.getElementById("prodIngredients").value.trim();
    const desc = document.getElementById("prodDesc").value.trim();
    const popular = document.getElementById("prodPopular").checked;
    const bestSeller = document.getElementById("prodBestSeller").checked;
    const isNew = document.getElementById("prodNew").checked;
    const familySet = document.getElementById("prodFamilySet").checked;

    if (editId) {
      const idx = state.products.findIndex((p) => p.id === editId);
      if (idx >= 0) {
        state.products[idx] = {
          ...state.products[idx],
          name,
          category,
          price,
          oldPrice,
          rating,
          image,
          ingredients,
          desc,
          popular,
          bestSeller,
          isNew,
          familySet
        };
        showToast("Mahsulot yangilandi");
      }
    } else {
      state.products.unshift({
        id: `p_${Date.now()}`,
        name,
        category,
        price,
        oldPrice,
        rating,
        ingredients,
        desc,
        image,
        popular,
        bestSeller,
        isNew,
        familySet
      });
      showToast("Yangi mahsulot qo‘shildi");
    }

    persistAll();
    e.target.reset();
    document.getElementById("editProductId").value = "";
    document.getElementById("adminProductFormTitle").textContent = "Yangi mahsulot qo‘shish";
    renderAllProductViews();
    renderAdmin();
  });

  document.getElementById("cancelEditProductBtn").addEventListener("click", () => {
    document.getElementById("adminProductForm").reset();
    document.getElementById("editProductId").value = "";
    document.getElementById("adminProductFormTitle").textContent = "Yangi mahsulot qo‘shish";
  });

  document.getElementById("adminCategoryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const label = document.getElementById("newCatLabel").value.trim();
    const icon = document.getElementById("newCatIcon").value.trim() || "lavash";
    if (!label) return;
    const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "_") + "_" + Date.now().toString().slice(-3);
    state.categories.push({ id, name: label, icon });
    persistAll();
    e.target.reset();
    document.getElementById("newCatIcon").value = "lavash";
    renderAllProductViews();
    renderAdmin();
    showToast("Yangi kategoriya qo‘shildi");
  });

  document.getElementById("saveDeliveryFeesBtn").addEventListener("click", () => {
    document.querySelectorAll("#adminDeliveryGrid input[data-dist-idx]").forEach((inp) => {
      const idx = Number(inp.dataset.distIdx);
      if (state.districts[idx]) {
        state.districts[idx].fee = Math.max(0, Number(inp.value) || 0);
      }
    });
    persistAll();
    populateCheckoutDistricts();
    renderAboutAndContact();
    renderCartDrawer();
    showToast("Yetkazib berish narxlari saqlandi");
  });

  document.getElementById("adminPromoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    state.promos.unshift({
      id: `pr_${Date.now()}`,
      title: document.getElementById("promoTitle").value.trim(),
      code: document.getElementById("promoCode").value.trim().toUpperCase(),
      discountPercent: Math.min(80, Math.max(1, Number(document.getElementById("promoPercent").value) || 10)),
      period: document.getElementById("promoPeriod").value.trim(),
      desc: document.getElementById("promoDesc").value.trim()
    });
    persistAll();
    e.target.reset();
    renderPromotionsPage();
    showToast("Yangi aksiya qo‘shildi");
  });

  document.getElementById("adminContactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    state.contact = {
      ...state.contact,
      phone: document.getElementById("contactPhoneInput").value.trim(),
      hours: document.getElementById("contactHoursInput").value.trim(),
      telegram: document.getElementById("contactTelegramInput").value.trim(),
      instagram: document.getElementById("contactInstagramInput").value.trim()
    };
    persistAll();
    renderAboutAndContact();
    showToast("Aloqa ma’lumotlari yangilandi");
  });
});

