import {
	GroupAccordionList,
	GroupAccordionItem,
	GroupAccordionTrigger,
	GroupAccordionContent
} from "$components/accordion.component";

export function GroupAccordionExample() {
	return (
		<GroupAccordionList class="gap-y-4">
			<GroupAccordionItem class="bg-white border rounded text-slate-900">
				<GroupAccordionTrigger
					as="h2"
					class="p-4 w-full text-center "
					x-bind:class="{ 'border-b': isActive(id) }"
				>
					Click here and close all others.
				</GroupAccordionTrigger>
				<GroupAccordionContent as="p" class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</GroupAccordionContent>
			</GroupAccordionItem>
			<GroupAccordionItem class="bg-black text-white border rounded">
				<GroupAccordionTrigger as="h2" class="p-4 w-full text-center">
					Click here and close all others.
				</GroupAccordionTrigger>
				<GroupAccordionContent as="p" class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</GroupAccordionContent>
			</GroupAccordionItem>
			<GroupAccordionItem class="bg-slate-300 text-slate-900 border rounded">
				<GroupAccordionTrigger as="h2" class="p-4 w-full text-center">
					Click here and close all others.
				</GroupAccordionTrigger>
				<GroupAccordionContent as="p" class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</GroupAccordionContent>
			</GroupAccordionItem>
		</GroupAccordionList>
	);
}
