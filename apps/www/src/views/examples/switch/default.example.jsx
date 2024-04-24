import { Switch } from "$components/switch.component";

export function DefaultSwitchExample() {
	return (
		<div class="grid grid-cols-2 gap-4">
			<div class="p-4 border rounded-lg bg-white w-52">
				<Switch
					label="Enable Feature"
					name="switch-example"
					id="switch-example"
					x-on:change="console.log($event.detail)"
					class="[&>button]:h-6"
				/>
			</div>
			<div class="p-4 border rounded-lg bg-white w-52">
				<Switch
					label="Primary Label"
					name="switch-example-primary"
					id="switch-example-primary"
					x-on:change="console.log($event.detail)"
					type="primary"
					class="[&>button]:h-4 [&>button>span]:h-8 [&>button>span]:w-8"
				/>
			</div>
			<div class="p-4 border rounded-lg bg-white w-52">
				<Switch
					label="Secondary Label"
					name="switch-example-secondary"
					id="switch-example-secondary"
					x-on:change="console.log($event.detail)"
					type="secondary"
					class="[&>button]:h-6"
				/>
			</div>
			<div class="p-4 border rounded-lg bg-white w-52">
				<Switch
					label="Label on Left"
					name="switch-example-success"
					id="switch-example-success"
					x-on:change="console.log($event.detail)"
					type="success"
					class="[&>button]:h-6 flex-row-reverse"
				/>
			</div>
			<div class="p-4 border rounded-lg bg-white w-52">
				<Switch
					label="Danger Label"
					name="switch-example-danger"
					id="switch-example-danger"
					x-on:change="console.log($event.detail)"
					type="danger"
					class="[&>button]:h-6"
				/>
			</div>
			<div class="p-4 border rounded-lg bg-white w-52">
				<Switch
					label="Info Label"
					name="switch-example-info"
					id="switch-example-info"
					x-on:change="console.log($event.detail)"
					type="info"
					class="[&>button]:h-6"
				/>
			</div>
			<div class="p-4 border rounded-lg bg-white w-52">
				<Switch
					label="Warning Label"
					name="switch-example-warning"
					id="switch-example-warning"
					x-on:change="console.log($event.detail)"
					type="warning"
					class="[&>button]:h-6"
				/>
			</div>
			<div class="p-4 border rounded-lg bg-white w-32">
				<Switch
					label="Off"
					name="switch-example-warning"
					id="switch-example-warning"
					x-on:change={`
                        label = $event.detail.checked ? 'On' : 'Off';
                        console.log($event.detail)
                    `}
					type="success"
					class="[&>button]:h-4 [&>button]:rounded [&>button>span]:w-4 [&>button>span]:h-8"
				/>
			</div>
		</div>
	);
}
