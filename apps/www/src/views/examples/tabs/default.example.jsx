import { Tabs, TabHeaderItem, TabBodyItem, TabsHeader, TabsBody } from "$components/tabs.component";

export function DefaultTabsExample() {
    return (
			<Tabs class="bg-slate-100">
				<TabsHeader>
					<TabHeaderItem title="Account" {...{ "x-bind:class": "tabButtonActive($el) ? 'w-full h-full border-b-2 border-info-600' : ''"}} />
					<TabHeaderItem title="Password" {...{ "x-bind:class": "tabButtonActive($el) ? 'w-full h-full border-b-2 border-info-600' : ''"}} />
					<TabHeaderItem title="Profile" {...{ "x-bind:class": "tabButtonActive($el) ? 'w-full h-full border-b-2 border-info-600' : ''"}} />
				</TabsHeader>
				<TabsBody>
					<TabBodyItem>
						<div class="border rounded-lg shadow-sm bg-card text-neutral-900">
							<div class="flex flex-col space-y-1.5 p-6">
								<h3 class="text-lg font-semibold leading-none tracking-tight">
									Account
								</h3>
								<p class="text-sm text-neutral-500">
									Make changes to your account here. Click save when you're
									done.
								</p>
							</div>
							<div class="p-6 pt-0 space-y-2">
								<div class="space-y-1">
									<label
										class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										for="name"
									>
										Name
									</label>
									<input
										type="text"
										placeholder="Name"
										id="default-name"
										value="Adam Wathan"
										class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md peer border-neutral-300 ring-offset-background placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
									/>
								</div>
								<div class="space-y-1">
									<label
										class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										for="username"
									>
										Username
									</label>
									<input
										type="text"
										placeholder="Username"
										id="default-account-username"
										value="@adamwathan"
										class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md peer border-neutral-300 ring-offset-background placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
									/>
								</div>
							</div>
							<div class="flex items-center p-6 pt-0">
								<button
									type="button"
									class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-neutral-950 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none"
								>
									Save changes
								</button>
							</div>
						</div>
					</TabBodyItem>
					<TabBodyItem>
						<div class="border rounded-lg shadow-sm bg-card text-neutral-900">
							<div class="flex flex-col space-y-1.5 p-6">
								<h3 class="text-lg font-semibold leading-none tracking-tight">
									Password
								</h3>
								<p class="text-sm text-neutral-500">
									Change your password here. After saving, you'll be logged out.
								</p>
							</div>
							<div class="p-6 pt-0 space-y-2">
								<div class="space-y-1">
									<label
										class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										for="password"
									>
										Current Password
									</label>
									<input
										type="password"
										placeholder="Current Password"
										id="default-password"
										class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md peer border-neutral-300 ring-offset-background placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
									/>
								</div>
								<div class="space-y-1">
									<label
										class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										for="password_new"
									>
										New Password
									</label>
									<input
										type="password"
										placeholder="New Password"
										id="default-password_new"
										class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
									/>
								</div>
							</div>
							<div class="flex items-center p-6 pt-0">
								<button
									type="button"
									class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-neutral-950 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none"
								>
									Save password
								</button>
							</div>
						</div>
					</TabBodyItem>
					<TabBodyItem>
						<div class="border rounded-lg shadow-sm bg-card text-neutral-900">
							<div class="flex flex-col space-y-1.5 p-6">
								<h3 class="text-lg font-semibold leading-none tracking-tight">
									Profile
								</h3>
								<p class="text-sm text-neutral-500">Update your profile.</p>
							</div>
							<div class="p-6 pt-0 space-y-2">
								<div class="space-y-1">
									<label
										class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										for="username"
									>
										Username
									</label>
									<input
										placeholder="Your username"
										id="default-profile-username"
										class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md peer border-neutral-300 ring-offset-background placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
									/>
								</div>
								<div class="space-y-1">
									<label
										class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										for="fullname"
									>
										Full Name
									</label>
									<input
										placeholder="Firstname & Lastname"
										id="default-fullname"
										class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
									/>
								</div>
							</div>
							<div class="flex items-center p-6 pt-0">
								<button
									type="button"
									class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-neutral-950 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none"
								>
									Save changes
								</button>
							</div>
						</div>
					</TabBodyItem>
				</TabsBody>
			</Tabs>
		);
}