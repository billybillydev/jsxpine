import { MainLayout } from "$layouts/main.layout";
import { ComponentPresentation } from "$views/component-presentation";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Dropdown page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function DropdownPage({ ...restProps }) {
    return (
			<MainLayout {...restProps}>
				<ComponentPresentation>
					<section class="text-center">
						<h1>Dropdown</h1>
					</section>

					<section id="overview">
						<h2>Overview</h2>
						<p>
							Dropdown is mostly used for listing items without taking any
							additional space in the main context.
						</p>
						<p>
							For instance, it's common on an ecommerce shop to have in menu, a
							dropdown listing specific categories. The dropdown can adapt its
							display position, i.e if it has to appears at the bottom but
							doesn't have any space, it will come on top.
						</p>
						<p>
							Here below are some examples of what you can achieve with
							dropdown.
						</p>
					</section>

					<section id="dropdown-on-click">
						<h2>Dropdown on Click</h2>
						<p>
							Default case is dropdown content displayed when clicking on
							trigger element.
						</p>
						<ComponentPreview filename="dropdown/default" />
					</section>

					<section id="dropdown-on-hover">
						<h2>Dropdown on Hover</h2>
						<p>Triggering dropdown on hover is also possible.</p>
						<ComponentPreview filename="dropdown/hover" />
					</section>

					<section id="dropdown-menu-bar-example">
						<h2>Dropdown Menu Bar Example</h2>
						<p>
							A practical case. Here, each list item is a dropdown. Notice that
							you can have nested dropdowns.
						</p>
						<ComponentPreview filename="dropdown/menu-bar" />
					</section>

					<section id="dropdown-menu-hover-example">
						<h2>Dropdown Menu Hover Example</h2>
						<p>In this example, dropdown is triggered on hover on each list item.</p>
						<p class="italic">
							P.S: Notice that as component is at page bottom, dropdown will
							appear on top.
						</p>
						<ComponentPreview filename="dropdown/menu" />
					</section>
				</ComponentPresentation>
			</MainLayout>
		);
}