import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Switch,
  TextInput,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {

  // ==============================
  // ESTADOS
  // ==============================

  const [nombre, setNombre] = useState('');
  const [candidato, setCandidato] = useState('');
  const [confirmado, setConfirmado] = useState(false);
  const [resultado, setResultado] = useState('');
  const [procesando, setProcesando] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  // ==============================
  // FUNCION PARA REALIZAR EL VOTO
  // ==============================

  const realizarVoto = () => {

    // Validamos que los campos tengan información
    if (
      nombre.trim() === '' ||
      candidato.trim() === ''
    ) {
      setResultado('Se deben llenar todos los campos.');
      return;
    }

    // Validamos que el usuario confirme
    if (!confirmado) {
      setResultado(
        'Debes confirmar tu participación antes de votar.'
      );
      return;
    }

    // Mostramos el indicador de carga
    setProcesando(true);
    setResultado('');

    // Simulación del procesamiento del voto
    setTimeout(() => {

      setProcesando(false);

      setResultado(
        `Votante: ${nombre}\nCandidato: ${candidato}`
      );

      // Abrimos el modal
      setModalVisible(true);

    }, 1200);
  };


  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }
    >

      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contenido}
      >

        {/* ==============================
            ENCABEZADO
        ============================== */}

        <View style={styles.encabezado}>

          <Text style={styles.icono}>
            🗳️
          </Text>

          <Text style={styles.titulo}>
            VOTACIONES ELECTORALES
          </Text>

          <Text style={styles.subtitulo}>
            Sistema de Votación
          </Text>

        </View>


        {/* ==============================
            IMAGEN
        ============================== */}

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQiCeEAcsV2z0eVK0EYAeLk7_O8VwIEOQjPtjO5qWEbHNstxaUPyWEDE&s=10',
          }}
          style={styles.imagenVotaciones}
        />


        {/* ==============================
            MENSAJE
        ============================== */}

        <Text style={styles.bienvenida}>
          Bienvenido
        </Text>

        <Text style={styles.descripcion}>
          Participa en el proceso electoral
          de manera segura y sencilla.
        </Text>


        {/* ==============================
            CAMPO NOMBRE
        ============================== */}

        <Text style={styles.label}>
          Nombre del votante
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          placeholderTextColor="#8A8A8A"
          value={nombre}
          onChangeText={setNombre}
        />


        {/* ==============================
            CAMPO CANDIDATO
        ============================== */}

        <Text style={styles.label}>
          Candidato
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe el candidato"
          placeholderTextColor="#8A8A8A"
          value={candidato}
          onChangeText={setCandidato}
        />


        {/* ==============================
            SWITCH
        ============================== */}

        <View style={styles.filaSwitch}>

          <View style={styles.switchTexto}>

            <Text style={styles.switchTitulo}>
              Confirmar participación
            </Text>

            <Text style={styles.switchDescripcion}>
              Confirmo que deseo participar en la votación.
            </Text>

          </View>

          <Switch
            value={confirmado}
            onValueChange={setConfirmado}
          />

        </View>


        {/* ==============================
            BOTÓN
        ============================== */}

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
          ]}
          onPress={realizarVoto}
        >

          <Text style={styles.textoBoton}>
            EMITIR VOTO
          </Text>

        </Pressable>


        {/* ==============================
            ACTIVITY INDICATOR
        ============================== */}

        {procesando && (

          <View style={styles.cargando}>

            <ActivityIndicator
              size="large"
            />

            <Text style={styles.cargandoTexto}>
              Procesando voto...
            </Text>

          </View>

        )}


        {/* ==============================
            RESULTADO
        ============================== */}

        {resultado !== '' && (

          <View style={styles.resultado}>

            <Text style={styles.resultadoTitulo}>
              Información
            </Text>

            <Text style={styles.resultadoTexto}>
              {resultado}
            </Text>

          </View>

        )}


        {/* ==============================
            PIE DE PAGINA
        ============================== */}

        <Text style={styles.pie}>
          Ingeniería de Sistemas
        </Text>

        <Text style={styles.autor}>
          Brayan Quiroz
        </Text>

      </ScrollView>


      {/* ==============================
          MODAL
      ============================== */}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() =>
          setModalVisible(false)
        }
      >

        <View style={styles.modalFondo}>

          <View style={styles.modalContenido}>

            <Text style={styles.modalIcono}>
              🗳️
            </Text>

            <Text style={styles.modalTitulo}>
              ¡Voto registrado!
            </Text>

            <Text style={styles.modalTexto}>
              Gracias {nombre}.
            </Text>

            <Text style={styles.modalTexto}>
              Tu participación ha sido registrada correctamente.
            </Text>

            <Pressable
              style={styles.modalBoton}
              onPress={() =>
                setModalVisible(false)
              }
            >

              <Text style={styles.modalBotonTexto}>
                Entendido
              </Text>

            </Pressable>

          </View>

        </View>

      </Modal>

    </KeyboardAvoidingView>
  );
}


// =====================================================
// ESTILOS
// =====================================================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2F6FC',
  },

  contenido: {
    padding: 22,
    paddingTop: 45,
    paddingBottom: 40,
  },


  // ==============================
  // ENCABEZADO
  // ==============================

  encabezado: {
    backgroundColor: '#174EA6',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 25,
  },

  icono: {
    fontSize: 42,
    marginBottom: 5,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 15,
    color: '#D9E8FF',
    marginTop: 5,
  },


  // ==============================
  // IMAGEN
  // ==============================

  imagenVotaciones: {
    width: '100%',
    height: 190,
    resizeMode: 'contain',
    borderRadius: 20,
    marginBottom: 20,
  },


  // ==============================
  // MENSAJE
  // ==============================

  bienvenida: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#17365D',
    textAlign: 'center',
  },

  descripcion: {
    fontSize: 15,
    color: '#52616B',
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 8,
    marginBottom: 25,
  },


  // ==============================
  // LABELS
  // ==============================

  label: {
    color: '#17365D',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },


  // ==============================
  // INPUTS
  // ==============================

  input: {
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D0D9E6',
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 20,
  },


  // ==============================
  // SWITCH
  // ==============================

  filaSwitch: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  switchTexto: {
    flex: 1,
    paddingRight: 10,
  },

  switchTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#17365D',
  },

  switchDescripcion: {
    color: '#6B7785',
    fontSize: 12,
    marginTop: 4,
  },


  // ==============================
  // BOTÓN
  // ==============================

  boton: {
    height: 56,
    backgroundColor: '#174EA6',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  botonPresionado: {
    backgroundColor: '#0D3B7A',
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },


  // ==============================
  // CARGANDO
  // ==============================

  cargando: {
    alignItems: 'center',
    marginTop: 25,
  },

  cargandoTexto: {
    color: '#174EA6',
    marginTop: 10,
    fontSize: 14,
  },


  // ==============================
  // RESULTADO
  // ==============================

  resultado: {
    backgroundColor: '#E4EDF9',
    borderRadius: 18,
    padding: 20,
    marginTop: 25,
  },

  resultadoTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#17365D',
    marginBottom: 12,
  },

  resultadoTexto: {
    fontSize: 15,
    color: '#40566F',
    lineHeight: 25,
  },


  // ==============================
  // PIE DE PAGINA
  // ==============================

  pie: {
    textAlign: 'center',
    color: '#7A8793',
    fontSize: 14,
    marginTop: 35,
  },

  autor: {
    textAlign: 'center',
    color: '#7A8793',
    fontSize: 13,
    marginTop: 4,
  },


  // ==============================
  // MODAL
  // ==============================

  modalFondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  modalContenido: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
  },

  modalIcono: {
    fontSize: 55,
  },

  modalTitulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#17365D',
    marginTop: 10,
    marginBottom: 12,
  },

  modalTexto: {
    color: '#52616B',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 3,
  },

  modalBoton: {
    width: '100%',
    backgroundColor: '#174EA6',
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 25,
  },

  modalBotonTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

});