import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Progress page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function ProgressPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Progress</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
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
				</section>

				<section id="default-bar-progress">
					<h2>Default Bar Progress</h2>
					<p>
						By default, duration is set to 1000ms, i.e 1sec. Bar Progress will
						go to 100%. The component take initially its parent's width.
					</p>
					<ComponentPreview filename="progress/bar" />
				</section>

				<section id="default-counter-progress">
					<h2>Default Counter Progress</h2>
					<p>
						By default, duration is set to 1000ms, i.e 1sec. Bar Progress will
						go to 100%. The component take initially its parent's width.
					</p>
					<ComponentPreview filename="progress/counter" />
				</section>

				<section id="value-bar-progress">
					<h2>Value Bar Progress</h2>
					<p>
						Setting <em>value</em> props will be progress max.
					</p>
					<ComponentPreview filename="progress/value" />
				</section>

				<section id="theme-color-bar-progress">
					<h2>Theme Color Bar Progress</h2>
					<p>
						To stylize a bit our component, you can apply theme color classes.
					</p>
					<ComponentPreview filename="progress/color" />
				</section>

				<section id="interval-duration-progress">
					<h2>Interval Duration Progress</h2>
					<p>
						There are two props you will use to manipulate duration. Either you
						use <em>interval</em> props, either you use <em>duration</em>.
					</p>
					<p>
						The difference is pretty obvious. By using interval, what you want
						is setting how progress will be incremented. By using duration, it's
						time progress get to max value.
					</p>
					<ComponentPreview filename="progress/interval-and-duration" />
				</section>

				<section id="custom-class-bar-progress">
					<h2>Custom Class Bar Progress</h2>
					<p>
						You don't want to use theme color classes ? Thanks to tailwind, you
						can apply some custom classes on your own.
					</p>
					<p>Check the example to see how it's done.</p>
					<ComponentPreview filename="progress/custom-class" />
				</section>

				<section id="track-value-bar-progress">
					<h2>Track Value Bar Progress</h2>
					<p>
						It would be good to get the current progress value ! Don't worry, I
						got you.
					</p>
					<p>
						Simply use Alpine dispatch event <em>x-on:track</em> and capture the
						value. See example below.
					</p>
					<ComponentPreview filename="progress/track-value" />
				</section>

				<section id="no-animation-bar-progress">
					<h2>No Animation Bar Progress</h2>
					<p>
                        About animation, in some cases or simply because you don't want to,
                        you can get rid of it with <em>noAnimation</em> props.
                    </p>
					<ComponentPreview filename="progress/no-animation" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
