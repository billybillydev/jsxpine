import { Button } from "$components/buttons.component";
import { CodeViewer } from "$components/code-viewer.component";
import {
	Tabs,
	TabHeaderItem,
	TabsBody,
	TabsHeader,
	TabBodyItem
} from "$components/tabs.component";
import { Tooltip } from "$components/tooltip.component";

/**
 * @type {import("$common/props").JSXComponent<import("$common/props").HTMLTag & {filename: string}>}
 */
export async function ComponentPreview(props) {
	// Use the appropriate method for Node.js and Deno
	const file = Bun.file(`src/views/examples/${props.filename}.example.jsx`);
	const text = await file.text();
	
	const Component = await import(`$views/examples/${props.filename}.example.jsx`).then((m) => Object.values(m)[0]);

	return (
		<Tabs>
			<TabsHeader>
				<TabHeaderItem title="Preview" />
				<TabHeaderItem title="Code" />
			</TabsHeader>
			<TabsBody>
				<TabBodyItem id={props.id} class="component-preview">
					<Component />
				</TabBodyItem>
				<TabBodyItem class="max-h-[40rem] rounded overflow-y-auto">
					<Tooltip
						triggerOnHover={false}
						position="right"
						text="Copied !"
						type="success"
					>
						<Button
							variant="inversed"
							x-on:click={`
                                await $clipboard(${JSON.stringify(text)});
                                let timeout;
                                visible = true;
                                timeout = setTimeout(() => visible = false, 2500);
                            `}
							text="Copy"
						/>
					</Tooltip>
					<CodeViewer text={text} />
				</TabBodyItem>
			</TabsBody>
		</Tabs>
	);
}
