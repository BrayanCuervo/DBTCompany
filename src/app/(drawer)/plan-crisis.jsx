import { useState, useEffect } from "react";
import { ScrollView, View, Text, TextInput, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { AppButton } from "../../componentes";
import { getCrisisPlan, saveCrisisPlan } from "../../almacenamiento";
import { colors, spacing, borderRadius, fontSizes } from "../../tema";

const FIELDS = [
  { key: "alertSigns", label: "1. Señales de alerta", hint: "¿Qué notas en ti cuando las cosas empiezan a ponerse difíciles?" },
  { key: "copingActions", label: "2. Cosas que puedo hacer para distraerme o regularme", hint: "Por ejemplo: STOP, respirar, caminar, música..." },
  { key: "contactPeople", label: "3. Personas a las que puedo contactar", hint: "Nombres y forma de contactarlas." },
  { key: "helpers", label: "4. Personas que pueden ayudarme", hint: "Quién puede acompañarme o apoyarme en ese momento." },
  { key: "safePlaces", label: "5. Lugares donde puedo sentirme seguro", hint: "Espacios donde me siento tranquilo." },
  { key: "professionalResources", label: "6. Recursos profesionales", hint: "Profesionales o servicios a los que puedo acudir." },
];

const EMPTY_PLAN = Object.fromEntries(FIELDS.map((f) => [f.key, ""]));

export default function PlanCrisisScreen() {
  const [plan, setPlan] = useState(EMPTY_PLAN);
  const [editing, setEditing] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCrisisPlan().then((saved) => {
      if (saved) {
        setPlan({ ...EMPTY_PLAN, ...saved });
        setEditing(false);
      }
      setLoading(false);
    });
  }, []);

  const handleSave = async () => {
    try {
      const saved = await saveCrisisPlan(plan);
      setPlan({ ...EMPTY_PLAN, ...saved });
      setEditing(false);
    } catch (error) {
      Alert.alert("Error", "No se pudo guardar el plan. Inténtalo de nuevo.");
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Mi plan de crisis</Text>
      <Text style={styles.intro}>
        Escribe este plan en un momento de calma, para tenerlo a mano cuando lo necesites. Se guarda solo en tu dispositivo.
      </Text>

      {FIELDS.map((f) => (
        <View key={f.key} style={styles.field}>
          <Text style={styles.label}>{f.label}</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={plan[f.key]}
              onChangeText={(text) => setPlan((p) => ({ ...p, [f.key]: text }))}
              placeholder={f.hint}
              placeholderTextColor={colors.textMuted}
              multiline
            />
          ) : (
            <View style={styles.readBox}>
              <Text style={plan[f.key] ? styles.readText : styles.readEmpty}>
                {plan[f.key] || "Sin completar"}
              </Text>
            </View>
          )}
        </View>
      ))}

      {editing ? (
        <AppButton label="Guardar plan" onPress={handleSave} style={styles.button} />
      ) : (
        <AppButton label="Editar plan" variant="secondary" onPress={() => setEditing(true)} style={styles.button} />
      )}

      <Text style={styles.disclaimer}>
        Si existe peligro inmediato, llama al 123. Para orientación en salud mental, llama al 106.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.xl, paddingBottom: spacing.xxl },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.background },
  title: { fontSize: fontSizes.xxl, fontWeight: "700", color: colors.primaryDark },
  intro: { fontSize: fontSizes.md, lineHeight: 24, color: colors.textMuted, marginTop: spacing.sm },
  field: { marginTop: spacing.xl },
  label: { fontSize: fontSizes.md, fontWeight: "700", color: colors.text, marginBottom: spacing.sm },
  input: {
    minHeight: 90,
    textAlignVertical: "top",
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: fontSizes.md,
    color: colors.text,
  },
  readBox: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.md,
  },
  readText: { fontSize: fontSizes.md, lineHeight: 22, color: colors.text },
  readEmpty: { fontSize: fontSizes.md, color: colors.textMuted, fontStyle: "italic" },
  button: { marginTop: spacing.xl },
  disclaimer: { fontSize: fontSizes.xs, color: colors.textMuted, textAlign: "center", marginTop: spacing.xl },
});
