import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useState } from "react";

interface Props {
	assignments: Assignment[];
	onDelete: (id: string) => void;
	completedAssignment: number;
	onComplete: (id: string) => void;
}

export function Assignments({
	assignments,
	onDelete,
	completedAssignment,
	onComplete,
}: Props) {
	const createdAssignemntsCount = assignments.length;

	return (
		<section className={styles.assignments}>
			<header className={styles.header}>
				<div>
					<p>Created Assignments</p>
					<span>{createdAssignemntsCount}</span>
				</div>

				<div>
					<p className={styles.textPurple}>Completed Assignments</p>
					<span>
						{completedAssignment} of {createdAssignemntsCount}
					</span>
				</div>
			</header>

			<div className={styles.list}>
				{assignments.map((assignment) => (
					<Assignment
						id={assignment.id}
						title={assignment.title}
						onDelete={onDelete}
						onComplete={onComplete}
					/>
				))}
			</div>
		</section>
	);
}
