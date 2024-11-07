// Configuración de citas iniciales
const citas = JSON.parse(localStorage.getItem('citas')) || [];

// Función para agendar cita
window.agendarCita = function() {
    const nombrePaciente = document.getElementById('nombrePaciente').value;
    const telefono = document.getElementById('telefono').value;
    const tipoCita = document.getElementById('tipoCita').value;
    const startTime = document.getElementById('startTime').value;
    const comentarios = document.getElementById('comentarios').value;

    if (nombrePaciente && telefono && tipoCita && startTime) {
        const newEvent = { 
            title: `${tipoCita} - ${nombrePaciente}`, 
            start: startTime, 
            extendedProps: { 
                telefono, 
                comentarios 
            }
        };
        citas.push(newEvent);
        localStorage.setItem('citas', JSON.stringify(citas));
        
        // Limpiar campos del formulario
        document.getElementById('nombrePaciente').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('tipoCita').value = '';
        document.getElementById('startTime').value = '';
        document.getElementById('comentarios').value = '';
        
        alert('Cita registrada con éxito');
    } else {
        alert('Por favor, complete todos los campos');
    }
};
