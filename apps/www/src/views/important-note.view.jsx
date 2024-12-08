import { Alert } from "$components/alert.component";

/**
 * @param {import("@kitajs/html").PropsWithChildren} props
 */
export function ImportantNote({ children }) {
	return (
		<Alert title="Notes" icon="information-line">
			{children}
		</Alert>
	);
}
