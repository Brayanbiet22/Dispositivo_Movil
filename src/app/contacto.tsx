import { useRouter } from 'expo-router';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function Contacto() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Votaciones Electorales</Text>
      <Text style={styles.subtitulo}>Contáctanos</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Mesa electoral</Text>
        <Text style={styles.texto}>Colegio Electoral</Text>

        <Text style={styles.label}>Ciudad</Text>
        <Text style={styles.texto}>Pasto</Text>

        <Text style={styles.label}>Correo</Text>
        <Text style={styles.texto}>contacto@votaciones.com</Text>

        <Text style={styles.label}>Horario</Text>
        <Text style={styles.texto}>Lunes a sábado · 8am - 6pm</Text>
      </View>

      <Pressable
        style={styles.boton}
        onPress={() => router.back()}
      >
        <Text style={styles.botonTexto}>Regresar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FC',
    justifyContent: 'center',
    padding: 30,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#17365D',
  },

  subtitulo: {
    fontSize: 18,
    color: '#52616B',
    marginTop: 5,
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D0D9E6',
  },

  label: {
    color: '#174EA6',
    fontSize: 12,
    marginTop: 10,
  },

  texto: {
    color: '#17365D',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 3,
  },

  boton: {
    backgroundColor: '#174EA6',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 25,
  },

  botonTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
