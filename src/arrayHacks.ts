export function removeObjectWithId(arr: any, id: any, returnObject?: boolean) {
  return arr.filter((arrItem: any) =>
    returnObject ? arrItem.id === id : arrItem.id !== id
  );
}
