export interface DadosPaciente {
    id: number;
    nome: string;
    raca: string;
    sexo: string;
    peso: string;
    idade: string;
    fertil: string;
    status: string;
    caracteristicas: string[];
    dono: string;
    endereco: string;
    telefone: string;
    foto: string;
}

export const dadosPacientes: DadosPaciente[] = [
    {
        id: 1,
        nome: "Bob",
        raca: "Golden",
        sexo: "Masculino",
        peso: "29,20kg em Jan de 2025",
        idade: "2 anos e 5 meses",
        fertil: "Fértil",
        status: "Animal Internado",
        caracteristicas: ["Gosta de Brincar", "Sociável", "Vive em casa"],
        dono: "Lucas",
        endereco: "Rua Mario Lima, Zona Norte, Teresina-PI",
        telefone: "(86) 9436-4794",
        foto: "/foto1.png"
    },
    {
        id: 2,
        nome: "Scoot",
        raca: "Pastor-alemão",
        sexo: "Masculino",
        peso: "30,40kg em Jun de 2025",
        idade: "5 anos e 2 meses",
        fertil: "Fértil",
        status: "Animal Internado",
        caracteristicas: ["Gosta de Brincar", "Sociável", "Vive em casa"],
        dono: "Igor",
        endereco: "Av. Comodoro, Zona Sul, Teresina-PI",
        telefone: "(86) 9436-4794",
        foto: "/foto2.png"
    },
    {
        id: 3,
        nome: "Flor",
        raca: "Husky Siberiano",
        sexo: "Feminino",
        peso: "30,10kg em Jul de 2025",
        idade: "8 anos e 1 mês",
        fertil: "Fértil",
        status: "Animal Internado",
        caracteristicas: ["Gosta de brincar", "Sociável", "Requer atenção"],
        dono: "Lucas",
        endereco: "Rua Mario Lima, Zona Norte, Teresina-PI",
        telefone: "(86) 9436-4794",
        foto: "/foto3.png"
    },

    // -------------------------------------------
    // 🔽 NOVOS PACIENTES GERADOS
    // -------------------------------------------

    {
        id: 4,
        nome: "Mel",
        raca: "Shihtzu",
        sexo: "Feminino",
        peso: "6,8kg em Fev de 2025",
        idade: "3 anos e 7 meses",
        fertil: "Castrado",
        status: "Alta Programada",
        caracteristicas: ["Carinhosa", "Vive em apartamento"],
        dono: "Amanda",
        endereco: "Rua Barão de Castelo Branco, Teresina-PI",
        telefone: "(86) 99422-8821",
        foto: "/foto4.png"
    },
    {
        id: 5,
        nome: "Thor",
        raca: "Rottweiler",
        sexo: "Masculino",
        peso: "52,3kg em Abr de 2025",
        idade: "4 anos",
        fertil: "Fértil",
        status: "Em Observação",
        caracteristicas: ["Protetor", "Treinado", "Vive em quintal"],
        dono: "Carlos",
        endereco: "Conjunto Esplanada, Teresina-PI",
        telefone: "(86) 99833-1129",
        foto: "/foto5.png"
    },
    {
        id: 6,
        nome: "Nina",
        raca: "Poodle",
        sexo: "Feminino",
        peso: "4,2kg em Mar de 2025",
        idade: "6 anos e 3 meses",
        fertil: "Castrado",
        status: "Animal Internado",
        caracteristicas: ["Ansiosa", "Vive em apartamento"],
        dono: "Fernanda",
        endereco: "Rua Rui Barbosa, Centro, Teresina-PI",
        telefone: "(86) 99522-7712",
        foto: "/foto6.png"
    },
    {
        id: 7,
        nome: "Max",
        raca: "Beagle",
        sexo: "Masculino",
        peso: "12,6kg em Mai de 2025",
        idade: "2 anos e 11 meses",
        fertil: "Fértil",
        status: "Animal Internado",
        caracteristicas: ["Muito ativo", "Caçador", "Sociável"],
        dono: "Bruno",
        endereco: "Vila Operária, Teresina-PI",
        telefone: "(86) 98122-6643",
        foto: "/foto7.png"
    },
    {
        id: 8,
        nome: "Luna",
        raca: "Vira-lata",
        sexo: "Feminino",
        peso: "19,8kg em Jun de 2025",
        idade: "1 ano e 10 meses",
        fertil: "Fértil",
        status: "Alta Hoje",
        caracteristicas: ["Muito dócil", "Vive em casa"],
        dono: "Helena",
        endereco: "Parque Poti, Teresina-PI",
        telefone: "(86) 98844-2012",
        foto: "/foto8.png"
    },
    {
        id: 9,
        nome: "Shadow",
        raca: "Labrador",
        sexo: "Masculino",
        peso: "34,5kg em Mar de 2025",
        idade: "3 anos e 2 meses",
        fertil: "Fértil",
        status: "Animal Internado",
        caracteristicas: ["Brincalhão", "Energia alta", "Excelente com crianças"],
        dono: "Rafael",
        endereco: "Morada Nova, Teresina-PI",
        telefone: "(86) 98755-4412",
        foto: "/foto9.png"
    }
];
