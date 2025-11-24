
export type typeStatus = "Pago" | "Pendente" | "Agendado";

export interface DadoItem {
    paciente: string;
    valor: number;
    data: string;
    status: typeStatus;
}

export const dados: DadoItem[] = [
  { paciente: "Carlos Santos", valor: 300, data: "12/02/2025", status: "Pendente" },
  { paciente: "Ana Paula", valor: 450, data: "15/02/2025", status: "Pago" },
  { paciente: "João Pedro", valor: 250, data: "18/02/2025", status: "Pendente" },
  { paciente: "Mariana Oliveira", valor: 520, data: "20/02/2025", status: "Agendado" },
  { paciente: "Ricardo Almeida", valor: 380, data: "22/02/2025", status: "Pago" },
  { paciente: "Fernanda Costa", valor: 290, data: "25/02/2025", status: "Pendente" },
  { paciente: "Gabriel Martins", valor: 470, data: "27/02/2025", status: "Agendado" },
  { paciente: "Juliana Ribeiro", valor: 310, data: "28/02/2025", status: "Pago" },
  { paciente: "Bruno Carvalho", valor: 260, data: "03/03/2025", status: "Pendente" },
  { paciente: "Letícia Andrade", valor: 390, data: "05/03/2025", status: "Pago" },
  { paciente: "Eduardo Lima", valor: 540, data: "08/03/2025", status: "Agendado" },
  { paciente: "Camila Torres", valor: 250, data: "12/03/2025", status: "Pendente" },
  { paciente: "Patrícia Mendes", valor: 410, data: "15/03/2025", status: "Pago" },
  { paciente: "Rodrigo Antunes", valor: 330, data: "18/03/2025", status: "Agendado" },
  { paciente: "Sofia Nogueira", valor: 295, data: "02/04/2025", status: "Pendente" },
  { paciente: "Vinícius Prado", valor: 480, data: "06/04/2025", status: "Pago" },
  { paciente: "Larissa Martins", valor: 360, data: "10/04/2025", status: "Agendado" },
  { paciente: "Thiago Barbosa", valor: 260, data: "14/04/2025", status: "Pendente" },
  { paciente: "Beatriz Souza", valor: 430, data: "18/04/2025", status: "Pago" }
];
