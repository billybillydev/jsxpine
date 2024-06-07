import { Carousel } from "$components/carousel.component";

/**
 * @type {import("$common/props").JSXComponent<{ slides: {color: string, text: string }[] }>}
 */
export function CustomSlidesCarouselExample(props) {
	const { slides } = props;
	return (
		<Carousel hideNavigations indicator>
			{slides.map((item, index) => (
				<div
					class={`min-w-full h-full flex flex-col gap-y-2 items-center p-2 md:p-6 ${item.color}`}
				>
					<h3>This is Slide {index + 1}</h3>
					<p class="text-sm flex items-start" safe>{item.text}</p>
				</div>
			))}
		</Carousel>
	);
}
