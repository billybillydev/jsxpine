import { RestGallery } from "$components/gallery.component";

/**
 * @type {import("$common/props").JSXComponent<{ images: import("$components/image.component").ImageType[]}>}
 */
export function ZoomRestGalleryExample(props) {
	const { images } = props;
	return <RestGallery images={images} zoom />;
}
