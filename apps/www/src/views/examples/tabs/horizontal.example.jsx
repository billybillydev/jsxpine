import { Tabs, TabHeaderItem, TabBodyItem, TabsBody, TabsHeader } from "$components/tabs.component";

export function HorizontalTabsExample() {
    return (
			<Tabs class="" direction="horizontal">
				<TabsHeader>
					<TabHeaderItem title="Account" />
					<TabHeaderItem title="Password" />
					<TabHeaderItem title="Profile" />
				</TabsHeader>
				<TabsBody>
					<TabBodyItem>
						<div class="border rounded-lg shadow-sm bg-card">
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
										id="horizontal-name"
										value="Adam Wathan"
										class="text-base-dark flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md peer border-neutral-300 ring-offset-background placeholder:text-base focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base disabled:cursor-not-allowed disabled:opacity-50"
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
										id="horizontal-account-username"
										value="@adamwathan"
										class="text-base-dark flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md peer border-neutral-300 ring-offset-background placeholder:text-base focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base disabled:cursor-not-allowed disabled:opacity-50"
									/>
								</div>
							</div>
							<div class="flex items-center p-6 pt-0">
								<button
									type="button"
									class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md btn btn-secondary dark:btn-secondary-light"
								>
									Save changes
								</button>
							</div>
						</div>
					</TabBodyItem>
					<TabBodyItem>
						<div class="border rounded-lg shadow-sm bg-card">
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
										id="horizontal-password"
										class="text-base-dark flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md peer border-neutral-300 ring-offset-background placeholder:text-base focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base disabled:cursor-not-allowed disabled:opacity-50"
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
										id="horizontal-password_new"
										class="text-base-dark flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-base focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base disabled:cursor-not-allowed disabled:opacity-50"
									/>
								</div>
							</div>
							<div class="flex items-center p-6 pt-0">
								<button
									type="button"
									class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md btn btn-secondary dark:btn-secondary-light"
								>
									Save password
								</button>
							</div>
						</div>
					</TabBodyItem>
					<TabBodyItem>
						<div class="border rounded-lg shadow-sm bg-card">
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
										id="horizontal-profile-username"
										class="text-base-dark flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md peer border-neutral-300 ring-offset-background placeholder:text-base focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base disabled:cursor-not-allowed disabled:opacity-50"
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
										id="horizontal-fullname"
										class="text-base-dark flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-base focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base disabled:cursor-not-allowed disabled:opacity-50"
									/>
								</div>
							</div>
							<div class="flex items-center p-6 pt-0">
								<button
									type="button"
									class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md btn btn-secondary dark:btn-secondary-light"
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