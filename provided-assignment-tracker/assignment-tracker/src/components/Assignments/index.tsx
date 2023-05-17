import IAssignment from "../../interfaces/IAssignment";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Props {
	assignments: IAssignment[];
	deleteAssignment: (title: string) => void;
}
export function Assignments({ assignments, deleteAssignment }: Props) {
	const completedAssignments = assignments.filter((a) => a.completed).length;
	const numberOfAssignments = assignments.length;
	return (
		<section className={styles.assignments}>
			<header className={styles.header}>
				<div>
					<p>Created Assignments</p>
					<span>{numberOfAssignments}</span>
				</div>

				<div>
					<p className={styles.textPurple}>Completed Assignments</p>
					<span>
						{completedAssignments} of {numberOfAssignments}
					</span>
				</div>
			</header>

			<div className={styles.list}>
				{assignments.map((assignment) => (
					<Assignment
						{...assignment}
						deleteAssignment={deleteAssignment}
					/> // ... spread operator
				))}
			</div>
		</section>
	);
}
