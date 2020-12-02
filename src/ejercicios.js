// @TODO Completar...
// capturo el contenedor
const contenedor = document.getElementById('contenedor');

//  Creo el fragment
const lista = document.createDocumentFragment();

// Capturo el template definido
const template = document.getElementById('miTemplate');

// creo el elemento de lista y asigno propiedades
const ul = document.createElement('ul');
ul.className = 'list-group';
ul.style.width = '200px';
ul.style.textAlign = "center";
ul.style.marginLeft = '50px';

// Anexo el elemento de lista al fragment
lista.appendChild(ul);

// Capturo el item de lista dentro del template
const item = template.content.querySelector('li');
const item2 = template.content.querySelector('span');

// Le asigno propiedades al item
item.className = 'list-group-item fa fa-cloud';
item2.style.color = 'red';

for (i = 1; i <= 50; i++){
    // Asigno el valor al item
    item2.textContent = i;
    
    // Clono el nodo con la información cargada
    const clone = document.importNode(template.content, true);

    //Asigno el nodo al fragment bajo el nodo de lista UL
    lista.querySelector('ul').appendChild(clone);
}
// Asigno el fragment completo al contenedor
contenedor.appendChild(lista);