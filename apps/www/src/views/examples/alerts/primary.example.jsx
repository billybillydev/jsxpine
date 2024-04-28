import { PrimaryAlert } from "$components/alert.component";

export function PrimaryAlertExample() {
	/**
	 * @type {Array<import("$common/types").VariantColorType>}
	 */
	const variants = ["solid", "outlined", "inversed"];
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{variants.map((variant) => {
				const capitalizeVariant = variant[0].toUpperCase().concat(variant.slice(1));
				return (
					<PrimaryAlert
						title={`Primary Alert ${capitalizeVariant}`}
						variant={variant}
					>
						This is the subtext for your alert message, providing important
						information or instructions.
					</PrimaryAlert>
				);
			})}
		</div>
	);
}
