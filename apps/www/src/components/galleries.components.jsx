/**
 * @typedef CarouselGalleryProps
 * @type {Omit<import("$components/carousel.component").CarouselProps, "slidesToShow" | "indicators" | "slides"> & { images: import("$components/image.component").ImageType[], thumbnailWidth?: string, zoom?: boolean }}
 */

import { Carousel } from "$components/carousel.component";
import { Image } from "$components/image.component";
import { Zoom } from "$components/zoom.component";
import clsx from "clsx";

/**
 * @typedef {"show-all" | "zoom"} RestGalleryRestEffectType
 */

/**
 * @typedef RestGalleryProps
 * @type {{ images: import("$components/image.component").ImageType[], nbDisplayedImages?: number, restEffect?: RestGalleryRestEffectType, zoom?: boolean } & import("$common/props").HTMLTag}
 */

/**
 *  Carousel Gallery component props
 * @type {import("$common/props").JSXComponent<CarouselGalleryProps>}
 */
export function CarouselGallery(props) {
	const {
		images,
		thumbnailWidth = "10rem",
		direction = "horizontal",
		zoom = false,
		...restProps
	} = props;

	return (
		<Zoom>
			<Carousel
				slides={images}
				{...restProps}
				class={direction === "horizontal" ? "flex-col" : "flex-row"}
				x-init={
					zoom
						? `
                        [...$refs.carousel.children].forEach((element) => {
                            element.classList.add("cursor-zoom-in");
                            element.addEventListener("click", () => {
                                zoomIn({ src: element.src, alt: element.alt });
                            })
                        })
                    `
						: undefined
				}
				indicator
				indicators={
					<ul
						class={clsx(
							"items-center overflow-auto bg-black grow",
							direction === "vertical"
								? "flex flex-col -order-1"
								: "grid grid-flow-col-dense"
						)}
						x-init={`
                        if (${direction === "vertical"}) {
                            $el.style.height = $refs.carousel.getBoundingClientRect().height + 'px';
                        }
                    `}
						x-ref="thumbnails"
					>
						<template x-for="(indicator, index) in items">
							<Image
								x-bind:src="indicator.src"
								x-bind:alt="indicator.alt"
								x-on:click="setActiveIndex(Number(index))"
								x-bind:class="{ 'opacity-50 cursor-not-allowed': isActive(Number(index)), 'cursor-pointer': !isActive(Number(index)) }"
								x-init={`
                                $watch("activeIndex", () => {
                                    if (isActive(Number(index))) {
                                        xDistance = $el.getBoundingClientRect().x - $refs["thumbnails"].getBoundingClientRect().x;
                                        yDistance = $el.getBoundingClientRect().y - $refs["thumbnails"].getBoundingClientRect().y;
                                        $refs["thumbnails"].scrollBy(xDistance, yDistance);
                                    }
                                })
                            `}
								style={`min-width: ${thumbnailWidth}`}
								class={clsx(
									direction === "vertical" ? "w-full" : "h-full",
									"object-cover"
								)}
							/>
						</template>
					</ul>
				}
			/>
		</Zoom>
	);
}

/**
 *
 * @type {import("$common/props").JSXComponent<RestGalleryProps>}
 */
export function RestGallery(props) {
	const {
		images,
		nbDisplayedImages = 3,
		restEffect = "show-all",
		class: className,
		zoom = false,
		...restProps
	} = props;
    
	return (
		<Zoom>
			<ul
				x-data={`restGallery(${JSON.stringify(
					images
				)}, ${nbDisplayedImages}, "${restEffect}")`}
				class={className}
				{...restProps}
				x-ref="restGallery"
			>
				<template x-for="image in displayedImages">
					<li>
						<Image
							x-on:click={zoom && `zoomIn(image)`}
							x-bind:src="image.src"
							x-bind:alt="image.alt"
							class={clsx("object-cover h-full", { "cursor-zoom-in": zoom })}
						/>
					</li>
				</template>
				<template x-if="displayedImages.length !== images.length">
					<li
						class="flex items-center justify-center gap-x-2 bg-slate-800 text-white text-2xl cursor-pointer"
						x-on:click="clickOnRestImage()"
						x-ref="restImage"
					>
						<span class="">+</span>
						<span x-text="nbRestImages"></span>
					</li>
				</template>
			</ul>
		</Zoom>
	);
}
