/**
 * Clipboard alpine magic
 * @returns {(subject: string) => Promise<void>}
 */
export function clipboardMagic() {
  return async (subject) =>
    await navigator.clipboard.writeText(subject);
}
