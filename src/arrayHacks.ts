export function removeObjectWithId(arr: any, id: any) {
  return arr.filter((arrItem: any) => arrItem.id !== id);
}
