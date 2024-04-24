import { MainLayout } from "$layouts/main.layout";
import { ComponentPresentation } from "$views/component-presentation";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Imape Picker page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>}
 */
export function ImagePickerPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<div class="text-center">
					<h1>Image Picker</h1>
				</div>

				<div id="overview">
					<h2>Overview</h2>
					<p>
						ImagePicker is a very-much wanted component that brings you blob
						data from input file.
					</p>
					<p>
						It is what been called purpose-only component, which means that it
						does not have UI design but rather composed of just functionality.
					</p>
					<p>
						It's up to you to design it thanks to slot, and examples below will
						show you how to do it.
					</p>
				</div>

				<div id="single-imagepicker">
					<h2>Single ImagePicker</h2>
					<p>
						Like an input file, the basic ImagePicker lets you select an image
						after clicking on the trigger element.
					</p>
					<p>
						When designing your ui component, pass{" "}
						<b>
							alpinejs x-bind attribute
							<em>"trigger"</em>
						</b>{" "}
						to your trigger component and grab your image with{" "}
						<b>
							alpinejs imagePickerData <em>"selectedImages"</em>
						</b>{" "}
						property.
					</p>
					<p>Check example below.</p>
					<p class="italic">
						P.S: As a reminder, returned value from input file is an array of
						file, even if only one has been choosen.
					</p>
					<ComponentPreview filename="/imagepicker/single" />
				</div>

				<div id="multiple-imagepicker">
					<h2>Multiple Files ImagePicker</h2>
					<p>
                        It also possible to select multiple files. Just pass <em>multiple</em> props
                        and you good :)
                    </p>
					<p>Example below is a combination with RestGallery component.</p>
					<ComponentPreview filename="/imagepicker/multiple" />
				</div>
			</ComponentPresentation>
		</MainLayout>
	);
}
