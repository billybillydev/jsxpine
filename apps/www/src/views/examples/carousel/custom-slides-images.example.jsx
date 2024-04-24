import { Carousel } from "$components/carousel.component";
import { Image } from "$components/image.component";

/**
 * @type {import("$common/props").JSXComponent<{ slides: import("$components/image.component").ImageType[] }>}
 */
export function CustomSlidesImageCarouselExample(props) {
	const { slides } = props;
	return (
		<Carousel loop>
			{slides.map((image) => (
				<Image src={image.src} alt={image.alt} />
			))}
		</Carousel>
	);
}
