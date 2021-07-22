import Tarefa from "../model/Tarefa"
import tarefasIniciais from '../data/mock'

export default function Home() {

    let tarefas = tarefasIniciais
    tarefas = tarefas.filtrarAtivas()
    tarefas = tarefas.filtrarConcluidas()
    //tarefas = tarefas.removerFiltro()
    tarefas = tarefas.excluirConcluidas()

    tarefas = tarefas.adicionarTarefa(Tarefa.criarConcluida(6, 'Lavar os pratos!!!'))
    tarefas = tarefas.adicionarTarefa(Tarefa.criarAtiva(7, 'Cuidar das crianças!'))
    tarefas = tarefas.excluirConcluidas()

    tarefas = tarefas.modificarTarefa(tarefas.itens[2].alternarStatus())
    tarefas = tarefas.modificarTarefa(tarefas.itens[1].alternarStatus())

    function renderizarTarefas() {
        return tarefas.itens.map(tarefa => {
            return (
                <div key={tarefa.id}>
                    <span>{tarefa.id} | </span>
                    <span>{tarefa.descricao} | </span>
                    <span>{tarefa.concluida ? 'Concluída' : 'Ativa'}</span>
                </div>
            )
        })
    }

    return (
        <div className={`
        flex flex-col justify-center items-center h-screen
        text-white bg-gradient-to-tr from-purple-500 to-yellow-600
        `}>
            {renderizarTarefas()}
        </div>
    )
}