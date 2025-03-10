fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById("lista");
        lista.innerHTML = ""; 
        data.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `ID: ${user.id} - Nome: ${user.name} - Email: ${user.email}`;
            lista.appendChild(li);
        });
    })
    .catch(error => console.error("Erro ao buscar usuários:", error));
