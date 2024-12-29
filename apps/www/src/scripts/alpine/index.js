import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";
import manage from "alpinejs-manage";
import { carouselData } from "$scripts/alpine/data/carousel.data";
import { codeToCopyData } from "$scripts/alpine/data/code-to-copy.data";
import { dropdownSelectData } from "$scripts/alpine/data/dropdown-select.data";
import { dropdownData } from "$scripts/alpine/data/dropdown.data";
// import { groupAccordionData } from "$scripts/alpine/data/group-accordion.data";
import { imagepickerData } from "$scripts/alpine/data/imagepicker.data";
import { modalData } from "$scripts/alpine/data/modal.data";
import { paginationData } from "$scripts/alpine/data/pagination.data";
import { progressData } from "$scripts/alpine/data/progress.data";
import { restGalleryData } from "$scripts/alpine/data/rest-gallery.data";
import { seoData } from "$scripts/alpine/data/seo.data";
import { sidebarData } from "$scripts/alpine/data/sidebar.data";
// import { soloAccordionData } from "$scripts/alpine/data/solo-accordion.data";
import { switchCheckboxData } from "$scripts/alpine/data/switch-checkbox.data";
import { tableData } from "$scripts/alpine/data/table.data";
import { tabsData } from "$scripts/alpine/data/tabs.data";
import { tooltipData } from "$scripts/alpine/data/tooltip.data";
import { treeData } from "$scripts/alpine/data/tree.data";
import { zoomData } from "$scripts/alpine/data/zoom.data";
import { capitalizeDirective } from "$scripts/alpine/directive/capitalize.directive";
import { logDirective } from "$scripts/alpine/directive/log.directive";
import { clipboardMagic } from "$scripts/alpine/magic/clipboard.magic";
import { nowMagic } from "$scripts/alpine/magic/now.magic";

/* Data */
Alpine.data("carousel", carouselData);
Alpine.data("codeToCopy", codeToCopyData);
Alpine.data("dropdown", dropdownData);
Alpine.data("dropdownSelect", dropdownSelectData);
// Alpine.data("groupAccordion", groupAccordionData);
Alpine.data("imagepicker", imagepickerData);
Alpine.data("modal", modalData);
Alpine.data("pagination", paginationData);
Alpine.data("progress", progressData);
Alpine.data("restGallery", restGalleryData);
Alpine.data("seo", seoData);
// Alpine.data("soloAccordion", soloAccordionData);
Alpine.data("sidebar", sidebarData);
Alpine.data("switchCheckbox", switchCheckboxData);
Alpine.data("table", tableData);
Alpine.data("tabs", tabsData);
Alpine.data("tooltip", tooltipData);
Alpine.data("tree", treeData);
Alpine.data("zoom", zoomData);

/* Directive */
Alpine.directive("capitalize", capitalizeDirective);
Alpine.directive("log", logDirective);

/* Magic */
Alpine.magic("clipboard", clipboardMagic);
Alpine.magic("now", nowMagic);

/* Plugins */
Alpine.plugin(focus);
Alpine.plugin(collapse);
Alpine.plugin(manage);

export default Alpine;
