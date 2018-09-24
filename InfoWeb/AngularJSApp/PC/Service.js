PCApp.service('funcionarioService', function ($http) {

    //Método responsável por Listar todos os Funcionários: READ
    this.getTodosPC = function () {

        return $http.get("/PC/GetFuncionario");
    }

    //Método responsável por Adicionar PC: CREATE
    this.adicionarPC = function (funcionario) {

        var request = $http({
            method: 'post',
            url: '/Funcionario/AdicionarPC',
            data: funcionario
        });

        return request;
    }

    //Método responsável por Atualizar Funcionário Por Id: Update
    this.atualizarFuncionario = function (funcionario) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Funcionario/AtualizarFuncionario',
            data: funcionario
        });
        return requestAtualizado;
    }

    //Método responsável por Excluir Funcionário Por Id: Delete
    this.excluirPC = function (AtualizadoId) {

        return $http.post('/Funcionario/ExcluirFuncionario/' + AtualizadoId);
    }
});