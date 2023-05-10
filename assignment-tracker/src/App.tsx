/** @format */

import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			<Header inputValue={inputValue} setInputValue={setInputValue} />
			<Assignments />
		</>
	);
}

export default App;
