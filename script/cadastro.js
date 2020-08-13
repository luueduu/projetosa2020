document.getElementById('mostrar').addEventListener("click", function () {
    buscaCadastro(0);
});

document.getElementById('selecionar').addEventListener("click", function () {
    buscaCadastro();
});

function buscaCadastro(id) {

    if(id===0){

        var url = '/select';
    }else{
        var id = Number(prompt('Digite o ID a ser pesquisado'));
        if(id!==0){
            var url = '/select/' + id;
        }
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var obj = JSON.parse(xhr.responseText);

            var tabela = '';

            tabela += "<table>" +
                "<tr><td>Update</td><td>Delete</td><td>Id</td><td>nome</td><td>Sobrenome</td><td>Idade</td><td>Fone</td><td>Endereço</td><td>Numero</td><td>Cidade</td><td>Estado</td></tr>";

            for (x = 0; x < obj.length; x++) {
                tabela += "<tr><td><a onclick='update(" + obj[x].id + ")' href='#'>Update</a></td><td><a onclick='confirmaDelete(" +
                    obj[x].id + ")' href='#'>Delete</a></td><td>" + obj[x].id + "</td><td>" + obj[x].nome + "</td><td>" + obj[x].sobreNome +
                    "</td><td>" + obj[x].idade + "</td><td>" + obj[x].fone + "</td><td>" + obj[x].end + "</td><td>" + obj[x].num +
                    "</td><td>" + obj[x].cidade + "</td><td>" + obj[x].estados + "</td> ";

            }

            tabela += "</table>"

            document.getElementById('resultado').innerHTML = tabela;
        }
    }
    xhr.send();
}