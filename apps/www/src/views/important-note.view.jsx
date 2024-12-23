import { Alert } from "$components/alert.component";

/**
 * @param {import("$common/props").HTMLTagWithChildren} props
 */
export function ImportantNote({ children, class: className }) {
	return (
		<Alert title="Notes" icon="information-line" class={className}>
			{children}
		</Alert>
	);
}
