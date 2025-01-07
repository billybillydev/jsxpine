import { CorePresentation } from "$views/core.view";
import { MainLayout } from "$views/layouts.view";

/**
 * JAH Templating page props
 * @param {import("$components/page.component").PageContext<{ heading: string }>} props
 */
export function JAHTemplatingPage({ heading, seo, isHTMX, ...restProps }) {
	return (
		<MainLayout seo={seo} isHTMX={isHTMX} {...restProps}>
			<CorePresentation heading={heading}>
				<div class={"w-full h-full flex-center-middle"}>
					<p class={"text-center text-2xl"}>Work In Progress</p>
				</div>
			</CorePresentation>
		</MainLayout>
	);
}
