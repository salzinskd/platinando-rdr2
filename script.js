document.getElementById("sobreBtn").addEventListener("click", function() {
    document.getElementById("conteudo").innerHTML = `
        <p class="texto-sobre">Este site foi feito para ajudar jogadores de RDR2 (Red Dead Redemption 2) a platinarem o jogo de forma rápida e fácil.</p>
    `;
    document.getElementById("imagemRDR2").src = ""; // Limpa a imagem
});

document.getElementById("localizacoesBtn").addEventListener("click", function() {
    window.location.href = "localizacoes.html"; // Redireciona para a página de localizações
});