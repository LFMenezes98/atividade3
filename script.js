//simula um banco de dados em memória
var alunos = []

//guarada o objeto quev está alterado 
var alunoAlterado = null

function adicionar() {
    //libera para digitar o ra
    document.getElementById('ra').disable = false
    alunoAlterado = null 
    mostrarModal()
    limparForm()

}
function alterar(ra) {
//procurar o aluno que tem o ra clicado no alterar
for(let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i]
    if (aluno.ra == ra){
        //achou o aluno, então preencha o form
        document.getElementById('ra').value = aluno.ra
        document.getElementById('nome').value = aluno.nome
       document.getElementById('cidade').value = aluno.cidade
        document.getElementById('estado').value = aluno.estado
        document.getElementById('curso').value = aluno.curso
        alunoAlterado = aluno
    }
}
//bloquear o ra para não permitir alterá-lo 
document.getElementById('ra').disable = true
    mostrarModal()

}
function excluir(ra) {
    if (confirm("Você deseja realmente excluir?")) {
      for(let i = 0; i , alunos.length; i++){
          let aluno = alunos[i]
          if(aluno.ra == ra){
              //remove o elemento encontrado na posição "1"
              alunos.splice(i, 1)
          }
      }
    exibirDados()
    }

}
function mostrarModal() {
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "flex"
}
function ocultarModal() {
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "none"
}
function cancelar() {

    ocultarModal()

    limparForm()
}
function salvar() {
    let ra = document.getElementById("ra").value;
    let nome = document.getElementById("nome").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let curso = document.getElementById("curso").value;
  

//se não estiver alterando ninguem, adiciona no vetor
    if(alunoAlterado == null ){  
        let aluno = {
            "ra": ra,
            "nome": nome,
            "cidade": cidade,
            "estado": estado,
            "curso": curso,
            

    }

    //adiciona o objeto aluno no vetor alunos
    alunos.push(aluno)
}else{
    alunoAlterado.ra = ra
    alunoAlterado.nome = nome
    alunoAlterado.cidade = cidade
    alunoAlterado.estado = estado
    alunoAlterado.curso = curso
  
}

alunoAlterado = null

    //limpa o form
    limparForm()

    ocultarModal()

    exibirDados()

}
function exibirDados() {
    let tbody = document.querySelector("#table-costumers tbody")
    //console.log(tbody)

    //antes de listar os alunos, limpa todas as linhas
    tbody.innerHTML = ''

    for (let i = 0; i < alunos.length; i++) {
        let linha = `
                <tr>
                    <td>${alunos[i].ra}</td>
                    <td>${alunos[i].nome}</td>
                    <td>${alunos[i].cidade}</td>
                    <td>${alunos[i].estado}</td>
                    <td>${alunos[i].curso}</td>
                   
                    <td>
                        <button onclick="alterar('${alunos[i].ra}')">Alterar</button>
                        <button onclick="excluir('${alunos[i].ra}')">Excluir</button>
                    </td>
                </tr>
        `
        let tr = document.createElement("tr")
        tr.innerHTML = linha

        tbody.appendChild(tr)
    }

    
}
function limparForm(){
    document.getElementById('ra').value = ""
    document.getElementById('nome').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('estado').value = ""
    document.getElementById('curso').value = ""
   
}