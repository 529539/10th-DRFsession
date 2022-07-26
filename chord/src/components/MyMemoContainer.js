import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const MyMemoContainer = () => {
	const [memos, setMemos] = useState([]);
	useEffect(() => {
		getMemos();
	});

	const getMemos = async () => {
		const response = await axios
			.get("https://kj173456.pythonanywhere.com/memos")
			.then((response) => {
				setMemos(response.data);
			})
			.catch((error) => {
				console.log("전체 글 불러오기 실패", error.message);
			});
	};

	const onDelete = (id) => {
		axios
			.delete(`https://kj173456.pythonanywhere.com/memos/18`)
			.then((response) => {
				console.log("삭제성공", response);
			})
			.catch((error) => {
				console.log("삭제 실패", error);
			});
	};

	return (
		<>
			{memos.map((memo) => (
				<MemoBox key={memo.id} className="memo-box">
					<div style={{ display: "flex" }}>
						<div>
							<p style={{ marginLeft: "16px" }}>{memo.date}</p>
							<MemoMusicBox>
								<strong>{memo.title}</strong>
								<p>{memo.singer}</p>
							</MemoMusicBox>
						</div>
						<div
							style={{
								position: "absolute",
								right: "10px",
								top: "10px",
							}}
						>
							<h5 style={{ marginTop: "0px" }}>{memo.genre}</h5>
							<div style={{ marginTop: "-20px" }}>
								<p>
									<HiOutlineHeart size="15" style={{ marginTop: "5px" }} />
									<span style={{ marginTop: "0px" }}>{memo.likes}</span>
								</p>
							</div>
						</div>
					</div>
					<p style={{ marginLeft: "16px", marginRight: "16px" }}>
						{memo.content}
					</p>
					<Remove onClick={() => onDelete(memo.title)}>
						<MdDelete />
					</Remove>
				</MemoBox>
			))}
		</>
	);
};

const MemoBox = styled.div`
	width: 306px;
	height: 289px;
	background: #fffaf2;
	position: relative;
	margin-top: 10px;
	margin-left: 20px;
	position: relative;
	&:hover {
		box-sizing: content-box;
		width: 300px;
		height: 283px;
		border: 3px solid #ff0000;
	}
`;

const MemoMusicBox = styled.div`
	width: 203px;
	height: 39px;
	background: #f4f0e8;
	margin-left: 16px;
	font-weight: 400;
	font-size: 15px;
	line-height: 8px;
	padding-top: 13px;
	padding-left: 10px;
	padding-bottom: 5px;
`;

const Remove = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
	color: #f4f0e8;
	font-size: 24px;
	cursor: pointer;
	&:hover {
		color: #ff0000;
	}
`;

export default MyMemoContainer;
