import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { supabase } from "../lib/supabase";

export default function Formulario() {
  const router = useRouter();

  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [mesa, setMesa] = useState("");
  const [candidato, setCandidato] = useState("");

  // Estado para controlar el proceso de guardado
  const [guardando, setGuardando] = useState(false);

  // Función para validar que el documento sea solo números
  const validarDocumento = (doc: string) => {
    return /^\d+$/.test(doc);
  };

  // Función para guardar los datos en Supabase
  const guardar = async () => {
    // Validar campos vacíos
    if (
      !nombre.trim() ||
      !documento.trim() ||
      !ciudad.trim() ||
      !mesa.trim() ||
      !candidato.trim()
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Validar documento (solo números)
    if (!validarDocumento(documento)) {
      alert("El documento debe contener solamente números");
      return;
    }

    // Validar longitud mínima del documento
    if (documento.length < 6) {
      alert("Ingrese un número de documento válido");
      return;
    }

    try {
      // Activar indicador de carga
      setGuardando(true);

      // Guardar registro en Supabase (tabla votantes)
      const { data, error } = await supabase
        .from("votantes")
        .insert([
          {
            nombre: nombre.trim(),
            documento: documento.trim(),
            ciudad: ciudad.trim(),
            mesa: mesa.trim(),
            candidato: candidato.trim(),
          },
        ])
        .select();

      // Comprobar si Supabase devolvió un error
      if (error) {
        console.log("ERROR SUPABASE:", error);
        alert("Error al guardar: " + error.message);
        return;
      }

      // Obtener el registro que acaba de crear Supabase
      const registro = data?.[0];

      if (!registro) {
        alert("No fue posible recuperar el registro guardado");
        return;
      }

      console.log("REGISTRO GUARDADO:", registro);

      // Navegar a la pantalla resultado
      // enviando los datos guardados en Supabase
      router.push({
        pathname: "/resultado",
        params: {
          id: String(registro.id),
          nombre: registro.nombre,
          documento: registro.documento,
          ciudad: registro.ciudad,
          mesa: registro.mesa,
          candidato: registro.candidato,
        },
      });

      // Limpiar formulario
      setNombre("");
      setDocumento("");
      setCiudad("");
      setMesa("");
      setCandidato("");
    } catch (error) {
      console.log("ERROR INESPERADO:", error);
      alert("No fue posible guardar la información");
    } finally {
      // Desactivar indicador de carga
      setGuardando(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* ENCABEZADO */}
      <View style={styles.encabezado}>
        <View style={styles.iconoContainer}>
          <Text style={styles.iconoVoto}>🗳️</Text>
        </View>

        <Text style={styles.titulo}>Votaciones Electorales</Text>

        <Text style={styles.subtitulo}>
          Registra tus datos para emitir tu voto de manera segura.
        </Text>
      </View>

      {/* FORMULARIO */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Datos del votante</Text>

        <Text style={styles.cardDescripcion}>
          Completa todos los campos antes de guardar la información.
        </Text>

        {/* NOMBRE */}
        <Text style={styles.label}>Nombre completo</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
          placeholderTextColor="#A58B82"
          value={nombre}
          onChangeText={setNombre}
          autoCapitalize="words"
        />

        {/* DOCUMENTO */}
        <Text style={styles.label}>Documento</Text>

        <TextInput
          style={styles.input}
          placeholder="Ej: 1234567890"
          placeholderTextColor="#A58B82"
          value={documento}
          onChangeText={setDocumento}
          keyboardType="numeric"
          maxLength={15}
        />

        {/* CIUDAD */}
        <Text style={styles.label}>Ciudad</Text>

        <TextInput
          style={styles.input}
          placeholder="Ej: Cali"
          placeholderTextColor="#A58B82"
          value={ciudad}
          onChangeText={setCiudad}
          autoCapitalize="words"
        />

        {/* MESA */}
        <Text style={styles.label}>Mesa de votación</Text>

        <TextInput
          style={styles.input}
          placeholder="Ej: Mesa 12"
          placeholderTextColor="#A58B82"
          value={mesa}
          onChangeText={setMesa}
        />

        {/* CANDIDATO */}
        <Text style={styles.label}>Candidato</Text>

        <TextInput
          style={styles.input}
          placeholder="Ej: Candidato A"
          placeholderTextColor="#A58B82"
          value={candidato}
          onChangeText={setCandidato}
          autoCapitalize="words"
        />

        {/* BOTÓN GUARDAR */}
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
            guardando && styles.botonDesactivado,
          ]}
          onPress={guardar}
          disabled={guardando}
        >
          {guardando ? (
            <View style={styles.cargandoContainer}>
              <ActivityIndicator color="#FFFFFF" />
              <Text style={styles.botonTexto}>Guardando...</Text>
            </View>
          ) : (
            <Text style={styles.botonTexto}>Guardar información</Text>
          )}
        </Pressable>
      </View>

      {/* INFORMACIÓN */}
      <View style={styles.infoBox}>
        <View style={styles.infoIcono}>
          <Text style={styles.infoEmoji}>🗳️</Text>
        </View>

        <View style={styles.infoContenido}>
          <Text style={styles.infoTitulo}>Votación segura</Text>

          <Text style={styles.infoTexto}>
            La información registrada será almacenada en nuestra base de datos
            utilizando Supabase.
          </Text>
        </View>
      </View>

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
  },

  cardTitulo: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#17365D",
    marginBottom: 4,
  },

  cardDescripcion: {
    color: "#52616B",
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 20,
  },

  label: {
    color: "#17365D",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 7,
  },

  input: {
    backgroundColor: "#F8FAFD",
    borderWidth: 1,
    borderColor: "#D0D9E6",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginBottom: 17,
    color: "#17365D",
    fontSize: 15,
  },

  boton: {
    backgroundColor: "#174EA6",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 6,
    elevation: 2,
  },

  botonPresionado: {
    opacity: 0.85,
  },

  botonDesactivado: {
    opacity: 0.65,
  },

  botonTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },

  cargandoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  infoBox: {
    backgroundColor: "#E4EDF9",
    padding: 17,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  infoIcono: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  infoEmoji: {
    fontSize: 23,
  },

  infoContenido: {
    flex: 1,
  },

  infoTitulo: {
    color: "#17365D",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },

  infoTexto: {
    color: "#52616B",
    fontSize: 13,
    lineHeight: 19,
  },

  footer: {
    textAlign: "center",
    color: "#7A8793",
    fontSize: 12,
    marginTop: 24,
    marginBottom: 10,
  },
});