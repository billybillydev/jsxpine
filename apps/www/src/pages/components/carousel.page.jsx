import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentPreview,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Carousel page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function CarouselPage({ ...restProps }) {
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
	const contents = [
		{
			color: "bg-info",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem aliquid nam, quaerat eligendi quasi iste sed, placeat consequuntur enim ad quis tenetur praesentium impedit! Suscipit cumque natus ipsam earum."
		},
		{
			color: "bg-primary",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis."
		},
		{
			color: "bg-success",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid vel eligendi minus nesciunt rerum illo beatae eos dolor. Esse voluptatem excepturi eligendi ab rem, nam possimus sed sequi quaerat corrupti consequuntur molestias sint rerum repudiandae explicabo est necessitatibus non autem vitae hic illo officiis obcaecati asperiores maxime. Facere, eum?"
		},
		{
			color: "bg-warning",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor dicta cumque nemo. Architecto quam odit obcaecati laboriosam sapiente inventore, dolorem iusto? Numquam velit sed minima culpa magni sapiente. Distinctio quas voluptatem sed dignissimos cumque heading sequi ratione consequatur at, dicta iste repellat non! Quam quod totam aperiam magni repellat dolorum dolore mollitia illo, fugit qui possimus voluptatibus! Maiores eveniet consectetur voluptates nostrum magni doloribus in, ea autem itaque nam maxime minus necessitatibus illum ad?"
		},
		{
			color: "bg-danger",
			text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis magni, aperiam repellendus nisi itaque facere! Consequatur beatae voluptas reiciendis minus quidem inventore ea heading harum dicta obcaecati aut nam sunt ipsum odit dolore doloribus iure nemo quasi, officia asperiores. Vero?"
		}
	];
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Carousel">
				<ComponentSection heading="Overview">
					<p>
						Carousel is a good way to show multiple contents in one place by
						alterning between them via a navigation-like.
					</p>
					<p>Best example is gallery photos from ecommerce product detail.</p>
					<p>
						JSXPine's Carousel provide properties which will enabled you to deal
						with many customization cases. Here below are some examples of what
						you can achieved with this component:
					</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="carousel" />
				</ComponentSection>

				<ComponentSection
					heading="Default Carousel"
					examples={["carousel/default"]}
					slides={images}
				>
					<p>
						By default, Carousel is aligned horizontally with navigation button
						in the middle and each one to the opposite side. Slides are images.
					</p>
					<p>
						We will see further that you can customize slides and put whatever
						contents you can.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="With Indicators"
					slides={images}
					examples={["carousel/indicators"]}
				>
					<p>
						By setting indicator props to true, dot points will appeared at the
						bottom of the carousel.
					</p>
					<p>It displays the number of items the carousel contains.</p>
					<p>
						These are indicator props value: <em>true</em>, <em>top</em>,{" "}
						<em>bottom (default value when true)</em>, left, <em>right</em>.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Carousel Direction"
					examples={["carousel/direction"]}
					slides={images}
				>
					<p>
						With direction props, you will be able to slide items from carousel
						horizontally (by default) or <em>vertically</em> !
					</p>
					<p>Below an example of the design.</p>
				</ComponentSection>

				<ComponentSection
					heading="Carousel Loop"
					examples={["carousel/loop"]}
					slides={images}
				>
					<p>
						Loop props allow to return to first element when item is last and
						vice-versa.
					</p>
				</ComponentSection>

				<ComponentSection heading="Custom Slides">
					<p>
						Default slot is for slides. Here is an example with our own image
						design.
					</p>
					<ComponentPreview
						slides={images}
						filename="/carousel/custom-slides-images"
					/>
					<p>
						However, images are not the only slides you can put in carousel. Be
						aware that it's up to you to properly define your css class to have
						expected layout.
					</p>
					<p>
						This is an example with just some section tag and dummy content
						inside as slides.
					</p>
					<ComponentPreview
						slides={contents}
						filename="/carousel/custom-slides"
					/>
				</ComponentSection>

				<ComponentSection
					heading="Custom Navigations"
					slides={images}
					examples={["carousel/custom-navigations"]}
				>
					<p>
						Carousel allows you to customize navigations with slot which is
						named <b>navigations</b>.
					</p>
					<p>
						You will be able to use all alpine features bound to default
						navigations such as <em>previous()</em>, <em>next()</em> functions
						and <em>disability</em>.
					</p>
					<p>
						With this customization, you'll have to deal with icons based on
						direction yourself. Below are some examples.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Custom Indicators"
					slides={images}
					examples={["carousel/custom-indicators"]}
				>
					<p>
						Indicators can also be customize. Just set an html tag with slot
						name as <b>indicators</b>.
					</p>
					<p>
						As reminder, you'll have to deal with indicators position based on
						direction yourself. Below an example with indicators as numbers.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Multiple Slides"
					slides={images}
					examples={[
						"carousel/multiple-slides-with-2",
						"carousel/multiple-slides-with-3",
						"carousel/multiple-custom-slides-with-3"
					]}
				>
					<p>A great feature of carousel is to show multiple slides.</p>
					<p>
						Just set a number to slidesToShow props as shown in examples below.
					</p>
					<p class="italic">
						PS: For custom slides, it's up to you to manage slide sizes.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
