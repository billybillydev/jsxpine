import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Progress page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function ProgressPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Progress">
				<ComponentSection heading="Overview">
					<p>
						Progress is often used as loader. However, it suited very well
						statistic use cases.
					</p>
					<p>
						In a second time, there is also CounterProgress, a Progress
						sub-component where main purpose is to handle the updated progress
						value display.
					</p>
					<p>
						Here below are everything you have to know about Astropine's
						Progress components.
					</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="progress" />
				</ComponentSection>

				<ComponentSection
					heading="Default Bar Progress"
					examples={["progress/bar"]}
				>
					<p>
						By default, duration is set to 1000ms, i.e 1sec. Bar Progress will
						go to 100%. The component take initially its parent's width.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Default Counter Progress"
					examples={["progress/counter"]}
				>
					<p>
						By default, duration is set to 1000ms, i.e 1sec. Bar Progress will
						go to 100%. The component take initially its parent's width.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Value Bar Progress"
					examples={["progress/value"]}
				>
					<p>
						Setting <em>value</em> props will be progress max.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Theme Color Bar Progress"
					examples={["progress/color"]}
				>
					<p>
						To stylize a bit our component, you can apply theme color classes.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Interval Duration Progress"
					examples={["progress/interval-and-duration"]}
				>
					<p>
						There are two props you will use to manipulate duration. Either you
						use <em>interval</em> props, either you use <em>duration</em>.
					</p>
					<p>
						The difference is pretty obvious. By using interval, what you want
						is setting how progress will be incremented. By using duration, it's
						time progress get to max value.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Custom Class Bar Progress"
					examples={["progress/custom-class"]}
				>
					<p>
						You don't want to use theme color classes ? Thanks to tailwind, you
						can apply some custom classes on your own.
					</p>
					<p>Check the example to see how it's done.</p>
				</ComponentSection>

				<ComponentSection
					heading="Track Value Bar Progress"
					examples={["progress/track-value"]}
				>
					<p>
						It would be good to get the current progress value ! Don't worry, I
						got you.
					</p>
					<p>
						Simply use Alpine dispatch event <em>x-on:track</em> and capture the
						value. See example below.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="No Animation Bar Progress"
					examples={["progress/no-animation"]}
				>
					<p>
						About animation, in some cases or simply because you don't want to,
						you can get rid of it with <em>noAnimation</em> props.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
