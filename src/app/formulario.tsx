import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  ScrollView,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

export default function Formulario() {
  const router = useRouter();

  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [mesa, setMesa] = useState('');

  const enviar = () => {
    if (!nombre || !documento || !ciudad || !mesa) {
      alert('Todos los campos son obligatorios');
      return;
    }

    router.push({
      pathname: '/resultado',
      params: {
        nombre,
        documento,
        ciudad,
        mesa,
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro del votante</Text>
      <Text style={styles.subtitulo}>
        Completa la información para continuar.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Documento</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de documento"
          keyboardType="numeric"
          value={documento}
          onChangeText={setDocumento}
        />

        <Text style={styles.label}>Ciudad</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Cali"
          value={ciudad}
          onChangeText={setCiudad}
        />

        <Text style={styles.label}>Mesa de votación</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Mesa 12"
          value={mesa}
          onChangeText={setMesa}
        />

        <Pressable style={styles.boton} onPress={enviar}>
          <Text style={styles.botonTexto}>Enviar información</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F2F6FC',
    padding: 20,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#17365D',
    textAlign: 'center',
  },

  subtitulo: {
    color: '#52616B',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D0D9E6',
    elevation: 3,
  },

  label: {
    color: '#17365D',
    fontWeight: '600',
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#F8FAFD',
    borderWidth: 1,
    borderColor: '#D0D9E6',
    borderRadius: 13,
    padding: 12,
    marginBottom: 14,
  },

  boton: {
    backgroundColor: '#174EA6',
    paddingVertical: 14,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 4,
  },

  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
});
