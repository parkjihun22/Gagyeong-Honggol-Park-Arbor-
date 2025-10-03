import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/SalesInfo/SubscriptionGuide/legitimate.jpg";


import Ready from "../../components/Ready/Ready";





const ComplexGuide1 = () => {
  const menuContents = [
    { title: "공급안내", url: "/SalesInfo/guide" },
    // { title: "정당계약안내문", url: "/SalesInfo/SubscriptionGuide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    // { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
  const { pathname } = useLocation(); // 현재 경로를 가져옴

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

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
        <Helmet>
          <title>가경 홍골공원 아르보레 - 정당계약안내</title>
          <meta
            name="description"
            content="가경 홍골공원 아르보레 청약방법을 확인하세요. 청약 자격, 신청 절차, 준비서류 및 유의사항을 단계별로 상세히 안내합니다."
          />
          <link rel="canonical" href="https://www.sketchs.co.kr/SalesInfo/SubscriptionGuide" />
          <meta name="robots" content="index,follow" />
        </Helmet>

        <Header isChanged={isScroll} />
        <FixIcon />

        <Bener title="정당계약안내" />

        <MenuBar contents={menuContents} />

        {/* SEO: 페이지 제목/설명 */}
        <h1 className={styles.screenReaderOnly}>
          가경 홍골공원 아르보레 - 정당계약안내
        </h1>
        <p className={styles.screenReaderOnly}>
          가경 홍골공원 아르보레 정당계약안내 페이지에서는 청약 당첨자가 반드시 확인해야 할 
          계약 자격 요건, 진행 절차, 제출 서류, 유의사항 등을 안내합니다.
          단계별 절차를 정리하여 계약자가 혼동 없이 준비할 수 있도록 돕습니다.
        </p>

        <div className={styles.textBox}>
          <div>청약 절차를 한눈에</div>
          <div>가경 홍골공원 아르보레와 함께하세요</div>
        </div>

        {/* 이미지에 애니메이션 효과 추가 */}
        {/* <img
          className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
          src={page1}
          alt="가경 홍골공원 아르보레 정당계약안내 이미지"
          onLoad={handleImageLoad}
        /> */}

        <Ready/>

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 가경 홍골공원 아르보레 정당계약안내 페이지에서는 청약 자격 조건, 신청 절차,
          준비해야 할 서류, 주의사항 등을 확인할 수 있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
