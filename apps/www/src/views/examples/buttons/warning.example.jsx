import { WarningButton } from "$components/button.component";

export function WarningButtonExample() {
	return (
		<>
			<WarningButton text="Warning Button" />
			<WarningButton variant="outlined" text="Warning Outlined" />
			<WarningButton variant="inversed" text="Warning Inversed" />
		</>
	);
}
