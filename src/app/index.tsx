import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Encabezado */}
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>
          VOTACIONES ELECTORALES
        </Text>

        <Text style={styles.subtitulo}>
          Sistema de Votación
        </Text>
      </View>

      {/* Contenido principal */}
      <View style={styles.contenido}>

        <Text style={styles.bienvenida}>
          Bienvenido
        </Text>

        <Text style={styles.descripcion}>
          Participa en el proceso electoral
          de manera segura y sencilla.
        </Text>

        {/* Imagen */}
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQiCeEAcsV2z0eVK0EYAeLk7_O8VwIEOQjPtjO5qWEbHNstxaUPyWEDE&s=10',
          }}
          style={styles.imagenVotaciones}
        />

        {/* Botón */}
        <Pressable
          style={styles.boton}
          onPress={() => alert('¡Botón presionado!')}
        >
          <Text style={styles.textoBoton}>
            INICIAR VOTACIÓN
          </Text>
        </Pressable>

      </View>

      {/* Pie de página */}
      <Text style={styles.pie}>
        Ingeniería de Sistemas
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2F6FC',
  },

  encabezado: {
    backgroundColor: '#174EA6',
    paddingTop: 55,
    paddingBottom: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    color: '#D9E8FF',
    fontSize: 16,
    marginTop: 6,
  },

  contenido: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  bienvenida: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#17365D',
    marginBottom: 10,
  },

  descripcion: {
    fontSize: 16,
    color: '#52616B',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },

  imagenVotaciones: {
    width: 220,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 25,
  },

  boton: {
    backgroundColor: '#174EA6',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 12,
    elevation: 5,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  pie: {
    textAlign: 'center',
    color: '#7A8793',
    fontSize: 14,
    paddingBottom: 20,
  },

});