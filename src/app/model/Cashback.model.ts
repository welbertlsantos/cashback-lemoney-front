import { User } from "./user.model";

export class CashBack {
    constructor(
        public id: string,
        public usuario: User,
        public idProduto: string,
        public descricaoProduto: string,
        public valorProduto: number,
        public tipoCashBack: string,
        public valorCashBackMoeda: number,
        public valorCashBackPercentual: number,
        public dataInicio: Date,
        public dataFim: Date,
        public status: string,
    ){}
}