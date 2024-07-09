let data = ["syllabus.html", "p1.html", "p2.html", "style.html", "email.html", "system.html", "process.html"];

function displayRangeMessage() {
    const endRange = data.length;
    document.getElementById('rangeMessage').innerText = ` Valid Range: 1-${endRange}`;
}

function displayTable() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const endRange = data.length;
    const errorMessageElement = document.getElementById('errorMessage');
    const tableBody = document.getElementById('linksTable').querySelector('tbody');

   
    tableBody.innerHTML = '';
    errorMessageElement.innerText = '';

    if (start < 1 || end < 1 || start > endRange || end > endRange || start > end) {
        errorMessageElement.innerText = `Invalid range, valid range: 1-${endRange}`;
        return;
    }

    for (let i = start - 1; i < end; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        const link = document.createElement('a');
        link.href = data[i];
        link.innerText = data[i];
        cell.appendChild(link);
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
}


displayRangeMessage();