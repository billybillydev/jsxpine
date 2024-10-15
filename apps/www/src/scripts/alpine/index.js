import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";
import manage from 'alpinejs-manage';

import { carouselData } from "./data/carousel.data";
import { dropdownSelectData } from "./data/dropdown-select.data";
import { dropdownData } from "./data/dropdown.data";
import { groupAccordionData } from "./data/group-accordion.data";
import { imagepickerData } from "./data/imagepicker.data";
import { modalData } from "./data/modal.data";
import { paginationData } from "./data/pagination.data";
import { progressData } from "./data/progress.data";
import { restGalleryData } from "./data/rest-gallery.data";
import { seoData } from "./data/seo.data";
import { sidebarData } from "./data/sidebar.data";
import { soloAccordionData } from "./data/solo-accordion.data";
import { switchCheckboxData } from "./data/switch-checkbox.data";
import { tableData } from "./data/table.data";
import { tabsData } from "./data/tabs.data";
import { tooltipData } from "./data/tooltip.data";
import { treeData } from "./data/tree.data";
import { zoomData } from "./data/zoom.data";

import { capitalizeDirective } from "./directive/capitalize.directive";
import { logDirective } from "./directive/log.directive";

import { clipboardMagic } from "./magic/clipboard.magic";
import { nowMagic } from "./magic/now.magic";

/* Data */
Alpine.data("carousel", carouselData);
Alpine.data("dropdown", dropdownData);
Alpine.data("dropdownSelect", dropdownSelectData);
Alpine.data("groupAccordion", groupAccordionData);
Alpine.data("imagepicker", imagepickerData);
Alpine.data("modal", modalData);
Alpine.data("pagination", paginationData);
Alpine.data("progress", progressData);
Alpine.data("restGallery", restGalleryData);
Alpine.data("seo", seoData);
Alpine.data("soloAccordion", soloAccordionData);
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
