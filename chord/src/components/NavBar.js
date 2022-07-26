import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../static/Logo.png";
import Profile from "../static/Profile.png";
import Home from "../static/Home.png";
import Memo from "../static/Memo.png";
import Heart from "../static/Heart.png";
import Play from "../static/Play.png";

const NavBarBlock = styled.div`
	display: flex;
	flex-direction: column;
	width: 180px;
	height: 100%;
	margin: 0px;
	position: relative;
`;

let s1 = {
	background: "#181A41",
	textDecoration: "none",
};

let s2 = {
	borderRadius: "50%",
	width: "80px",
	display: "block",
	margin: "0px auto",
	marginTop: "20px",
	textAlign: "center",
	paddingTop: "10px",
};

let s3 = {
	background: "#181A41",
	color: "white",
	margin: "10px 0px",
	fontWeight: "700",
	fontSize: "24px",
	lineHeight: "36px",
	textAlign: "center",
};

let s4 = {
	background: "#FFFAF2",
	paddingTop: "40px",
	paddingBottom: "40px",
	paddingLeft: "50px",
	height: "90px",
};

let s5 = {
	background: "#FFFAF2",
	paddingTop: "40px",
	paddingBottom: "40px",
	paddingLeft: "65px",
	height: "90px",
};

const NavBar = () => {
	return (
		<NavBarBlock>
			<img src={Logo} alt="Logo" style={{ margin: 10 }} width="160" />
			<NavLink to="/profile" style={s1}>
				<div
					style={{
						width: "80px",
						height: "80px",
						backgroundColor: "#FFFAF2",
						borderRadius: "50%",
						margin: "0 auto",
					}}
				>
					<img src={Profile} alt="Profile" style={s2} />
				</div>
				<h1 style={s3}>멋쟁이 사자</h1>
			</NavLink>
			<NavLink to="/" style={s4}>
				<div></div>
				<img src={Home} alt="Home" />
			</NavLink>
			<NavLink to="/memo" style={s4}>
				<img src={Memo} alt="Memo" />
			</NavLink>
			<NavLink to="/heart" style={s4}>
				<img src={Heart} alt="Heart" />
			</NavLink>
			<NavLink to="/play" style={s5}>
				<img src={Play} alt="Play" />
			</NavLink>
		</NavBarBlock>
	);
};

export default NavBar;
