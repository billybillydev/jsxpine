import { Carousel, CarouselIndicators } from "$components/carousel.component";

/**
 * @type {import("$common/props").JSXComponent<{ slides: import("$components/image.component").ImageType[] }>}
 */
export function DefaultCarouselExample(props) {
	const { slides } = props;
	return (
		<Carousel
			slides={slides}
			indicators={
				<CarouselIndicators>
					{slides.map((image, index) => (
						<li>
							<button
								x-on:click={`setActiveIndex(Number(${index}))`}
								x-bind:disabled={`isActive(Number(${index}))`}
								class="cursor-pointer p-2 bg-white text-slate-700 disabled:bg-slate-900 disabled:text-white disabled:cursor-not-allowed"
							>
								<span>{index + 1}</span>
							</button>
						</li>
					))}
				</CarouselIndicators>
			}
			loop
			indicator
		/>
	);
}
