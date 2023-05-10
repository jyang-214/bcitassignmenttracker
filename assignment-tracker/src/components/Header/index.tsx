/** @format */

import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

export function Header() {
	const [inputValue, setInputValue] = useState("");

	function handleInputChange(event) {
		setInputValue(event.target.value.trim());
	}

	function handleCreateClick() {}

	return (
		<header className={styles.header}>
			{/* This is simply to show you how to use helper functions */}
			<h1>{uppercase("bcit")} Assignment Tracker</h1>
			<form className={styles.newAssignmentForm}>
				<input
					placeholder="Add a new assignment"
					type="text"
					value={inputValue}
					onChange={handleInputChange}
				/>
				<button
					onClick={handleCreateClick}
					disabled={inputValue === "" || /^\s*$/.test(inputValue)}
				>
					Create <AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
}
