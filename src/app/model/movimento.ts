import { Carteira } from './carteira';

export class Movimento {
    idMovimento: number;
    carConta: Carteira;
    carDestino: Carteira;
    acaoMov: string;
    nrDocumento: string;
    vlBruto: number;
    vlLiquido: number;
    vlDesc: number;
    dtMovimento: Date;
}
