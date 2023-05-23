import styles from "./assignment.module.css";
import { useState } from "react";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { format } from "date-fns";

interface Props {
	id: string;
	title: string;
	onDelete: (id: string, complete: boolean) => void;
	onComplete: (id: string, checked: boolean) => void;
	selectedDate: Date;
}

export function Assignment({
	id,
	title,
	onDelete,
	onComplete,
	selectedDate,
}: Props) {
	const [completed, setCompleted] = useState(false);
	const [deadline, setDeadline] = useState<number>();

	function handleToggleClick() {
		const newCompletedStatus = !completed;
		setCompleted(newCompletedStatus);
		onComplete(id, newCompletedStatus);
	}

	function handleDeleteClick() {
		onDelete(id, completed);
		// handleToggleClick();
	}

	const calculateDaysDifference = () => {
		const currentDate = new Date();
		const differenceInTime = selectedDate.getTime() - currentDate.getTime();
		const differenceInDays = Math.ceil(
			differenceInTime / (1000 * 3600 * 24)
		);
		return differenceInDays;
	};
	if (selectedDate) {
		<p>You picked {format(selectedDate, "PP")}.</p>;
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
			<label>
				{selectedDate ? (
					<p>Due {calculateDaysDifference()} days</p>
				) : (
					""
				)}
				{/* <p>Due: x days</p> */}
			</label>

			<button className={styles.deleteButton} onClick={handleDeleteClick}>
				<TbTrash size={20} />
			</button>
		</div>
	);
}
