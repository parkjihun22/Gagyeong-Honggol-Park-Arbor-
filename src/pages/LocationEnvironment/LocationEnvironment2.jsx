import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>가경 홍골공원 아르보레 - 프리미엄</title>
        <meta
          name="description"
          content="가경 홍골공원 아르보레 프리미엄: 홍골근린공원 특례 기반의 공원 일체형 단지, 7개동 921세대(전용 84㎡ 중심) 10년 민간임대 후 분양전환(예정). 한양수자인 커뮤니티와 조경, 2·3순환로·청주강서IC·BRT·KTX 오송 접근성을 확인하세요."
        />
        <link rel="canonical" href="https://www.sketchs.co.kr/LocationEnvironment/primium" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />

      <MenuBar contents={menuContents} />

      {/* SEO: 페이지 제목/설명 */}
      <h1 className={styles.screenReaderOnly}>가경 홍골공원 아르보레 - 프리미엄</h1>
      <p className={styles.screenReaderOnly}>
        가경 홍골공원 아르보레만의 프리미엄을 만나보세요.
        홍골근린공원 특례 기반의 공원 일체형 설계, 남향 위주 배치와 공원 조망 특화,
        전용 84㎡ 중심 7개동 921세대의 10년 민간임대 후 분양전환(예정),
        한양수자인 커뮤니티와 보행 중심 단지 동선, 2·3순환로·청주강서IC·BRT·KTX 오송 연계로
        완성되는 생활·교통 프리미엄을 제공합니다.
      </p>

      {/* 히어로 카피 */}
      <div className={styles.textBox}>
        <div>공원을 품은 일상의 프리미엄</div>
        <div>가경 홍골공원 아르보레, 한양수자인이 높이는 주거 기준</div>
      </div>

      <img
        src={page1}
        className={styles.image3}
        alt="가경 홍골공원 아르보레  프리미엄안내 이미지"
      />


      
      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
