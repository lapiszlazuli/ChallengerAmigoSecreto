
let Amigos = [];
function agregar() 
{
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") 
    {
        alert("No puedes ingresar nombres en blanco");
        return;
    }

    Amigos.push(nombre);
    input.value = "";
    input.focus();
    Actualizar();
}

function Actualizar() 
{
    const Lista = document.getElementById("listaAmigos");
    Lista.innerHTML = "";

    Amigos.forEach((Nombres) => 
    {
        const li = document.createElement("li");
        li.textContent = Nombres;
        Lista.appendChild(li);
    });
}

function Sorteo() 
{
    if (Amigos.length < 2) 
    {
        alert("Debes tener al menos dos amigos para sortear");
        return;
    }

    const Aleatorio = Math.floor(Math.random() * Amigos.length);
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${Amigos[Aleatorio]}`;
    resultadoLista.appendChild(li);
}
