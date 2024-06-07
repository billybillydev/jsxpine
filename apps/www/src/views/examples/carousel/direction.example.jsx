import { Carousel } from "$components/carousel.component";

/**
 * @type {import("$common/props").JSXComponent<{ slides: import("$components/image.component").ImageType[] }>}
 */
export function DirectionCarouselExample(props) {
	const { slides } = props;
	return (
		<div class="flex flex-col gap-y-4">
			<Carousel slides={slides} indicator="right" direction="vertical" />
		</div>
	);
}
