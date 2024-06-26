import { NativeBaseProvider, StatusBar } from "native-base";
import { useEffect } from "react";

import { Temas } from "./src/estilos/temas";
import Rotas from "./src/rotas";
import api from "./src/servicos/api";

export default function App() {
  useEffect(() => {
    async function pegarDados(){
      const resultado = await api.get('/paciente')
      console.log(resultado.data)
    }
    pegarDados()
  }, []);
  return (
    <NativeBaseProvider theme={Temas}>
      <StatusBar backgroundColor={Temas.colors.green[500]} />
      <Rotas />
    </NativeBaseProvider>
  );
}
