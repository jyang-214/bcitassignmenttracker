import IAssignment from "../../interfaces/IAssignment";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Props {
	assignments: IAssignment[];
}
export function Assignments({ assignments }: Props) {
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
					<Assignment {...assignment} /> // ... spread operator
				))}
			</div>
		</section>
	);
}
