import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Imape Picker page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>}
 */
export function ImagePickerPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Image Picker" source="imagepicker">
				<ComponentSection heading="Overview">
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
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="imagepicker" />
				</ComponentSection>

				<ComponentSection
					heading="Single ImagePicker"
					examples={["imagepicker/single"]}
				>
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
				</ComponentSection>

				<ComponentSection
					heading="Multiple Files ImagePicker"
					examples={["imagepicker/multiple"]}
				>
					<p>
						It also possible to select multiple files. Just pass{" "}
						<em>multiple</em> props and you good :)
					</p>
					<p>Example below is a combination with RestGallery component.</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
