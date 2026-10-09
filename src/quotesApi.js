
const BASE_URL = "https://www.positive-api.online";
const TIMEOUT_MS = 8000;

export async function getRandomQuote() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${BASE_URL}/phrase/esp`, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }

    const data = await response.json();

    // Adapta los nombres de campos al JSON real de la API.
    const quote = data.phrase ?? data.text ?? data.quote ?? data;

    const content =
      typeof quote === "string"
        ? quote
        : quote?.phrase ?? quote?.text ?? quote?.quote;

    if (!content) {
      throw new Error("Respuesta inesperada de Positive API");
    }

    return {
      id: String(quote?.id ?? Date.now()),
      content,
      author:
        typeof quote === "object"
          ? quote.author ?? "Autor desconocido"
          : "Autor desconocido",
    };
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("La solicitud tardó demasiado");
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
