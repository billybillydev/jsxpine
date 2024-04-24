import { Carousel } from "$components/carousel.component";
import { Image } from "$components/image.component";

/**
 * @type {import("$common/props").JSXComponent<{ slides: import("$components/image.component").ImageType[] }>}
 */
export function MultipleCustomSlidesWith2CarouselExample(props) {
	const { slides } = props;
	return (
		<Carousel slidesToShow={3} loop>
			{slides.map((image) => (
				<Image class="w-1/3 h-full" src={image.src} alt={image.alt} />
			))}
		</Carousel>
	);
}
