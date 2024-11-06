// json2html.js
export default function json2html(data) {
    // Start the table HTML with the custom data-user attribute
    let html = '<table data-user="identicaluday4742@gmail.com">';
    
    // Create the table header
    html += '<thead><tr>';
    const headers = Object.keys(data[0]);  // Get the keys from the first object to use as column headers
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';
    
    // Create the table body
    html += '<tbody>';
    data.forEach(row => {
      html += '<tr>';
      headers.forEach(header => {
        html += `<td>${row[header] || ''}</td>`;  // Use an empty string if the key doesn't exist in the object
      });
      html += '</tr>';
    });
    html += '</tbody>';
    
    // Close the table
    html += '</table>';
    
    // Return the generated HTML
    return html;
  }
  