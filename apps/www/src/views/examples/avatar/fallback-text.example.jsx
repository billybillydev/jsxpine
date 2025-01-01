import { Avatar } from "$components/avatar.component";

export function FallbackTextAvatarExample() {
	return (
		<div class="flex justify-center flex-wrap gap-3 p-6 rounded border bg-white">
			<Avatar fallbackText="CN" />
			<Avatar fallbackText="CN" color="primary" />
			<Avatar fallbackText="CN" color="secondary" />
			<Avatar fallbackText="CN" color="success" />
			<Avatar fallbackText="CN" color="danger" />
			<Avatar fallbackText="CN" color="info" />
			<Avatar fallbackText="CN" color="warning" />
			<Avatar
				fallbackText="CN"
				color={{ background: "bg-red-200", text: "text-indigo-500" }}
			/>
		</div>
	);
}
