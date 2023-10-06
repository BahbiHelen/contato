class Contatos {
    constructor(nome, email, telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}
//Deifinindo a classe GerenciadorContatos
class GerenciadorContatos {
    constructor(){
        //Inicializa a lista de contatos vazia
        this.contatos = []
    }

    adicionarContatos(contato) {
        // Adicionaum contato a lista de contatos
        this.contatos.push(contato);
    }

    exibirContatos() {
        const listaContatos = document.getElementById('contato-lista')

        // LImpa a lista de contatos
        listaContatos.innerHTML = ''

        // Para cada novo contato na lista de contatos, cria um novo elemento 'li' e adiciona na lista de contatos
        for(const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}`

            listaContatos.appendChild(li)
        }
    }
}
// Cria um objeto da classe GerenciadorContatos
const gerenciadorContatos = new GerenciadorContatos();

// Cria os elementos necessario
const contatoForm = document.getElementById('contato-form')
const nomeForm = document.getElementById('nome');
const emailForm = document.getElementById('email');
const telefoneForm = document.getElementById('tel');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');'   
contatoForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const nome = nomeForm.ariaValueMax;
    const email = emailForm.value;
    const telefone = telefoneForm.value;

    const contato = new Contatos (nome, email,telefone);

    gerenciadorContatos.adicionarContatos(contato)

    nomeForm = ''
    emailForm = ''
    telefoneForm = ''
});

mostrarContatos.addEventListener('click', function(){
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
})

ocultarContatos.addEventListener('click', function(){
    listaContatos.style.display = 'none'
})
