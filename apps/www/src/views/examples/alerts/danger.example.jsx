import { DangerAlert } from "$components/alerts.component";

export function DangerAlertExample() {
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{["Solid", "Outlined", "Inversed"].map((variant) => {
				return (
					<DangerAlert
						title={`Danger Alert ${variant}`}
						variant={variant.toLowerCase()}
					>
						This is the subtext for your alert message, providing important
						information or instructions.
					</DangerAlert>
				);
			})}
		</div>
	);
}
