import { Icon } from "$components/icon.component";

export function ThemeToggle() {
	return (
		<button
			x-data={"themeToggle"}
			x-on:click="toggle"
			class={
				"border border-transparent hover:border-foreground p-2 rounded-lg transition-colors duration-300"
			}
		>
			<Icon name="ri.sun-fill" size={6} x-show="!darkMode" />
			<Icon name="ri.moon-clear-line" size={6} x-show="darkMode" />
		</button>
	);
}
