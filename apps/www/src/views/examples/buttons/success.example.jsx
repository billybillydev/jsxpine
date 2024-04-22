import { SuccessButton } from "$components/buttons.component";

export function SuccessButtonExample() {
	return (
		<>
			<SuccessButton text="Success Button" />
			<SuccessButton variant="outlined" text="Success Outlined" />
			<SuccessButton variant="inversed" text="Success Inversed" />
		</>
	);
}
