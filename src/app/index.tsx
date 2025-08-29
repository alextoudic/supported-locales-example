import * as Application from "expo-application";
import * as IntantLauncher from "expo-intent-launcher";
import * as Linking from "expo-linking";
import { useLocales } from "expo-localization";
import { Platform, Pressable, Text, View } from "react-native";
import { useLocalizedContent } from "../locales";

export default function Index() {
  const [localeSetting] = useLocales();
  const localizedContent = useLocalizedContent(localeSetting.languageCode);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text mb-2">{localizedContent.language}</Text>
      <Text className="text-2xl">
        {localizedContent.flag} {localizedContent.name}
      </Text>
      <Pressable
        className="mt-8 rounded bg-blue-500 px-6 py-4"
        onPress={() => {
          if (Platform.OS === "android") {
            IntantLauncher.startActivityAsync(
              "android.settings.APP_LOCALE_SETTINGS",
              {
                data: `package:${Application.applicationId}`,
              }
            );
          } else {
            Linking.openSettings();
          }
        }}
      >
        <Text className="text-white">{localizedContent.change}</Text>
      </Pressable>
    </View>
  );
}
