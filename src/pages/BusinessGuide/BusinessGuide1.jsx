import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";



const projectData = [
	{ label: '사업명', value: '가경 홍골공원 아르보레' },
	{ label: '사업위치', value: '충청북도 청주시 흥덕구 가경동 일원' },
	{ label: '대지면적', value: '추후 공고(홍골공원 특례사업 부지 내)' },
	{ label: '건축면적', value: '추후 공고' },
	{ label: '연면적', value: '추후 공고' },
	{ label: '용적률', value: '추후 공고' },
	{ label: '건폐율', value: '추후 공고' },
	{ label: '건축규모', value: '지하 2층 ~ 지상 29층, 7개동(예정)' },
	{ label: '세대수', value: '총 921세대, 10년 민간임대 후 분양전환(예정)' },
	{ label: '주차대수', value: '약 1,400대(세대당 약 1.5대, 예정)' },
	{ label: '주택형', value: '전용 84㎡ 단일(타입 다양화 예정)' },
  ];
  
  
const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		// { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

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
			{/* 페이지별 메타: title/description/og/canonical 만 관리 */}
			<title>가경 홍골공원 아르보레 - 사업안내</title>
			<meta
				name="description"
				content="청주 가경 홍골공원 특례사업 내 공원 일체형 단지. 지하2~지상29층 7개 동 921세대(전용 84㎡ 중심), 10년 민간임대 후 분양전환(예정). 입지·사업 개요를 확인하세요."
			/>
			<meta name="robots" content="index,follow" />
			<link rel="canonical" href="https://www.sketchs.co.kr/BusinessGuide/intro" />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="가경 홍골공원 아르보레" />
			<meta property="og:title" content="가경 홍골공원 아르보레 - 사업안내" />
			<meta
				property="og:description"
				content="공원 특례·민간임대 프리미엄. 7개동 921세대(전용 84㎡ 중심), 공원 조망 특화·보행 중심 설계, 한양수자인 커뮤니티까지 한눈에."
			/>
			<meta property="og:url" content="https://www.sketchs.co.kr/BusinessGuide/intro" />
			<meta property="og:image" content="https://www.sketchs.co.kr/img/og/business.jpg" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="가경 홍골공원 아르보레 - 사업안내" />
			<meta
				name="twitter:description"
				content="청주 가경동 공원 일체형 단지, 7개동 921세대 민간임대(분양전환 예정). 입지·사업 핵심 정보를 확인하세요."
			/>
			<meta name="twitter:image" content="https://www.sketchs.co.kr/img/og/business.jpg" />
			<meta name="twitter:url" content="https://www.sketchs.co.kr/BusinessGuide/intro" />

			{/* JSON-LD (대표 이미지/브레드크럼 포함) */}
			<script type="application/ld+json">
				{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "가경 홍골공원 아르보레 - 사업안내",
				url: "https://www.sketchs.co.kr/BusinessGuide/intro",
				description:
					"충북 청주시 흥덕구 가경동 일원, 지하2~지상29층 7개 동 921세대(전용 84㎡ 중심). 10년 민간임대 후 분양전환(예정). 공원 특례 기반의 공원 일체형 설계와 편리한 생활 인프라를 갖춘 사업 개요와 입지 정보.",
				primaryImageOfPage: {
					"@type": "ImageObject",
					contentUrl: "https://www.sketchs.co.kr/img/og/business.jpg",
					width: 1200,
					height: 630
				},
				breadcrumb: {
					"@type": "BreadcrumbList",
					itemListElement: [
					{ "@type": "ListItem", position: 1, name: "홈", item: "https://www.sketchs.co.kr/" },
					{ "@type": "ListItem", position: 2, name: "사업안내", item: "https://www.sketchs.co.kr/BusinessGuide/intro" }
					]
				}
				})}
			</script>
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />

			{/* SEO: 페이지 제목/설명 (스크린리더용) */}
			<h1 className={styles.screenReaderOnly}>가경 홍골공원 아르보레 - 사업안내</h1>
			<p className={styles.screenReaderOnly}>
			가경 홍골공원 아르보레는 충북 청주시 흥덕구 가경동 일원에 들어서는
			지하 2층부터 지상 29층까지 7개 동, 총 921세대(전용 84㎡ 중심)의 민간임대 아파트입니다.
			공원 특례 기반의 공원 일체형 설계와 한양수자인 커뮤니티를 갖추었으며,
			10년 안정 거주 후 분양전환(예정) 혜택을 제공합니다.
			</p>

			{/* 히어로 카피 */}
			<div className={styles.textBox}>
			<div>공원과 일상이 맞닿는 프리미엄</div>
			<div>가경 홍골공원 아르보레, 민간임대의 새로운 기준</div>
			</div>



			<img className={styles.img3} src={page1} alt="가경 홍골공원 아르보레-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
