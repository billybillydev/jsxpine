import { Dropdown, DropdownContent } from "$components/dropdown.component";

export function HoverDropdownExample() {
    return (
			<Dropdown position="bottom" x-bind="hover">
				<a
					href="#_"
					x-ref="trigger"
					class="flex items-center justify-center h-12 py-2 px-4 text-sm font-medium transition-colors bg-white group border rounded-md text-neutral-700 hover:bg-neutral-100 hover:underline active:bg-white focus:bg-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
				>
					@thedevdojo
				</a>
				<DropdownContent class="w-[365px] max-w-lg -translate-x-1/2 left-1/2">
					<div
						x-bind="shower"
						class="w-[full] h-auto bg-white space-x-3 p-5 flex items-start rounded-md shadow-sm border border-neutral-200/70"
					>
						<img
							src="https://cdn.devdojo.com/users/June2022/devdojo.jpg"
							alt="devdojo image"
							class="rounded-full w-14 h-14"
						/>
						<div class="relative">
							<p class="mb-1 font-bold text-base-dark">@thedevdojo</p>
							<p class="mb-1 text-sm text-gray-600">
								The creative platform for developers. Community, tools,
								products, and more
							</p>
							<p class="flex items-center space-x-1 text-xs text-gray-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
									></path>
								</svg>
								<span>Joined June 2020</span>
							</p>
						</div>
					</div>
				</DropdownContent>
			</Dropdown>
		);
}