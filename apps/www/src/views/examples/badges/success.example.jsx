import { SuccessBadge } from "$components/badge.component";

export function SuccessBadgeExample() {
	return (
		<>
			<SuccessBadge text="Success" />
			<SuccessBadge type="square" text="#Square" />
			<SuccessBadge text="Outlined" variant="outlined" />
			<SuccessBadge text="Inversed" variant="inversed" />
		</>
	);
}
