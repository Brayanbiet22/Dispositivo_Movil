import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function Resultado() {
  const router = useRouter();
  const { nombre, documento, ciudad, mesa } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Información registrada</Text>
      <Text style={styles.subtitulo}>
        Datos recibidos desde el formulario.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.valor}>{nombre}</Text>

        <Text style={styles.label}>Documento</Text>
        <Text style={styles.valor}>{documento}</Text>

        <Text style={styles.label}>Ciudad</Text>
        <Text style={styles.valor}>{ciudad}</Text>

        <Text style={styles.label}>Mesa de votación</Text>
        <Text style={styles.valor}>{mesa}</Text>
      </View>

      <Pressable
        style={styles.boton}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.botonTexto}>Volver al inicio</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FC',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#17365D',
    textAlign: 'center',
  },

  subtitulo: {
    color: '#52616B',
    textAlign: 'center',
    marginBottom: 22,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D0D9E6',
    marginBottom: 18,
    elevation: 3,
  },

  label: {
    color: '#174EA6',
    fontSize: 13,
    marginTop: 8,
  },

  valor: {
    color: '#17365D',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 8,
  },

  boton: {
    backgroundColor: '#174EA6',
    padding: 14,
    borderRadius: 13,
    alignItems: 'center',
  },

  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
});
