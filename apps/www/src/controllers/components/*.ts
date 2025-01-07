import { AppContext } from "$config/server";
import { accordionsController } from "$controllers/components/accordions.controller";
import { alertsController } from "$controllers/components/alerts.controller";
import { avatarController } from "$controllers/components/avatar.controller";
import { badgesController } from "$controllers/components/badges.controller";
import { buttonsController } from "$controllers/components/buttons.controller";
import { calendarController } from "$controllers/components/calendar.controller";
import { cardController } from "$controllers/components/card.controller";
import { carouselController } from "$controllers/components/carousel.controller";
import { checkboxController } from "$controllers/components/checkbox.controller";
import { datePickerController } from "$controllers/components/date-picker.controller";
import { dropdownController } from "$controllers/components/dropdown.controller";
import { galleriesController } from "$controllers/components/galleries.controller";
import { iconController } from "$controllers/components/icon.controller";
import { imagePickerController } from "$controllers/components/imagepicker.controller";
import { inputsController } from "$controllers/components/inputs.controller";
import { modalsController } from "$controllers/components/modals.controller";
import { paginationsController } from "$controllers/components/paginations.controller";
import { progressController } from "$controllers/components/progress.controller";
import { radioController } from "$controllers/components/radio.controller";
import { ratingsController } from "$controllers/components/ratings.controller";
import { selectController } from "$controllers/components/select.controller";
import { sidebarController } from "$controllers/components/sidebar.controller";
import { svgController } from "$controllers/components/svg.controller";
import { switchController } from "$controllers/components/switch.controller";
import { tableController } from "$controllers/components/table.controller";
import { tabsController } from "$controllers/components/tabs.controller";
import { tooltipsController } from "$controllers/components/tooltips.controller";
import { treesController } from "$controllers/components/trees.controller";
import { zoomController } from "$controllers/components/zoom.controller";
import { Hono } from "hono";

export const componentsController = new Hono<AppContext>()
	.get((ctx) => {
		return ctx.redirect("/components/accordions");
	})
	.route("/accordions", accordionsController)
	.route("/alerts", alertsController)
	.route("/avatar", avatarController)
	.route("/badges", badgesController)
	.route("/buttons", buttonsController)
	.route("/calendar", calendarController)
	.route("/card", cardController)
	.route("/carousel", carouselController)
	.route("/checkbox", checkboxController)
	.route("/datepicker", datePickerController)
	.route("/dropdown", dropdownController)
	.route("/galleries", galleriesController)
	.route("/icon", iconController)
	.route("/imagepicker", imagePickerController)
	.route("/inputs", inputsController)
	.route("/modals", modalsController)
	.route("/paginations", paginationsController)
	.route("/progress", progressController)
	.route("/radio", radioController)
	.route("/ratings", ratingsController)
	// .route("/range-slider", rangeSliderController)
	.route("/select", selectController)
	.route("/sidebar", sidebarController)
	.route("/svg", svgController)
	.route("/switch", switchController)
	.route("/table", tableController)
	.route("/tabs", tabsController)
	.route("/tooltips", tooltipsController)
	.route("/trees", treesController)
	.route("/zoom", zoomController);
