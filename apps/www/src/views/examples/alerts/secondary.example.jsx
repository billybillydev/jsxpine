import { SecondaryAlert } from "$components/alert.component";
import { capitalCase } from 'change-case';

export function SecondaryAlertExample() {
	/**
	 * @type {Array<import("$common/types").VariantColorType>}
	 */
	const variants = ["solid", "outlined", "inversed"];
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			{variants.map((variant) => {
				const capitalizeVariant = capitalCase(variant);
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
				icon="question-answer-fill"
				variant="inversed"
			>
				This is the subtext for your alert message, providing important
				information or instructions.
			</SecondaryAlert>
		</div>
	);
}
