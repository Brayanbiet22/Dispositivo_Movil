import { useLocalSearchParams, useRouter } from "expo-router";
import type { Href } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Resultado() {
  const router = useRouter();

  // Recuperar los parámetros enviados desde el formulario
  const params = useLocalSearchParams();

  // Valores por defecto si algún parámetro no llega
  const id = params.id ?? "—";
  const nombre = params.nombre ?? "No especificado";
  const documento = params.documento ?? "No especificado";
  const ciudad = params.ciudad ?? "No especificado";
  const mesa = params.mesa ?? "No especificado";
  const candidato = params.candidato ?? "No especificado";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* ENCABEZADO */}
      <View style={styles.encabezado}>
        <View style={styles.iconoContainer}>
          <Text style={styles.iconoVoto}>🗳️</Text>
        </View>

        <Text style={styles.titulo}>Datos registrados</Text>

        <Text style={styles.subtitulo}>
          Tu información fue guardada en Supabase correctamente.
        </Text>
      </View>

      {/* TARJETA CON LOS DATOS DEL REGISTRO */}
      <View style={styles.card}>
        <Text style={styles.etiqueta}>Registro #{id}</Text>

        <View style={styles.fila}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.valor}>{nombre}</Text>
        </View>

        <View style={styles.fila}>
          <Text style={styles.label}>Documento</Text>
          <Text style={styles.valor}>{documento}</Text>
        </View>

        <View style={styles.fila}>
          <Text style={styles.label}>Ciudad</Text>
          <Text style={styles.valor}>{ciudad}</Text>
        </View>

        <View style={styles.fila}>
          <Text style={styles.label}>Mesa de votación</Text>
          <Text style={styles.valor}>{mesa}</Text>
        </View>

        <View style={styles.fila}>
          <Text style={styles.label}>Candidato</Text>
          <Text style={styles.valor}>{candidato}</Text>
        </View>
      </View>

      {/* BOTÓN PARA VER TODOS LOS REGISTROS */}
      <Pressable
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado,
        ]}
        onPress={() => router.push("/registros" as Href)}
      >
        <Text style={styles.botonTexto}>Ver votantes registrados</Text>
      </Pressable>

      {/* BOTÓN PARA VOLVER AL INICIO */}
      <Pressable
        style={({ pressed }) => [
          styles.botonSecundario,
          pressed && styles.botonSecundarioPresionado,
        ]}
        onPress={() => router.push("/")}
      >
        <Text style={styles.botonSecundarioTexto}>Volver al inicio</Text>
      </Pressable>

      {/* PIE */}
      <Text style={styles.footer}>Votaciones Electorales · Desarrollo Móvil</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F2F6FC",
    padding: 20,
  },

  encabezado: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  iconoContainer: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: "#E4EDF9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  iconoVoto: {
    fontSize: 40,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#17365D",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 14,
    color: "#52616B",
    textAlign: "center",
    marginTop: 7,
    lineHeight: 21,
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#D0D9E6",
    elevation: 4,
    marginBottom: 20,
  },

  etiqueta: {
    fontSize: 13,
    color: "#7A8793",
    marginBottom: 12,
  },

  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E6EF",
  },

  label: {
    color: "#7A8793",
    fontSize: 14,
  },

  valor: {
    color: "#17365D",
    fontSize: 16,
    fontWeight: "bold",
  },

  boton: {
    backgroundColor: "#174EA6",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
  },

  botonPresionado: {
    opacity: 0.85,
  },

  botonTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },

  botonSecundario: {
    borderWidth: 1,
    borderColor: "#174EA6",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  botonSecundarioPresionado: {
    backgroundColor: "#E4EDF9",
  },

  botonSecundarioTexto: {
    color: "#174EA6",
    fontWeight: "bold",
    fontSize: 15,
  },

  footer: {
    textAlign: "center",
    color: "#7A8793",
    fontSize: 12,
    marginTop: 24,
    marginBottom: 10,
  },
});
