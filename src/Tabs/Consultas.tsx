import { VStack, Text } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Consultas() {
  return (
    <VStack padding={5}>
      <Text>Consultas</Text>
      <CardConsulta
        nome="Dr. Roberto"
        especialidade="Urologista"
        foto='https://github.com/kaykegasparini.png'
        data="20/06/2024"
        foiAtendido
        foiAgendado
      />
    </VStack>
  );
}
