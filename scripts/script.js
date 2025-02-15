document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const telefone = document.querySelector('input[name="telefone"]').value;

    if (nome && email && telefone) {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar uma função para enviar os dados para um backend
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

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
            e.target.reset(); // Limpa o formulário
        } else {
            alert('Ocorreu um erro ao enviar o formulário.');
        }
    } catch (error) {
        alert('Erro de conexão. Tente novamente mais tarde.');
    }
});