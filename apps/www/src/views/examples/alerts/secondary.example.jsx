import { SecondaryAlert } from "$components/alert.component";
import { capitalize } from "$lib";

export function SecondaryAlertExample() {
	/**
	 * @type {Array<import("$common/types").VariantColorType>}
	 */
	const variants = ["solid", "outlined", "inversed"];
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{variants.map((variant) => {
				const capitalizeVariant = capitalize(variant);
				return (
					<SecondaryAlert
						title={`Secondary Alert ${capitalizeVariant}`}
						variant={variant}
					>
						This is the subtext for your alert message, providing important
						information or instructions.
					</SecondaryAlert>
				);
			})}
			<SecondaryAlert
				title={`Secondary Alert with Icon`}
				variant={"inversed"}
				icon="chat-1-fill"
			>
				This is the subtext for your alert message, providing important
				information or instructions.
			</SecondaryAlert>
		</div>
	);
}
