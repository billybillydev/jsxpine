import { SuccessAlert } from "$components/alert.component";
import { capitalize } from "$lib";

export function SuccessAlertExample() {
	/**
	 * @type {Array<import("$common/types").VariantColorType>}
	 */
	const variants = ["solid", "outlined", "inversed"];
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{variants.map((variant) => {
				const capitalizeVariant = capitalize(variant);
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
		</div>
	);
}
