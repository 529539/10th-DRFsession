import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import MemoPage from "./pages/MemoPage";

const GlobalStyle = createGlobalStyle`
  body {
  	margin: 0;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/memo" element={<MemoPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
