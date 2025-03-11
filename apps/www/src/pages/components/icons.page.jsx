import {
	ComponentPresentation,
	ComponentSection,
	ComponentInstallation
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Icons page props
 * @param {import("$components/page.component").PageContext<{ description: string }>} props
 */
export function IconsPage({ seo, isHTMX, description, ...restProps }) {
	return (
		<MainLayout seo={seo} isHTMX={isHTMX} {...restProps}>
			<ComponentPresentation name="Icons" source="icon">
				<ComponentSection heading="Overview">
					<p safe>{description}</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="icon" />
				</ComponentSection>

				<ComponentSection heading="Usage" examples={["icons/usage"]}>
					<p>
						You can use any icon from iconify's <em>Remix Icon</em> package
						(@iconify-json/ri). Thanks to your code editor's intellisense,
						autocompletion shows you all available icons name as you type, dope
						right ? ;).
					</p>
				</ComponentSection>

				<ComponentSection heading="Size Props" examples={["icons/size"]}>
					<p>
						Size props are almost value from tailwind's <em>size</em> unit
						class: 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80,
						96.
					</p>
				</ComponentSection>

				<ComponentSection heading="Color Props" examples={["icons/color"]}>
					<p>
						You will deal with colors using text-[color] classes. For example,
						text-white, text-green-500, etc.
					</p>
				</ComponentSection>

				<ComponentSection heading="Use Other Iconify Icons">
					<p>
						Like said in{" "}
						<a href="#usage" class="link link-primary">
							usage
						</a>{" "}
						section, jsxpine allow you to use iconify's remix icons package.
						Because iconify include other packages, you can use them instead of
						remix.
					</p>
					<p>
						However, be sure that this package has the same structure as
						@iconify-json/ri. You can look this link from the iconify website
						about{" "}
						<a
							href="https://iconify.design/docs/types/iconify-json.html"
							target="_blank"
							class="link link-primary"
						>
							icon json structure
						</a>{" "}
						for a better understanding.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
