import { PrimaryAlert } from "$components/alert.component";
import { capitalize } from "$lib";

export function PrimaryAlertExample() {
	/**
	 * @type {Array<import("$common/types").VariantColorType>}
	 */
	const variants = ["solid", "outlined", "inversed"];
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{variants.map((variant) => {
				const capitalizeVariant = capitalize(variant);
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
			<PrimaryAlert
				title={`Primary Alert with Icon`}
				icon={<PrimaryAlertIcon text="NEW" />}
				variant={"outlined"}
			>
				This is the subtext for your alert message, providing important
				information or instructions.
			</PrimaryAlert>
		</div>
	);
}

/**
 * @param {object} props
 * @param {string} props.text
 */
function PrimaryAlertIcon({ text }) {
	return (
		<span class={"rounded-full bg-primary-500 relative p-1 text-primary-100"}>
			{text}
		</span>
	);
}
