import { WarningButton } from "$components/buttons.component";

export function WarningButtonExample() {
	return (
		<>
			<WarningButton text="Warning Button" />
			<WarningButton variant="outlined" text="Warning Outlined" />
			<WarningButton variant="inversed" text="Warning Inversed" />
		</>
	);
}
