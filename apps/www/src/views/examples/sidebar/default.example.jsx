import {
	Sidebar,
	SidebarTrigger,
	SidebarContent
} from "$components/sidebar.component";

export function DefaultSidebarExample() {
	return (
		<Sidebar>
			<SidebarTrigger text="Open Sidebar" />
			<SidebarContent
				title="Sidebar Title"
				class="h-full w-3/4 max-w-lg bg-slate-100 dark:bg-[#0d1117]"
			>
				<div class="mx-2 mb-2 h-full border-dashed border border-slate-500"></div>
			</SidebarContent>
		</Sidebar>
	);
}
