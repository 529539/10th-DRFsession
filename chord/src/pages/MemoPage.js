import { React, useState } from "react";
import NavBar from "../components/NavBar";
import MemoModal from "../components/MemoModal";
import MyMemoContainer from "../components/MyMemoContainer";
import MemoContainer from "../components/MemoContainer";
import {
	IoIosArrowForward,
	IoIosArrowBack,
	IoIosArrowDown,
} from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import "../components/scrollbar.css";
import styled from "styled-components";

let s = {
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

const Submit = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	cursor: pointer;
	&:hover {
		color: gray;
	}
	&:active {
		color: #181a41;
	}
`;

function MemoPage() {
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					position: "relative",
					background: "#F4F0E8",
					width: "100%",
					height: "100%",
				}}
			>
				<NavBar />
				<div
					style={{
						position: "absolute",
						width: "20px",
						height: "160px",
						margin: "0px",
						left: "0px",
						top: "416px",
						background: "#181A41",
					}}
				></div>
				<div>
					<div
						style={{
							display: "flex",
							width: "100%",
							height: "80px",
						}}
					>
						<div
							style={{
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
							}}
						>
							<IoIosArrowBack style={{ position: "absolute", left: "10px" }} />
							<div style={{ margin: "0 auto" }}>
								<h3>2022년 07월</h3>
							</div>
							<IoIosArrowForward
								style={{ position: "absolute", right: "10px" }}
							/>
						</div>
						<div style={s}>
							<h3>월간</h3>
							<IoIosArrowDown style={{ position: "absolute", right: "10px" }} />
						</div>
						<div
							style={{
								width: "556px",
								height: "51px",
								background: "#FFFFFF",
								borderRadius: "15px",
								marginTop: "15px",
								boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
								display: "flex",
								position: "absolute",
								right: "5%",
							}}
						>
							<div style={{ display: "flex", alignItems: "center" }}>
								<RiSearchLine style={{ width: "50px" }} />
							</div>
							<input
								style={{
									border: "none",
									width: "85%",
									height: "80%",
									alignItems: "center",
									marginTop: "5px",
								}}
								placeholder="검색하시오"
							/>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							width: "100%",
							height: "80px",
						}}
					>
						<div
							style={{
								position: "absolute",
								left: "614px",
								marginTop: "-10px",
							}}
						>
							<h3 style={s}>
								발라드
								<IoIosArrowDown
									style={{ position: "absolute", right: "10px" }}
								/>
							</h3>
						</div>
						<div
							style={{
								display: "flex",
								position: "absolute",
								right: "5%",
								marginTop: "-10px",
							}}
						>
							<h3 style={s}>
								인기순
								<IoIosArrowDown
									style={{ position: "absolute", right: "10px" }}
								/>
							</h3>
						</div>
					</div>
					<div style={{ display: "flex" }}>
						<div
							style={{
								width: "380px",
								height: "715px",
								background: "#FFFFFF",
								borderRadius: "15px",
								marginLeft: "77px",
								position: "relative",
								boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
							}}
						>
							<h1 style={{ textAlign: "center", color: "#181A41" }}>
								내가 쓴 메모장
							</h1>
							<div className="scrollbar">
								<MyMemoContainer />
							</div>
							<Submit>
								<FiEdit
									size="35"
									className="modal-button"
									onClick={openModal}
									style={{
										position: "absolute",
										right: "23px",
										bottom: "23px",
									}}
								/>
							</Submit>
						</div>
						<MemoModal open={modalOpen} close={closeModal}></MemoModal>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gridGap: "20px",
								marginLeft: "120px",
								position: "relative",
							}}
						>
							<MemoContainer />
							<IoIosArrowDown
								size="40"
								style={{ position: "absolute", left: "384px", bottom: "0px" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MemoPage;
