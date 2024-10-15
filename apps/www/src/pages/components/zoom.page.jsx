import { ComponentPresentation } from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Zoom page props
 * @param {import("$components/page.component").PageContext<{}>} props
 */
export function ZoomPage({ seo, isHTMX, ...restProps }) {
	return (
		<MainLayout seo={seo} isHTMX={isHTMX} {...restProps}>
			<ComponentPresentation name="Zoom" source="zoom">
				<div class={"w-full h-full flex-center-middle"}>
					<p class={"text-center text-2xl"}>Work In Progress</p>
				</div>
			</ComponentPresentation>
		</MainLayout>
	);
}
