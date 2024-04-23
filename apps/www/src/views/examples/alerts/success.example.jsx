import { SuccessAlert } from "$components/alerts.component";

export function SuccessAlertExample() {
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{["Solid", "Outlined", "Inversed"].map((variant) => {
				return (
					<SuccessAlert
						title={`Success Alert ${variant}`}
						variant={variant.toLowerCase()}
					>
						This is the subtext for your alert message, providing important
						information or instructions.
					</SuccessAlert>
				);
			})}
		</div>
	);
}