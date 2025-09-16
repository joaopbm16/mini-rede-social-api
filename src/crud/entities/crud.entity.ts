import { CRUD } from '@prisma/client';

export class CrudEntity implements CRUD {
  id: number;
  create: boolean;
  update: boolean;
  delete: boolean;
  view: boolean;
  id_perfil: number;
  nome_tabela: string;
  perfil?: {
    nome_per?: string;
    usuario?: {
      id?: number;
      nome_usua?: string;
    };
  };
}
