export function toDateString(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function minusOneDate(date: Date) {
  const copyOfDate = new Date(date);
  return new Date(copyOfDate.setDate(copyOfDate.getDate() - 1));
}

export function plusOneDate(date: Date) {
  const copyOfDate = new Date(date);
  return new Date(copyOfDate.setDate(copyOfDate.getDate() + 1));
}
