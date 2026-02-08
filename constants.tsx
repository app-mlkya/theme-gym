
import React from 'react';
import { Product, Testimonial } from './types';

export const LogoIcon = () => (
  <svg viewBox="0 0 100 60" fill="currentColor" className="w-10 h-10 text-[#8B4513]">
    <path d="M10,40 Q25,10 50,20 Q75,10 90,40 Q90,55 75,50 Q50,60 25,50 Q10,55 10,40" fill="none" stroke="currentColor" strokeWidth="4"/>
    <path d="M25,32 Q35,25 45,30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M55,30 Q65,25 75,32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40,45 Q50,42 60,45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "كرواسون الزبدة الفاخر",
    description: "مخبوز بطبقات رقيقة من الزبدة الطبيعية المقطوفة طازجاً.",
    price: 15,
    category: 'pastry',
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "خبز الريف الأسمر",
    description: "خبز صحي بالخميرة الطبيعية وحبوب القمح الكاملة.",
    price: 25,
    category: 'bread',
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "كعكة العسل الروسية",
    description: "طبقات هشة من البسكويت بالعسل وكريمة القشطة الغنية.",
    price: 45,
    category: 'cake',
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "خبز الباغيت الفرنسي",
    description: "مقرمش من الخارج وهش من الداخل، المذاق الفرنسي الأصلي.",
    price: 10,
    category: 'bread',
    image: "https://images.unsplash.com/photo-1597079910443-60c43fc4f729?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    name: "دانيش التوت المشكل",
    description: "فطائر محلاة بقطع التوت الطازج والكاسترد الكريمي.",
    price: 20,
    category: 'pastry',
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 6,
    name: "ساندوتش الجبنة والزعتر",
    description: "مزيج لذيذ من الجبن النابلسي والزعتر الفلسطيني الأصيل.",
    price: 18,
    category: 'savory',
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "سارة الأحمد",
    rating: 5,
    comment: "أفضل كرواسون تذوقته في حياتي! الرائحة تأخذك لعالم آخر.",
    avatar: "https://picsum.photos/seed/sara/100"
  },
  {
    id: 2,
    name: "محمد خالد",
    rating: 5,
    comment: "خبز الريف عندهم لا يعلى عليه. طعم ريفي أصيل ونظافة عالية.",
    avatar: "https://picsum.photos/seed/mohammed/100"
  },
  {
    id: 3,
    name: "ليلى محمود",
    rating: 4,
    comment: "كعكة العسل كانت نجمة الحفلة، الجميع سأل عن مصدرها.",
    avatar: "https://picsum.photos/seed/layla/100"
  }
];
