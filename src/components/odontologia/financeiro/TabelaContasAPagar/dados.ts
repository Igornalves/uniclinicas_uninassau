export type typeStatus = "Pago" | "Pendente" | "Agendado";

export interface DadoItem {
    fornecedor: string;
    valor: number;
    vencimento: string;
    status: typeStatus;
}

export const dados: DadoItem[] = [
  { fornecedor: "Clínica Master", valor: 1200, vencimento: "10/02/2025", status: "Pendente" },
  { fornecedor: "Laboratório Vida", valor: 850, vencimento: "14/02/2025", status: "Pago" },
  { fornecedor: "DentalSupplies", valor: 450, vencimento: "18/02/2025", status: "Pendente" },
  { fornecedor: "OdontoPlus Distribuidora", valor: 980, vencimento: "05/03/2025", status: "Agendado" },
  { fornecedor: "Hospital Saúde Total", valor: 2300, vencimento: "08/03/2025", status: "Pendente" },
  { fornecedor: "BioLab Pharma", valor: 670, vencimento: "12/03/2025", status: "Pago" },
  { fornecedor: "DentalPrime Fornecimentos", valor: 540, vencimento: "15/03/2025", status: "Pendente" },
  { fornecedor: "Clínica OdontoBem", valor: 1250, vencimento: "19/03/2025", status: "Agendado" },
  { fornecedor: "Veterinária Pet+ Plus", valor: 390, vencimento: "22/03/2025", status: "Pago" },
  { fornecedor: "LabCenter Diagnósticos", valor: 1100, vencimento: "27/03/2025", status: "Pendente" },
  { fornecedor: "OdontoMix", valor: 780, vencimento: "03/04/2025", status: "Pago" },
  { fornecedor: "PharmaLab", valor: 920, vencimento: "07/04/2025", status: "Agendado" },
  { fornecedor: "Clínica Sorriso&Vida", valor: 1600, vencimento: "11/04/2025", status: "Pendente" },
  { fornecedor: "DentalSupreme", valor: 480, vencimento: "16/04/2025", status: "Pago" },
  { fornecedor: "SaúdeMax Serviços", valor: 2100, vencimento: "20/04/2025", status: "Agendado" },
  { fornecedor: "BioDent Tech", valor: 860, vencimento: "02/05/2025", status: "Pendente" },
  { fornecedor: "Clínica Central", valor: 1350, vencimento: "06/05/2025", status: "Pago" },
  { fornecedor: "LabVida+", valor: 720, vencimento: "12/05/2025", status: "Pendente" },
  { fornecedor: "DentalFlux Distribuidora", valor: 550, vencimento: "18/05/2025", status: "Agendado" }
];
