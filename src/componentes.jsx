// Componentes reutilizables de DBT Companion.
import { View, Text, Pressable, ActivityIndicator, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, borderRadius, fontSizes } from "./tema";

/* ============ AppButton ============ */
const buttonVariants = {
  primary: { bg: colors.primary, fg: colors.white, border: colors.primary },
  secondary: { bg: colors.surface, fg: colors.primaryDark, border: colors.primary },
  danger: { bg: colors.danger, fg: colors.white, border: colors.danger },
};

export function AppButton({ label, onPress, variant = "primary", disabled = false, style }) {
  const v = buttonVariants[variant] ?? buttonVariants.primary;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        buttonStyles.button,
        { backgroundColor: v.bg, borderColor: v.border },
        pressed && buttonStyles.pressed,
        disabled && buttonStyles.disabled,
        style,
      ]}
    >
      <Text style={[buttonStyles.label, { color: v.fg }]}>{label}</Text>
    </Pressable>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    minHeight: 52,
    borderRadius: borderRadius.md,
    borderWidth: 1.5,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  label: { fontSize: fontSizes.md, fontWeight: "600", textAlign: "center" },
  pressed: { opacity: 0.85 },
  disabled: { opacity: 0.5 },
});

/* ============ ModuleCard ============ */
export function ModuleCard({ module, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Módulo ${module.name}`}
      onPress={onPress}
      style={({ pressed }) => [cardStyles.card, cardStyles.moduleCard, pressed && cardStyles.pressed]}
    >
      <View style={[cardStyles.emojiBox, { backgroundColor: module.tint }]}>
        <Text style={cardStyles.emoji}>{module.emoji}</Text>
      </View>
      <View style={cardStyles.texts}>
        <Text style={cardStyles.moduleTitle}>{module.name}</Text>
        <Text style={cardStyles.subtitle}>{module.shortDescription}</Text>
      </View>
      <Ionicons name="chevron-forward" size={22} color={colors.textMuted} />
    </Pressable>
  );
}

/* ============ SkillCard ============ */
export function SkillCard({ skill, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Habilidad ${skill.name}`}
      onPress={onPress}
      style={({ pressed }) => [cardStyles.card, cardStyles.skillCard, pressed && cardStyles.pressed]}
    >
      <View style={cardStyles.texts}>
        <Text style={cardStyles.skillTitle}>{skill.name}</Text>
        <Text style={cardStyles.subtitle}>{skill.shortDescription}</Text>
      </View>
      <Ionicons name="chevron-forward" size={22} color={colors.textMuted} />
    </Pressable>
  );
}

const cardStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.md,
  },
  moduleCard: { borderRadius: borderRadius.lg },
  skillCard: { borderRadius: borderRadius.md },
  pressed: { opacity: 0.85 },
  emojiBox: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: { fontSize: 28 },
  texts: { flex: 1 },
  moduleTitle: { fontSize: fontSizes.lg, fontWeight: "700", color: colors.text },
  skillTitle: { fontSize: fontSizes.md, fontWeight: "700", color: colors.text },
  subtitle: { fontSize: fontSizes.sm, color: colors.textMuted, marginTop: 2 },
});

/* ============ QuoteCard ============ */
export function QuoteCard({ quote, loading, isFallback, onRefresh }) {
  return (
    <View style={quoteStyles.card}>
      <Text style={quoteStyles.heading}>💭 Reflexión del día</Text>

      {loading ? (
        <View style={quoteStyles.loading}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={quoteStyles.loadingText}>Buscando una reflexión...</Text>
        </View>
      ) : (
        <>
          <Text style={quoteStyles.quote}>“{quote?.content}”</Text>
          <Text style={quoteStyles.author}>— {quote?.author}</Text>
          {isFallback && (
            <Text style={quoteStyles.note}>
              No se pudo conectar con el servicio externo. Mostramos una reflexión guardada en la app.
            </Text>
          )}
        </>
      )}

      <AppButton
        label="Actualizar reflexión"
        variant="secondary"
        onPress={onRefresh}
        disabled={loading}
        style={quoteStyles.button}
      />
    </View>
  );
}

const quoteStyles = StyleSheet.create({
  card: { backgroundColor: colors.primarySoft, borderRadius: borderRadius.lg, padding: spacing.xl },
  heading: { fontSize: fontSizes.lg, fontWeight: "700", color: colors.primaryDark },
  loading: { alignItems: "center", paddingVertical: spacing.xl, gap: spacing.sm },
  loadingText: { color: colors.textMuted, fontSize: fontSizes.sm },
  quote: { fontSize: fontSizes.lg, lineHeight: 28, color: colors.text, marginTop: spacing.md },
  author: { fontSize: fontSizes.sm, color: colors.textMuted, marginTop: spacing.sm, fontStyle: "italic" },
  note: { fontSize: fontSizes.xs, color: colors.textMuted, marginTop: spacing.md },
  button: { marginTop: spacing.lg },
});

/* ============ HelpCard ============ */
export function HelpCard({ resource, onPress }) {
  return (
    <View style={helpStyles.card}>
      <Text style={helpStyles.title}>{resource.title}</Text>
      <Text style={helpStyles.description}>{resource.description}</Text>
      {resource.detail ? <Text style={helpStyles.detail}>{resource.detail}</Text> : null}
      <AppButton
        label={resource.buttonLabel}
        variant={resource.variant}
        onPress={onPress}
        style={helpStyles.button}
      />
    </View>
  );
}

const helpStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.xl,
  },
  title: { fontSize: fontSizes.xl, fontWeight: "700", color: colors.text },
  description: { fontSize: fontSizes.md, color: colors.text, marginTop: spacing.xs },
  detail: { fontSize: fontSizes.sm, color: colors.textMuted, marginTop: spacing.sm },
  button: { marginTop: spacing.lg },
});

/* ============ EmotionSelector ============ */
export const EMOTIONS = [
  { value: "😊", label: "Bien" },
  { value: "😐", label: "Neutral" },
  { value: "😟", label: "Preocupado" },
  { value: "😢", label: "Triste" },
  { value: "😡", label: "Enojado" },
];

export function EmotionSelector({ selected, onSelect }) {
  return (
    <View style={emotionStyles.row}>
      {EMOTIONS.map((e) => {
        const active = selected === e.value;
        return (
          <Pressable
            key={e.value}
            accessibilityRole="button"
            accessibilityLabel={e.label}
            accessibilityState={{ selected: active }}
            onPress={() => onSelect(e.value)}
            style={[emotionStyles.item, active && emotionStyles.itemActive]}
          >
            <Text style={emotionStyles.emoji}>{e.value}</Text>
            <Text style={[emotionStyles.label, active && emotionStyles.labelActive]}>{e.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const emotionStyles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", gap: spacing.xs },
  item: {
    flex: 1,
    alignItems: "center",
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  itemActive: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  emoji: { fontSize: 28 },
  label: { fontSize: 10, color: colors.textMuted, marginTop: 2 },
  labelActive: { color: colors.primaryDark, fontWeight: "700" },
});
