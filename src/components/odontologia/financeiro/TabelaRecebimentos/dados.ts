export type typeStatus = "Pago" | "Pendente" | "Agendado";

export interface DadoItem {
    data: string;
    tutor: string;
    animal: string;
    servico: string;
    pagamento: string;
    valor: string;
    status: typeStatus;
    obs: string;
}

export const dados: DadoItem[] = [
    {
        data: "11/01/2024",
        tutor: "Ricardo Moura",
        animal: "Pingo (Cachorro)",
        servico: "Banho e tosa",
        pagamento: "Pix",
        valor: "R$ 75,00",
        status: "Pago",
        obs: "Retorno mensal"
    },
    {
        data: "23/01/2024",
        tutor: "Tatiane Farias",
        animal: "Mimi (Gata)",
        servico: "Vacinação",
        pagamento: "Cartão de crédito",
        valor: "R$ 95,00",
        status: "Pendente",
        obs: "Aplicado V8"
    },
    {
        data: "14/02/2024",
        tutor: "Guilherme Souza",
        animal: "Bob (Cachorro)",
        servico: "Consulta clínica",
        pagamento: "Dinheiro",
        valor: "R$ 150,00",
        status: "Pago",
        obs: "Aguardando retorno"
    },
    {
        data: "27/03/2024",
        tutor: "Larissa Mattos",
        animal: "Amora (Gata)",
        servico: "Exame laboratorial",
        pagamento: "Pix",
        valor: "R$ 210,00",
        status: "Agendado",
        obs: "Entrega do laudo em 48h"
    },
    {
        data: "09/04/2024",
        tutor: "Renato Carvalho",
        animal: "Tobias (Cachorro)",
        servico: "Ultrassom",
        pagamento: "Cartão de débito",
        valor: "R$ 180,00",
        status: "Pendente",
        obs: "Tutor não compareceu"
    },
    {
        data: "18/04/2024",
        tutor: "Priscila Ramos",
        animal: "Lola (Gata)",
        servico: "Banho",
        pagamento: "Pix",
        valor: "R$ 60,00",
        status: "Pago",
        obs: "Temperamento dócil"
    },
    {
        data: "30/04/2024",
        tutor: "Felipe Duarte",
        animal: "Spike (Cachorro)",
        servico: "Consulta clínica",
        pagamento: "Cartão de crédito",
        valor: "R$ 155,00",
        status: "Agendado",
        obs: "Medicação por 7 dias"
    },
    {
        data: "10/05/2024",
        tutor: "Beatriz Franco",
        animal: "Eva (Gata)",
        servico: "Castração",
        pagamento: "Pix",
        valor: "R$ 430,00",
        status: "Pago",
        obs: "Pós-operatório estável"
    },
    {
        data: "22/05/2024",
        tutor: "Marcelo Tavares",
        animal: "Cacau (Cachorro)",
        servico: "Vacinação",
        pagamento: "Dinheiro",
        valor: "R$ 100,00",
        status: "Pago",
        obs: "Reagendamento solicitado"
    },
    {
        data: "04/06/2024",
        tutor: "Ana Cláudia",
        animal: "Snow (Gato)",
        servico: "Exame de imagem",
        pagamento: "Cartão de crédito",
        valor: "R$ 260,00",
        status: "Pendente",
        obs: "Raio-X completo"
    },
];
