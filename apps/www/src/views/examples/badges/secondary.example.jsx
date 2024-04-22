import { SecondaryBadge } from "$components/badge.component";

export function SecondaryBadgeExample() {
	return (
		<>
			<SecondaryBadge text="Secondary" />
			<SecondaryBadge type="square" text="#Square" />
			<SecondaryBadge text="Outlined" variant="outlined" />
			<SecondaryBadge text="Inversed" variant="inversed" />
		</>
	);
}
