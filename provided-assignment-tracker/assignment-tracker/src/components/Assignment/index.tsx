import IAssignment from "../../interfaces/IAssignment";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends IAssignment {}
export function Assignment({ title, completed }: Props) {
	return (
		<div className={styles.assignment}>
			<button className={styles.checkContainer}>
				<div />
			</button>

			<p>{title}</p>

			<button className={styles.deleteButton}>
				<TbTrash size={20} />
			</button>
		</div>
	);
}
