let count = 0;
document.getElementById('input-btn').addEventListener('click', function () {
    count += 1;
    const itesField = document.getElementById('input-value').value;

    const tBodyContainer = document.getElementById('content-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${itesField}</td>
    <td>
    <button id="btn-buttons" class='btn btn-primary'>Deletd</button>
    <button class='btn btn-danger'>Done</button>
    </td>
    
    `

    tBodyContainer.appendChild(tr);
    document.getElementById('input-value').value = '';
    const elements = document.querySelectorAll('#btn-buttons');
    for (const value of elements) {
        value.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = "none";
        });
    }
})

document.getElementById('clear-btn').addEventListener('click', function (event) {
    event.target.parentNode.style.display = "none";
    
})



