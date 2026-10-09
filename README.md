# DBT Companion

**Herramientas para el bienestar emocional**

## Descripción
Aplicación móvil educativa sobre habilidades de DBT (Terapia Dialéctico Conductual). Permite consultar habilidades por módulos, llevar un diario de emociones, crear un plan personal de crisis y acceder a recursos de ayuda en Colombia.

## Objetivo
Taller universitario cuyo objetivo es demostrar la integración de **Stack, Tabs y Drawer** con Expo Router, el consumo de una **API externa** y el uso de **almacenamiento local**.

## Tecnologías
React Native · Expo · Expo Router · JavaScript · AsyncStorage · REST API · Quotable API

## API utilizada
**Quotable API** — `GET https://api.quotable.io/quotes/random`.
Se usa en Inicio como "Reflexión del día" (`src/quotesApi.js`, función `getRandomQuote()`). Maneja estados de carga (ActivityIndicator), errores HTTP/red/tiempo agotado y, si falla, muestra una frase local de respaldo, por lo que la app funciona sin la API.

## Cómo instalar
```bash
npm install
npx expo install --fix
```

## Cómo ejecutar
```bash
npx expo start
```
Escanea el código QR con **Expo Go** (el celular y el computador deben estar en la misma red Wi-Fi). Si hay problemas de red: `npx expo start --tunnel`.

## Estructura del proyecto
```
dbtCompany/
├── assets/                      # íconos y splash
├── src/
│   ├── app/                     # Rutas (Expo Router)
│   │   ├── _layout.jsx          # Raíz
│   │   └── (drawer)/
│   │       ├── _layout.jsx      # DRAWER
│   │       ├── (tabs)/
│   │       │   ├── _layout.jsx  # TABS
│   │       │   ├── index.jsx    # Inicio
│   │       │   ├── diario.jsx   # Diario
│   │       │   └── habilidades/
│   │       │       ├── _layout.jsx          # STACK
│   │       │       ├── index.jsx            # Módulos
│   │       │       ├── [module].jsx         # Habilidades del módulo
│   │       │       └── [module]/[skill].jsx # Detalle de habilidad
│   │       ├── plan-crisis.jsx
│   │       ├── recursos.jsx
│   │       └── sobre.jsx
│   ├── componentes.jsx          # AppButton, ModuleCard, SkillCard, QuoteCard, HelpCard, EmotionSelector
│   ├── datos.js                 # Módulos, habilidades y recursos de ayuda
│   ├── quotesApi.js             # Servicio Quotable API
│   ├── almacenamiento.js        # AsyncStorage (diario y plan de crisis)
│   └── tema.js                  # Colores, espaciados, bordes y tamaños de fuente
├── app.json
├── package.json
└── README.md
```

## Cómo se implementó Drawer
`src/app/(drawer)/_layout.jsx` usa `Drawer` de `expo-router/drawer` con un contenido personalizado (`drawerContent`) que lista: Inicio, Habilidades, Diario, Mi plan de crisis, Recursos de ayuda y Sobre la aplicación. Es el nivel principal: contiene las Tabs y las pantallas que no están en ellas.

## Cómo se implementó Tabs
`src/app/(drawer)/(tabs)/_layout.jsx` usa `Tabs` de Expo Router con tres pestañas (Inicio, Habilidades, Diario) con iconos de `@expo/vector-icons` (Ionicons).

## Cómo se implementó Stack
`src/app/(drawer)/(tabs)/habilidades/_layout.jsx` define un `Stack` propio:
`Habilidades → módulo → habilidad`. Se navega con `router.push({ pathname, params })`, se leen los parámetros con `useLocalSearchParams` y se regresa con `router.back()`.
La habilidad vive en `[module]/[skill].jsx` para que la ruta no sea ambigua con `[module].jsx`.

## Cómo se utiliza AsyncStorage
- Diario: clave `dbt_diary_entries` (`saveDiaryEntry`, `getDiaryEntries`, `deleteDiaryEntry`).
- Plan de crisis: clave `dbt_crisis_plan` (`saveCrisisPlan`, `getCrisisPlan`).

Los datos se guardan solo en el dispositivo.

## Aviso
Esta aplicación tiene fines **educativos y de apoyo**. No proporciona diagnósticos ni sustituye la atención de profesionales de salud mental. Si existe peligro inmediato, llama al 123. Línea 106: orientación en salud mental (fuente: Ministerio de Salud y Protección Social).
