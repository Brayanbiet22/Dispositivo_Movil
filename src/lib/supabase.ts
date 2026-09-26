import "react-native-url-polyfill/auto"; //importa a reac native polyfill para acceder a cualquier enlace de la web
import { createClient } from "@supabase/supabase-js";  //funcion que crea el cliente para conectarse a la base de datos
 
const supabaseUrl = "https://gvudaffaaaihgeigeods.supabase.co"; 
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dWRhZmZhYWFpaGdlaWdlb2RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwMjQwMTcsImV4cCI6MjEwNTYwMDAxN30.icAHd1j7oePWWDmdmYj8X-5Xv7lrcH7G2Eb_dBTj6cI"; 
 
export const supabase = createClient( 
  supabaseUrl, 
  supabaseAnonKey, 
  { 
    auth: { 
      persistSession: false, 
      autoRefreshToken: false, 
      detectSessionInUrl: false, 
    }, 
  } 
); 