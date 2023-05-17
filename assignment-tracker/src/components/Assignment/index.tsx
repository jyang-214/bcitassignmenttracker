import styles from "./assignment.module.css";
import { useState } from "react";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
	id: string;
	title: string;
	onDelete: (id: string, complete: boolean) => void;
	onComplete: (id: string, checked: boolean) => void;
}

export function Assignment({ id, title, onDelete, onComplete }: Props) {
	const [completed, setCompleted] = useState(false);

	function handleToggleClick() {
		const newCompletedStatus = !completed;
		setCompleted(newCompletedStatus);
		onComplete(id, newCompletedStatus);
	}

	function handleDeleteClick() {
		onDelete(id, completed);
		// handleToggleClick();
	}

	return (
		<div
			className={`${styles.assignment} ${
				completed ? styles.completed : ""
			}`}
		>
			<button
				className={styles.checkContainer}
				onClick={handleToggleClick}
			>
				{completed ? <BsFillCheckCircleFill size={20} /> : <div />}
			</button>

			<p className={completed ? styles.textCompleted : ""}>{title}</p>

			<button className={styles.deleteButton} onClick={handleDeleteClick}>
				<TbTrash size={20} />
			</button>
		</div>
	);
}
