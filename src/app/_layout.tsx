import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <>
      <AnimatedSplashOverlay />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: 'Votaciones Electorales' }}
        />
        <Stack.Screen
          name="formulario"
          options={{ title: 'Registro del votante' }}
        />
        <Stack.Screen
          name="resultado"
          options={{ title: 'Datos registrados' }}
        />
        <Stack.Screen
          name="imagenes"
          options={{ title: 'Galería' }}
        />
        <Stack.Screen
          name="contacto"
          options={{ title: 'Contacto' }}
        />
        <Stack.Screen
        name="registros"
        options={{ title: "Votantes registrados" }}
        />
      </Stack>
    </>
  );
}




//Crea la pantalla en el navegador en este caso consiste en el index
//Stack contiene todas las pantallas de la aplicacion
