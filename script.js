
// Função para destacar o projeto clicado
window.highlight = (element) => {
    // Resetar estilos de outros elementos
    document.querySelectorAll(".project").forEach(project => {
        project.style.border = "3px solid white";
    });

    // Destacar o elemento clicado
    element.style.border = "3px solid #ADD8E6";
};

