import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { AppButton } from "../../../../../componentes";
import { getSkillById, getModuleById } from "../../../../../datos";
import { colors, spacing, borderRadius, fontSizes } from "../../../../../tema";

export default function SkillDetailScreen() {
  const { skill: skillId } = useLocalSearchParams();
  const skill = getSkillById(skillId);

  if (!skill) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>No se encontró la habilidad.</Text>
        <AppButton label="Volver" onPress={() => router.back()} style={styles.backButton} />
      </View>
    );
  }

  const moduleData = getModuleById(skill.moduleId);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: skill.name }} />

      <Text style={styles.moduleLabel}>
        {moduleData?.emoji} {moduleData?.name}
      </Text>
      <Text style={styles.title}>{skill.name}</Text>
      <Text style={styles.description}>{skill.description}</Text>

      <Text style={styles.sectionTitle}>¿Cuándo puede ser útil?</Text>
      <Text style={styles.body}>{skill.whenToUse}</Text>

      <Text style={styles.sectionTitle}>Pasos</Text>
      <View style={styles.steps}>
        {skill.steps.map((step, index) => (
          <View key={index} style={styles.stepRow}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}
      </View>

      <View style={styles.tipBox}>
        <Text style={styles.tipTitle}>Consejo</Text>
        <Text style={styles.tipText}>{skill.tip}</Text>
      </View>

      <Text style={styles.disclaimer}>
        Información educativa general. No es un tratamiento personalizado ni reemplaza la
        atención de un profesional.
      </Text>

      <AppButton label="Volver" onPress={() => router.back()} style={styles.backButton} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.xl, paddingBottom: spacing.xxl },
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: spacing.xl, backgroundColor: colors.background },
  text: { fontSize: fontSizes.md, color: colors.text },
  moduleLabel: { fontSize: fontSizes.sm, color: colors.primary, fontWeight: "600" },
  title: { fontSize: fontSizes.xxl, fontWeight: "700", color: colors.text, marginTop: spacing.xs },
  description: { fontSize: fontSizes.md, lineHeight: 24, color: colors.text, marginTop: spacing.md },
  sectionTitle: { fontSize: fontSizes.lg, fontWeight: "700", color: colors.primaryDark, marginTop: spacing.xl, marginBottom: spacing.sm },
  body: { fontSize: fontSizes.md, lineHeight: 24, color: colors.text },
  steps: { gap: spacing.md },
  stepRow: { flexDirection: "row", gap: spacing.md, alignItems: "flex-start" },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: borderRadius.pill,
    backgroundColor: colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  stepNumberText: { fontWeight: "700", color: colors.primaryDark },
  stepText: { flex: 1, fontSize: fontSizes.md, lineHeight: 24, color: colors.text },
  tipBox: { backgroundColor: colors.warningSoft, borderRadius: borderRadius.md, padding: spacing.lg, marginTop: spacing.xl },
  tipTitle: { fontSize: fontSizes.md, fontWeight: "700", color: colors.warning },
  tipText: { fontSize: fontSizes.md, lineHeight: 24, color: colors.text, marginTop: spacing.xs },
  disclaimer: { fontSize: fontSizes.xs, color: colors.textMuted, marginTop: spacing.lg, textAlign: "center" },
  backButton: { marginTop: spacing.xl },
});
