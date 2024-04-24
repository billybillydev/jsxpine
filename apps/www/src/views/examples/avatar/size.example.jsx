import { specificSizes } from "$common/types";
import { Avatar } from "$components/avatar.component";

export function SizeAvatarExample() {
	/**
	 * @type {import("$components/image.component").ImageType}
	 */
	const image = {
		src: "https://github.com/shadcn.png",
		alt: "@shadcn"
	};
	return (
		<div class="flex flex-wrap justify-center items-center gap-3 align-center p-6 rounded border bg-white">
			{specificSizes.map((size) => {
				const props =
					Math.random() > 0.5
						? { image, fallbackText: "CN", size }
						: { fallbackText: "CN", size };
				return <Avatar {...props} />;
			})}
		</div>
	);
}
