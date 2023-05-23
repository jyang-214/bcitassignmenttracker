/** @format */

import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { Assignment } from "../Assignment/index";
import { v4 as uuidv4 } from "uuid";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

interface Props {
	inputValue: string;
	setInputValue: (input: string) => void;
	assignments: Assignment[];
	setAssignments: (assignments: Assignment[]) => void;
	selectedDate: Date;
	setSelectedDate: (date: Date) => void;
}

export function Header({
	inputValue,
	setInputValue,
	assignments,
	setAssignments,
	selectedDate,
	setSelectedDate,
}: Props) {
	function handleInputChange(event: { target: { value: string } }) {
		setInputValue(event.target.value);
	}

	function handleCreateClick() {
		const newAssignment = { id: uuidv4(), title: inputValue };
		setAssignments([...assignments, newAssignment]);
		setInputValue("");
	}

	let footer = <p>Please pick a day.</p>;
	if (selectedDate) {
		footer = <p>You picked {format(selectedDate, "PP")}.</p>;
	}

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
				<DayPicker
					mode="single"
					selected={selectedDate}
					onDayClick={setSelectedDate}
				/>
				<button
					type="button"
					onClick={handleCreateClick}
					disabled={inputValue.trim() === ""}
				>
					Create <AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
}
