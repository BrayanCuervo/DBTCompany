import { ScrollView, Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { ModuleCard } from "../../../../componentes";
import { modules } from "../../../../datos";
import { colors, spacing, fontSizes } from "../../../../tema";

export default function HabilidadesScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Habilidades</Text>
      <Text style={styles.subtitle}>Elige un módulo para ver sus habilidades.</Text>

      <View style={styles.list}>
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            onPress={() =>
              router.push({ pathname: "/habilidades/[module]", params: { module: module.id } })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.xl },
  title: { fontSize: fontSizes.xxl, fontWeight: "700", color: colors.primaryDark },
  subtitle: { fontSize: fontSizes.md, color: colors.textMuted, marginTop: spacing.xs },
  list: { gap: spacing.md, marginTop: spacing.xl },
});
