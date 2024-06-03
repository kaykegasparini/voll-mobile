import { VStack, Box, ScrollView } from "native-base";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";
import { useState } from "react";

interface Especialista {
  nome: string;
  imagem: string;
  especialidade: string;
  id: string;
}

export default function Explorar({ navigation }) {
  const [estado, setEstado] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [resultadoBusca, setResultadoBusca] = useState([]);

  async function buscar() {
    if (!estado || !especialidade) return null;
    const resultado = await buscarEspecialistaPorEstado(estado, especialidade);
    if (resultado) {
      setResultadoBusca(resultado);
      console.log(resultadoBusca);
    } else {
      console.log("Nada Encontrado");
    }
  }

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack
        flex={1}
        alignItems="flex-start"
        justifyContent="flex-start"
        p={5}
      >
        <Box
          w="100%"
          borderRadius="lg"
          p={3}
          mt={5}
          shadow="1"
          borderRightRadius="md"
        >
          <EntradaTexto
            placeholder="Digite a especialidade"
            value={especialidade}
            onChangeText={setEspecialidade}
          />
          <EntradaTexto
            placeholder="Digite sua localização"
            value={estado}
            onChangeText={setEstado}
          />
          <Botao onPress={buscar} mt={3} mb={3}>
            Buscar
          </Botao>
        </Box>

        <Titulo color="blue.500" alignSelf="center">
          Resultado da Busca
        </Titulo>
        {resultadoBusca?.map((especialista: Especialista, index) => (
          <VStack
            flex={1}
            w="100%"
            alignItems="flex-start"
            bgColor="white"
            key={index}
          >
            <CardConsulta
              especialidade={especialista.especialidade}
              foto={especialista.imagem}
              nome={especialista.nome}
              onPress={() =>
                  navigation.navigate("Agendamento", {
                  especialistaId: especialista.id,
                })
              }
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}
