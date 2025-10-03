import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


// import page1 from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";

import Ready from "../../components/Ready/Ready";




const ComplexGuide1 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

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
      <title>가경 홍골공원 아르보레 - 호수배치도</title>
      <meta
        name="description"
        content="가경 홍골공원 아르보레 호수배치도: 세대별 위치·전망·일조(남향 위주)와 프라이버시 고려 배치를 확인하세요. 공원 조망과 타입별 특성을 비교해 나에게 맞는 동·호수를 선택하세요."
      />
      <link rel="canonical" href="https://www.sketchs.co.kr/ComplexGuide/detailintro" />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="가경 홍골공원 아르보레" />
      <meta property="og:title" content="가경 홍골공원 아르보레 - 호수배치도" />
      <meta
        property="og:description"
        content="가경 홍골공원 아르보레 호수배치도: 공원 조망 특화, 남향 위주 일조, 프라이버시 동·호수 배치 정보를 한눈에."
      />
      <meta property="og:url" content="https://www.sketchs.co.kr/ComplexGuide/detailintro" />
      <meta property="og:image" content="https://www.sketchs.co.kr/img/og/complex.jpg" />
      {/* 선택: 이미지 규격 명시
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}
    </Helmet>

    <Header isChanged={isScroll} />
    <FixIcon />
    <Bener title="호수배치도" />
    <MenuBar contents={menuContents} />

    {/* SEO: 페이지 제목/설명 */}
    <h1 className={styles.screenReaderOnly}>가경 홍골공원 아르보레 - 호수배치도</h1>
    <p className={styles.screenReaderOnly}>
      본 페이지에서는 가경 홍골공원 아르보레의 동·호수별 위치와 평면 배치를 제공합니다.
      남향 위주 일조와 공원 조망 가능 라인, 코너·판상 등의 타입 특성, 프라이버시와 채광을 비교해
      나에게 맞는 세대를 선택할 수 있도록 돕습니다.
    </p>

    {/* 히어로 카피 */}
    <div className={styles.textBox}>
      <div>일조·조망·프라이버시, 한눈에 비교</div>
      <div>가경 홍골공원 아르보레, 나에게 맞는 동·호수를 선택하세요</div>
    </div>




      {/* 이미지에 애니메이션 효과 추가 */}
      {/* <img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="가경 홍골공원 아르보레 호수배치도-image1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/> */}

      <Ready/>


  

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 호수배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와
          차이가 날 수 있습니다
        </div>
        <div className={styles.notice}>
          ※ 단지 내 조경 및 세부 식재계획, 시설물의 위치는 실제 시공시 현장
          상황에 따라 변경될 수 있습니다
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
