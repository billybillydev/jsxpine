import { Avatar } from "$components/avatar.component";

export function ImageAvatarExample() {
	/**
	 * @type {import("$components/image.component").ImageType}
	 */
	const image = {
		src: "https://i.imgur.com/LDOO4Qs.jpg",
		alt: "avatar-image"
	};
	return (
		<div class="flex justify-center align-center p-6 rounded border bg-white">
			<Avatar image={image} fallbackText="CN" size="20" />
		</div>
	);
}
