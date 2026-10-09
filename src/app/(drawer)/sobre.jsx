import { ScrollView, View, Text, StyleSheet } from "react-native";
import { colors, spacing, borderRadius, fontSizes } from "../../tema";

const TECH = ["React Native", "Expo", "Expo Router", "JavaScript", "AsyncStorage", "REST API", "Quotable API"];

export default function SobreScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>DBT Companion</Text>
      <Text style={styles.version}>Versión 1.0</Text>

      <Text style={styles.sectionTitle}>Descripción</Text>
      <Text style={styles.body}>
        DBT Companion es una aplicación educativa que presenta habilidades de la Terapia Dialéctico Conductual (DBT) organizadas por módulos, un diario de emociones, un plan personal de crisis y recursos de ayuda en Colombia.
      </Text>

      <Text style={styles.sectionTitle}>Objetivo académico</Text>
      <Text style={styles.body}>
        Taller universitario para demostrar la integración de tres tipos de navegación (Drawer, Tabs y Stack) con Expo Router, el consumo de una API externa y el almacenamiento local.
      </Text>

      <Text style={styles.sectionTitle}>Tecnologías utilizadas</Text>
      <View style={styles.techBox}>
        {TECH.map((t) => (
          <Text key={t} style={styles.techItem}>• {t}</Text>
        ))}
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          Esta aplicación tiene fines educativos y de apoyo. No proporciona diagnósticos ni sustituye la atención de profesionales de salud mental.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.xl, paddingBottom: spacing.xxl },
  title: { fontSize: fontSizes.xxl, fontWeight: "700", color: colors.primaryDark },
  version: { fontSize: fontSizes.md, color: colors.textMuted, marginTop: spacing.xs },
  sectionTitle: { fontSize: fontSizes.lg, fontWeight: "700", color: colors.text, marginTop: spacing.xl, marginBottom: spacing.sm },
  body: { fontSize: fontSizes.md, lineHeight: 24, color: colors.text },
  techBox: { backgroundColor: colors.surface, borderRadius: borderRadius.md, borderWidth: 1, borderColor: colors.border, padding: spacing.lg, gap: spacing.xs },
  techItem: { fontSize: fontSizes.md, color: colors.text },
  notice: { backgroundColor: colors.warningSoft, borderRadius: borderRadius.md, padding: spacing.lg, marginTop: spacing.xl },
  noticeText: { fontSize: fontSizes.md, lineHeight: 22, color: colors.text },
});
