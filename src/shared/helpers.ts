/** Функция реобразования даты */
export const createDate = (value: string) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}:${month < 10 ? '0' + month : month}:${year}`
};
