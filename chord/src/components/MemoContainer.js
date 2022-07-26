import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import axios from "axios";

const MemoContainer = () => {
	const [memos, setMemos] = useState([]);
	useEffect(() => {
		getMemos();
	}, []);

	const getMemos = async () => {
		const response = await axios
			.get("/data.json")
			.then((response) => {
				setMemos(response.data);
			})
			.catch((error) => {
				console.log("전체 글 불러오기 실패", error.message);
			});
	};

	return (
		<>
			{memos.map((memo) => (
				<MemoBox key={memo.id}>
					<div style={{ display: "flex" }}>
						<div
							style={{
								width: "40px",
								height: "40px",
								background: "#181A41",
								borderRadius: "50%",
								position: "absolute",
								left: "17px",
								top: "13px",
							}}
						></div>
						<h3 style={{ marginLeft: "70px" }}>{memo.author}</h3>
						<div
							style={{
								position: "absolute",
								right: "10px",
								top: "0px",
								color: "#181A41",
							}}
						>
							<div>
								<p
									style={{
										display: "flex",
										justifyContent: "end",
										alignItems: "center",
									}}
								>
									<HiOutlineHeart size="13" />
									{memo.likes}
								</p>
							</div>
							<p style={{ marginTop: "-20px" }}>{memo.date}</p>
						</div>
					</div>
					<MemoMusicBox>
						<strong>{memo.title}</strong>
						<p>{memo.singer}</p>
					</MemoMusicBox>
					<div>
						<p style={{ marginLeft: "16px", marginRight: "16px" }}>
							{memo.content}
						</p>
					</div>
				</MemoBox>
			))}
		</>
	);
};

const MemoBox = styled.div`
	width: 392px;
	height: 300px;
	background: #ffffff;
	border-radius: 15px;
	position: relative;
`;

const MemoMusicBox = styled.div`
	width: 203px;
	height: 39px;
	background: #f4f0e8;
	margin-left: 16px;
	font-weight: 400;
	font-size: 15px;
	line-height: 8px;
	padding-top: 7px;
`;

export default MemoContainer;
