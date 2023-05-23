import IAssignment from "../../interfaces/IAssignment";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { format } from "date-fns";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends IAssignment {
	deleteAssignment: (title: string) => void;
	selected: Date;
	setSelected: (date: Date) => void;
}
export function Assignment({
	title,
	completed,
	deleteAssignment,
	deadline,
	selected,
	setSelected,
}: Props) {
	// const calculateDaysDifference = () => {
	// 	const currentDate = new Date();
	// 	const differenceInTime = selected.getTime() - currentDate.getTime();
	// 	const differenceInDays = Math.ceil(
	// 		differenceInTime / (1000 * 3600 * 24)
	// 	);
	// 	return differenceInDays;
	// };

	return (
		<div className={styles.assignment}>
			<button className={styles.checkContainer}>
				<div />
			</button>

			<p>{title}</p>
			<label>
				<p>Due: {deadline} days</p>
			</label>

			<button
				className={styles.deleteButton}
				onClick={(event) => {
					event.preventDefault;
					deleteAssignment(title);
				}}
			>
				<TbTrash size={20} />
			</button>
		</div>
	);
}
