import {
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Inputs page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function InputsPage(props) {
	const { ...restProps } = props;
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Inputs" source="input">
				<ComponentSection heading="Overview">
					<p>
						Inputs are elements which allow you to let user interacts with your
						website.
					</p>
					<p>
						They are essantially : text input, password, number, select,
						textarea, radio, checkbox. Many others will be presented in this
						page.
					</p>
				</ComponentSection>

				<ComponentSection heading="Main Inputs" examples={["inputs/main"]}>
					<p>Here below are main inputs that are mostly use on a website.</p>
				</ComponentSection>

				<ComponentSection heading="Selected Input" examples={["inputs/select"]}>
					<p>Select is an element listing a number of value to choose.</p>
				</ComponentSection>

				<ComponentSection
					heading="multiple-select-input"
					examples={["inputs/multiple-select"]}
				>
					<h2>Multiple Selected Input</h2>
					<p>A select input component with multiple props set to true.</p>
				</ComponentSection>

				<ComponentSection heading="radio-input" examples={["inputs/radio"]}>
					<h2>Radio Input</h2>
					<p>Radio input allows a single choice between many propositions.</p>
					<p>
						Associated with Alpine interop, you can intercept the radio value
						<em>with x-on:change / x-on:input</em> listener.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="checkbox-input"
					examples={["inputs/checkbox"]}
				>
					<h2>Checkbox Input</h2>
					<p>
						Checkbox input in the other hands, allows you to select as many
						choices between propositions.
					</p>
					<p>
						Associated with Alpine interop, you can intercept the value with
						x-on:change / x-on:input listener.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
