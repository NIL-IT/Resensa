export function formatDate(dateString) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    throw new Error("Input must be in YYYY-MM-DD format");
  }

  // Split the input string
  const parts = dateString.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  // Return the formatted date
  return `${day}.${month}.${year}`;
}
