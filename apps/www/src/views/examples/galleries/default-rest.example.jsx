import { RestGallery } from "$components/gallery.component";

/**
 * @type {import("$common/props").JSXComponent<{ images: import("$components/image.component").ImageType[]}>}
 */
export function DefaultRestGalleryExample(props) {
	const { images } = props;
	return (
		<div class="flex flex-col gap-y-12">
			<RestGallery class="flex flex-wrap [&_li]:w-1/2" images={images} />
			<hr />
			<RestGallery class="flex flex-wrap [&_li]:w-1/4" images={images} />
			<hr />
			<RestGallery
				nbDisplayedImages={4}
				class="grid grid-cols-2 w-3/4 mx-auto gap-2"
				images={images}
			/>
		</div>
	);
}
