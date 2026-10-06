const menu=[
  {
    "cat": "sandwich",
    "name": "برجر انجوس لحمة",
    "sandwich": 2.5,
    "meal": 3.25,
    "bestseller": true
  },
  {
    "cat": "sandwich",
    "name": "برجر انجوس ماشروم",
    "sandwich": 2.9,
    "meal": 3.65
  },
  {
    "cat": "sandwich",
    "name": "برجر انجوس بيف بيكن",
    "sandwich": 2.9,
    "meal": 3.65
  },
  {
    "cat": "sandwich",
    "name": "هوت دوغ",
    "sandwich": 1.25,
    "meal": 2
  },
  {
    "cat": "sandwich",
    "name": "زنجر تورتيلا",
    "sandwich": 1.75,
    "meal": 2.6
  },
  {
    "cat": "sandwich",
    "name": "زنجر سوبريم",
    "sandwich": 2,
    "meal": 2.75
  },
  {
    "cat": "sandwich",
    "name": "زنجر سوبريم بالفطر والكريمة",
    "sandwich": 2.1,
    "meal": 2.85
  },
  {
    "cat": "sandwich",
    "name": "برجر كرسبي ونشمي",
    "sandwich": 2,
    "meal": 2.85
  },
  {
    "cat": "sandwich",
    "name": "برجر حار نار كريسبي",
    "sandwich": 2,
    "meal": 2.85
  },
  {
    "cat": "sandwich",
    "name": "برجر سويت شيلي",
    "sandwich": 2,
    "meal": 2.85
  },
  {
    "cat": "sandwich",
    "name": "برجر باربيكيو",
    "sandwich": 2,
    "meal": 2.85
  },
  {
    "cat": "box",
    "name": "بوكس العيلة",
    "price": 9.75,
    "desc": "7 ساندويشات، 4 بطاطا، 3 زنجر، 4 ماتركس"
  },
  {
    "cat": "box",
    "name": "بوكس توفير",
    "price": 10,
    "desc": "7 برجر سكالوب، 4 ماتركس، بطاطا"
  },
  {
    "cat": "potato",
    "name": "بطاطا كومبير",
    "price": 2.5,
    "desc": "إضافة صوص وهوت دوغ مع البطاطا: 0.75 دينار"
  },
  {
    "cat": "potato",
    "name": "كاسة ذرة صغيرة",
    "price": 1.25
  },
  {
    "cat": "potato",
    "name": "كاسة ذرة وسط",
    "price": 1.75
  },
  {
    "cat": "potato",
    "name": "كاسة ذرة كبيرة",
    "price": 2
  },
  {
    "cat": "potato",
    "name": "عرنوس ذرة هاشمي",
    "price": 0.75
  },
  {
    "cat": "side",
    "name": "شمندر مشوي بالرمان والعسل",
    "prices": [
      [
        "صغير",
        1.5
      ],
      [
        "وسط",
        2
      ],
      [
        "كبير",
        2.25
      ]
    ]
  },
  {
    "cat": "side",
    "name": "سيزر صلاد على كيفك",
    "price": 1.85
  },
  {
    "cat": "side",
    "name": "كاسة بطاطا وزنجر",
    "price": 1.5
  },
  {
    "cat": "side",
    "name": "صحن زنجر مع جبنة تشيدر",
    "price": 3.5
  },
  {
    "cat": "side",
    "name": "صحن حاملة إشي بجنّن",
    "price": 1.5
  },
  {
    "cat": "side",
    "name": "بوكس هاشمي",
    "price": 2.75,
    "desc": "زنجر وذرة وزيتون وهلبينو وبطاطا"
  },
  {
    "cat": "extras",
    "name": "ماتريكس",
    "price": 0.35
  },
  {
    "cat": "extras",
    "name": "لبن عيران",
    "price": 0.6
  },
  {
    "cat": "extras",
    "name": "علبة صوص",
    "price": 0.25
  },
  {
    "cat": "extras",
    "name": "علبة هالابينو",
    "price": 0.25
  },
  {
    "cat": "extras",
    "name": "إضافة جبنة",
    "price": 0.5
  }
];
const categories={
  "sandwich": "برجر وزينجر",
  "box": "بوكسات للّمة",
  "potato": "بطاطا وذرة هاشمية",
  "side": "سلطات وأطباق على جنب",
  "extras": "الإضافات"
};
const englishNames=[
  "Angus Beef Burger",
  "Angus Mushroom Burger",
  "Angus Beef Bacon Burger",
  "Hot Dog",
  "Zinger Tortilla",
  "Zinger Supreme",
  "Zinger Supreme with Mushroom & Cream",
  "Crispy Nashmi Burger",
  "Fiery Crispy Burger",
  "Sweet Chili Burger",
  "BBQ Burger",
  "Family Box",
  "Value Box",
  "Kumpir Baked Potato",
  "Small Corn Cup",
  "Medium Corn Cup",
  "Large Corn Cup",
  "Hashemi Corn on the Cob",
  "Roasted Beetroot with Pomegranate & Honey",
  "Caesar Salad",
  "Fries & Zinger Cup",
  "Zinger Plate with Cheddar Cheese",
  "Hamleh Plate — Something Amazing",
  "Hashemi Box",
  "Matrix",
  "Ayran",
  "Sauce Cup",
  "Jalapeño Cup",
  "Extra Cheese"
];
const englishDescriptions={
  "11": "7 sandwiches, 4 fries, 3 zingers, 4 Matrix drinks",
  "12": "7 escalope burgers, 4 Matrix drinks, fries",
  "13": "Add sauce and hot dog to your potato: JOD 0.75",
  "23": "Zinger, corn, olives, jalapeños and fries"
};
const englishCategories={
  "sandwich": "Burgers & Zinger",
  "box": "Sharing Boxes",
  "potato": "Potatoes & Corn",
  "side": "Salads & Sides",
  "extras": "Extras"
};
const imageIds=[
  "angus",
  "angus-mushroom",
  "angus-beef-bacon",
  "hotdog",
  "tortilla",
  "supreme-v2",
  "mushroom-v2",
  "nashmi",
  "fiery",
  "sweet-chili",
  "bbq",
  "family-v3",
  "value",
  "kumpir",
  "corn-small-v3",
  "corn-medium-v3",
  "corn-large-v3",
  "corn-cob",
  "beetroot-v4",
  "caesar-v3",
  "fries-zinger",
  "cheddar",
  "hamleh-v2",
  "hashemi-box",
  "matrix",
  "ayran",
  "sauce",
  "jalapeno",
  "cheese-extra"
];
const shawarmaItems = [
  {name:'ساندويش شاورما عالصاج عادي', en:'Regular Saj Shawarma Sandwich', price:0.75},
  {name:'ساندويش شاورما عالصاج سوبر', en:'Super Saj Shawarma Sandwich', price:1.20},
  {name:'وجبة شاورما عالصاج عادي', en:'Regular Saj Shawarma Meal', price:2.20},
  {name:'وجبة شاورما عالصاج سوبر', en:'Super Saj Shawarma Meal', price:2.85},
  {name:'وجبة شاورما عالصاج دبل', en:'Double Saj Shawarma Meal', price:3.25},
  {name:'وجبة شاورما عالصاج تريبل', en:'Triple Saj Shawarma Meal', price:4.20},
  {name:'صندوق شاورما عالصاج العائلي', en:'Family Saj Shawarma Box', price:8.00,
   desc:'4 ساندويشات شاورما عالصاج سوبر، بطاطا، مخلل وصلصة الثوم.',
   enDesc:'4 super saj shawarma sandwiches, fries, pickles and garlic sauce.'}
];
categories.shawarma='شاورما عالصاج';
englishCategories.shawarma='Saj Shawarma';
shawarmaItems.forEach((item,photoIndex)=>{
  const index=menu.length;
  menu.push({cat:'shawarma',name:item.name,price:item.price,desc:item.desc,photoIndex});
  englishNames.push(item.en);
  if(item.enDesc) englishDescriptions[index]=item.enDesc;
});
let currentCategory='all';
function render(cat=currentCategory){currentCategory=cat;const en=document.documentElement.lang==='en';document.querySelector('#menu-items').innerHTML=menu.map((x,i)=>({...x,i})).filter(x=>cat==='all'||x.cat===cat).map(x=>{const prices=x.prices||(x.sandwich?[['ساندويشة',x.sandwich],['وجبة',x.meal]]:[['',x.price]]);const name=en?englishNames[x.i]:x.name;const desc=en?englishDescriptions[x.i]:x.desc;return `<article class="menu-card${x.bestseller?' bestseller-card':''}${x.cat==='shawarma'?' shawarma-card':''}">${imageIds[x.i]?`<div class="food-photo"><img src="food-${imageIds[x.i]}.webp" alt="${name}" width="720" height="720" loading="lazy" decoding="async">${x.bestseller?`<span class="bestseller-badge">${en?'Most ordered':'الأكثر طلبًا'}</span>`:''}</div>`:x.cat==='shawarma'?`<div class="food-photo shawarma-photo" role="img" aria-label="${name}" style="background-position:${(x.photoIndex%3)*50}% ${Math.floor(x.photoIndex/3)*50}%"></div>`:''}<div class="menu-card-body"><span class="category">${(en?englishCategories:categories)[x.cat]}</span><h3>${name}</h3>${desc?`<p class="description">${desc}</p>`:''}<div class="prices">${prices.map(([label,p])=>`<div class="price"><small>${en?({'ساندويشة':'Sandwich','وجبة':'Meal','صغير':'Small','وسط':'Medium','كبير':'Large'}[label]||label):label}</small><b dir="ltr">${p.toFixed(2)}</b><em>${en?'JOD':'د.أ'}</em></div>`).join('')}</div></div></article>`}).join('')}
document.querySelectorAll('[data-cat]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-cat]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render(b.dataset.cat)}));render();



