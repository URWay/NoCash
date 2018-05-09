import { Permissoes } from './permissoes';
import { Configuracoes } from './configuracoes';

export class Usuario {
    idUsuario: number;
    nome: string;
    email: string;
    senha: string;
    permissoes: Permissoes;
    configuracoes: Configuracoes;
}
