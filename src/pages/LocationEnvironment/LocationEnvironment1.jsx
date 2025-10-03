import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

// 1) 입지 카드 데이터 교체
const LocationSection = [
  {
    img: section2Image1,
    titleText: "공원 특례지 개발<br />쾌적성과 미래가치 동시 확보",
    contentText:
      "홍골근린공원 특례사업으로 조성되는 민간임대 단지<br />공원과 주거가 공존하는 친환경 입지로 가치 상승 기대",
  },
  {
    img: section2Image2,
    titleText: "행정·의료 인프라 인접<br />원스톱 생활권",
    contentText:
      "청주시청, 청주의료원, 충북대병원 접근 용이<br />관공서·금융·문화시설까지 생활 편리",
  },
  {
    img: section2Image3,
    titleText: "광역 교통망과 도심 접근성<br />편리한 이동",
    contentText:
      "가경대로·직지대로·1·2순환로 인접<br />청주IC·서청주IC·오송역 연계로 광역 이동 수월",
  },
  {
    img: section2Image4,
    titleText: "풍부한 생활 인프라<br />도보권 라이프",
    contentText:
      "가경동 롯데마트·CGV·성안길 상권 가까움<br />대형마트·쇼핑·문화시설을 누리는 생활 편의",
  },
  {
    img: section2Image5,
    titleText: "교육환경 프리미엄<br />초·중·고 학세권",
    contentText:
      "가경초·운천초·서원중 등 인접<br />학원가와 교육 인프라까지 편리하게 이용 가능",
  },
  {
    img: section2Image6,
    titleText: "공원과 녹지 프리미엄<br />일상 속 힐링",
    contentText:
      "홍골근린공원과 맞닿은 쾌적한 주거<br />단지 내 공원형 조경으로 자연 속 생활",
  },
];


// 2) 페이지 컴포넌트(메타/OG/트위터/JSON-LD/히어로 카피 수정)
const LocationEnvironment1 = () => {
  const menuContents = [
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
        <title>가경 홍골공원 아르보레 - 입지환경</title>
        <meta
          name="description"
          content="가경 홍골공원 아르보레의 입지환경을 확인하세요. 가경동 홍골근린공원 특례사업 인접, 2·3순환로·청주강서IC·BRT·KTX 오송역 연계로 광역 접근 우수. 홈플러스·터미널 상권·의료·교육까지 원스톱 생활 인프라."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.sketchs.co.kr/LocationEnvironment/intro" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="가경 홍골공원 아르보레" />
        <meta property="og:title" content="가경 홍골공원 아르보레 - 입지환경" />
        <meta
          property="og:description"
          content="도심·광역 교통과 생활 인프라가 집약된 가경 홍골공원 아르보레의 핵심 입지 정보를 한눈에. 공원 일체형 입지, 2·3순환로·IC·BRT·KTX 오송 접근성, 홈플러스·터미널 상권."
        />
        <meta property="og:url" content="https://www.sketchs.co.kr/LocationEnvironment/intro" />
        <meta property="og:image" content="https://www.sketchs.co.kr/img/og/location.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="가경 홍골공원 아르보레 - 입지환경" />
        <meta
          name="twitter:description"
          content="가경동 홍골공원 특례 인접, 2·3순환로·청주강서IC·BRT·KTX 오송까지 편리한 접근과 홈플러스·터미널 상권 등 풍부한 인프라."
        />
        <meta name="twitter:image" content="https://www.sketchs.co.kr/img/og/location.jpg" />
        <meta name="twitter:url" content="https://www.sketchs.co.kr/LocationEnvironment/intro" />

        {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "가경 홍골공원 아르보레 - 입지환경",
            url: "https://www.sketchs.co.kr/LocationEnvironment/intro",
            description:
              "가경동 홍골근린공원 특례 인접, 2·3순환로·청주강서IC·BRT·KTX 오송역 연계로 광역 이동이 편리하고, 홈플러스·고속/시외버스터미널 상권·의료·교육 인프라를 갖춘 입지환경.",
            primaryImageOfPage: {
              "@type": "ImageObject",
              contentUrl: "https://www.sketchs.co.kr/img/og/location.jpg",
              width: 1200,
              height: 630
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "홈", item: "https://www.sketchs.co.kr/" },
                { "@type": "ListItem", position: 2, name: "입지환경", item: "https://www.sketchs.co.kr/LocationEnvironment/intro" }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />

      {/* SEO: 페이지 제목/설명 */}
      <h1 className={styles.screenReaderOnly}>가경 홍골공원 아르보레 - 입지환경</h1>
      <p className={styles.screenReaderOnly}>
        가경 홍골공원 아르보레는 가경동 홍골근린공원 특례사업과 맞닿은 공원 일체형 입지입니다.
        2·3순환로와 청주강서IC, BRT·고속/시외버스터미널, KTX 오송역 연계로 광역 이동이 편리하며,
        홈플러스와 터미널 상권, 의료·교육·문화 인프라가 가까운 원스톱 생활권을 제공합니다.
      </p>

      {/* 히어로 카피 교체 */}
      <div className={styles.textBox}>
        <div>공원과 도심, 모두 가까운 입지</div>
        <div>가경 홍골공원 아르보레에서 누리는 생활·교통 프리미엄</div>
      </div>



      <img
        src={page1}
        className={styles.image2}
        alt="가경 홍골공원 아르보레입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 가경 홍골공원 아르보레 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
