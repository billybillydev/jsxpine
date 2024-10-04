import { PrimaryAlert } from "$components/alert.component";
import { capitalCase } from 'change-case';

export function PrimaryAlertExample() {
	/**
	 * @type {Array<import("$common/types").VariantColorType>}
	 */
	const variants = ["solid", "outlined", "inversed"];
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{variants.map((variant) => {
				const capitalizeVariant = capitalCase(variant);
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
				icon={<PrimaryAlertCustomIcon text="NEW" />}
				variant="outlined"
				x-init="console.log('primary alert')"
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
function PrimaryAlertCustomIcon({ text }) {
	return (
		<span class={"p-1 bg-primary-500 text-primary-100 rounded-full"}>
			{text}
		</span>
	);
}
