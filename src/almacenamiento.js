import AsyncStorage from "@react-native-async-storage/async-storage";

// ================= DIARIO =================

const DIARY_KEY = "dbt_diary_entries";

export async function getDiaryEntries() {
  try {
    const raw = await AsyncStorage.getItem(DIARY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn("No se pudo leer el diario:", error);
    return [];
  }
}

export async function saveDiaryEntry(entry) {
  const entries = await getDiaryEntries();
  const newEntry = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    emotion: entry.emotion,
    intensity: entry.intensity,
    skill: entry.skill,
    note: entry.note,
  };
  const updated = [newEntry, ...entries];
  await AsyncStorage.setItem(DIARY_KEY, JSON.stringify(updated));
  return updated;
}

export async function deleteDiaryEntry(id) {
  const entries = await getDiaryEntries();
  const updated = entries.filter((e) => e.id !== id);
  await AsyncStorage.setItem(DIARY_KEY, JSON.stringify(updated));
  return updated;
}

// ================= PLAN DE CRISIS =================

const PLAN_KEY = "dbt_crisis_plan";

export async function getCrisisPlan() {
  try {
    const raw = await AsyncStorage.getItem(PLAN_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn("No se pudo leer el plan de crisis:", error);
    return null;
  }
}

export async function saveCrisisPlan(plan) {
  const data = { ...plan, updatedAt: new Date().toISOString() };
  await AsyncStorage.setItem(PLAN_KEY, JSON.stringify(data));
  return data;
}
