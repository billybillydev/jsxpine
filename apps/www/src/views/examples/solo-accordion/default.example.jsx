import { SoloAccordion } from "$components/solo-accordion.component";


export function SoloAccordionExample() {
	return (
		<>
			<SoloAccordion class="bg-white border rounded">
				<SoloAccordion.Trigger as="h2" class="text-center p-4">
					Click here to toggle content below
				</SoloAccordion.Trigger>
				<SoloAccordion.Content as="p" class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</SoloAccordion.Content>
			</SoloAccordion>
			<SoloAccordion class="bg-black text-white border rounded">
				<SoloAccordion.Trigger as="h2" class="text-center p-4">
					Click here to toggle content below
				</SoloAccordion.Trigger>
				<SoloAccordion.Content as="p" class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</SoloAccordion.Content>
			</SoloAccordion>
			<SoloAccordion class="bg-slate-300 border rounded">
				<SoloAccordion.Trigger as="h2" class="text-center p-4">
					Click here to toggle content below
				</SoloAccordion.Trigger>
				<SoloAccordion.Content as="p" class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</SoloAccordion.Content>
			</SoloAccordion>
		</>
	);
}
