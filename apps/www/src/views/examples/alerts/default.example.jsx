import { Alert } from "$components/alert.component";
import { Icon } from "$components/icon.component";

export function DefaultAlertExample() {
	return (
		<div class="flex flex-col gap-y-4 justify-center">
			<Alert title="Alert Message Headline">
				This is the subtext for your alert message, providing important
				information or instructions.
			</Alert>
			<Alert
				title="Alert Message Headline with Icon"
				icon="notification-4-line"
			>
				This is the subtext for your alert message, providing important
				information or instructions.
			</Alert>
			<Alert>
				This is the subtext for your alert message without title, providing
				important information or instructions.
			</Alert>
			<Alert
				title="Alert Message Headline with Custom Icon"
				icon={
					<section class={"flex gap-x-1"}>
						<Icon name="star-smile-fill" />
						<Icon name="star-smile-fill" />
						<Icon name="star-smile-fill" />
					</section>
				}
			>
				This is the subtext for your alert message, providing important
				information or instructions.
			</Alert>
		</div>
	);
}
