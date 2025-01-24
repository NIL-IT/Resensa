import { writeFileXLSX } from "xlsx";

export function parseExcelToOrders(excelBuffer) {
  try {
    // Read the Excel file from buffer
    const workbook = writeFileXLSX(excelBuffer);
    console.log(workbook);
    // Get the first worksheet
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert sheet to JSON
    const rawData = XLSX.utils.sheet_to_json(worksheet);

    // Transform data to match required format
    const orders = rawData.map((row, index) => ({
      id: 40 + index, // Generate sequential IDs starting from 40
      date: row.date || "12.02.2004", // Use date from Excel or default
      state: row.state || "Отправлен",
      client_name: row.client_name || "шшф",
      name: row.name || "Заказ",
      number: row.number || index + 1,
      order_amount: row.order_amount || 200,
    }));

    return orders;
  } catch (error) {
    console.error("Error parsing Excel:", error);
    return [];
  }
}
