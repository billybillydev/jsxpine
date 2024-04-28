import { Alert } from "$components/alert.component";

export function DefaultAlertExample() {
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			<Alert title="Alert Message Headline">
				This is the subtext for your alert message, providing important
				information or instructions.
			</Alert>
		</div>
	);
}
