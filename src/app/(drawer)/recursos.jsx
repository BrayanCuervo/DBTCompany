import { ScrollView, View, Text, Linking, Alert, StyleSheet } from "react-native";
import { HelpCard } from "../../componentes";
import { emergencyResources, directoryResource, emergencyWarning } from "../../datos";
import { colors, spacing, borderRadius, fontSizes } from "../../tema";

export default function RecursosScreen() {
  const open = async (url) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert("No se pudo abrir", "Tu dispositivo no pudo abrir este enlace o llamada.");
    }
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Recursos de ayuda</Text>
      <Text style={styles.subtitle}>Colombia</Text>

      <View style={styles.warning}>
        <Text style={styles.warningText}>⚠️ {emergencyWarning}</Text>
      </View>

      <View style={styles.list}>
        {emergencyResources.map((r) => (
          <HelpCard key={r.id} resource={r} onPress={() => open(r.url)} />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Otras líneas</Text>
      <HelpCard resource={directoryResource} onPress={() => open(directoryResource.url)} />

      <Text style={styles.disclaimer}>
        Esta información proviene del Ministerio de Salud y Protección Social. Puede cambiar; verifica siempre en el sitio oficial.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.xl, paddingBottom: spacing.xxl },
  title: { fontSize: fontSizes.xxl, fontWeight: "700", color: colors.primaryDark },
  subtitle: { fontSize: fontSizes.md, color: colors.textMuted, marginTop: spacing.xs },
  warning: { backgroundColor: colors.dangerSoft, borderRadius: borderRadius.md, padding: spacing.lg, marginTop: spacing.xl },
  warningText: { fontSize: fontSizes.md, lineHeight: 22, color: colors.danger, fontWeight: "600" },
  list: { gap: spacing.lg, marginTop: spacing.xl },
  sectionTitle: { fontSize: fontSizes.xl, fontWeight: "700", color: colors.text, marginTop: spacing.xxl, marginBottom: spacing.md },
  disclaimer: { fontSize: fontSizes.xs, color: colors.textMuted, textAlign: "center", marginTop: spacing.xl },
});
