function showAlert(type, message) {
    const alertContainer = document.getElementById('alerts-container');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <span class="message">${message}</span>
        <span class="close-btn" onclick="this.parentElement.style.display='none';">&times;</span>
    `;
    alertContainer.appendChild(alert);

    setTimeout(() => {
        alert.style.display = 'none';
    }, 5000); // Hide the alert after 5 seconds
}