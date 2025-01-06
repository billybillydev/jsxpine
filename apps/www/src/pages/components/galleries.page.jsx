import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Galleries page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function GalleriesPage({ ...restProps }) {
	/**
	 * @type {import("$components/image.component").ImageType[]}
	 */
	const images = [
		{
			src: "https://cdn.devdojo.com/images/june2023/mountains-01.jpeg",
			alt: "Photo of Mountains"
		},
		{
			src: "https://cdn.devdojo.com/images/june2023/mountains-02.jpeg",
			alt: "Photo of Mountains 02"
		},
		{
			src: "https://cdn.devdojo.com/images/june2023/mountains-03.jpeg",
			alt: "Photo of Mountains 03"
		},
		{
			src: "https://cdn.devdojo.com/images/june2023/mountains-04.jpeg",
			alt: "Photo of Mountains 04"
		},
		{
			src: "https://cdn.devdojo.com/images/june2023/mountains-05.jpeg",
			alt: "Photo of Mountains 05"
		},
		{
			src: "https://cdn.devdojo.com/images/june2023/mountains-06.jpeg",
			alt: "Photo of Mountains 06"
		},
		{
			src: "https://cdn.devdojo.com/images/june2023/mountains-07.jpeg",
			alt: "Photo of Mountains 07"
		},
		{
			src: "https://cdn.devdojo.com/images/june2023/mountains-08.jpeg",
			alt: "Photo of Mountains 08"
		},
		{
			src: "https://cdn.devdojo.com/images/june2023/mountains-09.jpeg",
			alt: "Photo of Mountains 09"
		},
		{
			src: "https://cdn.devdojo.com/images/june2023/mountains-10.jpeg",
			alt: "Photo of Mountains 10"
		}
	];
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Galleries" source="gallery">
				<ComponentSection heading="Overview">
					<p>
						Gallery is a set on photos in a grid-like design. Based on your
						needs, JSXPine provides you 3 types of gallery.
					</p>
					<p>Discover each one and their variants with examples below.</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="gallery" />
				</ComponentSection>

				<ComponentSection
					heading="Rest Gallery"
					examples={["galleries/default-rest"]}
					images={images}
				>
					<p>
						Take RestGallery as a way to reduce display all photos. Because too
						many images can slower your page loading, it's pragmatic to display
						a few.
					</p>
					<p>
						With RestGallery, you set a number of images to display, and then,
						choose to display the others. By default, 3 images are displayed.
					</p>
					<p>Here below some examples with different displayed images.</p>
					<p class="italic">
						P.S: Notice that it's up to you to design gallery layout with class
						props. Thanks to tailwind, you can fully customize it.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Carousel Gallery"
					images={images}
					examples={["galleries/default-carousel"]}
				>
					<p>
						A trendy gallery is obviously carousel. It's a combination of
						Carousel component with a set of thumbnails as indicators.
					</p>
					<p>
						You can change direction with _direction_ props and define the
						thumbnail width with <em>thumbnailWidth</em> props.
					</p>
					<p>See example below:</p>
				</ComponentSection>

				<ComponentSection
					heading="Zoom Gallery"
					images={images}
					examples={["galleries/zoom-rest", "galleries/zoom-carousel"]}
				>
					<p>
						Because it's a well-known feature, gallery has zoom props which, you
						already guess, provides a zoom of the clicked image.
					</p>
					<p>
						See these two examples below respectively about rest and carousel
						galleries.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
