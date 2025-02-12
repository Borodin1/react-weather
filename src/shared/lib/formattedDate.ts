export function getFormattedDateFromTimezone(timezoneOffset: number): string {
  if (timezoneOffset) {
    const utcDate = new Date();
    const localTime = new Date(utcDate.getTime() + timezoneOffset * 1000);

    const dayOfWeek = localTime.toLocaleString("en-US", { weekday: "long" });
    const day = localTime.toLocaleString("en-US", { day: "2-digit" });
    const month = localTime.toLocaleString("en-US", { month: "short" });
    const year = localTime.getFullYear();
    const time = localTime.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${dayOfWeek}, ${day} ${month} ${year} | Local time: ${time}`;
  }
  return '';
}
