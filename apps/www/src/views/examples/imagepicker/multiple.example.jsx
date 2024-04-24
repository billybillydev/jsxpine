import { SecondaryButton } from "$components/buttons.component";
import { ImagePicker } from "$components/image-picker.component";

export function MultipleImagePickerExample() {
	return (
		<ImagePicker
			multiple="true"
			x-on:selected-images={`
                console.log($event.detail);
                $manage("#multi-images-preview").images = $event.detail.selectedImages
            `}
		>
			<div class="flex flex-col gap-y-4">
				<SecondaryButton
					variant="inversed"
					text="Choose files"
					x-bind="trigger"
					class="place-self-center"
				/>
				<RestGallery
					x-show="selectedImages.length"
					id="multi-images-preview"
					class="grid grid-cols-2"
					nbDisplayedImages={2}
					zoom
				/>
			</div>
		</ImagePicker>
	);
}
