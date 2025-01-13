import { Icon } from "$components/icon.component";

export function ThemeToggle() {
	return (
		<div x-data={"themeToggle"}>
			<button class={"p-2 rounded-full border-2 border-yellow-500 dark:border-primary-400"} x-on:click="toggle">
				<Icon name="sun-fill" class={"text-yellow-500"} size={6} x-show="!darkMode" />
				<Icon name="moon-clear-line" class={"text-primary-400"} size={6} x-show="darkMode" />
			</button>
		</div>
	);
}
