import { InfoButton } from "$components/button.component";
import { Carousel } from "$components/carousel.component";

/**
 * @type {import("$common/props").JSXComponent<{ slides: import("$components/image.component").ImageType[] }>}
 */
export function MultipleSlidesWith3CarouselExample(props) {
	const { slides } = props;
	return (
		<Carousel
			slides={slides}
			slidesToShow={3}
			direction="vertical"
			indicator="left"
			navigations={
				<div>
					<InfoButton
						x-bind:disabled="!loop && areFirstSlidesToShow"
						x-on:click="previous()"
						borderRadius="pill"
						class="absolute left-1/2 -translate-x-1/2 top-4"
					>
						<span>Previous</span>
					</InfoButton>
					<InfoButton
						x-bind:disabled="!loop && areLastSlidesToShow"
						x-on:click="next()"
						borderRadius="pill"
						class="absolute left-1/2 -translate-x-1/2 bottom-4"
					>
						<span>Next</span>
					</InfoButton>
				</div>
			}
			loop
		/>
	);
}
