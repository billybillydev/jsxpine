/**
 * 
 * @param {import("alpinejs").ElementWithXAttributes} _ The HTML element
 * @param {import("alpinejs").DirectiveData} param1 
 * @param {import("alpinejs").DirectiveUtilities} param2 
 */
export function logDirective(_, { expression }, { evaluateLater, effect }) {
  let getThingToLog = evaluateLater(expression);

  effect(() => {
    getThingToLog((/** @type {unknown} */ thingToLog) => {
      console.log(thingToLog);
    });
  });
}
