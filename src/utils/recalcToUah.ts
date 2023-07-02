export const recalcToUah = (currency: number, usduah: number) => {
  return Number(((1 / currency) * usduah).toFixed(2));
}
