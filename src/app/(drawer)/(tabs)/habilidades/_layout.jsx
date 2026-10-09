import { Stack } from "expo-router";
import { colors } from "../../../../tema";

export default function HabilidadesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.primaryDark,
        headerTitleStyle: { fontWeight: "600" },
        headerShadowVisible: false,
        headerBackTitle: "Atrás",
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[module]" options={{ title: "Módulo" }} />
      <Stack.Screen name="[module]/[skill]" options={{ title: "Habilidad" }} />
    </Stack>
  );
}
