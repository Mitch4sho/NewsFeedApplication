export function getDate(str?: string): string {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const DATE = str ? new Date(str) : new Date();
  const date = DATE.getDate();
  const month = MONTHS[DATE.getMonth()];

  let newDate = `${month} ${date}`;
  return newDate;
}
