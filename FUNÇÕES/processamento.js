// Trazer a lista

// Saber qual é o ultimo ID cadastro

// Somar + 1 para ser o proximo id 

// Return 
import { listarTodos } from "../MANIPULADOR/manipulador_arquivos.js"

export async function gerarNovoId (){
    const registrosAlunos = await listarTodos();

    // Pegar todos os IDS existentes
    const ids = registrosAlunos.map((aluno) => aluno.id);

    const novoID = Math.max(...ids) + 1
    return novoID;
}

