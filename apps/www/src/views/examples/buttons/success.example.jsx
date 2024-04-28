import { SuccessButton } from "$components/button.component";

export function SuccessButtonExample() {
	return (
		<>
			<SuccessButton text="Success Button" />
			<SuccessButton variant="outlined" text="Success Outlined" />
			<SuccessButton variant="inversed" text="Success Inversed" />
		</>
	);
}
