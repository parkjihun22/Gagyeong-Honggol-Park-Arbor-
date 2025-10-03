import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="가경 홍골공원 아르보레-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

// 문구만 푸르지오자이 기준으로 전면 교체한 버전
const contents = (text, isLoaded) => { 
  if (text === '신영지웰' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '가경 홍골공원 아르보레') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공원을 품은 민간임대, 청주 가경 홍골공원 아르보레.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          터미널·홈플러스·순환로가 가까운 원스톱 생활 인프라.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          한양수자인의 브랜드 품질로 완성되는 프리미엄 라이프.
        </div>
      </>
    );
  } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          청주시 흥덕구 가경동, 지하2층~지상29층 총 7개동 921세대(예정).
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전용 84㎡ 단일 구성(타입 다양화), 10년 민간임대 후 분양전환(예정).
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          남향 위주 배치와 공원 조망 특화로 채광·통풍·개방감 극대화.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          시공: 한양수자인(예정), 공원·주거 복합 특화로 안정 거주와 미래가치를 동시에.
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          홈플러스·고속/시외버스터미널·행정·의료·교육이 가까운 생활권.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          홍골공원 일체형 녹지, 산책로·근린공원으로 완성되는 쾌적한 일상.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          순환로·IC·BRT·KTX 오송 접근성으로 광역 교통 프리미엄.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          지상차량 최소화·대규모 조경의 공원형 단지, 공원과 바로 이어지는 동선.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전용 84㎡ 중심 3개 타입 구성, 드레스룸·팬트리 등 수납 특화 설계.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          피트니스·실내골프·작은도서관·어린이집 등 커뮤니티 맞춤 계획.
        </div>
      </>
    );
  } else {
    // 기타 탭 대비 기본 문구 (필요 시 조정 가능)
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          가경 홍골공원 아르보레, 공원 속에서 누리는 새로운 주거 기준.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          한양수자인이 제안하는 10년 안정 거주와 분양전환 기회.
        </div>
      </>
    );
  }
};




