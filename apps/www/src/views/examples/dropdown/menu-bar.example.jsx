import {
	Dropdown,
	DropdownTrigger,
	DropdownContent
} from "$components/dropdown.component";

export function MenuBarDropdownExample() {
	return (
		<ul class="flex items-center bg-white justify-evenly flex-1 p-2 gap-x-2 list-none border rounded-md text-neutral-700 group border-neutral-200/80">
			<li class="grow flex items-center justify-center">
				<Dropdown
					class="p-2 hover:rounded-md bg-white border border-transparent hover:border-slate-200 w-full flex items-center justify-center"
					x-bind:class="{ 'hover:rounded bg-white hover:bg-slate-200' : visible }"
				>
					<DropdownTrigger class="flex items-center justify-center w-full">
						<span>File</span>
					</DropdownTrigger>
					<DropdownContent>
						<div
							class="text-neutral-800 rounded-md border border-neutral-200/70 bg-white text-sm p-1 shadow-md w-64"
							x-cloak
						>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>New Tab</span>
								<span class="ml-auto text-xs tracking-widest text-neutral-400 group-hover:text-neutral-600">
									⌘T
								</span>
							</button>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>New Window</span>
								<span class="ml-auto text-xs tracking-widest text-neutral-400 group-hover:text-neutral-600">
									⌘N
								</span>
							</button>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
								data-disabled
							>
								<span>New Incognito Window</span>
							</button>
							<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
							<Dropdown position="right">
								<DropdownTrigger class="flex cursor-default select-none items-center rounded px-2 hover:bg-neutral-100 py-1.5 outline-none w-full">
									<span>Share</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="w-4 h-4 ml-auto"
									>
										<polyline points="9 18 15 12 9 6"></polyline>
									</svg>
								</DropdownTrigger>
								<DropdownContent class="absolute top-0 right-0 invisible mr-1 duration-200 ease-out translate-x-full opacity-0 group-hover:mr-0 group-hover:visible group-hover:opacity-100">
									<div class="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md animate-in slide-in-from-left-1 w-32">
										<div
											x-bind="closer"
											class="relative flex cursor-default select-none items-center rounded px-2 py-1.5 hover:bg-neutral-100 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
										>
											Email link
										</div>
										<div
											x-bind="closer"
											class="relative flex cursor-default select-none items-center rounded px-2 py-1.5 hover:bg-neutral-100 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
										>
											Messages
										</div>
										<div
											x-bind="closer"
											class="relative flex cursor-default select-none items-center rounded px-2 py-1.5 hover:bg-neutral-100 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
										>
											Notes
										</div>
									</div>
								</DropdownContent>
							</Dropdown>
							<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>Print</span>
								<span class="ml-auto text-xs tracking-widest text-neutral-400 group-hover:text-neutral-600">
									⌘P
								</span>
							</button>
						</div>
					</DropdownContent>
				</Dropdown>
			</li>
			<li class="grow flex items-center justify-center">
				<Dropdown
					position="right"
					class="p-2 hover:rounded-md bg-white border border-transparent hover:border-slate-200 w-full flex items-center justify-center"
					x-bind:class="{ 'hover:rounded bg-white hover:bg-slate-200' : visible }"
				>
					<DropdownTrigger class="flex items-center justify-center w-full">
						<span>Edit</span>
					</DropdownTrigger>
					<DropdownContent>
						<div
							class="text-neutral-800 rounded-md border border-neutral-200/70 bg-white text-sm p-1 shadow-md w-64"
							x-cloak
						>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>Undo</span>
								<span class="ml-auto text-xs tracking-widest text-neutral-400 group-hover:text-neutral-600">
									⌘Z
								</span>
							</button>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>Redo</span>
								<span class="ml-auto text-xs tracking-widest text-neutral-400 group-hover:text-neutral-600">
									⇧⌘Z
								</span>
							</button>
							<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
							<Dropdown position="left" class="relative w-full group">
								<DropdownTrigger class="flex cursor-default select-none items-center rounded px-2 hover:bg-neutral-100 py-1.5 outline-none w-full">
									<span>Find</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="w-4 h-4 ml-auto"
									>
										<polyline points="9 18 15 12 9 6"></polyline>
									</svg>
								</DropdownTrigger>
								<DropdownContent>
									<div class="min-w-[8rem] rounded-md border bg-white p-1 shadow-md w-32">
										<div
											x-on:click="hide()"
											class="relative flex cursor-default select-none items-center rounded px-2 py-1.5 hover:bg-neutral-100 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
										>
											Search the web
										</div>
										<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
										<div
											x-on:click="hide()"
											class="relative flex cursor-default select-none items-center rounded px-2 py-1.5 hover:bg-neutral-100 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
										>
											Find...
										</div>
										<div
											x-on:click="hide()"
											class="relative flex cursor-default select-none items-center rounded px-2 py-1.5 hover:bg-neutral-100 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
										>
											Find Next
										</div>
										<div
											x-on:click="hide()"
											class="relative flex cursor-default select-none items-center rounded px-2 py-1.5 hover:bg-neutral-100 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
										>
											Find Previous
										</div>
									</div>
								</DropdownContent>
							</Dropdown>
							<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>Cut</span>
							</button>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>Copy</span>
							</button>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>Paste</span>
							</button>
						</div>
					</DropdownContent>
				</Dropdown>
			</li>
			<li class="grow flex items-center justify-center">
				<Dropdown
					position="left"
					class="p-2 hover:rounded-md bg-white border border-transparent hover:border-slate-200 w-full flex items-center justify-center"
					x-bind:class="{ 'hover:rounded bg-white hover:bg-slate-200' : visible }"
				>
					<DropdownTrigger class="flex items-center justify-center w-full">
						<span>View</span>
					</DropdownTrigger>
					<DropdownContent>
						<div
							class="text-neutral-800 rounded-md border border-neutral-200/70 bg-white text-sm p-1 shadow-md w-64"
							x-cloak
						>
							<button
								x-on:click="alwaysShowBookmarks=!alwaysShowBookmarks;"
								x-data="{ alwaysShowBookmarks: false }"
								class="relative flex justify-between w-full pl-8 cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span
									x-show="alwaysShowBookmarks"
									class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="w-4 h-4"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</span>
								<span>Always Show Bookmarks Bar</span>
							</button>
							<button
								x-on:click="alwaysShowFullURL=!alwaysShowFullURL"
								x-data="{ alwaysShowFullURL: true }"
								class="relative flex justify-between w-full pl-8 cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span
									x-show="alwaysShowFullURL"
									class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="w-4 h-4"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</span>
								<span>Always Show Full URLs</span>
							</button>
							<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full pl-8 cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>Reload</span>
								<span class="ml-auto text-xs tracking-widest text-neutral-400 group-hover:text-neutral-600">
									⌘R
								</span>
							</button>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full pl-8 cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
								data-disabled
							>
								<span>Force Reload</span>
								<span class="ml-auto text-xs tracking-widest text-neutral-400 group-hover:text-neutral-600">
									⇧⌘R
								</span>
							</button>
							<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full pl-8 cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>Toggle Fullscreen</span>
							</button>
							<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full pl-8 cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>Hide Sidebar</span>
							</button>
						</div>
					</DropdownContent>
				</Dropdown>
			</li>
			<li class="grow flex items-center justify-center">
				<Dropdown
					position="top"
					class="p-2 hover:rounded-md bg-white border border-transparent hover:border-slate-200 w-full flex items-center justify-center"
					x-bind:class="{ 'hover:rounded bg-white hover:bg-slate-200' : visible }"
				>
					<DropdownTrigger class="flex items-center justify-center w-full">
						<span>Profiles</span>
					</DropdownTrigger>
					<DropdownContent>
						<div
							class="text-neutral-800 rounded-md border border-neutral-200/70 bg-white text-sm p-1 shadow-md w-64"
							x-cloak
						>
							<div x-data="{ choice: 1 }" class="relative w-full">
								<button
									x-on:click="choice = 1"
									class="relative w-full flex cursor-default select-none items-center rounded py-1.5 pl-8 pr-2 hover:bg-neutral-100 outline-none data-[disabled]:opacity-50"
								>
									<span
										x-show="choice === 1"
										class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="w-2 h-2 fill-current"
										>
											<circle cx="12" cy="12" r="10"></circle>
										</svg>
									</span>
									<span>Taylor Otwell</span>
								</button>
								<button
									x-on:click="choice = 2"
									class="relative w-full flex cursor-default select-none items-center rounded py-1.5 pl-8 pr-2 hover:bg-neutral-100 outline-none data-[disabled]:opacity-50"
								>
									<span
										x-show="choice === 2"
										class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="w-2 h-2 fill-current"
										>
											<circle cx="12" cy="12" r="10"></circle>
										</svg>
									</span>
									<span>Adam Wathan</span>
								</button>
								<button
									x-on:click="choice = 3"
									class="relative w-full flex cursor-default select-none items-center rounded py-1.5 pl-8 pr-2 hover:bg-neutral-100 outline-none data-[disabled]:opacity-50"
								>
									<span
										x-show="choice === 3"
										class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="w-2 h-2 fill-current"
										>
											<circle cx="12" cy="12" r="10"></circle>
										</svg>
									</span>
									<span>Caleb Porzio</span>
								</button>
							</div>
							<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full pl-8 cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>Edit...</span>
							</button>
							<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
							<button
								x-on:click="hide()"
								class="relative flex justify-between w-full pl-8 cursor-default select-none group items-center rounded px-2 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 outline-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
							>
								<span>Add Profile...</span>
							</button>
						</div>
					</DropdownContent>
				</Dropdown>
			</li>
		</ul>
	);
}
