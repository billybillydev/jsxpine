import { InfoButton } from "$components/buttons.component";

export function InfoButtonExample() {
	return (
		<>
			<InfoButton text="Info Button" />
			<InfoButton variant="outlined" text="Info Outlined" />
			<InfoButton variant="inversed" text="Info Inversed" />
		</>
	);
}
