import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

interface Props {
	addAssignment: (title: string) => void;
}
export function Header({ addAssignment }: Props) {
	const [userInput, setUserInput] = useState("");
	return (
		<header className={styles.header}>
			<h1>{userInput}</h1>
			{/* This is simply to show you how to use helper functions */}
			<h1>{uppercase("bcit")} Assignment Tracker</h1>
			<form className={styles.newAssignmentForm}>
				<input
					onChange={(event) => setUserInput(event.target.value)}
					value={userInput}
					placeholder="Add a new assignment"
					type="text"
				/>
				<button
					onClick={(event) => {
						event.preventDefault();
						addAssignment(userInput);
						setUserInput("");
					}}
					disabled={!userInput.length}
				>
					Create <AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
}
