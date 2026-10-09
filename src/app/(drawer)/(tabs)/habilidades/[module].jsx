import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { SkillCard } from "../../../../componentes";
import { getModuleById, getSkillsByModule } from "../../../../datos";
import { colors, spacing, borderRadius, fontSizes } from "../../../../tema";

export default function ModuleDetailScreen() {
  const { module: moduleId } = useLocalSearchParams();
  const moduleData = getModuleById(moduleId);

  if (!moduleData) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>No se encontró el módulo.</Text>
      </View>
    );
  }

  const moduleSkills = getSkillsByModule(moduleData.id);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: moduleData.name }} />

      <View style={[styles.hero, { backgroundColor: moduleData.tint }]}>
        <Text style={styles.emoji}>{moduleData.emoji}</Text>
        <Text style={styles.title}>{moduleData.name}</Text>
        <Text style={styles.description}>{moduleData.description}</Text>
      </View>

      <Text style={styles.sectionTitle}>Habilidades</Text>
      <View style={styles.list}>
        {moduleSkills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            onPress={() =>
              router.push({
                pathname: "/habilidades/[module]/[skill]",
                params: { module: moduleData.id, skill: skill.id },
              })
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
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.background },
  text: { fontSize: fontSizes.md, color: colors.text },
  hero: { borderRadius: borderRadius.lg, padding: spacing.xl },
  emoji: { fontSize: 36 },
  title: { fontSize: fontSizes.xxl, fontWeight: "700", color: colors.text, marginTop: spacing.sm },
  description: { fontSize: fontSizes.md, lineHeight: 24, color: colors.text, marginTop: spacing.sm },
  sectionTitle: {
    fontSize: fontSizes.lg,
    fontWeight: "700",
    color: colors.text,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  list: { gap: spacing.md },
});
