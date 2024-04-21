import { Tabs, TabHeaderItem, TabsBody, TabsHeader, TabBodyItem } from "$components/tabs.component";
import { raw } from "hono/html";

/**
 * @type {import("$common/props").JSXComponent<import("$common/props").HTMLTagWithChildren>}
 */
export function ComponentPreview(props) {
    return (
        <Tabs>
            <TabsHeader>
                <TabHeaderItem title="Preview" />
                <TabHeaderItem title="Code" />
            </TabsHeader>
            <TabsBody>
                <TabBodyItem>
                <div id={props.id} class="component-preview">
                    {props.children}
                </div>
                </TabBodyItem>
                <TabBodyItem class="max-h-[40rem] w-auto overflow-auto">
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
                {/* <Code code={data} lang="tsx" wrap /> */}
                <p>{props.children?.toString()}</p>
                </TabBodyItem>
            </TabsBody>
        </Tabs>
    )
}