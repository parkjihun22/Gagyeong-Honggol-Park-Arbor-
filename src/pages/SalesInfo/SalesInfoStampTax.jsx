import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/SalesInfoStampTax/page1.jpg";




const ComplexGuide1 = () => {
  const menuContents = [
    { title: "공급안내", url: "/SalesInfo/guide" },
    { title: "정당계약안내문", url: "/SalesInfo/SubscriptionGuide" },
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

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="인지세 납부 안내" />

      <MenuBar contents={menuContents} />

        {/* SEO: 페이지 제목/설명 */}
        <h1 className={styles.screenReaderOnly}>
          가경 홍골공원 아르보레 - 인지세 납부 안내
        </h1>
        <p className={styles.screenReaderOnly}>
          가경 홍골공원 아르보레 인지세 납부 안내 페이지에서는 분양계약 시 발생하는 인지세 정보를 제공합니다.
          인지세는 계약서 작성 시 부과되는 세금으로, 세액 산정 기준과 납부 절차를 사전에 확인하는 것이 중요합니다.
          본 안내에서는 인지세 금액, 납부 방법, 제출 기한 및 유의사항을 상세히 설명하여,
          계약자가 혼동 없이 준비할 수 있도록 돕습니다.
        </p>

        {/* 히어로 카피 */}
        <div className={styles.textBox}>
          <div>분양계약 전 꼭 확인해야 할 세금</div>
          <div>가경 홍골공원 아르보레, 인지세 납부 가이드</div>
        </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="가경 홍골공원 아르보레 인지세 납부 안내 이미지"
        onLoad={handleImageLoad}
      />




      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 것으로 성공적인 청약을 위해
          도움을 드리고있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
