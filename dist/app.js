/* ============================================================
   СЕВЕРНЫЙ СВЕТ — сборка страниц
   Разметка, контент и поведение. Статический ES2020, без сборки.
   ============================================================ */

const navItems=[['services','Услуги'],['portfolio','Портфолио'],['about','О компании'],['production','Производство'],['clients','Клиентам'],['price','Прайс'],['contacts','Контакты']];
const route=location.pathname.split('/').filter(Boolean)[0]||'home';
const PHONE='+7 (812) 425-18-00';
const PHONE_HREF='tel:+78124251800';
const EMAIL='zakaz@sever-svet.ru';

/* ---------- Иконки -------------------------------------------------
   Интерфейсные знаки — Lucide (ISC), см. dist/assets/icons/LICENSE.
   Производственные и отраслевые знаки нарисованы для этого проекта
   на той же сетке 24×24 со скруглёнными концами.
------------------------------------------------------------------- */
const icons={
 /* интерфейс */
 'arrow-right':'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
 'arrow-up-right':'<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
 'arrow-up':'<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
 plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',
 x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
 menu:'<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
 external:'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
 mail:'<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
 phone:'<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
 pin:'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
 upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',
 sparkles:'<path d="m12 3 1.7 4.6L18.5 9l-4.8 1.4L12 15l-1.7-4.6L5.5 9l4.8-1.4z"/><path d="m18.5 14.6.85 2.25 2.25.85-2.25.85-.85 2.25-.85-2.25-2.25-.85 2.25-.85z"/>',

 /* производство */
 sign:'<path d="M2.5 4h19"/><path d="M8 4v3"/><path d="M16 4v3"/><rect x="4" y="7" width="16" height="11" rx="2"/><path d="M8.5 12.5h7"/>',
 printer:'<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3.8A.8.8 0 0 1 6.8 3h10.4a.8.8 0 0 1 .8.8V9"/><rect x="6" y="14" width="12" height="7.5" rx="1.2"/><path d="M18.4 12.4h.01"/>',
 milling:'<path d="M9 2.5h6l-1.2 3.5h-3.6z"/><rect x="9.8" y="6" width="4.4" height="8.4" rx=".9"/><path d="M9.8 9.2h4.4"/><path d="M9.8 11.8h4.4"/><path d="M3.5 19.5h6.3"/><path d="M14.2 19.5h6.3"/>',
 laser:'<path d="m13.4 2.5-8 10.6h5.2L9.9 21.5l8-10.6h-5.2z"/><path d="M3 21.5h4.2"/><path d="M16.8 21.5H21"/>',
 truss:'<path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z"/><path d="m3.5 7 8.5 4.5L20.5 7"/><path d="M12 11.5v10"/>',
 signpost:'<path d="M12 2.5v19"/><path d="M5.5 5.5h10.6l2.9 2.8-2.9 2.8H5.5z"/><path d="M18.5 14H7.9L5 16.8l2.9 2.8h10.6z"/>',
 'hard-hat':'<path d="M10 9.5V5.2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.3"/><path d="M14 5.8a6.2 6.2 0 0 1 6 6.2v3"/><path d="M4 15v-3a6.2 6.2 0 0 1 6-6.2"/><rect x="2" y="15" width="20" height="4.2" rx="1.4"/>',
 'pen-tool':'<path d="m2.5 2.5 7.1 7.1"/><path d="M17.9 12.9 16.6 6.4a1 1 0 0 0-.75-.78L3.4 2.3a1 1 0 0 0-1.2 1.2l3.3 12.4a1 1 0 0 0 .78.75l6.5 1.3"/><path d="M15.5 21.2a1 1 0 0 1-1.4 0l-1.5-1.5a1 1 0 0 1 0-1.4l5.3-5.3a1 1 0 0 1 1.4 0l1.5 1.5a1 1 0 0 1 0 1.4z"/><circle cx="11" cy="11" r="2"/>',

 /* материалы */
 acrylic:'<path d="m2.5 9 9.5-5 9.5 5-9.5 5z"/><path d="m7 11.4 9.5-5"/>',
 layers:'<path d="m12 2.6 9.2 4.6a.5.5 0 0 1 0 .9L12 12.7 2.8 8.1a.5.5 0 0 1 0-.9z"/><path d="m2.8 12.6 8.9 4.45a.6.6 0 0 0 .6 0l8.9-4.45"/><path d="m2.8 16.9 8.9 4.45a.6.6 0 0 0 .6 0l8.9-4.45"/>',
 stack:'<rect x="3" y="5.6" width="18" height="3.2" rx="1.1"/><rect x="3" y="10.4" width="18" height="3.2" rx="1.1"/><rect x="3" y="15.2" width="18" height="3.2" rx="1.1"/>',
 plywood:'<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 9.7h19"/><path d="M2.5 14.3h19"/><path d="M8.5 5v4.7"/><path d="M15 9.7v4.6"/><path d="M10.5 14.3V19"/>',
 metal:'<rect x="2.5" y="6" width="19" height="12" rx="1.6"/><path d="M6.3 6v12"/><path d="M10.1 6v12"/><path d="M13.9 6v12"/><path d="M17.7 6v12"/>',
 roll:'<ellipse cx="7" cy="12" rx="3" ry="6.8"/><circle cx="7" cy="12" r="1.2"/><path d="M7 5.2h9"/><path d="M7 18.8h9"/><path d="M16 5.2c-1.66 0-3 3.04-3 6.8s1.34 6.8 3 6.8"/>',

 /* компания и отрасли */
 factory:'<path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/>',
 shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
 truck:'<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
 ruler:'<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',
 handshake:'<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
 building:'<path d="M3 21h18"/><rect x="5" y="3" width="14" height="18" rx="1.6"/><path d="M9 7.2h1.6"/><path d="M13.4 7.2H15"/><path d="M9 11.4h1.6"/><path d="M13.4 11.4H15"/><path d="M10 21v-4.6h4V21"/>',
 store:'<path d="M3.6 9.6V20a1 1 0 0 0 1 1h14.8a1 1 0 0 0 1-1V9.6"/><path d="m2.4 9.6 1.8-5.4A1.6 1.6 0 0 1 5.7 3h12.6a1.6 1.6 0 0 1 1.5 1.2l1.8 5.4"/><path d="M2.4 9.6h19.2"/><path d="M9.6 21v-5.6h4.8V21"/>',
 cup:'<path d="M4 8h13v5.6a5.4 5.4 0 0 1-5.4 5.4H9.4A5.4 5.4 0 0 1 4 13.6z"/><path d="M17 9.6h1.6a2.6 2.6 0 0 1 0 5.2H17"/><path d="M7.2 2.6c0 1.1 1 1.4 1 2.5"/><path d="M11.2 2.6c0 1.1 1 1.4 1 2.5"/>',
 crane:'<path d="M2.5 21h19"/><path d="M5 21V11h5v10"/><path d="M14 21V6h5v15"/><path d="M2.5 7.5h9"/><path d="M8 7.5v3.5"/>',
 booth:'<path d="M2.5 20.5h19"/><path d="M12 3.5 21 20.5"/><path d="M12 3.5 3 20.5"/><path d="M12 7v13.5"/><path d="m8.4 20.5 3.6-5.4 3.6 5.4"/>',
 landmark:'<path d="M3 21.5h18"/><path d="M11.2 2.7a2 2 0 0 1 1.6 0l7.6 3.7c.5.24.33.95-.22.95H3.82c-.55 0-.72-.71-.22-.95z"/><path d="M6 18.5v-7"/><path d="M10 18.5v-7"/><path d="M14 18.5v-7"/><path d="M18 18.5v-7"/>',
 message:'<path d="M22 17a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 8h10"/><path d="M7 12h6"/>',
 calc:'<rect x="4" y="2.5" width="16" height="19" rx="2"/><path d="M8 6.6h8"/><path d="M8.5 11h.01"/><path d="M12 11h.01"/><path d="M15.5 11h.01"/><path d="M8.5 14.5h.01"/><path d="M12 14.5h.01"/><path d="M15.5 14.5h.01"/><path d="M8.5 18h.01"/><path d="M12 18h3.5"/>',
 package:'<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
 network:'<rect x="9" y="2.5" width="6" height="6" rx="1.6"/><rect x="2" y="15.5" width="6" height="6" rx="1.6"/><rect x="16" y="15.5" width="6" height="6" rx="1.6"/><path d="M12 8.5v3.4"/><path d="M5 15.5v-1.6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.6"/>',
 repeat:'<path d="m17 2.5 4 4-4 4"/><path d="M3 11.5v-1a4 4 0 0 1 4-4h14"/><path d="m7 21.5-4-4 4-4"/><path d="M21 12.5v1a4 4 0 0 1-4 4H3"/>'
};

function icon(name){return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${icons[name]||icons.sparkles}</svg>`}
function chip(name){return `<span class="chip">${icon(name)}</span>`}
const arrow=icon('arrow-right');
const arrowUR=icon('arrow-up-right');

/* Фирменный знак: круг, северное сияние, горы и звезда. */
function brandMark(id){
 return `<svg class="brand-mark" viewBox="0 0 48 48" role="img" aria-label="Знак «Северный Свет»">
  <defs>
   <linearGradient id="ss-b-${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0d2c44"/><stop offset="1" stop-color="#05141f"/></linearGradient>
   <linearGradient id="ss-r-${id}" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#2ef0bf"/><stop offset=".55" stop-color="#00c2d8"/><stop offset="1" stop-color="#3d6bf5"/></linearGradient>
   <clipPath id="ss-c-${id}"><circle cx="24" cy="24" r="21.4"/></clipPath>
  </defs>
  <circle cx="24" cy="24" r="21.4" fill="url(#ss-b-${id})"/>
  <g clip-path="url(#ss-c-${id})">
   <path d="M2 19c6-9 16-11 22-7s12 3 22-4" fill="none" stroke="url(#ss-r-${id})" stroke-width="3.2" stroke-linecap="round" opacity=".55"/>
   <path d="m8 35 9.4-14.6 5.3 8.4 3.7-5.8L40 35z" fill="#eaf5fa"/>
  </g>
  <path d="m31.4 10.4 1.32 3.28 3.28 1.32-3.28 1.32-1.32 3.28-1.32-3.28-3.28-1.32 3.28-1.32z" fill="#eaf5fa"/>
  <circle cx="24" cy="24" r="21.4" fill="none" stroke="url(#ss-r-${id})" stroke-width="1.4" opacity=".85"/>
 </svg>`;
}

/* ---------- Снимки из атласов ---------- */
function atlasPhoto(atlas,index,cls=''){
 const col=index%3,row=Math.floor(index/3);
 const center=atlas==='price'?50:atlas==='materials'?(row?73.3:23.3):(row?75:25);
 const alt=atlas==='materials'?'Материалы для производства':'Визуализация проекта';
 return `<div class="photo atlas ${cls}"><img src="/assets/${atlas}-atlas.png" alt="${alt}" loading="lazy" decoding="async" style="left:${-col*100}%;--col:${col};--ty:-${center}%"></div>`;
}
function photo(source,x,y,w,h,cls=''){
 if(source==='home'&&y===446)return atlasPhoto('services',Math.round((x-48)/188),cls);
 if(source==='home'&&y===796)return atlasPhoto('projects',Math.round((x-49)/156),cls);
 if(source==='production'&&y===330)return atlasPhoto('services',5,cls);
 if(source==='production'&&y===897)return atlasPhoto('materials',Math.round((x-47)/157),cls);
 if(source==='about')return `<div class="photo ${cls}"><img src="/assets/production-hero.png" alt="Производственный участок" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;--ty:0%"></div>`;
 if(source==='price')return atlasPhoto('price',Math.round((x-365)/156),cls);
 if(source==='clients'&&y===345){const map=[['services',4],['services',0],['projects',2],['services',4],['projects',3],['projects',1]];return atlasPhoto(...map[Math.round((x-47)/158)],cls);}
 if(source==='clients'&&(y===650||y===652)){const map=[['services',0],['projects',4],['projects',1],['services',2]];return atlasPhoto(...map[Math.min(3,Math.round((x-47)/235))],cls);}
 return atlasPhoto('services',0,cls);
}

/* ---------- Контент ---------- */
const services=[
 {title:'Вывески',icon:'sign',desc:'Световые буквы и фасадные решения',img:['home',48,446,176,88],body:'Световые и несветовые вывески, объёмные буквы, короба и крышные конструкции. Подберём материалы и подсветку, изготовим и установим.',price:'Рассчитать вывеску'},
 {title:'Широкоформатная печать',icon:'printer',desc:'Для интерьеров и наружной рекламы',img:['home',237,446,177,88],body:'Печать на плёнке, баннере и других рулонных материалах. Подготовим файл, подберём материал под место размещения и выполним постпечатную обработку.'},
 {title:'ЧПУ-фрезеровка',icon:'milling',desc:'Точные детали. Сложные формы.',img:['home',425,446,176,88],body:'Фрезеровка пластика, дерева и композитных материалов. Изготавливаем детали по вашему макету, от единичных изделий до серий.'},
 {title:'Лазерная резка',icon:'laser',desc:'Чистый рез и аккуратная гравировка',img:['home',613,446,175,88],body:'Резка и гравировка акрила, фанеры и других подходящих материалов. Стоимость зависит от материала, толщины и длины реза.'},
 {title:'Конструкции',icon:'truss',desc:'Рекламные и интерьерные решения',img:['home',800,446,177,88],body:'Стелы, выставочные и интерьерные конструкции. От проектирования и подбора материалов до сборки и монтажа.'},
 {title:'Навигация',icon:'signpost',desc:'Указатели и интерьерная графика',img:['home',829,796,146,86],body:'Таблички, этажные указатели, информационные стенды и оформление пространств в единой визуальной системе.'},
 {title:'Монтаж',icon:'hard-hat',desc:'Установка и сдача готового проекта',img:['production',612,330,174,85],body:'Монтаж вывесок и рекламных конструкций. Подготовим установку с учётом площадки, размеров и особенностей изделия.'},
 {title:'Дизайн и макеты',icon:'pen-tool',desc:'Подготовка идеи к производству',img:['clients',756,652,219,76],body:'Разработаем дизайн и подготовим технический макет. Проверим размеры, шрифты, контуры и требования к выбранной технологии.'}
];
const catLabels={signs:'Вывески',interior:'Интерьер',structures:'Конструкции'};
const projects=[
 {title:'Световая вывеска',client:'Бизнес-центр · Санкт-Петербург',cat:'signs',img:['home',49,796,149,87]},
 {title:'Интерьерная вывеска',client:'Университет ИТМО',cat:'interior',img:['home',208,796,148,87]},
 {title:'Оформление фасада',client:'Ресторан FABRIKA',cat:'signs',img:['home',368,796,142,87]},
 {title:'Выставочные конструкции',client:'Экспофорум · Санкт-Петербург',cat:'structures',img:['home',520,796,145,87]},
 {title:'Декоративные элементы',client:'Офис компании NORD',cat:'interior',img:['home',675,796,145,87]},
 {title:'Навигация',client:'Бизнес-центр · Санкт-Петербург',cat:'interior',img:['home',830,796,145,87]}
];
const segments=[
 ['Бизнес-центры','building','Вывески и навигация для деловой среды',47,345],
 ['Ритейл','store','Оформление магазинов и торговых сетей',205,345],
 ['Рестораны и кафе','cup','Выразительные фасады и интерьеры',363,345],
 ['Девелоперы','crane','Брендирование объектов и площадок',520,345],
 ['Выставки и события','booth','Стенды и временные конструкции',678,345],
 ['Госучреждения','landmark','Навигация и информационные стенды',836,345]
];
const stepsData=[
 ['message','Задача','Обсуждаем идею и получаем макет.'],
 ['calc','Расчёт','Согласуем стоимость и сроки.'],
 ['factory','Производство','Изготавливаем и проверяем качество.'],
 ['truck','Монтаж','Доставляем и устанавливаем.']
];
const valuesData=[
 ['ruler','Точность','Внимание к размерам, материалам и каждой детали.'],
 ['factory','Технологии','Своя производственная база и отлаженные процессы.'],
 ['shield','Ответственность','Согласованные условия и понятные сроки.'],
 ['handshake','Партнёрство','Прямая связь с командой на всём пути проекта.']
];
const heroImages={home:'hero',services:'production-hero',portfolio:'hero',about:'production-hero',production:'production-hero',clients:'hero',price:'production-hero',contacts:'aurora-mountains'};

/* ---------- Кирпичики разметки ---------- */
let sectionIndex=0;
const pad=n=>String(n).padStart(2,'0');
const nf=n=>n.toLocaleString('ru-RU');

function brand(place){return `<a class="brand" href="/" aria-label="Северный Свет — на главную">${brandMark(place)}<span><span class="brand-name">СЕВЕРНЫЙ<br>СВЕТ</span><span class="brand-sub">Производственная компания</span></span></a>`}
function links(){return navItems.map(([id,t])=>`<a href="/${id}/"${route===id?' class="active" aria-current="page"':''}>${t}</a>`).join('')}
function button(text='Рассчитать заказ',ghost=false){return `<button class="button${ghost?' ghost':''}" type="button" data-request>${text}${ghost?icon('upload'):arrow}</button>`}
function section(content,mods=''){return `<section class="section ${mods}"><div class="wrap">${content}</div></section>`}

function head(kicker,title,linkText='',href=''){
 sectionIndex++;
 return `<div class="section-head">
  <div>
   <div class="section-head__meta"><span class="idx">${pad(sectionIndex)}</span><p class="eyebrow">${kicker}</p></div>
   <h2>${title}</h2>
  </div>
  ${linkText?`<a class="text-link" href="${href}">${linkText}${arrowUR}</a>`:''}
 </div>`;
}

const heroSpec=[
 ['pin','Санкт-Петербург','и вся Россия'],
 ['factory','Своё производство','полный цикл'],
 ['shield','Контроль качества','на каждом этапе'],
 ['truck','Монтаж и доставка','под ключ']
];
function hero(title,lead,kicker='Идеи — в реальные формы',page=false){
 const img=heroImages[route]||'hero';
 return `<section class="hero${page?' hero--page':''}">
  <div class="hero__bg" style="background-image:url('/assets/${img}.png')"></div>
  <div class="hero__veil"></div>
  <div class="aurora" aria-hidden="true"><span></span><span></span><span></span></div>
  <p class="hero__badge" aria-hidden="true">Больше, чем реклама</p>
  <div class="wrap">
   <span class="tag"><span class="dot"></span>${kicker}</span>
   <h1 class="hero__title">${title}</h1>
   <p class="lead hero__lead">${lead}</p>
   <div class="actions">${button()}${button('Отправить макет',true)}</div>
  </div>
  <div class="hero__specband">
   <div class="hero__spec">${heroSpec.map(([i,t,s])=>`<div class="hero__spec-item">${icon(i)}<div><b>${t}</b><small>${s}</small></div></div>`).join('')}</div>
  </div>
 </section>`;
}

function marquee(){
 const words=['Вывески','Печать','Фрезеровка','Лазерная резка','Конструкции','Навигация','Монтаж','Дизайн'];
 const group=w=>`<div class="marquee__group"${w?' aria-hidden="true"':''}>${words.map(x=>`<span>${x}${icon('sparkles')}</span>`).join('')}</div>`;
 return `<div class="marquee" aria-hidden="true"><div class="marquee__track">${group(false)}${group(true)}</div></div>`;
}

function serviceCards(items=services.slice(0,5),bento=false){
 return `<div class="grid ${bento?'grid--bento':'cols4'}">${items.map((s,i)=>{
  const n=services.indexOf(s);
  const feature=bento&&i===0;
  return `<a href="/services/#${n}" class="card${feature?' card--feature on-dark':''}" data-service="${n}">
   ${photo(...s.img)}
   <span class="go">${arrowUR}</span>
   <div class="card-body">${chip(s.icon)}<h3>${s.title}</h3><p>${s.desc}</p></div>
  </a>`;
 }).join('')}</div>`;
}

function projectCards(items=projects.slice(0,3)){
 return `<div class="grid cols3">${items.map(p=>`<a class="card project-card" href="/portfolio/" data-project="${projects.indexOf(p)}" data-category="${p.cat}">
  ${photo(...p.img)}<span class="cat">${catLabels[p.cat]}</span><span class="go">${arrowUR}</span>
  <div class="card-body"><h3>${p.title}</h3><p>${p.client}</p></div>
 </a>`).join('')}</div>`;
}

function stat(pre,num,post,label){
 return `<div class="stat"><strong data-count="${num}" data-pre="${pre}" data-post="${post}">${pre}${nf(num)}${post}</strong><p>${label}</p></div>`;
}
function stats(title,items){
 return `<div class="stats-band"><div class="wrap stats">
  <h2>${title}</h2>
  ${items.map(a=>stat(...a)).join('')}
 </div></div>`;
}

function productionSplit(){
 return `<div class="split">
  <div class="split__text">
   <p class="eyebrow">Собственное производство</p>
   <h2>Технологии<br>в основе качества</h2>
   <p>Печатаем, режем и собираем в одном месте. Контролируем результат на каждом этапе — от раскроя до монтажа.</p>
   <a class="button" href="/production/">Наше производство${arrow}</a>
  </div>
  <div class="split__media">${[1,2,3].map(i=>`<figure>${photo(...services[i].img)}<figcaption>${services[i].title}</figcaption></figure>`).join('')}</div>
 </div>`;
}

function stepsBlock(){
 return section(head('От идеи до результата','Четыре шага к готовому проекту')+
  `<div class="steps">${stepsData.map(([ic,t,d],i)=>`<div class="step">${icon(ic)}<span class="step__idx">Шаг ${pad(i+1)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`,'section--line');
}

function valuesBlock(){
 return section(head('Наши принципы','Качество — в деталях')+
  `<div class="values">${valuesData.map(([ic,t,d])=>`<div class="value">${chip(ic)}<h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`,'section--line');
}

function segmentsGrid(){
 return `<div class="grid cols3">${segments.map(([t,ic,d,x,y])=>`<a href="/contacts/" class="card">
  ${photo('clients',x,y)}<span class="go">${arrowUR}</span>
  <div class="card-body">${chip(ic)}<h3>${t}</h3><p>${d}</p></div>
 </a>`).join('')}</div>`;
}

function logos(){
 const items=`<span class="logo-item"><img src="/assets/brands/sber.svg" alt="Сбер" loading="lazy"></span><span class="logo-item"><img class="logo-itmo" src="/assets/brands/itmo.svg" alt="ИТМО" loading="lazy"></span><span class="logo-item logo-fabrika">FABRIKA</span><span class="logo-item logo-nord">NORD</span><span class="logo-item"><img class="logo-expo" src="/assets/brands/expoforum.svg" alt="Экспофорум" loading="lazy"></span><span class="logo-item"><img class="logo-lenta" src="/assets/brands/lenta.svg" alt="Лента" loading="lazy"></span>`;
 return `<section class="wrap client-logos" aria-label="Бренды из референсов">
  <div class="logos-toolbar"><p class="eyebrow">Нам доверяют</p><button class="logos-toggle" type="button" aria-pressed="false" aria-label="Приостановить движение логотипов">Пауза</button></div>
  <div class="logos-viewport"><div class="logos-track"><div class="logos-group">${items}</div><div class="logos-group" aria-hidden="true">${items}</div></div></div>
 </section>`;
}

function faq(){
 const qa=[
  ['Какие сроки изготовления?','Срок зависит от технологии, материалов и объёма. Простые заказы — от 2 рабочих дней. Точную дату согласуем после проверки макета.'],
  ['Какие материалы вы используете?','Акрил, ПВХ, композит, фанеру, металл, плёнку и баннерные материалы. Подберём подходящий материал под задачу.'],
  ['Можно заказать монтаж и доставку?','Да. Обсудим доставку и монтаж при расчёте. Работаем в Санкт-Петербурге и отправляем изделия в другие города России.'],
  ['Что нужно для расчёта?','Пришлите макет или описание задачи, размеры, материал, количество и желаемую дату готовности. Если макета нет, поможем его подготовить.']
 ];
 return section(head('Полезно знать','Частые вопросы')+
  `<div class="faq">${qa.map(([q,a])=>`<details><summary>${q}${icon('plus')}</summary><p>${a}</p></details>`).join('')}</div>`,'section--line');
}

function form(){
 return `<form class="request-form" novalidate>
  <div class="form-pair">
   <label>Ваше имя<input name="name" autocomplete="name" required placeholder="Как к вам обращаться"></label>
   <label>Телефон<input name="phone" type="tel" autocomplete="tel" required pattern="[+0-9() —-]{7,}" placeholder="+7 (___) ___-__-__"></label>
  </div>
  <label>О проекте<textarea name="message" placeholder="Что нужно изготовить, размеры и сроки"></textarea></label>
  <label>Ссылка на макет<input name="filelink" type="url" placeholder="https://"></label>
  <p class="form-note">Кнопка откроет ваше почтовое приложение с заполненным запросом. Файл можно прикрепить к письму.</p>
  <button class="button" type="submit">Подготовить письмо${icon('mail')}</button>
  <p class="form-note form-status" role="status"></p>
 </form>`;
}

/* ---------- Страницы ---------- */
function priceTable(title,rows){
 return `<div><h3>${title}</h3><div class="table-wrap"><table>
  <thead><tr><th>Толщина</th><th>До 50 п. м.</th><th>От 1 000 п. м.</th></tr></thead>
  <tbody>${rows.map(r=>`<tr>${r.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody>
 </table></div></div>`;
}
const laserRows=[['1 мм','44 ₽','38 ₽'],['2 мм','48 ₽','42 ₽'],['3 мм','51 ₽','46 ₽'],['4 мм','55 ₽','50 ₽'],['5 мм','79 ₽','71 ₽'],['6 мм','104 ₽','94 ₽'],['8 мм','139 ₽','125 ₽'],['10 мм','167 ₽','151 ₽']];

const pages={
 home:()=>hero('Производственная компания <span class="shine">в Санкт-Петербурге</span>','Вывески, печать и конструкции. От первой идеи до готового объекта — с собственным производством и монтажом.')
  +marquee()
  +section(head('Наши услуги','Комплексные производственные решения','Все услуги','/services/')+serviceCards(services.slice(0,5),true),'section--glow')
  +stats('Надёжный партнёр для вашего бизнеса',[['',10,'+','лет опыта'],['',500,'+','реализованных проектов'],['от ',2,'','дней на изготовление']])
  +section(head('Наши работы','Реализованные проекты','Все проекты','/portfolio/')+projectCards(),'section--line')
  +section(productionSplit(),'section--line section--glow')
  +logos(),

 services:()=>hero('Услуги','Всё для заметного бизнеса. От вывески до комплексного оформления объекта.','Производственные направления',true)
  +section(head('Что мы делаем','Решения для вашего бизнеса')+serviceCards(services))
  +stepsBlock()
  +section(head('Для кого','Работаем с бизнесом','Клиентам','/clients/')+segmentsGrid(),'section--line'),

 portfolio:()=>hero('Наши работы','Вывески, интерьеры и конструкции, которые меняют пространство.','От идеи к реализации',true)
  +section(head('Портфолио','Реализованные проекты')
   +`<div class="filters" role="group" aria-label="Категории проектов">${[['all','Все проекты'],['signs','Вывески'],['interior','Интерьеры и навигация'],['structures','Конструкции']].map(([id,t],i)=>`<button class="filter${i===0?' active':''}" type="button" data-filter="${id}" aria-pressed="${i===0}">${t}</button>`).join('')}</div>`
   +projectCards(projects)
   +`<p class="price-note">Визуализации на основе примеров из портфолио, а не фотографии выполненных работ.</p>`),

 about:()=>hero('О компании','Объединяем дизайн, технологии и собственное производство.','Северный Свет · Санкт-Петербург',true)
  +section(`<div class="split">
    <div class="split__text"><p class="eyebrow">Кто мы</p><h2>Идеи обретают<br>реальную форму</h2><p>Создаём вывески, навигацию и рекламные конструкции. Ведём проект от макета до монтажа — с одной командой и ответственностью за результат.</p></div>
    ${photo('about',0,0,0,0,'wide-photo')}
   </div>`)
  +stats('Надёжный партнёр для вашего бизнеса',[['',10,'+','лет опыта'],['',500,'+','реализованных проектов'],['от ',2,' дней','на изготовление']])
  +valuesBlock()
  +stepsBlock()
  +logos(),

 production:()=>hero('Производство','Современные технологии. Высокое качество в каждой детали.','Собственное производство',true)
  +section(head('Технологии и оборудование','От печати до сборки')+serviceCards([services[1],services[2],services[3],services[6]]))
  +stats('Наши возможности',[['',1000,'','м² производственных мощностей'],['',2,'–5','дней на изготовление'],['',500,'+','реализованных проектов']])
  +stepsBlock()
  +section(head('Материалы','Подбираем под вашу задачу')
   +`<div class="grid cols3">${[
     ['Акрил','acrylic','Прозрачный, цветной и матовый',47],
     ['ПВХ','layers','Листы различной толщины',206],
     ['Композит','stack','Алюминиевые композитные панели',363],
     ['Фанера','plywood','Для декора и конструкций',519],
     ['Металл','metal','Алюминий и нержавеющая сталь',675],
     ['Плёнки и баннеры','roll','Для печати и оформления',831]
    ].map(([t,ic,d,x])=>`<div class="card">${photo('production',x,897)}<div class="card-body">${chip(ic)}<h3>${t}</h3><p>${d}</p></div></div>`).join('')}</div>`,'section--line'),

 clients:()=>hero('Клиентам','Реализуем идеи бизнеса в Санкт-Петербурге и по всей России.','Надёжное партнёрство',true)
  +section(head('Для кого мы работаем','Решения для вашей отрасли')+segmentsGrid())
  +section(head('Как сотрудничаем','От одного объекта до сети')
   +`<div class="grid cols4">${[
     ['Разовый проект','package','Изготовление под конкретную задачу.',47],
     ['Сетевые объекты','network','Единый стандарт для каждой точки.',283],
     ['Комплексное оформление','layers','Все элементы в одном решении.',517],
     ['Контрактное производство','repeat','Серийный выпуск по вашему ТЗ.',752]
    ].map(([t,ic,d,x])=>`<a class="card" href="/contacts/">${photo('clients',x,650)}<span class="go">${arrowUR}</span><div class="card-body">${chip(ic)}<h3>${t}</h3><p>${d}</p></div></a>`).join('')}</div>`,'section--line')
  +stepsBlock()
  +logos()
  +faq(),

 price:()=>hero('Общий прайс','Ориентиры для вашей задачи. Точная стоимость — после проверки макета.','Прозрачный расчёт',true)
  +section(head('Перед запуском','Подготовка и минимальный заказ')
   +`<div class="grid cols4">${[['Разработка макета','pen-tool','от 500 ₽'],['Доработка CDR','milling','от 150 ₽'],['Лазерная резка','laser','от 1 500 ₽'],['Фрезерная резка','milling','от 2 000 ₽']].map(([t,ic,p])=>`<div class="card card--price"><div class="card-body">${chip(ic)}<p>${t}</p><strong>${p}</strong></div></div>`).join('')}</div>`)
  +section(head('Цена за погонный метр реза','Лазерная резка')
   +`<div class="frost"><div class="tables cols2">${priceTable('Оргстекло / акрил',laserRows)}${priceTable('Пластик',laserRows)}</div></div>`,'section--line')
  +section(head('Цена за погонный метр реза','Фрезерная резка')
   +`<div class="frost"><div class="tables cols4">
     ${priceTable('Фанера',[['3 мм','45 ₽','39 ₽'],['4 мм','45 ₽','42 ₽'],['6 мм','66 ₽','59 ₽'],['8 мм','95 ₽','85 ₽'],['10 мм','95 ₽','85 ₽']])}
     ${priceTable('Оргстекло',[['1–4 мм','47 ₽','42 ₽'],['5–6 мм','59 ₽','54 ₽'],['8–10 мм','89 ₽','81 ₽']])}
     ${priceTable('ПВХ',[['1–4 мм','40 ₽','36 ₽'],['5–6 мм','48 ₽','43 ₽'],['8–10 мм','65 ₽','59 ₽']])}
     ${priceTable('Композит',[['3–4 мм','96 ₽','78 ₽']])}
    </div></div>
    <p class="price-note">Цены перенесены из предоставленного прайса. Итоговая стоимость зависит от макета, материала и объёма — уточните её перед заказом.</p>`)
  +section(head('Примеры стоимости','Изготовление вывесок')
   +`<div class="grid cols3">${[['Световые буквы «ТАБЕРА»','13 700 ₽',365],['Световые буквы «Ballantine’s»','81 650 ₽',520],['Неоновая вывеска «Me HOME»','17 000 ₽',677]].map(([t,p,x])=>`<div class="card card--price">${photo('price',x,824)}<div class="card-body"><h3>${t}</h3><strong>${p}</strong></div></div>`).join('')}</div>`,'section--line'),

 contacts:()=>hero('Контакты','Пришлите макет или расскажите о задаче — подберём материалы и подготовим расчёт.','Будем на связи',true)
  +section(head('Как с нами связаться','Обсудим ваш проект')
   +`<div class="contact-grid">
     <div>
      <div class="contact-item"><small>Позвоните нам</small><a href="${PHONE_HREF}">${PHONE}</a><p>Пн–Пт · 9:00–19:00</p></div>
      <div class="contact-item"><small>Почта для заявок и макетов</small><a href="mailto:${EMAIL}">${EMAIL}</a><p>Отвечаем в течение рабочего дня.</p></div>
      <div class="contact-item"><small>Наш адрес</small><strong>Санкт-Петербург</strong><p>ул. Полевая, 8, БЦ «Север»</p><a class="text-link" href="https://yandex.ru/maps/?text=Санкт-Петербург%20Полевая%208" target="_blank" rel="noopener">Открыть на карте${icon('external')}</a></div>
     </div>
     <div class="form-panel"><h3>Запрос на расчёт</h3><p>Заполните поля — подготовим письмо с вашей задачей.</p>${form()}</div>
    </div>`)
};

/* ---------- Сборка каркаса ---------- */
document.getElementById('header').innerHTML=`<div class="wrap">
 ${brand('h')}
 <nav class="nav" id="site-nav" aria-label="Основная навигация">${links()}</nav>
 <a class="header-phone" href="${PHONE_HREF}"><strong>${PHONE}</strong><small>Пн–Пт · 9:00–19:00</small></a>
 <button class="button small" type="button" data-request>Рассчитать заказ${arrow}</button>
 <button class="menu-toggle" type="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="site-nav">${icon('menu')}</button>
</div>`;

document.getElementById('main').innerHTML=(pages[route]||pages.home)();
if(pages[route]&&route!=='home'){
 document.title=`${navItems.find(([id])=>id===route)[1]} — Северный Свет`;
}
document.body.dataset.page=route;

document.getElementById('bottom').innerHTML=`
<section class="cta on-dark">
 <div class="cta__bg" style="background-image:url('/assets/aurora-mountains.png')"></div>
 <div class="cta__veil"></div>
 <div class="wrap">
  <div class="cta__text">
   <span class="tag"><span class="dot"></span>Свяжитесь с нами</span>
   <h2>Готовы обсудить ваш проект?</h2>
   <p>Расскажите о задаче. Мы предложим решение, рассчитаем стоимость и сроки.</p>
  </div>
  <div class="cta__contacts">
   <div class="cta__row">${icon('phone')}<div><a href="${PHONE_HREF}">${PHONE}</a><small>Пн–Пт · 9:00–19:00</small></div></div>
   <div class="cta__row">${icon('mail')}<div><a href="mailto:${EMAIL}">${EMAIL}</a><small>Заявки и макеты</small></div></div>
   <div class="cta__row">${icon('pin')}<div><a href="/contacts/">Санкт-Петербург</a><small>ул. Полевая, 8, БЦ «Север»</small></div></div>
   ${button('Обсудить проект')}
  </div>
 </div>
</section>
<footer class="site-footer on-dark">
 <div class="wrap">
  <div class="footer-top">
   <div class="footer-col footer-about">${brand('f')}<p>Производственная компания полного цикла в Санкт-Петербурге: вывески, печать, фрезеровка, конструкции и монтаж.</p></div>
   <div class="footer-col"><h4>Что мы делаем</h4><ul>${services.slice(0,5).map(s=>`<li><a href="/services/#${services.indexOf(s)}">${s.title}</a></li>`).join('')}</ul></div>
   <div class="footer-col"><h4>Компания</h4><ul>${navItems.filter(([id])=>id!=='services').map(([id,t])=>`<li><a href="/${id}/">${t}</a></li>`).join('')}</ul></div>
   <div class="footer-col"><h4>Контакты</h4><ul>
    <li><a href="${PHONE_HREF}">${PHONE}</a></li>
    <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
    <li>ул. Полевая, 8, БЦ «Север»</li>
    <li>Пн–Пт · 9:00–19:00</li>
   </ul></div>
  </div>
  <div class="footer-bottom">
   <small>© 2026 «Северный Свет» · Производственная компания<br>Изображения проектов — визуализации, а не фотографии выполненных работ.</small>
   <a class="back-top" href="#header">Наверх${icon('arrow-up')}</a>
  </div>
 </div>
 <p class="footer-watermark" aria-hidden="true">СЕВЕРНЫЙ СВЕТ</p>
</footer>`;

document.getElementById('modal-form').innerHTML=form();
document.querySelectorAll('.close-modal').forEach(b=>{b.innerHTML=icon('x')});

/* ---------- Поведение ---------- */
const requestDialog=document.getElementById('request-dialog');
const detailDialog=document.getElementById('detail-dialog');
const siteNav=document.getElementById('site-nav');
const siteHeader=document.getElementById('header');

function openRequest(){detailDialog.close();requestDialog.showModal();}
function closeMenu(){
 if(!siteNav.classList.contains('open'))return;
 siteNav.classList.remove('open');
 const toggle=document.querySelector('.menu-toggle');
 toggle.setAttribute('aria-expanded','false');
 toggle.setAttribute('aria-label','Открыть меню');
 toggle.innerHTML=icon('menu');
}
function openDetail(tagText,title,text,cta,imgArgs){
 document.getElementById('detail-content').innerHTML=`<div class="detail">
  ${photo(...imgArgs)}
  <span class="tag"><span class="dot"></span>${tagText}</span>
  <h2 id="detail-title">${title}</h2>
  <p>${text}</p>
  ${button(cta)}
 </div>`;
 detailDialog.showModal();
}

document.addEventListener('click',event=>{
 const target=event.target.closest('button,a');
 if(!target){
  if(!event.target.closest('#header'))closeMenu();
  return;
 }
 if(target.matches('[data-request]')){openRequest();return}
 if(target.matches('.close-modal')){target.closest('dialog').close();return}
 if(target.matches('.menu-toggle')){
  const open=siteNav.classList.toggle('open');
  target.setAttribute('aria-expanded',String(open));
  target.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');
  target.innerHTML=icon(open?'x':'menu');
  return;
 }
 if(target.matches('[data-service]')){
  event.preventDefault();
  const s=services[Number(target.dataset.service)];
  openDetail('Услуга',s.title,s.body,s.price||'Рассчитать стоимость',s.img);
  return;
 }
 if(target.matches('[data-project]')){
  event.preventDefault();
  const p=projects[Number(target.dataset.project)];
  openDetail(catLabels[p.cat],p.title,p.client,'Хочу похожий проект',p.img);
  return;
 }
 if(target.matches('[data-filter]')){
  const value=target.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b=>{
   const on=b===target;
   b.classList.toggle('active',on);
   b.setAttribute('aria-pressed',String(on));
  });
  document.querySelectorAll('[data-category]').forEach(card=>{
   card.hidden=!(value==='all'||card.dataset.category===value);
  });
  return;
 }
 if(!target.closest('#header'))closeMenu();
});

document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',event=>{
 if(event.target===dialog)dialog.close();
}));

document.querySelectorAll('.request-form').forEach(form=>form.addEventListener('submit',event=>{
 event.preventDefault();
 if(!form.reportValidity())return;
 const data=new FormData(form);
 const body=`Имя: ${data.get('name')}\nТелефон: ${data.get('phone')}\n\nЗадача: ${data.get('message')||'Уточнить при звонке'}\nМакет: ${data.get('filelink')||'Приложу к письму'}`;
 location.href=`mailto:${EMAIL}?subject=${encodeURIComponent('Расчёт проекта — Северный Свет')}&body=${encodeURIComponent(body)}`;
 form.querySelector('.form-status').textContent=`Запрос подготовлен. Отправьте его из почтового приложения. Если оно не открылось, напишите на ${EMAIL}.`;
}));

document.querySelectorAll('.logos-toggle').forEach(btn=>btn.addEventListener('click',()=>{
 const paused=btn.closest('.client-logos').classList.toggle('is-paused');
 btn.setAttribute('aria-pressed',String(paused));
 btn.setAttribute('aria-label',paused?'Продолжить движение логотипов':'Приостановить движение логотипов');
 btn.textContent=paused?'Продолжить':'Пауза';
}));

/* Открыть карточку услуги по прямой ссылке /services/#3 */
if(route==='services'&&/^#\d+$/.test(location.hash)){
 const item=document.querySelector(`[data-service="${Number(location.hash.slice(1))}"]`);
 if(item)item.click();
}

/* Уплотнение шапки при прокрутке */
let ticking=false;
addEventListener('scroll',()=>{
 if(ticking)return;
 ticking=true;
 requestAnimationFrame(()=>{
  siteHeader.classList.toggle('is-scrolled',scrollY>12);
  ticking=false;
 });
},{passive:true});

addEventListener('resize',()=>{if(innerWidth>1080)closeMenu()},{passive:true});

/* Счётчики и появление блоков */
const still=matchMedia('(prefers-reduced-motion: reduce)');

function countUp(el){
 const target=Number(el.dataset.count);
 if(!Number.isFinite(target))return;
 const pre=el.dataset.pre||'',post=el.dataset.post||'',start=performance.now(),dur=1200;
 const tick=now=>{
  const p=Math.min(1,(now-start)/dur);
  el.textContent=pre+nf(Math.round(target*(1-Math.pow(1-p,3))))+post;
  if(p<1)requestAnimationFrame(tick);
 };
 requestAnimationFrame(tick);
}

if(!still.matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  entry.target.classList.add('is-visible');
  entry.target.querySelectorAll('[data-count]').forEach(countUp);
  observer.unobserve(entry.target);
 }),{threshold:.12,rootMargin:'0px 0px -40px 0px'});

 document.querySelectorAll('.section-head,.grid>.card,.split,.stats,.step,.value,.client-logos,.frost,.faq,.cta__text,.cta__contacts,.contact-grid>*')
  .forEach((el,i)=>{
   el.classList.add('reveal');
   if(el.matches('.card,.step,.value'))el.style.setProperty('--delay',`${(i%4)*70}ms`);
   observer.observe(el);
  });
}
