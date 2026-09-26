const salons = [
  {
    id: 1,
    name: "Maison de Joelle Basrah",
    location: "البصرة - الطويسة، شارع دينار، مقابل مديرية الشباب والرياضة، بناية دي نوفو",
    rating: 4.9,
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "صالون Maison de Joelle في البصرة يقدم تجربة تجميل فاخرة تشمل الشعر والمكياج والعناية الشخصية.",
    services: ["تصفيف شعر", "مكياج", "عناية بالبشرة", "أظافر", "تجهيز عروس"],
    specialists: ["خبيرات شعر", "خبيرات مكياج", "اختصاصيات عناية وتجميل"],
    instagram: "https://www.instagram.com/maisondejoellebasrah/",
    facebook: "https://www.facebook.com/joelle.dinar/",
    whatsapp: null,
    phone: null,
    latitude: 30.508,
    longitude: 47.783
  },
  {
    id: 2,
    name: "Basra Beauty Clinic",
    location: "البصرة - بريهة، فرع فندق البصرة السياحي، قرب قرطاسية ألوان 2",
    rating: 4.7,
    image: "https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "عيادة تجميل وليزر في البصرة تقدم خدمات التجميل والعناية بالبشرة وزراعة الشعر.",
    services: ["تجميل وليزر", "عناية بالبشرة", "علاج الشعر", "زراعة الشعر", "استشارات تجميلية"],
    specialists: ["أطباء تجميل", "اختصاصيو ليزر", "اختصاصيو عناية بالبشرة"],
    instagram: "https://www.instagram.com/basra_beauty_clinic/",
    facebook: "https://www.facebook.com/100063982394379/",
    whatsapp: "https://wa.me/9647718877977",
    phone: "+964 771 887 7977",
    mapQuery: "Basra Beauty Clinic, بريهة، فرع فندق البصرة السياحي، البصرة، العراق",
    latitude: 30.5105,
    longitude: 47.7889
  },
  {
    id: 3,
    name: "Royal Glow Studio",
    location: "البصرة - المعقل",
    rating: 4.8,
    image: "https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "استوديو تجميل فاخر يقدم خدمات عناية متكاملة، مكياج احترافي، ومواعيد مخصصة للنساء والعرائس.",
    services: ["مكياج فني", "تقليم شعر", "حواجب ورموش", "عناية شخصية", "إعداد عروس"],
    specialists: ["أميرة - مكياج عرس", "سما - خبيره حواجب", "ملاك - اختصاصية شعر"],
    instagram: "https://www.instagram.com/royalglowstudio/",
    facebook: "https://www.facebook.com/royalglowstudio/",
    whatsapp: "https://wa.me/9647700000003",
    phone: "+964 770 000 0003",
    latitude: 30.4958,
    longitude: 47.8101
  },
  {
    id: 4,
    name: "Beauty Lab Salon",
    location: "البصرة - حي صنعاء، شارع الوفود، قرب ديوان للأثاث",
    rating: 4.6,
    image: "https://images.pexels.com/photos/3993312/pexels-photo-3993312.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "صالون بيوتي لاب في البصرة يقدم خدمات الشعر والأظافر والعناية بالجمال في حي صنعاء.",
    services: ["تصفيف شعر", "صبغات شعر", "أظافر وجلش", "عناية بالبشرة", "مكياج"],
    specialists: ["اختصاصيات شعر", "خبيرات أظافر", "خبيرات مكياج"],
    instagram: "https://www.instagram.com/beautylab.iq/",
    facebook: "https://www.facebook.com/100076137521516/",
    whatsapp: "https://wa.me/9647833283888",
    phone: "+964 783 328 3888",
    mapQuery: "Beauty Lab Salon, Alwufud Street, حي صنعاء، البصرة، العراق",
    latitude: 30.5391,
    longitude: 47.8311
  },
  {
    id: 5,
    name: "Nosa Center",
    location: "البصرة - الجزائر، شارع السعدي",
    rating: 4.9,
    image: "https://images.pexels.com/photos/3762455/pexels-photo-3762455.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "مركز نوسه للتجميل للنساء فقط في البصرة، ويقدم خدمات التجميل والعناية الشخصية للسيدات.",
    services: ["مكياج", "تصفيف شعر", "عناية بالبشرة", "أظافر", "تجهيز مناسبات"],
    specialists: ["خبيرات تجميل", "اختصاصيات شعر", "اختصاصيات عناية بالبشرة"],
    instagram: null,
    facebook: "https://www.facebook.com/nosa.basrah/",
    whatsapp: null,
    phone: null,
    mapQuery: "Nosa Center, Al Saadi Street, Al Jazaer, Basra, Iraq",
    latitude: 30.5169,
    longitude: 47.8411
  },
  {
    id: 6,
    name: "Sefora Beauty Studio",
    location: "البصرة - حي الخضراء، الشمشوميه",
    rating: 4.8,
    image: "https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "صالون سيفورا يقدم خدمات العناية بالشعر، المكياج الاحترافي، وتهيئة المناسبات في أجواء أنيقة ومريحة للزبونات.",
    services: ["مكياج احترافي", "تصفيف شعر", "حواجب ورموش", "عناية شخصية", "أظافر"],
    specialists: ["لافين - خبيرة مكياج", "سيفور - اختصاصية شعر", "ملاك - أظافر"],
    instagram: "https://www.instagram.com/seforabeautystudio/",
    facebook: "https://www.facebook.com/seforabeautystudio/",
    whatsapp: "https://wa.me/9647700000006",
    phone: "+964 770 000 0006",
    latitude: 30.5324,
    longitude: 47.7873
  },
  {
    id: 7,
    name: "Al Noor Beauty Lounge",
    location: "البصرة - مناوي باشا، الجسر الإيطالي، فرع معرض الرونق",
    rating: 4.7,
    image: "https://images.pexels.com/photos/3993465/pexels-photo-3993465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "صالون النور يركز على العناية بالبشرة، تصفيف الشعر، والخدمات الجمالية اليومية مع تركيز على الراحة والاهتمام الشخصي.",
    services: ["عناية البشرة", "تصفيف", "مساج", "أظافر", "تسريح شعر"],
    specialists: ["هدى - عناية البشرة", "زينب - تصفيف", "هبة - مساج"],
    instagram: "https://www.instagram.com/alnoorbeautylounge/",
    facebook: "https://www.facebook.com/alnoorbeautylounge/",
    whatsapp: "https://wa.me/9647700000007",
    phone: "+964 770 000 0007",
    latitude: 30.5019,
    longitude: 47.8154
  },
  {
    id: 8,
    name: "Lazurdi Salon",
    location: "البصرة - حي عمان، شارع مستشفى ابن غزوان",
    rating: 4.9,
    image: "https://images.pexels.com/photos/3993461/pexels-photo-3993461.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "صالون لازوردي يقدم خدمات تجميل أولية ومتقدمة، مع تركيز على التجميل الاحترافي واستعادة الثقة للزبائن.",
    services: ["تجميل", "حواجب ورموش", "تلوين شعر", "عناية شخصية", "جلسات تجميل"],
    specialists: ["أمل - تجميل", "جنى - رموش", "رنا - شعر"],
    instagram: "https://www.instagram.com/lazurdisalon/",
    facebook: "https://www.facebook.com/lazurdisalon/",
    whatsapp: "https://wa.me/9647700000008",
    phone: "+964 770 000 0008",
    latitude: 30.5088,
    longitude: 47.7991
  },
  {
    id: 9,
    name: "Luna Beauty Plus",
    location: "البصرة - مناوي باشا، شارع مدرسة الفجر، شارع 14 تموز",
    rating: 4.8,
    image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "صالون لونا مختص في تجميل المناسبات، تصفيف الشعر، والخدمات التجميلية المميزة مع خدمة مميزة وعناية كاملة.",
    services: ["تصفيف شعر", "مكياج مناسبة", "حواجب ورموش", "عناية شخصي", "أظافر"],
    specialists: ["سلمى - مكياج", "ميس - تصفيف", "هيفاء - حواجب"],
    instagram: "https://www.instagram.com/lunabeautyplus/",
    facebook: "https://www.facebook.com/lunabeautyplus/",
    whatsapp: "https://wa.me/9647700000009",
    phone: "+964 770 000 0009",
    latitude: 30.5187,
    longitude: 47.8309
  }
];

const operatingHours = [
  "يومياً 10:00 ص - 10:00 م",
  "السبت - الخميس 9:00 ص - 9:00 م",
  "يومياً 11:00 ص - 11:00 م",
  "السبت - الخميس 10:00 ص - 10:00 م",
  "يومياً 10:00 ص - 9:00 م",
  "السبت - الخميس 10:00 ص - 10:00 م",
  "يومياً 9:00 ص - 9:00 م",
  "السبت - الخميس 10:00 ص - 10:00 م",
  "يومياً 10:00 ص - 10:00 م"
];

const priceRanges = [
  "متوسط السعر: 25,000 - 100,000 د.ع",
  "متوسط السعر: 40,000 - 180,000 د.ع",
  "متوسط السعر: 30,000 - 120,000 د.ع",
  "متوسط السعر: 20,000 - 90,000 د.ع",
  "متوسط السعر: 25,000 - 100,000 د.ع",
  "متوسط السعر: 20,000 - 85,000 د.ع",
  "متوسط السعر: 15,000 - 75,000 د.ع",
  "متوسط السعر: 25,000 - 110,000 د.ع",
  "متوسط السعر: 25,000 - 100,000 د.ع"
];

const reviews = [
  "الخدمة مرتبة والنتيجة جميلة جداً.",
  "المكان نظيف والتعامل راقٍ.",
  "تجربة ممتازة وسأكرر الزيارة.",
  "الخبيرات محترفات والمواعيد منظمة.",
  "المكياج كان ناعماً ومناسباً للمناسبة.",
  "خدمة لطيفة واهتمام واضح بالتفاصيل.",
  "النتيجة ممتازة والأسعار مناسبة.",
  "مكان مريح وخيارات الخدمات متنوعة.",
  "التجهيز كان سريعاً والنتيجة جميلة."
];

const specialistImages = [
  "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3762774/pexels-photo-3762774.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3762922/pexels-photo-3762922.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3764012/pexels-photo-3764012.jpeg?auto=compress&cs=tinysrgb&w=400"
];

const specialistNames = [
  ["سارة", "نور", "رنا"],
  ["ليان", "مها", "زينب"],
  ["أميرة", "سما", "ملاك"],
  ["شهد", "ريم", "آية"],
  ["نوسه", "هدى", "زهراء"],
  ["لافين", "سيفور", "ملاك"],
  ["هدى", "زينب", "هبة"],
  ["أمل", "جنى", "رنا"],
  ["سلمى", "ميس", "هيفاء"]
];

const specialistBios = [
  "خبيرة تهتم بالتفاصيل وتمنح كل زبونة إطلالة تناسب شخصيتها.",
  "متخصصة في اللمسات الناعمة والنتائج الطبيعية للمناسبات اليومية.",
  "تجمع بين الخبرة والذوق العصري لتقديم نتيجة أنيقة ومتناسقة."
];

const enrichedSalons = salons.map((salon, index) => ({
  ...salon,
  specialists: salon.specialists.map((specialist, specialistIndex) => ({
    name: specialist.includes(" - ")
      ? specialist.split(" - ")[0]
      : specialistNames[index][specialistIndex],
    role: specialist.includes(" - ")
      ? specialist.split(" - ").slice(1).join(" - ")
      : specialist,
    bio: specialistBios[specialistIndex],
    services: [
      salon.services[specialistIndex % salon.services.length],
      salon.services[(specialistIndex + 1) % salon.services.length]
    ],
    image: index === 0 && specialistIndex === 2
      ? "https://images.pexels.com/photos/3762876/pexels-photo-3762876.jpeg?auto=compress&cs=tinysrgb&w=400"
      : specialistImages[(index * 3 + specialistIndex) % specialistImages.length]
  })),
  hours: operatingHours[index],
  priceRange: priceRanges[index],
  reviewCount: 18 + index * 7,
  reviews: [{
    author: ["زهراء", "سارة", "نور", "ريم", "بتول", "ليان", "مريم", "آية", "رنا"][index],
    rating: salon.rating,
    text: reviews[index],
    date: "منذ أسبوعين"
  }]
}));

export default enrichedSalons;