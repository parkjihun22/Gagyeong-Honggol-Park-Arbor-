import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/guide/supply.jpg"




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

      <Bener title="청약안내" />
      <MenuBar contents={menuContents} />

      {/* SEO: 페이지 제목/설명 */}
      <h1 className={styles.screenReaderOnly}>
          가경 홍골공원 아르보레 - 청약안내
        </h1>
        <p className={styles.screenReaderOnly}>
          가경 홍골공원 아르보레 민간임대 신청 안내 페이지에서는 모집 일정, 신청 자격 요건,
          필요 서류와 신청 절차(온라인/현장 접수)를 확인할 수 있습니다.
          접수 전 유의사항과 당첨자 발표·계약 절차를 사전에 숙지해
          10년 안정 거주 후 분양전환(예정) 기회를 놓치지 마세요.
        </p>

        {/* 히어로 카피 */}
        <div className={styles.textBox}>
          <div>임대 신청 절차와 일정을 확인하세요</div>
          <div>가경 홍골공원 아르보레, 안정 거주의 시작</div>
        </div>


      {/* 이미지 애니메이션 */}
      <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="가경 홍골공원 아르보레 - 청약안내문 -image1"
        onLoad={handleImageLoad}
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 것으로, 성공적인 청약 진행에 참고 자료로 제공됩니다.
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default ComplexGuide1;
