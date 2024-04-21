import { CodeViewer } from "$components/code-viewer.component";
import {
	Tabs,
	TabHeaderItem,
	TabsBody,
	TabsHeader,
	TabBodyItem
} from "$components/tabs.component";

/**
 * @type {import("$common/props").JSXComponent<import("$common/props").HTMLTagWithChildren & {filename: string}>}
 */
export function ComponentPreview(props) {
	return (
		<Tabs>
			<TabsHeader>
				<TabHeaderItem title="Preview" />
				<TabHeaderItem title="Code" />
			</TabsHeader>
			<TabsBody class="">
				<TabBodyItem id={props.id} class="component-preview">
					{props.children}
				</TabBodyItem>
				<TabBodyItem class="max-h-[40rem] rounded overflow-y-auto">
					{/* <Tooltip
                    triggerOnHover={false}
                    position="right"
                    text="Copied !"
                    type="success"
                >
                    <Button
                        variant="inversed"
                        x-on:click={`
                            await $clipboard(${JSON.stringify(data)});
                            let timeout;
                            visible = true;
                            timeout = setTimeout(() => visible = false, 2500);
                        `}
                        text="Copy"
                    />
                </Tooltip> */}
					<CodeViewer
						path={`src/views/examples/${props.filename}.example.jsx`}
					/>
				</TabBodyItem>
			</TabsBody>
		</Tabs>
	);
}
