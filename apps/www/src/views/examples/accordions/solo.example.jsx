import {
	SoloAccordion,
	SoloAccordionContent,
	SoloAccordionTrigger
} from "$components/accordions.component";

export function SoloAccordionExample() {
	return (
		<>
			<SoloAccordion class="bg-white border rounded">
				<SoloAccordionTrigger class="p-4">
					<h2>Click here to toggle content below</h2>
				</SoloAccordionTrigger>
				<SoloAccordionContent class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</SoloAccordionContent>
			</SoloAccordion>
			<SoloAccordion class="bg-black text-white border rounded">
				<SoloAccordionTrigger class="p-4">
					<h2>Click here to toggle content below</h2>
				</SoloAccordionTrigger>
				<SoloAccordionContent class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</SoloAccordionContent>
			</SoloAccordion>
			<SoloAccordion class="bg-slate-300 border rounded">
				<SoloAccordionTrigger class="p-4">
					<h2>Click here to toggle content below</h2>
				</SoloAccordionTrigger>
				<SoloAccordionContent class="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
					finibus magna et dictum. Aenean volutpat et nisi id interdum. Integer
					nec lectus gravida, aliquet odio a, elementum turpis. Sed efficitur
					ligula lacus, ut laoreet lorem vulputate eget. Vivamus eget nulla
					elementum, auctor nisi vitae, elementum tortor.
				</SoloAccordionContent>
			</SoloAccordion>
		</>
	);
}
