const BASE_URL = "https://api.quotable.io";
const TIMEOUT_MS = 8000;

// Frases locales (respaldo) por si la API no responde.
export const FALLBACK_QUOTES = [
  {
    id: "local-1",
    content: "Un paso pequeño y consciente también es un avance.",
    author: "DBT Companion",
  },
  {
    id: "local-2",
    content: "Puedes sentir lo que sientes y, aun así, elegir cómo actuar.",
    author: "DBT Companion",
  },
  {
    id: "local-3",
    content: "Respirar con calma es una forma de volver al presente.",
    author: "DBT Companion",
  },
  {
    id: "local-4",
    content: "Las emociones pasan, como las olas. No tienes que pelear con ellas.",
    author: "DBT Companion",
  },
];

export function getFallbackQuote() {
  const index = Math.floor(Math.random() * FALLBACK_QUOTES.length);
  return FALLBACK_QUOTES[index];
}

/**
 * Obtiene una frase aleatoria de Quotable.
 * Lanza un Error si falla (red, tiempo agotado, HTTP o formato inesperado).
 */
export async function getRandomQuote() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${BASE_URL}/quotes/random`, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }

    const data = await response.json();
    // /quotes/random devuelve un arreglo; /random devuelve un objeto.
    const quote = Array.isArray(data) ? data[0] : data;

    if (!quote || !quote.content) {
      throw new Error("Respuesta inesperada de la API");
    }

    return {
      id: quote._id,
      content: quote.content,
      author: quote.author || "Autor desconocido",
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
