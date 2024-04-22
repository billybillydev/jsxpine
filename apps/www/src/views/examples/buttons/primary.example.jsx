import { PrimaryButton } from "$components/buttons.component";

export function PrimaryButtonExample() {
	return (
		<>
			<PrimaryButton text="Primary Button" />
			<PrimaryButton variant="outlined" text="Primary Outlined" />
			<PrimaryButton variant="inversed" text="Primary Inversed" />
		</>
	);
}
