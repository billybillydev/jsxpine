import { ComponentPresentation } from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Icon page props
 * @param {import("$components/page.component").PageContext<{ heading: string }>} props
 */
export function IconPage({ heading, seo, isHTMX, ...restProps }) {
	return (
		<MainLayout seo={seo} isHTMX={isHTMX} {...restProps}>
			<ComponentPresentation name={heading} source="icon">
				<div class={"w-full h-full flex-center-middle"}>
					<p class={"text-center text-2xl"}>Work In Progress</p>
				</div>
			</ComponentPresentation>
		</MainLayout>
	);
}
