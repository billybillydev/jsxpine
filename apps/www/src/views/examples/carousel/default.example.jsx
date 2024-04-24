import { Carousel } from "$components/carousel.component";

/**
 * @type {import("$common/props").JSXComponent<{ slides: import("$components/image.component").ImageType[] }>}
 */
export function DefaultCarouselExample(props) {
	const { slides } = props;
	return <Carousel slides={slides} />;
}
