import { SecondaryButton } from "$components/button.component";
import { Tooltip } from "$components/tooltip.component";

export function CustomTriggerTooltipExample() {
	return (
		<Tooltip
			text="I'm a tooltip triggering by click"
			size="md"
			triggerOnHover={false}
		>
			<SecondaryButton
				x-on:click="visible = !visible"
				text="Click Me to show Tooltip message"
				borderRadius="arc"
			/>
		</Tooltip>
	);
}
