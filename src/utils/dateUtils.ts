export function toDateString(dateTime: Date) {
  return `${dateTime.getFullYear()}-${
    dateTime.getMonth() + 1
  }-${dateTime.getDate()}`;
}

export function minusOneDate(date: Date) {
  const copyOfDate = new Date(date);
  return new Date(copyOfDate.setDate(copyOfDate.getDate() - 1));
}

export function plusOneDate(date: Date) {
  const copyOfDate = new Date(date);
  return new Date(copyOfDate.setDate(copyOfDate.getDate() + 1));
}
