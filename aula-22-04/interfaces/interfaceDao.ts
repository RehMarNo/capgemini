interface IDao<T>{
    salvar(obj: T): void;
    excluir(id: number): void;
    consultarTodos():string[];
    consultarPeloId(id: number): void;
    alterar(obj:T): void;
}
export default IDao