import { DangerBadge } from "$components/badge.component";

export function DangerBadgeExample() {
	return (
		<>
			<DangerBadge text="Danger" />
			<DangerBadge type="square" text="#Square" />
			<DangerBadge text="Outlined" variant="outlined" />
			<DangerBadge text="Inversed" variant="inversed" />
		</>
	);
}
