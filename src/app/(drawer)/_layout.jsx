import { View, Text, Pressable, StyleSheet } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView } from "expo-router/drawer";
import { router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, borderRadius, fontSizes } from "../../tema";

const MENU = [
  { label: "Inicio", href: "/", icon: "home-outline" },
  { label: "Habilidades", href: "/habilidades", icon: "bulb-outline" },
  { label: "Diario", href: "/diario", icon: "journal-outline" },
  { label: "Mi plan de crisis", href: "/plan-crisis", icon: "shield-checkmark-outline" },
  { label: "Recursos de ayuda", href: "/recursos", icon: "call-outline" },
  { label: "Sobre la aplicación", href: "/sobre", icon: "information-circle-outline" },
];

function CustomDrawerContent(props) {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const go = (href) => {
    props.navigation.closeDrawer();
    router.navigate(href);
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>DBT Companion</Text>
        <Text style={styles.appSubtitle}>Herramientas para el bienestar emocional</Text>
      </View>

      {MENU.map((item) => {
        const active = isActive(item.href);
        return (
          <Pressable
            key={item.href}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            onPress={() => go(item.href)}
            style={[styles.item, active && styles.itemActive]}
          >
            <Ionicons
              name={item.icon}
              size={22}
              color={active ? colors.primaryDark : colors.textMuted}
            />
            <Text style={[styles.itemLabel, active && styles.itemLabelActive]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.primaryDark,
        headerTitleStyle: { fontWeight: "700" },
        headerShadowVisible: false,
        drawerStyle: { backgroundColor: colors.surface },
      }}
    >
      <Drawer.Screen name="(tabs)" options={{ title: "DBT Companion" }} />
      <Drawer.Screen name="plan-crisis" options={{ title: "Mi plan de crisis" }} />
      <Drawer.Screen name="recursos" options={{ title: "Recursos de ayuda" }} />
      <Drawer.Screen name="sobre" options={{ title: "Sobre la aplicación" }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: spacing.md },
  header: { paddingVertical: spacing.xl, paddingHorizontal: spacing.sm },
  appName: { fontSize: fontSizes.xl, fontWeight: "700", color: colors.primaryDark },
  appSubtitle: { fontSize: fontSizes.sm, color: colors.textMuted, marginTop: 2 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    minHeight: 52,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.xs,
  },
  itemActive: { backgroundColor: colors.primarySoft },
  itemLabel: { fontSize: fontSizes.md, color: colors.text },
  itemLabelActive: { fontWeight: "700", color: colors.primaryDark },
});
