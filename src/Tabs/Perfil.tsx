import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Principal() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" padding="5">
        <Titulo color="blue.500">Meu Perfil</Titulo>
        <Avatar
          size="xl"
          source={{
            uri: "https://github.com/kaykegasparini.png"
          }}
          mt={5}
        />

        <Titulo color="blue.500">Informações Pessoais</Titulo>
        <Titulo fontSize={"lg"}>Kayke Evandro Gasparini Cremonez</Titulo>
        <Titulo>15/07/2005</Titulo>
        <Titulo>Votuporanga / SP</Titulo>

        <Divider marginTop={5}/>

        <Titulo color="blue.500">Histórico Médico</Titulo>
        <Text fontSize={"18"}>Bronquite</Text>
        <Text fontSize={"18"}>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}
