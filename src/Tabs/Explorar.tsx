import { VStack, Text, Box, ScrollView, Divider } from "native-base";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { Titulo } from "../componentes/Titulo";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Principal() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} padding={5} alignItems={"center"}>
        <Box w={"100%"} bg={"white"} p={"3"} borderRadius={"lg"} shadow={"2"} mt={"5"} borderRightRadius={"lg"}>
            <EntradaTexto placeholder="Digite a especialidade"></EntradaTexto>
            <EntradaTexto placeholder="Digite sua localização"></EntradaTexto>
          <Botao mt={"3"} mb={"3"}>Buscar</Botao>
        </Box>

        <Titulo color="blue.500" alignSelf={"center"} mb={"5"}>Resultado da Busca</Titulo>
        {[1, 2, 3].map((_, index) => (
        <VStack w={"100%"} alignItems={"flex-start"} borderRadius={"lg"} padding={3} key={index}>
            <CardConsulta
                especialidade="Cardiologia"
                foto="https://github.com/kaykegasparini.png"
                nome="Dr.Roberto"
            />
        </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}
