import { Button } from "$components/buttons.component";
import { Icon } from "$components/icon.component";
import { Image } from "$components/image.component";
import clsx from "clsx";

/**
 * @typedef CarouselNavigationProps
 * @property {import("$common/types").DirectionType} direction
 */

/**
 * @typedef CarouselIndicatorsProps
 * @type {import("$common/props").HTMLTagWithChildren & { indicator?: boolean | import("$common/types").PositionType }}
 */

/**
 * @typedef CarouselProps
 * @type {{ slides?: import("$components/image.component").ImageType[], loop?: boolean, indicator?: boolean | import("$common/types").PositionType, direction?: import("$common/types").DirectionType, hideNavigations?: boolean, slidesToShow?: number, navigations?: JSX.Element, indicators?: JSX.Element } & import("$common/props").HTMLTag}
 */

/**
 * Carousel Navigation component props
 * @type {import("$common/props").JSXComponent<CarouselNavigationProps>}
 */
export function CarouselNavigations(props) {
	const { direction } = props;
	/**
	 * @type {Map<import("$common/types").DirectionType, { previous: string; next: string }>}
	 */
	const navigationButtonDirectionClassMap = new Map([
		[
			"horizontal",
			{
				previous: "top-1/2 -translate-y-1/2 left-4",
				next: "top-1/2 -translate-y-1/2 right-4"
			}
		],
		[
			"vertical",
			{
				previous: "left-1/2 -translate-x-1/2 top-4",
				next: "left-1/2 -translate-x-1/2 bottom-4"
			}
		]
	]);

	/**
	 * @type {Map<import("$common/types").DirectionType, { previous: string; next: string }>}
	 */
	const navigationIconDirectionClassMap = new Map([
		[
			"horizontal",
			{ previous: "arrow-left-s-line", next: "arrow-right-s-line" }
		],
		["vertical", { previous: "arrow-up-s-line", next: "arrow-down-s-line" }]
	]);

	const navIcon = navigationIconDirectionClassMap.get(direction);
	return (
		<>
			<Button
				x-bind:disabled="!loop && areFirstSlidesToShow()"
				x-on:click="previous()"
				borderRadius="circle"
				class={`absolute ${
					navigationButtonDirectionClassMap.get(direction)?.previous
				}`}
			>
				{navIcon ? (
					<Icon
						name={navIcon.previous}
						size={6}
						fill="none"
						stroke="currentColor"
					/>
				) : (
					""
				)}
			</Button>
			<Button
				x-bind:disabled="!loop && areLastSlidesToShow()"
				x-on:click="next()"
				borderRadius="circle"
				class={`absolute ${
					navigationButtonDirectionClassMap.get(direction)?.next
				}`}
			>
				{navIcon ? (
					<Icon
						name={navIcon.next}
						size={6}
						fill="none"
						stroke="currentColor"
					/>
				) : (
					""
				)}
			</Button>
		</>
	);
}

/**
 * Carousel Indicators component props
 * @type {import("$common/props").JSXComponent<CarouselIndicatorsProps>}
 */
export function CarouselIndicators(props) {
	const { children, indicator } = props;

	/**
	 * @type {Map<import("$common/types").PositionType, string>}
	 */
	const indicatorPositionClassMap = new Map([
		["top", "top-0 left-1/2 -translate-x-1/2 gap-x-2"],
		["bottom", "bottom-0 left-1/2 -translate-x-1/2 gap-x-2"],
		["left", "left-0 top-1/2 -translate-y-1/2 flex-col gap-y-2"],
		["right", "right-0 top-1/2 -translate-y-1/2 flex-col gap-y-2"]
	]);

	return (
		<ul
			class={`absolute flex ${
				indicator && typeof indicator !== "boolean"
					? indicatorPositionClassMap.get(indicator)
					: indicatorPositionClassMap.get("bottom")
			} p-4`}
		>
			{children ?? (
				<template x-for="(indicator, index) in $refs.carousel.children">
					<li>
						<button
							x-on:click="setActiveIndex(Number(index))"
							x-bind:disabled="isActive(Number(index))"
							class="cursor-pointer p-2 rounded-full btn"
						></button>
					</li>
				</template>
			)}
		</ul>
	);
}

/**
 * Carousel component props
 * @type {import("$common/props").JSXComponent<CarouselProps>}
 */
export function Carousel(props) {
	const {
		children,
		slides,
		class: className,
		loop = false,
		indicator = false,
		direction = "horizontal",
		hideNavigations = false,
		slidesToShow = 1,
		navigations,
		indicators,
		...restProps
	} = props;

	/**
	 * @type {Map<import("$common/types").DirectionType, string>}
	 */
	const directionClassMap = new Map([
		["horizontal", "flex items-center"],
		[
			"vertical",
			slidesToShow > 1 ? "flex flex-col items-center" : "grid grid-flow-dense"
		]
	]);
	/**
	 * @type {Map<import("$common/types").DirectionType, string>}
	 */
	const slideDirectionClassMap = new Map([
		["horizontal", slidesToShow > 1 ? "" : "min-w-full h-full"],
		["vertical", slidesToShow > 1 ? "" : "min-w-full h-[inherit]"]
	]);
	const slideDirectionDimensionStyle =
		direction === "horizontal"
			? `width: ${100 / slidesToShow}%; height: 100%;`
			: `width: 100%; height: ${100 / slidesToShow}%;`;

	return (
		<div
			x-data={`carousel({ loop: ${loop}, slidesToShow: ${slidesToShow} })`}
			class={clsx("relative flex", className)}
			{...restProps}
		>
			<div class="relative flex grow h-full">
				<div
					x-ref="carousel"
					class={`${directionClassMap.get(direction)} overflow-hidden`}
				>
					{children ??
						slides?.map((slide) => (
							<Image
								class={slideDirectionClassMap.get(direction)}
								style={slideDirectionDimensionStyle}
								src={slide.src}
								alt={slide.alt}
							/>
						))}
				</div>
				{!hideNavigations ? (
					<>{navigations ?? <CarouselNavigations direction={direction} />}</>
				) : null}
			</div>
			{indicator === true || typeof indicator !== "boolean" ? (
				<>{indicators ?? <CarouselIndicators indicator={indicator} />}</>
			) : null}
		</div>
	);
}
