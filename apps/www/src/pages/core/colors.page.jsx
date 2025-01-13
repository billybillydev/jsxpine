import { COLORS } from "$config/design";
import { CorePresentation } from "$views/core.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Core Colors page props
 * @param {import("$components/page.component").PageContext<{ heading: string, description: string }>} props
 */
export function CoreColorsPage({ heading, description, ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<CorePresentation {...{ heading, description }}>
				<ColorsView />
			</CorePresentation>
		</MainLayout>
	);
}

function ColorsView() {
	/**
	 * @type {Array<keyof COLORS>}
	 */
	const excludedColorNames = ["inherit", "transparent", "current"];

	/**
	 * @type {Array<keyof COLORS>}
	 */
	const themeColorNames = [
		"primary",
		"secondary",
		"success",
		"danger",
		"info",
		"warning"
	];

	const themeColorsMap = new Map(
		themeColorNames.map((themeColorName) => [
			themeColorName,
			COLORS[themeColorName]
		])
	);

	const mainColorNames = /** @type {Array<keyof COLORS>} */ (
		Object.keys(COLORS).filter(
			(name) =>
				!(
					/** @type {string[]} */ ([
						...excludedColorNames,
						...themeColorNames
					]).includes(name)
				)
		)
	);

	const mainColorsMap = new Map(
		mainColorNames.map((mainColorName) => [
			mainColorName,
			COLORS[mainColorName]
		])
	);

	return (
		<div class="grid grid-cols-1 gap-y-20 py-4">
			<div>
				<h2 class="font-semibold underline underline-offset-4">
					Theme Colors :
				</h2>
				<ColorList colorsMap={themeColorsMap} />
			</div>
			<div>
				<h2 class="font-semibold underline underline-offset-4">
					Main Colors :
				</h2>
				<ColorList colorsMap={mainColorsMap} />
			</div>
		</div>
	);
}

/**
 *
 * @param {Object} props
 * @param {Map<string, string | import("tailwindcss/types/config").RecursiveKeyValuePair<string, string>>} props.colorsMap
 * @returns
 */
function ColorList({ colorsMap }) {
	return (
		<ul class="flex flex-col list-none gap-y-4">
			{[...colorsMap].map(([name, color]) => {
				return (
					<li class="flex flex-col gap-y-2">
						<h3 class="w-full capitalize">{name}</h3>
						<ul class="grid grid-cols-3 md:grid-cols-6 gap-4">
							{typeof color === "string" ? (
								<li class="flex items-center gap-x-1">
									<div
										class="w-full h-12 transition-all"
										style={`background: ${color}`}
									/>
									<div class="text-sm flex items-center text-center font-mono text-slate-500 dark:text-slate-200">
										<span class="uppercase text-xs">{color}</span>
									</div>
								</li>
							) : (
								Object.entries(color).map(([variant, value]) => {
									return (
										<li class="flex items-center gap-x-1">
											<div
												class="w-full h-12 transition-all"
												style={`background: ${value}`}
											/>
											<div class="text-sm flex flex-col text-center font-mono text-slate-500 dark:text-slate-200">
												<span>{variant}</span>
												{typeof value === "string" ? (
													<span class="uppercase text-xs">{value}</span>
												) : null}
											</div>
										</li>
									);
								})
							)}
						</ul>
					</li>
				);
			})}
		</ul>
	);
}
