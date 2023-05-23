import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface Props {
	addAssignment: (title: string, deadline: Date) => void;
	selected: Date;
	setSelected: (date: Date) => void;
}
export function Header({ addAssignment, selected, setSelected }: Props) {
	const [userInput, setUserInput] = useState("");
	let footer = <p>Please pick a day.</p>;
	if (selected) {
		console.log(selected);
		footer = <p>You picked {format(selected, "PP")}.</p>;
		console.log(format(selected, "PP"));
	}
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
				<div>
					<DayPicker
						mode="single"
						selected={selected}
						onDayClick={setSelected}
						footer={footer}
					/>
				</div>
				<button
					onClick={(event) => {
						event.preventDefault();
						addAssignment(userInput, selected);
						setUserInput("");
					}}
					disabled={!userInput.trim().length}
				>
					Create <AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
}
