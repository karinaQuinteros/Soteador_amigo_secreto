let amigos = []

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("El nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = "";
}


function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.onclick = () => eliminarAmigo(index);
        li.appendChild(eliminarBtn);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para sortear.");
        return;
    }

    const resultado = [...amigos];
    let sorteado;

    // Asegurarse de que nadie se regale a sí mismo
    do {
        sorteado = [...resultado];
        sorteado.sort(() => Math.random() - 0.5); 
    } while (sorteado.some((amigo, index) => amigo === amigos[index])); 

    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    amigos.forEach((amigo, i) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} le regala a ${sorteado[i]}`;
        listaResultado.appendChild(li);
    });
}
