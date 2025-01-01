import { Avatar } from "$components/avatar.component";

export function SizeAvatarExample() {
	/**
	 * @type {import("$components/image.component").ImageType}
	 */
	const image = {
		src: "https://i.imgur.com/yhW6Yw1.jpg",
		alt: "avatar-size"
	};
	const sizes = ["6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"
	];

	return (
		<div class="flex flex-wrap justify-center items-center gap-3 p-6 rounded border bg-white">
			{sizes.map((size) => {
				const props =
					Math.random() > 0.5
						? {
								image,
								fallbackText: "CN",
								size: /** @type {import("$components/avatar.component").AvatarSize} */ (
									size
								)
						  }
						: {
								fallbackText: "JSX",
								size: /** @type {import("$components/avatar.component").AvatarSize} */ (
									size
								)
						  };
				return <Avatar {...props} />;
			})}
		</div>
	);
}
