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
import { router } from 'expo-router';

export default function Inicio() {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* PORTADA PRINCIPAL */}
      <View style={styles.hero}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQiCeEAcsV2z0eVK0EYAeLk7_O8VwIEOQjPtjO5qWEbHNstxaUPyWEDE&s=10',
          }}
          style={styles.imagenHero}
        />
        <View style={styles.overlay}>
          <Text style={styles.etiqueta}>VOTACIONES 2026</Text>
          <Text style={styles.titulo}>Votaciones Electorales</Text>
          <Text style={styles.subtitulo}>
            Participa de manera segura y sencilla en el proceso electoral.
          </Text>
        </View>
      </View>

      {/* BIENVENIDA */}
      <View style={styles.saludoBox}>
        <View>
          <Text style={styles.saludoTitulo}>Hola, votante</Text>
          <Text style={styles.saludoTexto}>¿Qué deseas hacer hoy?</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>🗳️</Text>
        </View>
      </View>

      {/* SECCIÓN DE NAVEGACIÓN */}
      <Text style={styles.seccionTitulo}>Explorar</Text>

      <View style={styles.filaBotones}>

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
          ]}
          onPress={() => router.push('/formulario')}
        >
          <Text style={styles.botonEmoji}>📝</Text>
          <Text style={styles.botonTexto}>Formulario</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
          ]}
          onPress={() => router.push('/imagenes')}
        >
          <Text style={styles.botonEmoji}>🖼️</Text>
          <Text style={styles.botonTexto}>Galería</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
          ]}
          onPress={() => router.push('/contacto')}
        >
          <Text style={styles.botonEmoji}>📍</Text>
          <Text style={styles.botonTexto}>Contacto</Text>
        </Pressable>

      </View>

      {/* PIE DE PÁGINA */}
      <Text style={styles.footer}>
        Votaciones Electorales · Ingeniería de Sistemas
      </Text>
      <Text style={styles.footer}>
        Brayan Quiroz
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F2F6FC',
    padding: 18,
  },

  hero: {
    height: 280,
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 6,
  },

  imagenHero: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 22,
    backgroundColor: 'rgba(23, 62, 109, 0.78)',
  },

  etiqueta: {
    color: '#D9E8FF',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.8,
    marginBottom: 6,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  subtitulo: {
    color: '#E4EDF9',
    fontSize: 14,
    lineHeight: 21,
  },

  saludoBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },

  saludoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#17365D',
  },

  saludoTexto: {
    marginTop: 3,
    color: '#52616B',
    fontSize: 14,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E4EDF9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarTexto: {
    fontSize: 24,
  },

  seccionTitulo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#17365D',
    marginBottom: 14,
  },

  filaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  boton: {
    flex: 1,
    height: 75,
    backgroundColor: '#174EA6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    elevation: 3,
  },

  botonPresionado: {
    backgroundColor: '#0D3B7A',
  },

  botonEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },

  botonTexto: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  footer: {
    textAlign: 'center',
    color: '#7A8793',
    fontSize: 12,
    marginTop: 24,
    marginBottom: 12,
  },
});
