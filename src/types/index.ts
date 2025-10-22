export interface Evento {
  id: string;
  dia: string;
  data: string;
  horario: string;
  titulo: string;
  descricao: string;
  local?: string;
  destaque?: boolean;
}

export interface Barraca {
  id: string;
  nome: string;
  descricao: string;
  imagem?: string;
  responsavel?: string;
  categoria: "comida" | "bebida" | "entretenimento" | "religioso" | "outro";
}

export interface Patrocinador {
  id: string;
  nome: string;
  logo: string;
  site?: string;
  categoria: "ouro" | "prata" | "bronze" | "apoiador";
}

export interface InscricaoBingo {
  nome: string;
  endereco: string;
  telefone: string;
  quantidade: number;
}

export interface InfoFesta {
  titulo: string;
  dataInicio: string;
  dataFim: string;
  dataFrase: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  coordenadas: {
    lat: number;
    lng: number;
  };
  redesSociais: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface GaleriaFoto {
  url: string;
  titulo: string;
  categoria: string;
}

export interface GaleriaEdicao {
  ano: number;
  fotos: GaleriaFoto[];
}
