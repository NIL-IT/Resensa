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

    console.log("Parsed data array:");
    console.log(JSON.stringify(result, null, 2));

    return result;
  } catch (error) {
    console.error("Error parsing Excel to CSV:", error);
    return [];
  }
}

// Example usage:
const sampleData = Buffer.from("sample excel data");

// Test the function
parseExcelToCSVArray(sampleData).then((data) => {
  // Example of how the data might look
  const sampleOutput = [
    {
      ID: "1",
      Name: "Product A",
      Price: "100",
      Category: "Electronics",
    },
    {
      ID: "2",
      Name: "Product B",
      Price: "200",
      Category: "Furniture",
    },
  ];

  console.log("Sample output structure:");
  console.log(JSON.stringify(sampleOutput, null, 2));
});

// Example of how to use with server response:
/*
async function getAndParseExcel() {
  try {
    const response = await fetch('your-api-endpoint');
    const excelBuffer = await response.arrayBuffer();
    const data = await parseExcelToCSVArray(Buffer.from(excelBuffer));
    return data;
  } catch (error) {
    console.error('Error fetching and parsing Excel:', error);
    return [];
  }
}
*/
