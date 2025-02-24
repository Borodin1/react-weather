export function getFormattedDateFromDt(dt: number, format: 'short' | 'full' = 'short'): string {
  const date = new Date(dt * 1000);

  if (format === 'short') {
    return date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${dayOfWeek}, ${day} ${month} ${year} | Local time: ${time}`;
}
