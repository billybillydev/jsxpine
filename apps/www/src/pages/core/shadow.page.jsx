import { SHADOWS } from "$config/design";
import { CorePresentation } from "$views/core.view";
import { MainLayout } from "$views/layouts.view";

/**
 * @param {import("$components/page.component").PageContext<{ heading: string, description: string }>} props
 */
export function CoreShadowPage({ heading, description, ...restProps }) {
        
	return (
		<MainLayout {...restProps}>
			<CorePresentation heading={heading} description={description}>
				<div class="component-preview">
					<div class="inline-grid grid-cols-2 gap-16">
						{SHADOWS.types.map(({ name, value }) => (
							<div
								class="p-2 bg-white rounded-md text-slate-500 text-right pt-16 pl-24 font-mono"
								style={"box-shadow: " + value}
							>
								{name}
							</div>
						))}
					</div>
				</div>
				<pre class="bg-slate-800 text-white">
					{SHADOWS.types.map(({ name, value }) => (
						<div class="my-2">{`${name}: ${value}`}</div>
					))}
				</pre>
			</CorePresentation>
		</MainLayout>
	);
}
