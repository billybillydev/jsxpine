import { CarouselGallery } from "$components/galleries.components";

/**
 * @type {import("$common/props").JSXComponent<{ images: import("$components/image.component").ImageType[]}>}
 */
export function ZoomCarouselGalleryExample(props) {
	const { images } = props;
	return <CarouselGallery images={images} zoom />;
}
