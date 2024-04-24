import { RestGallery } from "$components/galleries.components";

/**
 * @type {import("$common/props").JSXComponent<{ images: import("$components/image.component").ImageType[]}>}
 */
export function ZoomRestGalleryExample(props) {
	const { images } = props;
	return <RestGallery images={images} zoom />;
}
