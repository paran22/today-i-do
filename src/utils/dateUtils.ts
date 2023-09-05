export function toDate(dateTime: Date) {
  return `${dateTime.getFullYear()}-${
    dateTime.getMonth() + 1
  }-${dateTime.getDate()}`;
}
