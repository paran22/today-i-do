export function toDate(dateTime: Date) {
  return `${dateTime.getFullYear()}-${
    dateTime.getMonth() + 1
  }-${dateTime.getDate()}`;
}

export function minusOneDate(dateTime: Date) {
  const copyOfDateTime = new Date(dateTime);
  return new Date(copyOfDateTime.setDate(copyOfDateTime.getDate() - 1));
}

export function plusOneDate(dateTime: Date) {
  const copyOfDateTime = new Date(dateTime);
  return new Date(copyOfDateTime.setDate(copyOfDateTime.getDate() + 1));
}
