import { PrimaryButton, InfoButton } from "$components/button.component";
import { Carousel } from "$components/carousel.component";
import { Icon } from "$components/icon.component";

/**
 * @type {import("$common/props").JSXComponent<{ slides: import("$components/image.component").ImageType[] }>}
 */
export function CustomNavigationsCarouselExample(props) {
	const { slides } = props;
	return (
		<div class="flex flex-col gap-y-4">
			<Carousel
				slides={slides}
				navigations={
					<div>
						<PrimaryButton
							x-bind:disabled="!loop && areFirstSlidesToShow()"
							x-on:click="previous()"
							borderRadius="pill"
							class="absolute top-1/2 -translate-y-1/2 left-4"
						>
							<Icon
								name="ri.arrow-left-line"
								size={6}
								fill="none"
								stroke="currentColor"
							/>
						</PrimaryButton>
						<PrimaryButton
							x-bind:disabled="!loop && areLastSlidesToShow()"
							x-on:click="next()"
							borderRadius="pill"
							class="absolute top-1/2 -translate-y-1/2 right-4"
						>
							<Icon
								name="ri.arrow-right-line"
								size={6}
								fill="none"
								stroke="currentColor"
							/>
						</PrimaryButton>
					</div>
				}
				loop
			/>

			<Carousel
				slides={slides}
				direction="vertical"
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
			/>
		</div>
	);
}
