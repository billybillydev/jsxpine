import { SuccessAlert } from "$components/alert.component";
import { capitalCase } from 'change-case';

export function SuccessAlertExample() {
	/**
	 * @type {Array<import("$common/types").VariantColorType>}
	 */
	const variants = ["solid", "outlined", "inversed"];
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{variants.map((variant) => {
				const capitalizeVariant = capitalCase(variant);
				return (
					<SuccessAlert
						title={`Success Alert ${capitalizeVariant}`}
						variant={variant}
					>
						This is the subtext for your alert message, providing important
						information or instructions.
					</SuccessAlert>
				);
			})}
			<SuccessAlert
				title={`Success Alert with Icon`}
				icon="checkbox-circle-fill"
			>
				This is the subtext for your alert message, providing important
				information or instructions.
			</SuccessAlert>
		</div>
	);
}
