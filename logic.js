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

function handleAgent() {
    const teamsUrl = "https://teams.microsoft.com/l/app/?source=app-details-dialog&sharedAppResource=TaosSharedApp&titleId=T_65027c6c-8b00-fdfd-3581-edcaabe09419";
    
    const newWindow = window.open(teamsUrl, '_blank');
    
    setTimeout(() => {
        if (newWindow) newWindow.close();
    }, 500); 
}