import { Icon } from "$components/icon.component";

export function ThemeToggle() {
	return (
		<button
			x-data={"themeToggle"}
			x-on:click="toggle"
			class={
				"border-2 border-transparent hover:border-[#0d1117] dark:hover:border-slate-100 p-2 rounded-lg transition-colors"
			}
		>
			<Icon name="sun-fill" size={6} x-show="!darkMode" />
			<Icon name="moon-clear-line" size={6} x-show="darkMode" />
		</button>
	);
}
