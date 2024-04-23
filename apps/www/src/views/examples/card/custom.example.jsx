import { SecondaryButton } from "$components/buttons.component";
import { Card } from "$components/card.component";
import { Icon } from "$pages/components/icon.component";

export function CustomCardExample() {
	return (
		<Card class="p-4">
			<h3 class="relative flex gap-x-1 items-center">
				<Icon name="lightbulb-line" stroke-width="0.5" />
				<span class="font-semibold underline">Adding items to the command</span>
			</h3>
			<p class="px-4">
				In order to make use of this component you can simply add your items
				inside of the commandItems array. Each item will have a title, value,
				icon, and default value. All items will be searchable, but only default
				items will be visible with an empty search. Learn how to get the
				selected item below.
			</p>
			<div class="flex items-center justify-end">
				<SecondaryButton class="flex gap-x-2">
					<span>View More</span>
					<Icon name="arrow-right-line" size={5} />
				</SecondaryButton>
			</div>
		</Card>
	);
}
