import { CarouselGallery } from "$components/galleries.components";

/**
 * @type {import("$common/props").JSXComponent<{ images: import("$components/image.component").ImageType[]}>}
 */
export function DefaultCarouselGalleryExample(props) {
	const { images } = props;
	return (
		<div class="bg-slate-200 p-4 flex flex-col gap-y-8 relative w-full">
			<CarouselGallery images={images} />
			<CarouselGallery direction="vertical" images={images} />
			<CarouselGallery thumbnailWidth="200px" images={images} />
		</div>
	);
}
