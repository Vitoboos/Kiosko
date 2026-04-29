/// Reloj
function updateTime() {
    const tiempo = new Date().toLocaleString("es-ES")
    document.getElementById("tiempo").textContent = tiempo
}
updateTime();
setInterval(updateTime, 1000);

// Navegacion

function showSection(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.style.display = 'none');

    document.getElementById(sectionId).style.display = 'block';
}