import React from "react";
import NavBar from "../components/NavBar";
import BalladImage from "../static/BalladImage.png";
import JazzImage from "../static/JazzImage.png";
import IndieImage from "../static/IndieImage.png";
import {
	IoIosArrowForward,
	IoIosArrowBack,
	IoIosArrowDown,
} from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi";

let s1 = {
	display: "flex",
	position: "relative",
	background: "#F4F0E8",
	width: "100%",
	height: "100%",
	overflow: "hidden",
};

let s2 = {
	display: "flex",
	width: "100%",
	height: "80px",
};
//날짜
let s3 = {
	width: "334px",
	height: "60px",
	background: "#FFFFFF",
	borderRadius: "15px",
	marginLeft: "100px",
	marginTop: "10px",
	boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
	display: "flex",
	alignItems: "center",
	position: "relative",
};
//월간
let s4 = {
	width: "141px",
	height: "51px",
	background: "#FFFFFF",
	borderRadius: "15px",
	marginLeft: "64px",
	marginTop: "15px",
	boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
};

let s5 = {
	width: "556px",
	height: "51px",
	background: "#FFFFFF",
	borderRadius: "15px",
	marginTop: "15px",
	boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
	display: "flex",
	position: "absolute",
	right: "5%",
};
//검색창
let s6 = {
	border: "none",
	width: "85%",
	height: "80%",
	alignItems: "center",
	marginTop: "5px",
};

let s7 = {
	marginTop: "20px",
	padding: "5px 20px",
	width: "1042px",
	height: "760px",
	background: "#FFFAF2",
	borderRadius: "0px 15px 15px 0px",
	position: "absolute",
	// bottom: "70px",
};
//각 장르
let s8 = {
	width: "208px",
	height: "133px",
	position: "relative",
	marginRight: "64px",
};
//메모 및 댓글
let sd = {
	width: "222px",
	height: "88px",
	background: "#FFFFFF",
	borderRadius: "50px",
	marginRight: "30px",
	boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
	display: "flex",
	alignItems: "center",
	paddingLeft: "30px",
	position: "relative",
};

let flex = {
	display: "flex",
};
//나의 관심 장르
let s10 = {
	width: "178px",
	height: "65px",
	background: "#FFFFFF",
	borderRadius: "16px",
	boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
	marginRight: "46px",
	paddingLeft: "30px",
	position: "relative",
};
//순위 박스
let s11 = {
	width: "210px",
	height: "76px",
	background: "#181A41",
	borderRadius: "15px",
	display: "flex",
	marginTop: "32px",
	marginBottom: "32px",
	boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};
//순위
let s12 = {
	color: "#FFFFFF",
	margin: "auto 15px",
};
//노래 정보
let s13 = {
	color: "#FFFFFF",
	fontWeight: "400",
	fontSize: "14px",
	lineHeight: "15px",
};

let line = {
	position: "absolute",
	width: "20px",
	height: "160px",
	margin: "0px",
	left: "0px",
	top: "256px",
	background: "#181A41",
};

function Home() {
	return (
		<div style={s1}>
			<NavBar />
			<div style={line}></div>
			<div>
				<div style={s2}>
					<div style={s3}>
						<IoIosArrowBack style={{ position: "absolute", left: "10px" }} />
						<div style={{ margin: "0 auto" }}>
							<h3>2022년 07월</h3>
						</div>
						<IoIosArrowForward
							style={{ position: "absolute", right: "10px" }}
						/>
					</div>
					<div style={s4}>
						<h3>월간</h3>
						<IoIosArrowDown style={{ position: "absolute", right: "10px" }} />
					</div>
					<div style={s5}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<RiSearchLine style={{ width: "50px" }} />
						</div>
						<input style={s6} placeholder="검색하시오" />
					</div>
				</div>
				<div style={flex}>
					<div style={s7}>
						<div style={{ height: "33%" }}>
							<h1>장르</h1>
							<div style={flex}>
								<div style={s8}>
									<img
										src={BalladImage}
										alt="BalladImage"
										style={{
											borderRadius: "16px",
											boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
										}}
									/>
									<h3
										style={{
											position: "absolute",
											left: "20px",
											bottom: "0px",
										}}
									>
										발라드
									</h3>
									<HiOutlineHeart
										size="24"
										color="#dc143c"
										style={{ position: "absolute", right: "15px", top: "5px" }}
									/>
								</div>
								<div style={s8}>
									<img
										src={JazzImage}
										alt="JazzImage"
										style={{
											borderRadius: "16px",
											boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
										}}
									/>
									<h3
										style={{
											position: "absolute",
											left: "20px",
											bottom: "0px",
										}}
									>
										재즈
									</h3>
									<HiOutlineHeart
										size="24"
										style={{ position: "absolute", right: "15px", top: "5px" }}
									/>
								</div>
								<div style={s8}>
									<img src={IndieImage} alt="IndieImage" />
									<h3
										style={{
											position: "absolute",
											left: "20px",
											bottom: "0px",
										}}
									>
										인디
									</h3>
									<HiOutlineHeart
										size="24"
										style={{ position: "absolute", right: "15px", top: "5px" }}
									/>
								</div>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										marginLeft: "64px",
									}}
								>
									<p>
										전체보기
										<IoIosArrowForward />
									</p>
								</div>
							</div>
						</div>
						<div style={{ height: "33%" }}>
							<h1 style={{ marginBottom: "0px" }}>하트를 가장 많이 받은</h1>
							<div style={flex}>
								<div>
									<h3>메모</h3>
									<div style={flex}>
										<div style={sd}>
											띵곡..!
											<span
												style={{
													position: "absolute",
													right: "35px",
													top: "5px",
												}}
											>
												<HiOutlineHeart size="13" />
												209
											</span>
										</div>
										<div style={sd}>
											진짜 대박이다 이건
											<span
												style={{
													position: "absolute",
													right: "35px",
													top: "5px",
												}}
											>
												<HiOutlineHeart size="13" />
												156
											</span>
										</div>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												marginRight: "30px",
											}}
										>
											<IoIosArrowForward size="13" />
										</div>
									</div>
								</div>
								<div>
									<h3>댓글</h3>
									<div style={flex}>
										<div style={sd}>
											공감이 많이 되네요.
											<span
												style={{
													position: "absolute",
													right: "35px",
													top: "5px",
												}}
											>
												<HiOutlineHeart size="13" />
												78
											</span>
										</div>
										<div style={{ display: "flex", alignItems: "center" }}>
											<IoIosArrowForward />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div style={{ height: "33%" }}>
							<h1>나의 관심 장르</h1>
							<div style={flex}>
								<div style={s10}>
									<h3>발라드</h3>
									<HiOutlineHeart
										size="24"
										color="#dc143c"
										style={{ position: "absolute", right: "20px", top: "20px" }}
									/>
								</div>
								<div style={s10}>
									<h3>힙합</h3>
									<HiOutlineHeart
										size="24"
										color="#dc143c"
										style={{ position: "absolute", right: "20px", top: "20px" }}
									/>
								</div>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										marginLeft: "64px",
									}}
								>
									<p>
										전체보기
										<IoIosArrowForward />
									</p>
								</div>
							</div>
						</div>
					</div>
					<div style={{ position: "absolute", right: "5%" }}>
						<h1 style={{ textAlign: "center" }}>음악 선호도</h1>
						<div>
							<div style={s11}>
								<h5 style={s12}>1</h5>
								<div>
									<p style={s13}>
										<strong>STAY THIS WAY</strong>
									</p>
									<p style={s13}>프로미스나인</p>
								</div>
							</div>
							<div style={s11}>
								<h5 style={s12}>2</h5>
								<div>
									<p style={s13}>
										<strong>어린 왕자</strong>
									</p>
									<p style={s13}>김하온, PULLIK</p>
								</div>
							</div>
							<div style={s11}>
								<h5 style={s12}>3</h5>
								<div>
									<p style={s13}>
										<strong>WEEKEND</strong>
									</p>
									<p style={s13}>태연</p>
								</div>
							</div>
							<div style={s11}>
								<h5 style={s12}>4</h5>
								<div>
									<p style={s13}>
										<strong>1000X</strong>
									</p>
									<p style={s13}>I’ll, 홍진호, 김형우, 하현상</p>
								</div>
							</div>
							<div style={s11}>
								<h5 style={s12}>5</h5>
								<div>
									<p style={s13}>
										<strong>주저하는 연인들을 위해</strong>
									</p>
									<p style={s13}>잔나비</p>
								</div>
							</div>
							<div style={s11}>
								<h5 style={s12}>6</h5>
								<div>
									<p style={s13}>
										<strong>시간과 낙엽</strong>
									</p>
									<p style={s13}>악동뮤지션</p>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<IoIosArrowDown />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
