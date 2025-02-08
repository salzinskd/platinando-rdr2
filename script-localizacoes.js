document.getElementById("buscarBtn").addEventListener("click", function() {
    // Exemplo de como carregar imagens dinamicamente
    const termoBusca = document.getElementById("pesquisa").value;

    // Aqui você pode adicionar a lógica para carregar as imagens com base no termo de busca
    // Por exemplo, você pode usar APIs ou carregar imagens locais

    // Exemplo de imagens estáticas (substitua pelos seus próprios caminhos de imagem)
    document.getElementById("imagem1").src = "caminho/para/imagem1.jpg";
    document.getElementById("imagem2").src = "caminho/para/imagem2.jpg";
    document.getElementById("imagem3").src = "caminho/para/imagem3.jpg";
});