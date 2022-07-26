import { React, useState } from "react";
import "./MemoModal.css";
import { FiCheckSquare } from "react-icons/fi";
import styled from "styled-components";
import axios from "axios";

let s1 = {
	width: "287px",
	height: "84px",
	background: "#F4F0E8",
};

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
	textAlign: "center",
	fontSize: "20px",
	fontWeight: "bold",
	border: "none",
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
		color: navy;
	}
`;

const today = new Date();
const dateString = today.toLocaleDateString("ko-KR", {
	year: "numeric",
	month: "numeric",
	day: "numeric",
});

const MemoModal = (props) => {
	const { open, close } = props;
	const [newTitle, setNewTitle] = useState("");
	const [newSinger, setNewSinger] = useState("");
	const [newContent, setNewContent] = useState("");

	const selectList = [
		"발라드",
		"댄스",
		"록",
		"OST",
		"인디",
		"POP",
		"재즈",
		"힙합",
	];
	const [selected, setSelected] = useState("default");

	const MemoSubmit = (e) => {
		let i = 4;
		e.preventDefault();
		console.log(selected, newTitle, newSinger, newContent, i);
		axios
			.post("https://kj173456.pythonanywhere.com/memos", {
				genre: selected,
				title: newTitle,
				singer: newSinger,
				content: newContent,
				likes: 0,
				author: "멋쟁이 사자",
			})
			.then((response) => {
				console.log("작성 성공");
			})
			.catch((error) => {
				console.log("작성 실패");
			});

		setNewTitle("");
		setNewSinger("");
		setNewContent("");
		i++;
	};

	return (
		<div className={open ? "openModal modal" : "modal"}>
			{open ? (
				<section>
					<header>
						<h1>{dateString}</h1>
						<button className="close" onClick={close}>
							&times;
						</button>
					</header>
					<main>
						<div style={{ position: "relative" }}>
							<div style={{ position: "absolute", right: "0px", top: "-15px" }}>
								<select
									style={s4}
									defaultValue={"default"}
									onChange={(e) => setSelected(e.target.value)}
									value={selected}
								>
									<option value={"default"} disabled>
										장르
									</option>
									{selectList.map((item) => (
										<option value={item} key={item}>
											{item}
										</option>
									))}
								</select>
							</div>
						</div>
						<div>
							<div style={s1}>
								<input
									className="name"
									style={{ fontSize: "20px", fontWeight: "bold" }}
									placeholder="노래 제목을 입력하시오"
									value={newTitle}
									onChange={(e) => setNewTitle(e.target.value)}
								/>
								<input
									className="name"
									style={{ fontSize: "16px" }}
									placeholder="가수명을 입력하시오"
									value={newSinger}
									onChange={(e) => setNewSinger(e.target.value)}
								/>
							</div>
							<textarea
								className="input-content"
								placeholder="내용을 입력하시오"
								value={newContent}
								onChange={(e) => setNewContent(e.target.value)}
							/>
						</div>
					</main>
					<Submit onClick={MemoSubmit}>
						<FiCheckSquare size="35" className="close" onClick={close} />
					</Submit>
				</section>
			) : null}
		</div>
	);
};

export default MemoModal;
