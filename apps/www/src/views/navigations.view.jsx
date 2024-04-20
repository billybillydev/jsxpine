import { SIDEBAR } from "src/config/navigation";

/**
 * @param {{ currentPage: string }} props
 * @returns {string | null}
 */
export function TableOfContents({currentPage}) {
    const currentPathSections = currentPage.split("/");
    const currentPageMatch = [currentPathSections[1], currentPathSections[2]].join("/");
    const sidebarSection = SIDEBAR.find((item) => item.menu.has(currentPageMatch));
    const menu = sidebarSection?.menu.get(currentPageMatch);

    return menu?.chapters ? (
    <section
      class="flex flex-col gap-y-4 mt-24"
      x-data={`{
        hash: "",
        chapters: ${menu.chapters ? JSON.stringify(menu.chapters) : []},
        options: {
          root: document.querySelector('main'),
          rootMargin: "0px",
          threshold: 1,
        },
      }`}
    >
      <h3>Table Of Contents</h3>
      <ul class="flex flex-col gap-4">
        {menu.chapters?.map(({ slug, text }) => {
          return (
            <li
              class="text-slate-400 hover:text-slate-800"
              x-bind:class={`currentUrl.hash === "#${slug}" && "text-slate-600 underline underline-offset-4"`}
            >
              <a href={`#${slug}`}>{text}</a>
            </li>
          );
        })}
      </ul>
    </section>
  ) : null
}

/**
 * @param {{ currentPage: string }} props
 * @returns {string}
 */
export function LeftSidebar({ currentPage }) {
    const currentPageMatch = currentPage.slice(1);
    
	const isCurrentPage = (/** @type {string | string[]} */ link) => {
		if (link) {
			return link.includes(currentPageMatch);
		}
		return false;
	};

	const getLinkClasses = (/** @type {string | string[]} */ link) => {
		const baseClasses =
			"block py-2 px-6 my-1 transition-colors border-l hover:border-slate-400 text-slate-500 hover:text-slate-900";

		if (isCurrentPage(link)) {
			return baseClasses + " border-slate-500 text-slate-900";
		} else {
			return baseClasses;
		}
	};
	return (
		<nav aria-labelledby="grid-left" class="w-52 xl:w-64 p-4 border-r">
			{SIDEBAR.map((item) => (
				<section>
					<h2 class="mt-4 font-semibold text-slate-700" x-capitalize>
						{item.header}
					</h2>
					<ul>
						{[...item.menu].map(([_, menu]) => {
							return (
								<li class={getLinkClasses(menu.link)}>
									<a href={menu.link}>{menu.text}</a>
								</li>
							);
						})}
					</ul>
				</section>
			))}
		</nav>
	);
}

/**
 * @param {{ currentPage: string }} props
 * @returns {string}
 */
export function RightSidebar(props) {
    return (
			<nav aria-labelledby="grid-right">
				<div class="px-8 border-l">
					<TableOfContents {...props} />
				</div>
			</nav>
		);
}