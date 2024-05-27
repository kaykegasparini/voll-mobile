import { VStack, Text, Image, ScrollView, Box, Divider } from "native-base";
import Logo from "../assets/Logo.png";
import { Titulo } from "../componentes/Titulo";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";

export default function Principal() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} padding={5} alignItems={"flex-start"}>
        <Box flex={1}>
          <Image source={Logo} alt="Login"></Image>
          <Titulo color={"blue.500"}>Boas Vindas!</Titulo>
        </Box>
        <Box
          w={"100%"}
          bg={"white"}
          p={"3"}
          borderRadius={"lg"}
          shadow={"2"}
          mt={"5"}
          borderRightRadius={"lg"}
        >
          <EntradaTexto placeholder="Digite a especialidade"></EntradaTexto>
          <EntradaTexto placeholder="Digite sua localização"></EntradaTexto>
          <Botao mt={"3"} mb={"3"}>
            Buscar
          </Botao>
        </Box>
        <Box>
          <Titulo color={"blue.800"} marginBottom={"5"} textAlign={"center"}>
            Depoimentos
          </Titulo>
          <Text
            textAlign={"flex-start"}
            fontSize={"sm"}
            color={"gray.500"}
            mb={"2"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            feugiat tempus massa vestibulum scelerisque. Vestibulum ac dictum
            nunc, id posuere diam. Vivamus vehicula, leo et molestie eleifend,
            neque eros porttitor nunc, nec ornare urna augue sed dui. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat
            volutpat. Maecenas cursus aliquet nulla ut convallis. Curabitur et
            laoreet neque, ac laoreet justo. Praesent dignissim ut ipsum vitae
            cursus. Donec eu enim fringilla felis consequat molestie. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </Text>
          <Text
            color={"gray.900"}
            fontWeight={"bold"}
            fontSize={"15"}
            textAlign={"center"}
          >
            Júlio, 40 anos, São Paulo/SP.
          </Text>
        </Box>
        <Divider mt={"4"} />
        <Box>
          <Text
            textAlign={"flex-start"}
            fontSize={"sm"}
            color={"gray.500"}
            mb={"2"}
            mt={"2"}
          >
            In sagittis justo eget velit pretium, ornare hendrerit ante
            interdum. Fusce quis justo sit amet lorem pellentesque lacinia
            viverra aliquet purus. Proin interdum velit vitae odio eleifend, in
            accumsan nisi pulvinar. Fusce tincidunt augue sollicitudin urna
            tristique, in lobortis diam venenatis. Duis placerat sed ligula eget
            volutpat. Integer id lorem eu tellus porttitor fringilla et ut
            neque. Phasellus non massa ut nibh pulvinar volutpat id non velit.
          </Text>
          <Text
            color={"gray.900"}
            fontWeight={"bold"}
            fontSize={"15"}
            textAlign={"center"}
          >
            Rogério, 30 anos, Rio de Janeiro/RJ.
          </Text>
        </Box>
        <Divider mt={"4"} />
        <Box>
          <Text
            textAlign={"flex-start"}
            fontSize={"sm"}
            color={"gray.500"}
            mb={"2"}
            mt={"2"}
          >
            Suspendisse facilisis metus sodales, scelerisque ligula a, vehicula
            est. Sed non velit eu nunc congue mollis ut non eros. Vestibulum
            pretium vehicula vulputate. Etiam purus neque, vestibulum eu risus
            ac, porttitor tempor purus. Aliquam efficitur purus quam, sed
            sollicitudin turpis consectetur sit amet. Curabitur ipsum augue,
            dignissim in commodo a, luctus eu felis. Cras rhoncus orci vitae
            libero faucibus, sit amet euismod sem volutpat. Aenean vitae est
            vitae nisi auctor pretium. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Nunc finibus lacinia
            varius. Nulla facilisi.
          </Text>
          <Text
            color={"gray.900"}
            fontWeight={"bold"}
            fontSize={"15"}
            textAlign={"center"}
          >
            Pedro, 37 anos, Pernambuco/PE.
          </Text>
        </Box>
        <Divider mt={"4"} />
        <Box>
          <Text
            textAlign={"flex-start"}
            fontSize={"sm"}
            color={"gray.500"}
            mb={"2"}
            mt={"2"}
          >
            Nullam in nibh sit amet massa feugiat malesuada. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Sed malesuada libero ut viverra
            feugiat. Aliquam dapibus venenatis nisl. Quisque nec nisi at erat
            pharetra vestibulum eget id velit. Vestibulum fringilla interdum
            finibus. Mauris vel massa aliquet, dignissim urna quis, tempor
            magna. Nam congue accumsan justo, eget imperdiet mi ornare ac. Etiam
            sed enim a justo tempor accumsan. In porttitor ligula at turpis
            commodo, varius condimentum eros maximus. Nulla hendrerit neque in
            lacus cursus sodales. Sed eu porttitor tellus, in vulputate leo.
            Vivamus quis quam mauris.
          </Text>
          <Text
            color={"gray.900"}
            fontWeight={"bold"}
            fontSize={"15"}
            textAlign={"center"}
          >
            João, 43 anos, Minas Gerais/MG.
          </Text>
        </Box>
      </VStack>
    </ScrollView>
  );
}
