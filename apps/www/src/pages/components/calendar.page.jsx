import {
    ComponentPresentation
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Calendar page props
 * @param {import("$components/page.component").PageContext<{}>} props
 */
export function CalendarPage({ seo, isHTMX, ...restProps }) {
	return <MainLayout seo={seo} isHTMX={isHTMX} {...restProps}>
        <ComponentPresentation name="Calendar" source="calendar">
            <div class={"w-full h-full flex-center-middle"}>
                <p class={"text-center text-2xl"}>Work In Progress</p>
            </div>
        </ComponentPresentation>
    </MainLayout>;
}
