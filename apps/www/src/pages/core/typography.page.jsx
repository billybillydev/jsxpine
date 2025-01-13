import { TYPOGRAPHY } from "$config/design";
import { CorePresentation } from "$views/core.view";
import { MainLayout } from "$views/layouts.view";

/**
 * @param {import("$components/page.component").PageContext<{ heading: string, description: string }>} props
 */
export function CoreTypographyPage({ heading, description, ...restProps }) {
		/**
		 * Get a CSS style string for a typography item.
		 * @param {Object} item - The typography item.
		 * @param {string} item.size - The font size.
		 * @param {string} item.weight - The font weight.
		 * @returns {string} The CSS style string.
		 */
    const getStyle = (item) => {
			return `font-size: ${item.size}; font-weight: ${item.weight};`;
		};
        
	return (
		<MainLayout {...restProps}>
			<CorePresentation {...{ heading, description }}>
				<div class="w-full">
					{TYPOGRAPHY.scale.map((item) => {
						const sizeValue = item.size.split("rem")[0];
						const sizeValueInPx = Number(sizeValue) * 16 + "px";
						const sizeValueInPt =
							(Number(sizeValue) * 11.99999092914).toFixed(2) + "pt";

						return (
							<div class="mt-6 border-t py-4">
								<p class="space-x-4">
									<strong>{item.name}:</strong>
									<span style={getStyle(item)}>Hello world</span>
								</p>
								<div class="flex flex-wrap gap-x-6 text-slate-500 dark:text-slate-200 font-mono">
									<span>weight: {item.weight}</span>
									<span>
										size: {item.size} / {sizeValueInPx} / {sizeValueInPt}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</CorePresentation>
		</MainLayout>
	);
}
