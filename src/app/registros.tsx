import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";
import { supabase } from "../lib/supabase";

export default function Registros() {
  // Estado con la lista de votantes consultados
  const [registros, setRegistros] = useState<any[]>([]);

  // Estado para controlar la carga de datos
  const [cargando, setCargando] = useState(true);

  // Función para consultar todos los votantes en Supabase
  const cargarRegistros = async () => {
    // Activar indicador de carga
    setCargando(true);

    // Consultar todos los registros de la tabla votantes
    // ordenados del más reciente al más antiguo
    const { data, error } = await supabase
      .from("votantes")
      .select("*")
      .order("id", { ascending: false });

    // Comprobar si Supabase devolvió un error
    if (error) {
      alert(error.message);
      setCargando(false);
      return;
    }

    // Guardar los registros en el estado
    setRegistros(data || []);
    setCargando(false);
  };

  // Ejecutar la consulta al abrir la pantalla
  useEffect(() => {
    cargarRegistros();
  }, []);

  // Mientras carga, mostrar un indicador
  if (cargando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#174EA6" />
        <Text style={styles.cargandoTexto}>Consultando Supabase...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* ENCABEZADO */}
      <View style={styles.encabezado}>
        <View style={styles.iconoContainer}>
          <Text style={styles.iconoVoto}>🗳️</Text>
        </View>

        <Text style={styles.titulo}>Votantes registrados</Text>

        <Text style={styles.subtitulo}>
          Personas que han registrado su voto.
        </Text>
      </View>

      {/* LISTA DE VOTANTES */}
      <FlatList
        data={registros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.detalle}>Documento: {item.documento}</Text>
            <Text style={styles.detalle}>Ciudad: {item.ciudad}</Text>
            <Text style={styles.detalle}>Mesa: {item.mesa}</Text>
            <Text style={styles.detalle}>Candidato: {item.candidato}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>Aún no hay votantes registrados.</Text>
        }
      />

      {/* BOTÓN PARA VOLVER AL INICIO */}
      <Pressable
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado,
        ]}
        onPress={() => router.push("/")}
      >
        <Text style={styles.botonTexto}>Volver al inicio</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F6FC",
    padding: 20,
  },

  centro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F6FC",
  },

  cargandoTexto: {
    marginTop: 10,
    color: "#52616B",
  },

  encabezado: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
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
    fontSize: 26,
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
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#D0D9E6",
    elevation: 2,
  },

  nombre: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#17365D",
    marginBottom: 5,
  },

  detalle: {
    color: "#52616B",
    fontSize: 14,
    marginTop: 2,
  },

  vacio: {
    textAlign: "center",
    color: "#7A8793",
    marginTop: 30,
  },

  boton: {
    backgroundColor: "#174EA6",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
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
});