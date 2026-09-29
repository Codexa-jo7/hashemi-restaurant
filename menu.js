const menu=[
{cat:'sandwich',name:'برجر انجوس لحمة',sandwich:2.50,meal:3.25,bestseller:true},
{cat:'sandwich',name:'هوت دوغ',sandwich:1.25,meal:2},
{cat:'sandwich',name:'زنجر تورتيلا',sandwich:1.75,meal:2.60},
{cat:'sandwich',name:'زنجر سوبريم',sandwich:2,meal:2.75},
{cat:'sandwich',name:'زنجر سوبريم بالفطر والكريمة',sandwich:2.10,meal:2.85},
{cat:'sandwich',name:'برجر كرسبي ونشمي',sandwich:2,meal:2.85},
{cat:'sandwich',name:'برجر حار نار كريسبي',sandwich:2,meal:2.85},
{cat:'sandwich',name:'برجر سويت شيلي',sandwich:2,meal:2.85},
{cat:'sandwich',name:'برجر باربيكيو',sandwich:2,meal:2.85},
{cat:'box',name:'بوكس العيلة',price:9.75,desc:'7 ساندويشات، 4 بطاطا، 3 زنجر، 4 ماتركس'},
{cat:'box',name:'بوكس توفير',price:10,desc:'7 برجر سكالوب، 4 ماتركس، بطاطا'},
{cat:'potato',name:'بطاطا كومبير',price:2.50,desc:'إضافة صوص وهوت دوغ مع البطاطا: 0.75 دينار'},
{cat:'potato',name:'كاسة ذرة صغيرة',price:1.25},
{cat:'potato',name:'كاسة ذرة وسط',price:1.75},
{cat:'potato',name:'كاسة ذرة كبيرة',price:2},
{cat:'potato',name:'عرنوس ذرة هاشمي',price:.75},
{cat:'side',name:'شمندر مشوي بالرمان والعسل',prices:[['صغير',1.50],['وسط',2],['كبير',2.25]]},
{cat:'side',name:'سيزر صلاد على كيفك',price:1.85},
{cat:'side',name:'كاسة بطاطا وزنجر',price:1.50},
{cat:'side',name:'صحن زنجر مع جبنة تشيدر',price:3.50},
{cat:'side',name:'صحن حاملة إشي بجنّن',price:1.50},
{cat:'side',name:'بوكس هاشمي',price:2.75,desc:'زنجر وذرة وزيتون وهلبينو وبطاطا'}
];
const categories={sandwich:'برجر وزينجر',box:'بوكسات للّمة',potato:'بطاطا وذرة هاشمية',side:'سلطات وأطباق على جنب'};

const englishNames=["Angus Beef Burger", "Hot Dog", "Zinger Tortilla", "Zinger Supreme", "Zinger Supreme with Mushroom & Cream", "Crispy Nashmi Burger", "Fiery Crispy Burger", "Sweet Chili Burger", "BBQ Burger", "Family Box", "Value Box", "Kumpir Baked Potato", "Small Corn Cup", "Medium Corn Cup", "Large Corn Cup", "Hashemi Corn on the Cob", "Roasted Beetroot with Pomegranate & Honey", "Caesar Salad", "Fries & Zinger Cup", "Zinger Plate with Cheddar Cheese", "Hamleh Plate \u2014 Something Amazing", "Hashemi Box"];
const englishDescriptions={9:'7 sandwiches, 4 fries, 3 zingers, 4 Matrix drinks',10:'7 escalope burgers, 4 Matrix drinks, fries',11:'Add sauce and hot dog to your potato: JOD 0.75',21:'Zinger, corn, olives, jalapeños and fries'};
const englishCategories={sandwich:'Burgers & Zinger',box:'Sharing Boxes',potato:'Potatoes & Corn',side:'Salads & Sides'};
const imageIds=['angus', 'hotdog', 'tortilla', 'supreme', 'mushroom', 'nashmi', 'fiery', 'sweet-chili', 'bbq', 'family', 'value', 'kumpir', 'corn-small', 'corn-medium', 'corn-large', 'corn-cob', 'beetroot', 'caesar', 'fries-zinger', 'cheddar', 'hamleh', 'hashemi-box'];
let currentCategory='all';
function render(cat=currentCategory){currentCategory=cat;const en=document.documentElement.lang==='en';document.querySelector('#menu-items').innerHTML=menu.map((x,i)=>({...x,i})).filter(x=>cat==='all'||x.cat===cat).map(x=>{const prices=x.prices||(x.sandwich?[['ساندويشة',x.sandwich],['وجبة',x.meal]]:[['',x.price]]);const name=en?englishNames[x.i]:x.name;const desc=en?englishDescriptions[x.i]:x.desc;return `<article class="menu-card${x.bestseller?' bestseller-card':''}"><div class="food-photo"><img src="food-${imageIds[x.i]}.webp" alt="${name}" width="720" height="720" loading="lazy" decoding="async">${x.bestseller?`<span class="bestseller-badge">${en?'Most ordered':'الأكثر طلبًا'}</span>`:''}</div><div class="menu-card-body"><span class="category">${(en?englishCategories:categories)[x.cat]}</span><h3>${name}</h3>${desc?`<p class="description">${desc}</p>`:''}<div class="prices">${prices.map(([label,p])=>`<div class="price"><small>${en?({'ساندويشة':'Sandwich','وجبة':'Meal','صغير':'Small','وسط':'Medium','كبير':'Large'}[label]||label):label}</small><b dir="ltr">${p.toFixed(2)}</b><em>${en?'JOD':'د.أ'}</em></div>`).join('')}</div></div></article>`}).join('')}
document.querySelectorAll('[data-cat]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-cat]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render(b.dataset.cat)}));render();
