// Classe Pessoa
function Pessoa(nome, email, telefoneFixo, telefoneCelular, matricula) {
    this.nome = nome;
    this.email = email;
    this.telefoneFixo = telefoneFixo;
    this.telefoneCelular = telefoneCelular;
    this.matricula = matricula;

    // Gets e sets
    // nome
    this.setNome = function(nome) {
    this.nome = nome;
    }
    this.getNome = function() {
    return this.nome;
    }
    // email
    this.setEmail = function(email) {
    this.email = email;
    }
    this.getEmail = function() {
    return this.email;
    }
    // telefone Fixo
    this.setTelefoneFixo = function(telefoneFixo) {
    this.telefoneFixo = telefoneFixo;
    }
    this.getTelefoneFixo = function() {
    return this.telefoneFixo;
    }
    // Telefone Celular
    this.setTelefoneCelular = function(telefoneCelular) {
    this.telefoneCelular = telefoneCelular;
    }
    this.getTelefoneCelular = function() {
    return this.telefoneCelular;
    }
    // matricula
    this.setMatricula = function(matricula) {
    this.matricula = matricula;
    }
    this.getMatricula = function() {
    return this.matricula;
    }
}

// Classe Professor
function Professor(nome, email, telefoneFixo, telefoneCelular, matricula, areaAtuacao, lattes) {
    Pessoa.call(this, nome, email, telefoneFixo, telefoneCelular, matricula); // chama classe pai
    this.areaAtuacao = areaAtuacao;
    this.lattes = lattes;

    // Gets e sets
    // area atuacao
    this.setAreaAtuacao = function(areaAtuacao) {
    this.areaAtuacao = areaAtuacao;
    }
    this.getAreaAtuacao = function() {
    return this.areaAtuacao;
    }
    // lattes
    this.setLattes = function(lattes) {
    this.lattes = lattes;
    }
    this.getLattes = function() {
    return this.lattes;
    }

    Professor.prototype = Object.create(Pessoa.prototype);
    Professor.prototype.constructor = Professor;
}

// Classe Aluno
function Aluno(nome, email, telefoneFixo, telefoneCelular, matricula, curso) {
    Pessoa.call(this, nome, email, telefoneFixo, telefoneCelular, matricula); // chama classe pai
    this.curso = curso;

    // Gets e sets
    // curso
    this.setCurso = function(curso) {
    this.curso = curso;
    }
    this.getCurso = function() {
    return this.curso;
    }

    Aluno.prototype = Object.create(Pessoa.prototype);
    Aluno.prototype.constructor = Aluno;
}

// Função para criar campos dinâmicos
function criarCamposFormulario(tipo) {
    var campoDinamico = document.getElementById("campoDinamico");
    campoDinamico.innerHTML = "";
    
    if (tipo === "Professor") {
        campoDinamico.innerHTML = `
            <label for="areaAtuacao">Área de Atuação:</label>
            <input type="text" id="areaAtuacao" placeholder="Digite sua área de atuação" required>
            
            <label for="lattes">Lattes:</label>
            <input type="text" id="lattes" placeholder="Digite o link do seu Lattes" required>
        `;
    } else if (tipo === "Aluno") {
        campoDinamico.innerHTML = `
            <label for="curso">Curso:</label>
            <input type="text" id="curso" placeholder="Digite seu curso" required>
        `;
    }
}

// Evento para monitorar a seleção de Professor ou Aluno
document.querySelectorAll('input[name="tipo"]').forEach(function(radio) {
    radio.addEventListener("change", function(event) {
        criarCamposFormulario(event.target.value);
    });
});

// Evento para enviar o formulário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefoneFixo = document.getElementById("telefoneFixo").value;
    var telefoneCelular = document.getElementById("telefoneCelular").value;
    var matricula = document.getElementById("matricula").value;
    var tipoSelecionado = document.querySelector('input[name="tipo"]:checked').value;
    
    if (tipoSelecionado === "Professor") {
        var areaAtuacao = document.getElementById("areaAtuacao").value;
        var lattes = document.getElementById("lattes").value;
        var professor = new Professor(nome, email, telefoneFixo, telefoneCelular, matricula, areaAtuacao, lattes);
        document.getElementById("resultadoCadastro").innerHTML =
            "<h1>Professor cadastrado:</h1>" +
            "<p><b>Nome:</b> " + professor.getNome() + "</p>" +
            "<p><b>Email:</b> " + professor.getEmail() + "</p>" +
            "<p><b>Telefone Fixo:</b> " + professor.getTelefoneFixo() + "</p>" +
            "<p><b>Telefone Celular:</b> " + professor.getTelefoneCelular() + "</p>" +
            "<p><b>Matrícula:</b> " + professor.getMatricula() + "</p>" +
            "<p><b>Área de Atuação:</b> " + professor.getAreaAtuacao() + "</p>" +
            "<p><b>Lattes:</b> " + professor.getLattes() + "</p>";
    }
    else if (tipoSelecionado === "Aluno") {
        var curso = document.getElementById("curso").value;
        var aluno = new Aluno(nome, email, telefoneFixo, telefoneCelular, matricula, curso);
        document.getElementById("resultadoCadastro").innerHTML =
            "<h1>Aluno cadastrado:</h1>" +
            "<p><b>Nome:</b> " + aluno.getNome() + "</p>" +
            "<p><b>Email:</b> " + aluno.getEmail() + "</p>" +
            "<p><b>Telefone Fixo:</b> " + aluno.getTelefoneFixo() + "</p>" +
            "<p><b>Telefone Celular:</b> " + aluno.getTelefoneCelular() + "</p>" +
            "<p><b>Matrícula:</b> " + aluno.getMatricula() + "</p>" +
            "<p><b>Curso:</b> " + aluno.getCurso() + "</p>";
    }
    
    alert("Cadastro realizado com sucesso!");
});