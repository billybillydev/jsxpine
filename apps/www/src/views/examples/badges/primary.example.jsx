import { PrimaryBadge } from "$components/badge.component";

export function PrimaryBadgeExample() {
	return (
		<>
			<PrimaryBadge text="Primary" />
			<PrimaryBadge type="square" text="#Square" />
			<PrimaryBadge text="Outlined" variant="outlined" />
			<PrimaryBadge text="Inversed" variant="inversed" />
		</>
	);
}
