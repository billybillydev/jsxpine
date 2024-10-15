import { ComponentPresentation } from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Date Picker page props
 * @param {import("$components/page.component").PageContext<{}>} props
 */
export function DatePickerPage({ seo, isHTMX, ...restProps }) {
	return (
		<MainLayout seo={seo} isHTMX={isHTMX} {...restProps}>
			<ComponentPresentation name="Date Picker" source="date-picker">
				<div class={"w-full h-full flex-center-middle"}>
					<p class={"text-center text-2xl"}>Work In Progress</p>
				</div>
			</ComponentPresentation>
		</MainLayout>
	);
}
