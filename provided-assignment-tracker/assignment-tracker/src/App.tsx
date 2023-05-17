import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { assignmentData } from "./database";
function App() {
	const [assignments, setAssignments] = useState(assignmentData); // assignments is read-only
	const addAssignment = (title: string) => {
		const newAssignment = { title, completed: false };
		// first method, React way
		setAssignments([...assignments, newAssignment]);

		// second method, Javascript way
		// const clonedArr = assignments.slice();
		// clonedArr.push(newAssignment);
		// setAssignments(clonedArr);

		// third method
		// setAssignments(assignments.slice().concat(newAssignment));
	};

	const deleteAssignment = (title: string) =>
		setAssignments(
			assignments.filter((assignment) => assignment.title != title)
		);
	return (
		<>
			<Header addAssignment={addAssignment} />
			<Assignments
				assignments={assignments}
				deleteAssignment={deleteAssignment}
			/>
		</>
	);
}

export default App;
