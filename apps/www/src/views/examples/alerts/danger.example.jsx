import { DangerAlert } from "$components/alert.component";
import { capitalCase } from 'change-case';

export function DangerAlertExample() {
	/**
	 * @type {Array<import("$common/types").VariantColorType>}
	 */
	const variants = ["solid", "outlined", "inversed"];
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{variants.map((variant) => {
				const capitalizeVariant = capitalCase(variant);
				return (
					<DangerAlert
						title={`Danger Alert ${capitalizeVariant}`}
						variant={variant}
					>
						This is the subtext for your alert message, providing important
						information or instructions.
					</DangerAlert>
				);
			})}
			<DangerAlert
				title={`Danger Alert with Icon`}
				icon="close-circle-fill"
				variant="outlined"
			>
				This is the subtext for your alert message, providing important
				information or instructions.
			</DangerAlert>
		</div>
	);
}
