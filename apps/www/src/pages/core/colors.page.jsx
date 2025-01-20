import {
	SoloAccordion,
	SoloAccordionContent,
	SoloAccordionTrigger
} from "$components/accordion.component";
import { SecondaryButton } from "$components/button.component";
import { CodeToCopy } from "$components/code-to-copy.component";
import { COLORS } from "$config/design";
import { CorePresentation } from "$views/core.view";
import { MainLayout } from "$views/layouts.view";
import { ColorTranslator } from "colortranslator";

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
		<div class="py-4">
			<ColorList colorsMap={mainColorsMap} />
		</div>
	);
}

/**
 * List all colors from tailwindcss
 * @param {Object} props
 * @param {Map<string, string | import("tailwindcss/types/config").RecursiveKeyValuePair<string, string>>} props.colorsMap
 * @returns
 */
function ColorList({ colorsMap }) {
	/**
	 * The purpose is to separate simple colors like white and black from colors with variants (slate, red, blue, ...)
	 */
	const [simpleColorsMap, colorsWithVariantsMap] = [...colorsMap].reduce(
		(acc, cur) => {
			if (typeof cur[1] === "string") {
				acc[0].set(cur[0], cur[1]);
			} else {
				acc[1].set(cur[0], cur[1]);
			}
			return acc;
		},
		[
			/** @type {Map<string, string>} */ new Map([]),
			/** @type {Map<string, import("tailwindcss/types/config").RecursiveKeyValuePair<string, string>>} */ new Map(
				[]
			)
		]
	);
	return (
		<>
			<ul class={"grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6"}>
				{[...simpleColorsMap].map(([name, value]) => {
					const color = new ColorTranslator(value, {
						decimals: 2
					});

					return (
						<li class="flex flex-col gap-y-2">
							<h3 class="w-full capitalize">{name}</h3>
							<div
								class="w-full h-24 transition-all rounded-lg"
								style={`background: ${value}`}
							/>
							<SoloAccordion class={"grow"}>
								<SoloAccordionTrigger as="button" class="w-full text-sm">
									Click here to copy
								</SoloAccordionTrigger>
								<SoloAccordionContent>
									<div class="flex flex-col gap-y-2 font-mono text-slate-500 dark:text-slate-200">
										<ColorToCopy color={color.HSL} />
										<ColorToCopy color={value} />
										<ColorToCopy color={color.RGB} />
									</div>
								</SoloAccordionContent>
							</SoloAccordion>
						</li>
					);
				})}
			</ul>
			<ul class="flex flex-col list-none gap-y-4">
				{[...colorsWithVariantsMap].map(([name, color]) => (
					<li class="flex flex-col gap-y-2">
						<h3 class="w-full capitalize">{name}</h3>
						<ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
							{Object.entries(color).map(([variant, value]) => {
								const color = new ColorTranslator(value, {
									decimals: 2
								});

								return (
									<li class="flex flex-col justify-center items-start gap-y-2">
										<p class={"text-center"}>
											<span class={"text-sm"}>{variant}</span>
										</p>
										<div
											class="w-full h-24 transition-all rounded-lg"
											style={`background: ${value}`}
										/>
										{typeof value === "string" ? (
											<SoloAccordion class={"grow"}>
												<SoloAccordionTrigger
													as="button"
													class="w-full text-sm"
												>
													Click here to copy
												</SoloAccordionTrigger>
												<SoloAccordionContent>
													<div class="flex flex-col gap-y-2 font-mono text-slate-500 dark:text-slate-200">
														<ColorToCopy color={color.HSL} />
														<ColorToCopy color={value} />
														<ColorToCopy color={color.RGB} />
													</div>
												</SoloAccordionContent>
											</SoloAccordion>
										) : null}
									</li>
								);
							})}
						</ul>
					</li>
				))}
			</ul>
		</>
	);
}

/**
 * Component showing the color name and copy button
 * @param {Object} props
 * @param {string} props.color - The color to copy
 */
function ColorToCopy({ color }) {
	return (
		<button
			x-data="codeToCopy"
			x-bind="click"
			class={
				"flex gap-x-2 items-center justify-between w-full border-transparent p-1 border hover:border-inherit rounded"
			}
		>
			<span x-ref="codeToCopyContent" class="text-xs">
				{color}
			</span>
			<div class={"shrink-0 text-xs"}>
				<span class={"p-1 rounded btn btn-secondary-outlined"} x-show="!copied">
					Copy
				</span>
				<span class={"p-1 rounded btn btn-success-outlined"} x-show="copied">
					Copied
				</span>
			</div>
		</button>
	);
}
