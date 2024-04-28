import { DangerButton } from "$components/button.component";

export function DangerButtonExample() {
	return (
		<>
			<DangerButton text="Danger Button" />
			<DangerButton variant="outlined" text="Danger Outlined" />
			<DangerButton variant="inversed" text="Danger Inversed" />
		</>
	);
}
