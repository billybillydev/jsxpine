import { Button } from "$components/button.component";
import { ImagePicker } from "$components/imagepicker.component";
import { Image } from "$components/image.component";

export function SingleImagePickerExample() {
	return (
		<ImagePicker>
			<div class="flex flex-col gap-y-4">
				<Button
					class="place-self-center"
					text="Choose a file"
					x-bind="trigger"
				/>
				<div class="flex flex-wrap gap-x-2" x-show="selectedImages.length">
					<template x-for="image in selectedImages">
						<Image x-bind:src="image.src" x-bind:alt="image.alt" />
					</template>
				</div>
			</div>
		</ImagePicker>
	);
}
