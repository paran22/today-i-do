export function toDate(dateTime: Date) {
  return `${dateTime.getFullYear()}-${
    dateTime.getMonth() + 1
  }-${dateTime.getDate()}`;
}

export function toOneDayAgo(dateTime: Date) {
  const date = new Date(dateTime.valueOf());
  return new Date(date.setDate(date.getDate() - 1));
}

export function toOneDayNext(dateTime: Date) {
  let date = new Date(dateTime.valueOf());
  return new Date(date.setDate(date.getDate() + 1));
}
