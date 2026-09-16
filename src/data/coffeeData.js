import heroBg from "../assets/images/hero-bg.jpg";
import aboutBg from "../assets/images/about-bg.jpg";
import menuBg from "../assets/images/menu-bg.jpg";
import galleryInterior from "../assets/images/gallery-1.jpg";
import galleryLifestyle from "../assets/images/gallery-2.jpg";
import galleryAtmosphere from "../assets/images/gallery-3.jpg";
import coffeeEspresso from "../assets/images/coffee-1.jpg";
import coffeeCappuccino from "../assets/images/coffee-2.jpg";
import coffeeAmericano from "../assets/images/coffee-3.jpg";
import coffeeLatte from "../assets/images/coffee-4.jpg";
import ctaBg from "../assets/images/cta-bg.jpg";

export const images = {
  heroBg,
  aboutBg,
  menuBg,
  galleryInterior,
  galleryLifestyle,
  galleryAtmosphere,
  coffeeEspresso,
  coffeeCappuccino,
  coffeeAmericano,
  coffeeLatte,
  ctaBg,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

export const features = [
  {
    id: "quality",
    title: "Kualitas Premium",
    description: "Bijih kopi pilihan terbaik dari petani lokal.",
  },
  {
    id: "flavor",
    title: "Rasa Autentik",
    description: "Perpaduan sempurna antara aroma dan rasa.",
  },
  {
    id: "delivery",
    title: "Pengiriman Cepat",
    description: "Kopi sampai di tanganmu dengan aman.",
  },
  {
    id: "loyal",
    title: "Pelanggan Setia",
    description: "Ribuan pelanggan puas telah merasakan.",
  },
];

// Primary menu — each has a full photograph.
export const featuredMenu = [
  {
    id: "espresso",
    name: "Espresso",
    price: "Rp 18.000",
    description: "Pekat, intens, dan penuh karakter dalam satu tegukan singkat.",
    image: coffeeEspresso,
    tag: "Klasik",
  },
  {
    id: "americano",
    name: "Americano",
    price: "Rp 20.000",
    description: "Espresso yang diperpanjang dengan air panas, ringan dan bersih.",
    image: coffeeAmericano,
    tag: "Ringan",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: "Rp 25.000",
    description: "Busa susu lembut bertemu espresso dalam keseimbangan sempurna.",
    image: coffeeCappuccino,
    tag: "Favorit",
  },
  {
    id: "latte",
    name: "Latte",
    price: "Rp 26.000",
    description: "Lembut, creamy, dengan latte art yang dibuat penuh perhatian.",
    image: coffeeLatte,
    tag: "Lembut",
  },
];

// Secondary picks — compact list, styled differently on purpose so the
// section has rhythm rather than six identical photo cards.
export const secondaryMenu = [
  {
    id: "mocha",
    name: "Mocha",
    price: "Rp 28.000",
    description: "Espresso, cokelat gelap, dan susu — manis tanpa berlebihan.",
    image: coffeeEspresso,
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    price: "Rp 30.000",
    description: "Vanilla, susu, espresso, ditutup guratan karamel hangat.",
    image: coffeeAmericano,
  },
];

export const galleryItems = [
  {
    id: "interior",
    image: galleryInterior,
    caption: "Ruang duduk utama, pagi hari",
    size: "wide",
  },
  {
    id: "lifestyle",
    image: galleryLifestyle,
    caption: "Menyajikan dengan perhatian",
    size: "tall",
  },
  {
    id: "atmosphere",
    image: galleryAtmosphere,
    caption: "Racikan pour-over, satu per satu",
    size: "tall",
  },
  {
    id: "detail-latte",
    image: coffeeCappuccino,
    caption: "Latte art, setiap cangkir",
    size: "small",
  },
  {
    id: "detail-counter",
    image: aboutBg,
    caption: "Meja kayu, sore hari",
    size: "small",
  },
  {
    id: "detail-beans",
    image: coffeeLatte,
    caption: "Aroma yang mengundang",
    size: "wide",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Amara Putri",
    role: "Pelanggan Tetap, Jakarta",
    quote:
      "Rasa kopinya benar-benar enak. Tempatnya juga nyaman banget untuk nongkrong.",
    rating: 5,
  },
  {
    id: 2,
    name: "Raka Pratama",
    role: "Pekerja Lepas",
    quote: "Pelayanannya ramah dan kopinya selalu fresh.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Lindt",
    role: "Traveler",
    quote: "One of my favorite coffee spots. Definitely coming back!",
    rating: 5,
  },
  {
    id: 4,
    name: "Dimas Aditya",
    role: "Barista Enthusiast",
    quote: "Racikan manual brew-nya konsisten. Terasa niat dari biji sampai cangkir.",
    rating: 5,
  },
];
