// @TODO Completar...
const contenedor = document.getElementById('contenedor');
let lista = document.createDocumentFragment();


const ul = document.createElement('ul');
ul.setAttribute('class', "list-group");
ul.setAttribute('style', "width : 200px; text-align: center; margin-left: 50px");

lista.appendChild(ul);

for (i = 1; i <= 50; i++){
    let li = `<li class="list-group-item fa  fa-cloud"> Item ${i} </li>`;
//    let li = `<li class="list-group-item fa fa-bars"> Item ${i} </li>`;
    console.log(li);
    lista.firstChild.innerHTML += li;
}

contenedor.appendChild(lista);


