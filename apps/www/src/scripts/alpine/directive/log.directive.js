/**
 * 
 * @param {HTMLElement} el The HTML element
 * @param {{ expression: string }} param1 
 * @param {{ effect: Function, evaluateLater: (expression: string) => (value: unknown) => void }} param2 
 */
export function logDirective(el, { expression }, { evaluateLater, effect }) {
  let getThingToLog = evaluateLater(expression);

  effect(() => {
    getThingToLog((/** @type {unknown} */ thingToLog) => {
      console.log(thingToLog);
    });
  });
}
