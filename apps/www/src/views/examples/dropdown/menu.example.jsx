import {
	Dropdown,
	DropdownTrigger,
	DropdownContent
} from "$components/dropdown.component";

export function MenuDropdownExample() {
	return (
		<ul class="flex items-center bg-white justify-center flex-1 p-2 gap-x-2 list-none border rounded-md text-neutral-700 group border-neutral-200/80">
			<li class="rounded bg-white border hover:bg-slate-200 hover:border-transparent">
				<Dropdown x-bind="hover" class="p-2">
					<DropdownTrigger>
						<span>Getting started</span>
					</DropdownTrigger>
					<DropdownContent class="bg-white text-slate-800">
						<div class="flex items-stretch justify-center w-full max-w-2xl p-6 gap-x-3 border rounded-lg">
							<div class="flex-shrink-0 w-48 rounded pt-28 pb-7 bg-gradient-to-br from-neutral-800 to-black">
								<div class="relative px-7 space-y-1.5 text-white">
									<svg
										class="block w-auto h-9"
										viewBox="0 0 180 180"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M67.683 89.217h44.634l30.9 53.218H36.783l30.9-53.218Z"
											fill="currentColor"
										></path>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M77.478 120.522h21.913v46.956H77.478v-46.956Zm-34.434-29.74 45.59-78.26 46.757 78.26H43.044Z"
											fill="currentColor"
										></path>
									</svg>
									<span class="block font-bold">Pines UI</span>
									<span class="block text-sm opacity-60">
										An Alpine and Tailwind UI library
									</span>
								</div>
							</div>
							<div class="w-72">
								<a
									href="#_"
									x-on:click=""
									class="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100"
								>
									<span class="block mb-1 font-medium text-black">
										Introduction
									</span>
									<span class="block font-light leading-5 opacity-50">
										Re-usable elements built using Alpine JS and Tailwind CSS.
									</span>
								</a>
								<a
									href="#_"
									x-on:click=""
									class="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100"
								>
									<span class="block mb-1 font-medium text-black">
										How to use
									</span>
									<span class="block leading-5 opacity-50">
										Couldn't be easier. It's is as simple as copy, paste, and
										preview.
									</span>
								</a>
								<a
									href="#_"
									x-on:click=""
									class="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100"
								>
									<span class="block mb-1 font-medium text-black">
										Contributing
									</span>
									<span class="block leading-5 opacity-50">
										Feel free to contribute your expertise. All these elements
										are open-source.
									</span>
								</a>
							</div>
						</div>
					</DropdownContent>
				</Dropdown>
			</li>
			<li class="rounded bg-white border hover:bg-slate-200 hover:border-transparent">
				<Dropdown x-bind="hover" class="p-2">
					<DropdownTrigger>
						<span>Learn More</span>
					</DropdownTrigger>
					<DropdownContent class="bg-white text-slate-800">
						<div class="flex items-stretch justify-center w-full p-6 border rounded-lg">
							<div class="w-72">
								<a
									href="#_"
									x-on:click=""
									class="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100"
								>
									<span class="block mb-1 font-medium text-black">
										Tailwind CSS
									</span>
									<span class="block font-light leading-5 opacity-50">
										A utility first CSS framework for building amazing websites.
									</span>
								</a>
								<a
									href="#_"
									x-on:click=""
									class="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100"
								>
									<span class="block mb-1 font-medium text-black">Laravel</span>
									<span class="block font-light leading-5 opacity-50">
										The perfect all-in-one framework for building amazing apps.
									</span>
								</a>
								<a
									href="#_"
									x-on:click=""
									class="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100"
								>
									<span class="block mb-1 font-medium text-black">
										Pines UI
									</span>
									<span class="block leading-5 opacity-50">
										An Alpine JS and Tailwind CSS UI library for awesome people.
									</span>
								</a>
							</div>
							<div class="w-72">
								<a
									href="#_"
									x-on:click=""
									class="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100"
								>
									<span class="block mb-1 font-medium text-black">ApineJS</span>
									<span class="block font-light leading-5 opacity-50">
										A framework without the complex setup or heavy dependencies.
									</span>
								</a>
								<a
									href="#_"
									x-on:click=""
									class="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100"
								>
									<span class="block mb-1 font-medium text-black">
										Livewire
									</span>
									<span class="block leading-5 opacity-50">
										A seamless integration of server-side and client-side
										interactions.
									</span>
								</a>
								<a
									href="#_"
									x-on:click=""
									class="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100"
								>
									<span class="block mb-1 font-medium text-black">Tails</span>
									<span class="block leading-5 opacity-50">
										The ultimate Tailwind CSS design tool that helps you craft
										beautiful websites.
									</span>
								</a>
							</div>
						</div>
					</DropdownContent>
				</Dropdown>
			</li>
		</ul>
	);
}
