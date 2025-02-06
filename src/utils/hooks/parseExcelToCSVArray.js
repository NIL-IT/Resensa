import XLSX from "xlsx";

async function parseExcelToCSVArray(excelBuffer) {
  try {
    // Read the Excel file from buffer
    const workbook = XLSX.read(excelBuffer, { type: "buffer" });

    // Get the first worksheet
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // Convert to CSV string
    const csvString = XLSX.utils.sheet_to_csv(worksheet);

    // Parse CSV string to array of objects
    const rows = csvString.split("\n");
    const headers = rows[0].split(",");

    const result = rows
      .slice(1) // Skip header row
      .filter((row) => row.trim()) // Remove empty rows
      .map((row) => {
        const values = row.split(",");
        const obj = {};

        headers.forEach((header, index) => {
          // Clean up header and value
          const cleanHeader = header.trim().replace(/"/g, "");
          const cleanValue = values[index]
            ? values[index].trim().replace(/"/g, "")
            : "";

          obj[cleanHeader] = cleanValue;
        });

        return obj;
      });

    return result;
  } catch (error) {
    console.error("Error parsing Excel to CSV:", error);
    return [];
  }
}
