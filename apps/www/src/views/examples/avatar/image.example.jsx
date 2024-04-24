import { Avatar } from "$components/avatar.component";

export function ImageAvatarExample() {
	/**
	 * @type {import("$components/image.component").ImageType}
	 */
	const image = {
		src: "https://github.com/shadcn.png",
		alt: "@shadcn"
	};
	return (
		<div class="flex justify-center align-center p-6 rounded border bg-white">
			<Avatar image={image} fallbackText="CN" />
		</div>
	);
}
