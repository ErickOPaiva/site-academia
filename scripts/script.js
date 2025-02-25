document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            e.target.reset(); // Limpar formulário
        } else {
            alert('Ocorreu um erro ao enviar o formulário.');
        }
    } catch (error) {
        alert('Erro de conexão. Tente novamente mais tarde.');
    }
});
