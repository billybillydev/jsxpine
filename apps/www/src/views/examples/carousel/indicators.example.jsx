import { Carousel } from "$components/carousel.component";

/**
 * @type {import("$common/props").JSXComponent<{ slides: import("$components/image.component").ImageType[] }}
 */
export function IndicatorsCarouselExample(props) {
	const { slides } = props;
	return (
		<div class="flex flex-col gap-y-6">
			<Carousel slides={slides} indicator />
			<Carousel slides={slides} indicator="top" />
		</div>
	);
}
