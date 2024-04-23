import { MainLayout } from "$layouts/main.layout";
import { ComponentPresentation } from "$views/component-presentation";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Inputs page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function InputsPage(props) {
	const { ...restProps } = props;
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Inputs</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
					<p>
						Inputs are elements which allow you to let user interacts with your
						website.
					</p>
					<p>
						They are essantially : text input, password, number, select,
						textarea, radio, checkbox. Many others will be presented in this
						page.
					</p>
				</section>

				<section id="main-inputs">
					<h2>Main Inputs</h2>
					<p>Here below are main inputs that are mostly use on a website.</p>
					<ComponentPreview filename="inputs/main" />
				</section>

				<section id="select-input">
					<h2>Selected Input</h2>
					<p>Select is an element listing a number of value to choose.</p>
					<ComponentPreview filename="inputs/select" />
				</section>

				<section id="multiple-select-input">
					<h2>Multiple Selected Input</h2>
					<p>A select input component with multiple props set to true.</p>
					<ComponentPreview filename="inputs/multiple-select" />
				</section>

				<section id="radio-input">
					<h2>Radio Input</h2>
					<p>Radio input allows a single choice between many propositions.</p>
					<p>
						Associated with Alpine interop, you can intercept the radio value
						with x-on:change / x-on:input listener.
					</p>
					<ComponentPreview filename="inputs/radio" />
				</section>

				<section id="checkbox-input">
					<h2>Checkbox Input</h2>
					<p>
						Checkbox input in the other hands, allows you to select as many
						choices between propositions.
					</p>
					<p>
						Associated with Alpine interop, you can intercept the value with
						x-on:change / x-on:input listener.
					</p>
					<ComponentPreview filename="inputs/checkbox" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
