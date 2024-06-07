import { InfoAlert } from "$components/alert.component";
import { capitalize } from "$lib";

export function InfoAlertExample() {
	/**
	 * @type {Array<import("$common/types").VariantColorType>}
	 */
	const variants = ["solid", "outlined", "inversed"];
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{variants.map((variant) => {
				const capitalizeVariant = capitalize(variant);
				return (
					<InfoAlert
						title={`Info Alert ${capitalizeVariant}`}
						variant={variant}
					>
						This is the subtext for your alert message, providing important
						information or instructions.
					</InfoAlert>
				);
			})}
		</div>
	);
}
