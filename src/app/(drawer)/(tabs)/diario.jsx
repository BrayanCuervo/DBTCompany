import { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { EmotionSelector, AppButton } from "../../../componentes";
import { saveDiaryEntry, getDiaryEntries, deleteDiaryEntry } from "../../../almacenamiento";
import { colors, spacing, borderRadius, fontSizes } from "../../../tema";

const INTENSITIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SKILL_OPTIONS = ["STOP", "TIPP", "Mindfulness", "DEAR MAN", "Otra"];

const formatDate = (iso) => {
  const d = new Date(iso);
  return `${d.toLocaleDateString("es-CO", { day: "numeric", month: "short", year: "numeric" })} · ${d.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}`;
};

function Chip({ label, active, onPress, compact }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={[styles.chip, compact && styles.chipCompact, active && styles.chipActive]}
    >
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </Pressable>
  );
}

export default function DiarioScreen() {
  const [emotion, setEmotion] = useState(null);
  const [intensity, setIntensity] = useState(null);
  const [note, setNote] = useState("");
  const [skill, setSkill] = useState(null);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getDiaryEntries().then(setEntries);
  }, []);

  const handleSave = async () => {
    if (!emotion || !intensity) {
      Alert.alert("Falta información", "Elige una emoción y su intensidad para guardar el registro.");
      return;
    }
    try {
      const updated = await saveDiaryEntry({
        emotion,
        intensity,
        skill: skill ?? "Ninguna",
        note: note.trim(),
      });
      setEntries(updated);
      setEmotion(null);
      setIntensity(null);
      setSkill(null);
      setNote("");
    } catch (error) {
      Alert.alert("Error", "No se pudo guardar el registro. Inténtalo de nuevo.");
    }
  };

  const handleDelete = (id) => {
    Alert.alert("Eliminar registro", "¿Quieres eliminar este registro?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => setEntries(await deleteDiaryEntry(id)),
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Diario</Text>

        <Text style={styles.label}>¿Cómo te sientes?</Text>
        <EmotionSelector selected={emotion} onSelect={setEmotion} />

        <Text style={styles.label}>Intensidad (1 a 10)</Text>
        <View style={styles.wrap}>
          {INTENSITIES.map((n) => (
            <Chip key={n} compact label={String(n)} active={intensity === n} onPress={() => setIntensity(n)} />
          ))}
        </View>

        <Text style={styles.label}>¿Qué ocurrió?</Text>
        <TextInput
          style={styles.input}
          value={note}
          onChangeText={setNote}
          placeholder="Escribe lo que quieras recordar..."
          placeholderTextColor={colors.textMuted}
          multiline
        />

        <Text style={styles.label}>¿Qué habilidad utilizaste?</Text>
        <View style={styles.wrap}>
          {SKILL_OPTIONS.map((s) => (
            <Chip key={s} label={s} active={skill === s} onPress={() => setSkill(s)} />
          ))}
        </View>

        <AppButton label="Guardar registro" onPress={handleSave} style={styles.saveButton} />

        <Text style={styles.sectionTitle}>Mis registros</Text>
        {entries.length === 0 ? (
          <Text style={styles.empty}>Aún no tienes registros. Cuando guardes uno, aparecerá aquí.</Text>
        ) : (
          entries.map((e) => (
            <View key={e.id} style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryEmoji}>{e.emotion}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.entryDate}>{formatDate(e.date)}</Text>
                  <Text style={styles.entryMeta}>
                    Intensidad: {e.intensity}/10 · Habilidad: {e.skill}
                  </Text>
                </View>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Eliminar registro"
                  onPress={() => handleDelete(e.id)}
                  hitSlop={10}
                >
                  <Text style={styles.delete}>Eliminar</Text>
                </Pressable>
              </View>
              {e.note ? <Text style={styles.entryNote}>{e.note}</Text> : null}
            </View>
          ))
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.xl, paddingBottom: spacing.xxl },
  title: { fontSize: fontSizes.xxl, fontWeight: "700", color: colors.primaryDark },
  label: { fontSize: fontSizes.md, fontWeight: "700", color: colors.text, marginTop: spacing.xl, marginBottom: spacing.sm },
  wrap: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  chip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.pill,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  chipCompact: { minWidth: 48, alignItems: "center", paddingHorizontal: spacing.md },
  chipActive: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  chipText: { fontSize: fontSizes.md, color: colors.text },
  chipTextActive: { fontWeight: "700", color: colors.primaryDark },
  input: {
    minHeight: 100,
    textAlignVertical: "top",
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: fontSizes.md,
    color: colors.text,
  },
  saveButton: { marginTop: spacing.xl },
  sectionTitle: { fontSize: fontSizes.xl, fontWeight: "700", color: colors.text, marginTop: spacing.xxl, marginBottom: spacing.md },
  empty: { color: colors.textMuted, fontSize: fontSizes.md },
  entry: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  entryHeader: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  entryEmoji: { fontSize: 32 },
  entryDate: { fontSize: fontSizes.sm, fontWeight: "700", color: colors.text },
  entryMeta: { fontSize: fontSizes.xs, color: colors.textMuted, marginTop: 2 },
  entryNote: { fontSize: fontSizes.md, color: colors.text, marginTop: spacing.md, lineHeight: 22 },
  delete: { fontSize: fontSizes.sm, color: colors.danger, fontWeight: "600" },
});
