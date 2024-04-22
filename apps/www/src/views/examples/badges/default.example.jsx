import { Badge } from "$components/badge.component";

export function DefaultBadgeExample() {
	return (
		<>
			<Badge text="Pill" />
			<Badge type="square" text="#Square" />
			<Badge text="Outlined" variant="outlined" />
			<Badge text="Inversed" variant="inversed" />
		</>
	);
}
