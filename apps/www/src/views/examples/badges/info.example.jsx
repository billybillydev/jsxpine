import { InfoBadge } from "$components/badge.component";

export function InfoBadgeExample() {
	return (
		<>
			<InfoBadge text="Info" />
			<InfoBadge type="square" text="#Square" />
			<InfoBadge text="Outlined" variant="outlined" />
			<InfoBadge text="Inversed" variant="inversed" />
		</>
	);
}
