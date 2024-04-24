import { Badge } from "$components/badge.component";
import { Tooltip } from "$components/tooltip.component";

export function WithTextTooltipExample() {
	return (
		<div class="grid grid-cols-2 items-center gap-4">
			<div>
				<Tooltip text="I'm a tooltip but to left" position="left">
					<Badge text="Tooltip Left" />
				</Tooltip>
			</div>
			<div>
				<Tooltip text="I'm a tooltip by default to top">
					<Badge text="Hover me !" />
				</Tooltip>
			</div>
			<div>
				<Tooltip text="I'm a tooltip showing at bottom" position="bottom">
					<Badge text="Tooltip Bottom" />
				</Tooltip>
			</div>
			<div>
				<Tooltip text="I'm a tooltip and I'm at right" position="right">
					<Badge text="Tooltip Right" />
				</Tooltip>
			</div>
		</div>
	);
}
