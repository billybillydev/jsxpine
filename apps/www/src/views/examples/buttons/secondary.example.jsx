import { SecondaryButton } from "$components/buttons.component";

export function SecondaryButtonExample() {
	return (
		<>
			<SecondaryButton text="Secondary Button" />
			<SecondaryButton variant="outlined" text="Secondary Outlined" />
			<SecondaryButton variant="inversed" text="Secondary Inversed" />
		</>
	);
}
