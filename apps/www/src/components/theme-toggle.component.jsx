import { Icon } from "$components/icon.component";

export function ThemeToggle() {
	return (
		<div x-data={"themeToggle"}>
			<button x-on:click="toggle">
				<Icon name="sun-fill" size={6} x-show="!darkMode" />
				<Icon name="moon-clear-line" size={6} x-show="darkMode" />
			</button>
		</div>
	);
}
