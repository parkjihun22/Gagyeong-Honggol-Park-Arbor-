import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/SalesInfo/SalesInfoAnnouncement/supply.jpg";
import pdfIcon from "../../assets/icons/pdf-icon.png";  // PDF 아이콘 이미지 임포트


const ComplexGuide1 = () => {
  const menuContents = [
    { title: "공급안내", url: "/SalesInfo/guide" },
    { title: "정당계약안내문", url: "/SalesInfo/SubscriptionGuide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    // { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const { pathname } = useLocation();

  // 페이지 로드 시 상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 스크롤 이벤트로 헤더 상태 변경
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

  // PDF 새 창으로 열기 함수
  const openPDF = () => {
    setIsLoading(true); // PDF 로딩 시작
    const pdfUrl = "/announcement.pdf"; // 실제 PDF 파일 경로로 수정
    const newWindow = window.open(pdfUrl, "_blank");

    // PDF 로딩 후 로딩 상태 해제
    newWindow.onload = () => {
      setIsLoading(false);
    };
  };

  return (
    <div className={styles.container}>

  
      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="모집공고안내" />
      <MenuBar contents={menuContents} />

        {/* SEO: 페이지 제목/설명 (스크린리더용) */}
        <h1 className={styles.screenReaderOnly}>
          가경 홍골공원 아르보레 - 모집공고안내
        </h1>
        <p className={styles.screenReaderOnly}>
          가경 홍골공원 아르보레의 임대공급(입주자) 모집공고는 청약 이전 단계에서 확인해야 할
          공식 안내문입니다. 본 페이지에서는 공급 세대수와 전용면적, 임대보증금·임대료,
          신청 자격 요건과 접수 일정, 당첨자 발표 및 계약 절차, 제출 서류와 유의사항을
          체계적으로 확인하실 수 있습니다. 예비 신청자가 혼동 없이 준비하도록 핵심 정보를 제공합니다.
          (임대 10년 후 분양전환 예정)
        </p>

        {/* 히어로 카피 */}
        <div className={styles.textBox}>
          <div>임대공급 모집공고를 확인하세요</div>
          <div>가경 홍골공원 아르보레</div>
        </div>



      <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="가경 홍골공원 아르보레모집공고안내-image1"
        onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
         />
      {/* 입주자 모집공고 PDF로 보기 버튼 */}
       <button onClick={openPDF} className={styles.pdfButton}>
                <img src={pdfIcon} alt="PDF 아이콘" className={styles.pdfIcon} /> 
                <span>모집공고 PDF<br/>확인하기</span>
            </button>


      {/* 로딩 중일 때 표시할 스피너 */}
      {isLoading && (
        <div className={styles.loader}>
          <p>파일을 로딩 중입니다...</p>
          {/* 여기에 스피너 아이콘 추가 가능 */}
          <div className={styles.spinner}></div>
        </div>
      )}
      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를
          확인하시기 바랍니다.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComplexGuide1;
