import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';

const imagenes = [
  {
    id: '1',
    titulo: 'Urna de votación',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQiCeEAcsV2z0eVK0EYAeLk7_O8VwIEOQjPtjO5qWEbHNstxaUPyWEDE&s=10',
  },
  {
    id: '2',
    titulo: 'Tarjetón electoral',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQiCeEAcsV2z0eVK0EYAeLk7_O8VwIEOQjPtjO5qWEbHNstxaUPyWEDE&s=10',
  },
  {
    id: '3',
    titulo: 'Votantes en fila',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQiCeEAcsV2z0eVK0EYAeLk7_O8VwIEOQjPtjO5qWEbHNstxaUPyWEDE&s=10',
  },
];

export default function Galeria() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Galería</Text>
      <Text style={styles.descripcion}>
        Imágenes del proceso electoral.
      </Text>

      {imagenes.map((img) => (
        <View key={img.id} style={styles.card}>
          <Image source={{ uri: img.url }} style={styles.imagen} />
          <Text style={styles.tituloImagen}>{img.titulo}</Text>
        </View>
      ))}

      <Pressable
        style={styles.regresar}
        onPress={() => router.back()}
      >
        <Text style={styles.regresarTexto}>Regresar al inicio</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F2F6FC',
    padding: 22,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#17365D',
  },

  descripcion: {
    color: '#52616B',
    marginTop: 5,
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D0D9E6',
  },

  imagen: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },

  tituloImagen: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#17365D',
    padding: 15,
  },

  regresar: {
    marginTop: 10,
    alignItems: 'center',
  },

  regresarTexto: {
    color: '#174EA6',
    fontWeight: 'bold',
  },
});


