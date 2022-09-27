const api_url = 
"https://satsin06.github.io/customApis/swim_results.json";

// Defining async function
async function getapi(url) {

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
var data = await response.json();
data = data.slice().sort((a, b) => b.time - a.time);
console.log(data);
if (response) {
  hideloader();
}
show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Time</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.time}</td>
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("swimers").innerHTML = tab;
}
