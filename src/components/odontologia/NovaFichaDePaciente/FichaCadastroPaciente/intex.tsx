import { ContainerFicha, LinhaInputs } from "./style";


import TituloDaPagina from "../TituloDaPagina";
import InputPadrao from "../InputPadrao";
import RadioGroup from "../RadioGroup";
import TextAreaPadrao from "../TextAreaPadrao";
import BotaoEnviar from "../BotaoEnviar";

export default function FichaCadastroPaciente() {
  return (
    <ContainerFicha>
      <TituloDaPagina titulo="Ficha de cadastro de pacientes" />

      <LinhaInputs>
        <InputPadrao label="Nome do Animal" />
      </LinhaInputs>

      <LinhaInputs colunas={4}>
        <InputPadrao label="Raça" />
        <InputPadrao label="Idade" />
        <InputPadrao label="Peso" />
        <InputPadrao label="Data da pesagem" type="date" />
      </LinhaInputs>

      <LinhaInputs colunas={3}>
        <InputPadrao label="Telefone" mask="telefone" />
        <InputPadrao label="Nº Prontuário" />
        <InputPadrao label="Data início dos sintomas" type="date" />
      </LinhaInputs>

      <LinhaInputs colunas={2}>
        <InputPadrao label="Nome do Tutor" />
        <InputPadrao label="CPF do Tutor" mask="cpf" />
      </LinhaInputs>

      <LinhaInputs colunas={4}>
        <InputPadrao label="Bairro" />
        <InputPadrao label="Cidade" />
        <InputPadrao label="Estado" />
        <InputPadrao label="CEP" mask="cep" />
      </LinhaInputs>

      <LinhaInputs colunas={2}>
        <RadioGroup titulo="Sexo" opcoes={["Masculino", "Feminino"]} />
        <RadioGroup titulo="Espécie" opcoes={["Canino", "Felino"]} />
      </LinhaInputs>

      <LinhaInputs colunas={2}>
        <RadioGroup titulo="Castrado" opcoes={["Sim", "Não"]} />
        <RadioGroup titulo="Parasitas" opcoes={["Sim", "Não"]} />
      </LinhaInputs>

      <TextAreaPadrao label="Medicamentos" linhas={3} />
      <TextAreaPadrao label="Queixa Principal" linhas={4} />

      <BotaoEnviar texto="Enviar Dados" />
    </ContainerFicha>
  );
}
