import { WarningAlert } from "$components/alerts.component";

export function WarningAlertExample() {
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{["Solid", "Outlined", "Inversed"].map((variant) => {
				return (
					<WarningAlert
						title={`Warning Alert ${variant}`}
						variant={variant.toLowerCase()}
					>
						This is the subtext for your alert message, providing important
						information or instructions.
					</WarningAlert>
				);
			})}
		</div>
	);
}
