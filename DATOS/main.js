onload = () =>{
        document.body.classList.remove("container");
};

// Generar "te quiero 💗" al hacer clic en cualquier parte
document.addEventListener('click', function(e) {
    // Si el clic fue en un botón o en el modal, no generamos el texto para no interferir
    if (e.target.tagName.toLowerCase() === 'button' || e.target.closest('#invitacion-modal')) {
        return;
    }

    const floatingText = document.createElement('div');
    floatingText.classList.add('floating-te-quiero');
    floatingText.innerHTML = 'Te quiero 💗';
    
    // Posicionar donde se hizo clic
    floatingText.style.left = e.pageX + 'px';
    floatingText.style.top = e.pageY + 'px';
    
    document.body.appendChild(floatingText);
    
    // Eliminar el elemento después de que termine la animación
    setTimeout(() => {
        floatingText.remove();
    }, 2000);
});

// Lógica del botón de regalo y modal
const regaloBtn = document.getElementById('regalo-btn');
const modal = document.getElementById('invitacion-modal');
const cerrarModal = document.getElementById('cerrar-modal');

if (regaloBtn && modal && cerrarModal) {
    regaloBtn.addEventListener('click', () => {
        modal.classList.remove('modal-oculto');
        modal.classList.add('modal-visible');
    });

    cerrarModal.addEventListener('click', () => {
        modal.classList.remove('modal-visible');
        modal.classList.add('modal-oculto');
    });
}
