/**
 * @typedef ZoomProps
 * @type {import("$common/props").HTMLTag & { selector?: string, showNavigation?: boolean }}
 */

import { Button } from "$components/button.component";
import { Icon } from "$components/icon.component";
import { Image } from "$components/image.component";
import clsx from "clsx";

/**
 * Zoom component props
 * @type {import("$common/props").JSXComponent<ZoomProps>}
 */
export function Zoom(props) {
	const {
		children,
		class: className,
		selector = "body",
		showNavigation = false
	} = props;
	return (
		<div
			x-data={`zoom(${showNavigation})`}
			class={clsx("w-full h-full select-none", className)}
		>
			{children}
			<template x-teleport={selector}>
				<div
					x-bind="shower"
					  x-transition:enter="transition ease-in-out duration-300"
					  x-transition:enter-start="opacity-0"
					  x-transition:leave="transition ease-in-in duration-300"
					  x-transition:leave-end="opacity-0"
					{...{
						"@click": "zoomOut",
						"@keyup.window.escape": "zoomOut",
						"@keyup.left.window": "showNavigation && previousImage($event)",
						"@keyup.right.window": "showNavigation && nextImage($event)",
						"x-trap.inert.noscroll": "zoom"
					}}
					class="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out"
					x-cloak
				>
					<div class="relative flex items-center justify-center aspect-square xl:aspect-video">
						{showNavigation && (
							<Button
								x-on:click="previousImage($event)"
								x-bind:disabled="disablePreviousNavigation"
								class="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-neutral-800/75 w-14 h-14 hover:bg-white/20"
							>
								<Icon name="arrow-left-line" size={6} />
							</Button>
						)}
						<Image
							x-show="zoom"
							x-transition:enter="transition ease-in-out duration-300"
							x-transition:enter-start="opacity-0 transform scale-50"
							x-transition:leave="transition ease-in-in duration-300"
							x-transition:leave-end="opacity-0 transform scale-50"
							class="object-contain object-center w-full h-full select-none cursor-zoom-out"
							x-bind:src="selectedImage?.src"
							x-bind:alt="selectedImage?.alt"
						/>
						{showNavigation && (
							<Button
								x-on:click="nextImage($event)"
								x-bind:disabled="disableNextNavigation"
								class="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-neutral-800/75 w-14 h-14 hover:bg-white/20"
							>
								<Icon name="arrow-right-line" size={6} />
							</Button>
						)}
					</div>
				</div>
			</template>
		</div>
	);
}
