import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		{ title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
			<Helmet>
			<title>가경 홍골공원 아르보레 - 홍보영상</title>
			<meta
				name="description"
				content="가경 홍골공원 아르보레 홍보영상: 홍골공원 특례사업, 총 7개동 921세대(전용 84㎡ 중심) 10년 민간임대 후 분양전환(예정). 공원 일체형 설계와 커뮤니티를 영상으로 확인하세요."
			/>
			<link rel="canonical" href="https://www.sketchs.co.kr/Brand/video" />
			<meta name="robots" content="index,follow" />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="가경 홍골공원 아르보레" />
			<meta property="og:title" content="가경 홍골공원 아르보레 - 홍보영상" />
			<meta
				property="og:description"
				content="청주 가경동, 공원과 일상이 맞닿은 아파트. 7개동 921세대(전용 84㎡), 10년 민간임대 후 분양전환(예정), 한양수자인 커뮤니티까지 영상을 통해 만나보세요."
			/>
			<meta property="og:url" content="https://www.sketchs.co.kr/Brand/video" />
			<meta property="og:image" content="https://www.sketchs.co.kr/images/og/main.jpg" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="가경 홍골공원 아르보레 - 홍보영상" />
			<meta
				name="twitter:description"
				content="공원 특례·민간임대 프리미엄, 7개동 921세대와 한양수자인 커뮤니티를 담은 영상."
			/>
			<meta name="twitter:image" content="https://www.sketchs.co.kr/images/og/main.jpg" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="홍보영상" />

			<MenuBar contents={menuContents} />

			{/* SEO: 접근성용 페이지 제목/보이스오버 텍스트 */}
			<h1 className={styles.screenReaderOnly}>가경 홍골공원 아르보레 - 홍보영상</h1>
			<p className={styles.screenReaderOnly}>
			가경 홍골공원 아르보레의 홍보영상을 통해 홍골공원 특례사업과 공원 일체형 설계, 총 7개동 921세대
			전용 84㎡ 중심 구성, 한양수자인 커뮤니티 및 10년 민간임대 후 분양전환(예정) 혜택을 확인하세요.
			</p>

			{/* 히어로 카피 */}
			<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
			<div>공원과 일상이 이어지는 프리미엄</div>
			<div>가경 홍골공원 아르보레, 민간임대의 새로운 기준</div>
			</div>



			<div className={styles.videoContainer}>
				<YouTube
					videoId=""
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
