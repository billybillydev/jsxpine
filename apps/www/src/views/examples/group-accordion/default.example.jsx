import { GroupAccordion } from "$components/group-accordion.component";


export function GroupAccordionExample() {
	return (
		<GroupAccordion class="gap-y-4">
			<GroupAccordion.Item class="bg-white border rounded">
				<GroupAccordion.Trigger as="h2"
					class="p-4 w-full text-center "
					x-bind:class="{ 'border-b': isActive(id) }"
				>
					Click here and close all others.
				</GroupAccordion.Trigger>
				<GroupAccordion.Content as="p" class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</GroupAccordion.Content>
			</GroupAccordion.Item>
			<GroupAccordion.Item class="bg-black text-white border rounded">
				<GroupAccordion.Trigger as="h2" class="p-4 w-full text-center" x-bind:class="{ 'border-b': isActive(id) }">
					Click here and close all others.
				</GroupAccordion.Trigger>
				<GroupAccordion.Content as="p" class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</GroupAccordion.Content>
			</GroupAccordion.Item>
			<GroupAccordion.Item class="bg-slate-300 border rounded">
				<GroupAccordion.Trigger as="h2" class="p-4 w-full text-center" x-bind:class="{ 'border-b': isActive(id) }">
					Click here and close all others.
				</GroupAccordion.Trigger>
				<GroupAccordion.Content as="p" class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</GroupAccordion.Content>
			</GroupAccordion.Item>
		</GroupAccordion>
	);
}
