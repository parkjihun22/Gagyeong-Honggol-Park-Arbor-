// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>가경 홍골공원 아르보레</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>충청북도 청주시 흥덕구 가경동 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 2층 ~ 지상 29층, 7개 동(예정)</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 84㎡ 단일(타입 다양화 예정)</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 921세대, 10년 민간임대 후 분양전환(예정)</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="가경 홍골공원 아르보레 입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="가경 홍골공원 아르보레 입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            사직1구역 최중심 입지와 행정·의료·생활 인프라를 누리는<br />
            가경 홍골공원 아르보레 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];


function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "공원 특례·민간임대 프리미엄",
      desc:
        "홍골공원 특례사업·공원일체형 단지<br/>총 7개동 921세대(전용 84㎡ 중심) 민간임대<br/>10년 안정거주 후 분양전환(예정)",
    },
    {
      img: slide2,
      title: "행정·의료·생활 인프라 원스톱",
      desc:
        "홈플러스·터미널 상권 인접<br/>행정·의료·쇼핑·문화 인프라 풍부<br/>도보권 공원·산책로로 힐링 라이프",
    },
    {
      img: slide3,
      title: "도심·광역 교통 접근성",
      desc:
        "2·3순환로·청주강서IC 가까움<br/>BRT·고속/시외버스터미널 이용 편리<br/>KTX 오송·청주공항 접근성 우수",
    },
    {
      img: slide4,
      title: "교육·학세권 프리미엄",
      desc:
        "서현초·서현2초(신설) 등 통학권<br/>중·고교·학원가 인접(주변)<br/>안심 통학 동선 계획",
    },
    {
      img: slide5,
      title: "한양수자인 커뮤니티",
      desc:
        "피트니스·실내골프·작은도서관<br/>어린이집·스터디룸·라운지(예정)<br/>입주민 맞춤형 생활편의",
    },
    {
      img: slide6,
      title: "조경·설계 가치",
      desc:
        "지상차 최소·보행 중심 공원형 단지<br/>남향 위주·공원 조망 특화 설계<br/>대규모 녹지로 쾌적한 일상",
    },
  ];


  // ... 기존 컴포넌트 렌더링 로직 유지

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
