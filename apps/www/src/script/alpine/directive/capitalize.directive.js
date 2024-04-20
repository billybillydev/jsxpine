/**
 * Capitalize alpine directive
 * @param {HTMLElement} el The HTML element
 * @return {void}
 */
export function capitalizeDirective(el) {
  if (el.textContent) {
    let text = el.textContent.trim();
		text = text[0].toUpperCase() + text.slice(1);
		el.textContent = text;
  }
  // el.textContent = text.replace(/^.{1}/g, (x) => x[0].toUpperCase())
}
