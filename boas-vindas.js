function obterUsuario() {
    try { return JSON.parse(sessionStorage.getItem('farmavidaUsuario')); } catch { return null; }
}
const usuario = obterUsuario();
if (!usuario) window.location.href = 'index.html';
else {
    document.getElementById('nomeNav').textContent = usuario.nome;
    document.getElementById('mensagemBoasVindas').textContent =
        `Olá, ${usuario.nome}! Seja muito bem-vindo(a) à FarmaVida. Aqui você encontra cuidado, informação e produtos para sua saúde e bem-estar.`;
}
function sair() { sessionStorage.removeItem('farmavidaUsuario'); }
