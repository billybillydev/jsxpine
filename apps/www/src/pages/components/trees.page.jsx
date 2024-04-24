import { MainLayout } from "$layouts/main.layout";
import { ComponentPresentation } from "$views/component-presentation";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Trees page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function TreesPage({...RestProps}) {
    return (
			<MainLayout {...RestProps}>
				<ComponentPresentation>
					<div class="text-center">
						<h1>Trees</h1>
					</div>

					<div id="overview">
						<h2>Overview</h2>
						<p>
							Tree component is a nested recursive component. It means that a
							component contains children which have same structure as itself.
						</p>
						<p>To see what we are saying, let's look at example below.</p>
						<p class="italic">
							P.S: Note aside, it's important to understand that tree is a
							functional feature. It's up to you to design it your own way.
						</p>
					</div>

					<div id="menu-tree">
						<h2>Menu Tree</h2>
						<p>
							MenuTree is a complex component which, as you read, lists link
							from its children, but, in same time, allows you to display
							children link of its children (are you still there ?).
						</p>
						<p>
                            A similar feature will be a nested dropdown, where one or many
                            children has itself a nested dropdown. Still don't get it ? Check
                            example below.
                        </p>
						<ComponentPreview filename="/trees/menu" />
					</div>
				</ComponentPresentation>
			</MainLayout>
		);
}