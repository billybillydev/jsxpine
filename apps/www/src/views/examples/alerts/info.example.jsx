import { InfoAlert } from "$components/alert.component";

export function InfoAlertExample() {
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{["Solid", "Outlined", "Inversed"].map((variant) => {
				return (
					<InfoAlert
						title={`Info Alert ${variant}`}
						variant={variant.toLowerCase()}
					>
						This is the subtext for your alert message, providing important
						information or instructions.
					</InfoAlert>
				);
			})}
		</div>
	);
}
