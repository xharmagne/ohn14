export class ListCountValueConverter {
  toView(value) {
    if (!value) {
      return 0;
    }
    return value.length;
  }
}
