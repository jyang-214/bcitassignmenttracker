/** @format */

import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [assignments, setAssignments] = useState([]);
	const [completedAssignment, setCompletedAssignment] = useState(0);
	const [selectedDate, setSelectedDate] = useState<Date>();

	function handleDelete(id: string, completed: boolean) {
		setAssignments(
			assignments.filter((assignment) => assignment.id !== id)
		);
		if (completed) {
			setCompletedAssignment(
				(completedAssignment) => completedAssignment - 1
			);
		}
	}

	function handleComplete(id: string, checked: boolean) {
		const completedAssignmentCount = assignments.filter(
			(assignment) => assignment.id === id
		).length;
		if (checked && completedAssignmentCount > 0) {
			setCompletedAssignment(
				(completedAssignment) => completedAssignment + 1
			);
		} else {
			if (!checked && completedAssignmentCount > 0) {
				setCompletedAssignment(
					(completedAssignment) => completedAssignment - 1
				);
			}
		}
	}

	return (
		<>
			<Header
				inputValue={inputValue}
				setInputValue={setInputValue}
				assignments={assignments}
				setAssignments={setAssignments}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
			/>
			<Assignments
				assignments={assignments}
				onDelete={handleDelete}
				completedAssignment={completedAssignment}
				onComplete={handleComplete}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
			/>
		</>
	);
}

export default App;
