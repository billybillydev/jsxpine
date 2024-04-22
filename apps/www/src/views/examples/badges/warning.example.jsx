import { WarningBadge } from "$components/badge.component";

export function WarningBadgeExample() {
	return (
		<>
			<WarningBadge text="Warning" />
			<WarningBadge type="square" text="#Square" />
			<WarningBadge text="Outlined" variant="outlined" />
			<WarningBadge text="Inversed" variant="inversed" />
		</>
	);
}
