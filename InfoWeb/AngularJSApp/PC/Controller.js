PCApp.controller('PCCtrl', function ($scope, PCService) {

    //Aqui estamos carregando todos os dados gravados do Funcionário quando a página for recarregada:
    carregarFuncionarios();

    //Método responsável por carregar todos as propriedades do Funcionário:
    function carregarPC() {
        var listarPC = funcionarioService.getTodosFuncionarios();

        listarFuncionarios.then(function (d) {
            //se tudo der certo:
            $scope.Funcionarios = d.data;
        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os funcionários!");
            });
    }

    //Método responsável por adicionar cada propriedade de um Novo Funcionário:
    $scope.adicionarFuncionario = function () {

        var PC = {
            Id: $scope.Id,
            computador_marca: $scope.nome,
            computador_modelo: $scope.computador_modelo,
            placa_mae: $scope.placa_mae,
            memoria: $scope.memoria,
            hd_marca: $scope.hd_marca,
            hd_modelo: $scope.hd_modelo,
            velocidade_processador: $scope.velocidade_processador
        };

        var adicionarInfos = funcionarioService.adicionarFuncionario(funcionario);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarFuncionarios();
                alert("Funcionário Adicionado com Sucesso!");

                $scope.limparDados();
            } else { alert("Computador não Adicionado!"); }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um Novo Computador");
            });
    }

    //Limpar os campos após inserir os dados no db://Limpar os campos após inserir os dados no db:
    $scope.limparDados = function () {
        $scope.Id = "";
        $scope.computador_marca = "";
        $scope.computador_modelo = "";
        $scope.placa_mae: $scope = "";
        $scope.memoria = "";
        $scope.hd_marca = "";
        $scope.hd_modelo = "";
        $scope.velocidade_processador = "";
        
        
    }

    //Método responsável por atualizar Funcionario pelo Id:
    $scope.atualizarFuncionarioPorId = function (funcionario) {

        $scope.AtualizadoId = PC.Id;
        $scope.Atualizadocomputador_marca = PC.Nome;
        $scope.Atualizadocomputador_modelo = PC.computador_modelo;
        $scope.Atualizadoplaca_mae = PC.placa_mae;
        $scope.Atualizadohd_marca = PC.hd_marca;
        $scope.Atualizadohd_modelo = PC.hd_modelo;
        $scope.Atualizadovelocidade_processador = PC.velocidade_processador;
    }

    //Método responsável por resgatar dados para a exclusão do Computadores:
    $scope.excluirFuncionarioPorId = function (funcionario) {
        $scope.AtualizadoId = PC.Id;
        $scope.AtualizadoNome = PC.Nome;
    }

    //Método responsável por atualizar dados dos Computadores:
    $scope.atualizarPC = function () {
        var PC = {
            Id: $scope.AtualizadoFuncionarioId,
            Marca de computador: $scope.Atualizadocomputador_marca,
            Modelo de computador: $scope.Atualizadocomputador_modelo,
            Placa-mãe: $scope.Atualizadoplaca_mae,
            Marca de HD: $scope.Atualizadohd_modelo,
            Modelo de HD: $scope.Atualizadohd_marca,
            Memória: $scope.Atualizadomemoria,
            Velocidade de Processador.Atualizado.velocidade_processador,
        };
        var atualizarInfos = PCService.atualizarPC(PC);
        atualizarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarFuncionarios();
                alert("Computador Atualizado com Sucesso!");
                $scope.limparDadosAtualizados();
            }
            else {
                alert("Computador não Atualizado");
            }
        },
            function () {
                alert("Ocorreu um erro ao tentar atualizar o Computador!");
            });
    }

    //Método responsável por Limpar os Dados depois de Atualizar os Computadores:
    $scope.limparDadosAtualizados = function () {
        $scope.AtualizadoId = '';
        $scope.Atualizadocomputador_marca = '';
        $scope.Atualizadocomputador_modelo = '';
        $scope.Atualizadoplaca_mae = '';
        $scope.Atualizadohd_marca = '';
        $scope.Atualizadohd_modelo = '';
        $scope.Atualizadomemoria = '';
        $scope.Atualizadovelocidade_processador = '';
    }

    //Método responsável por excluir o Computador pelo Id:
    $scope.excluirFuncionario = function (AtualizadoFuncionarioId) {

        var excluirInfos = funcionarioService.excluirFuncionario($scope.AtualizadoFuncionarioId);
        excluirInfos.then(function (d) {

            if (d.data.success === true) {
                carregarPC();

                alert("Computador excluído com Sucesso!");
            }
            else {
                alert("Computador não excluído!");
            }
        });
    }
});