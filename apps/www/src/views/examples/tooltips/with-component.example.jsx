import { Badge } from "$components/badge.component";
import { Tooltip } from "$components/tooltip.component";

function TooltipDummyComponent() {
    return <p>I was made for TooltipWithComponentExample</p>;
}

export function WithComponentTooltipExample() {
    return (
			<Tooltip
				triggerOnHover={false}
				component={<TooltipDummyComponent />}
				position="bottom"
			>
				<Badge x-bind="toggle" text="Display Dummy Content !" />
			</Tooltip>
		);
}