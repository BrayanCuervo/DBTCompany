import { useState, useEffect, useCallback } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { AppButton, QuoteCard } from "../../../componentes";
import { getRandomQuote, getFallbackQuote } from "../../../quotesApi";
import { colors, spacing, fontSizes } from "../../../tema";

export default function InicioScreen() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  const loadQuote = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getRandomQuote();
      setQuote(data);
      setIsFallback(false);
    } catch (error) {
      setQuote(getFallbackQuote());
      setIsFallback(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadQuote();
  }, [loadQuote]);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>DBT Companion</Text>
      <Text style={styles.subtitle}>Herramientas para el bienestar emocional</Text>

      <Text style={styles.greeting}>Hola 👋</Text>
      <Text style={styles.question}>¿Qué necesitas en este momento?</Text>

      <View style={styles.actions}>
        <AppButton label="Practicar una habilidad" onPress={() => router.navigate("/habilidades")} />
        <AppButton
          label="Registrar cómo me siento"
          variant="secondary"
          onPress={() => router.navigate("/diario")}
        />
        <AppButton
          label="Ver mi plan de crisis"
          variant="secondary"
          onPress={() => router.navigate("/plan-crisis")}
        />
        <AppButton
          label="Recursos de ayuda"
          variant="secondary"
          onPress={() => router.navigate("/recursos")}
        />
      </View>

      <QuoteCard quote={quote} loading={loading} isFallback={isFallback} onRefresh={loadQuote} />

      <Text style={styles.disclaimer}>
        Contenido educativo. No reemplaza la atención de profesionales de salud mental.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.xl, paddingBottom: spacing.xxl },
  title: { fontSize: fontSizes.xxl, fontWeight: "700", color: colors.primaryDark },
  subtitle: { fontSize: fontSizes.md, color: colors.textMuted, marginTop: spacing.xs },
  greeting: { fontSize: fontSizes.xl, fontWeight: "600", color: colors.text, marginTop: spacing.xl },
  question: { fontSize: fontSizes.md, color: colors.textMuted, marginTop: spacing.xs },
  actions: { gap: spacing.md, marginVertical: spacing.xl },
  disclaimer: {
    fontSize: fontSizes.xs,
    color: colors.textMuted,
    textAlign: "center",
    marginTop: spacing.xl,
  },
});
