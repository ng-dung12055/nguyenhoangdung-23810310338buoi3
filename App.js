import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Platform,
  SafeAreaView,
} from "react-native";

export default function LoginPhoneScreen() {
  const [phone, setPhone] = useState("");

  const onChangePhone = (text) => {
    const digitsOnly = text.replace(/\D/g, "");
    setPhone(digitsOnly.slice(0, 11));
  };

  const canContinue = phone.length >= 9;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Đăng nhập</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.sub}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing
          Pro
        </Text>

        <TextInput
          value={phone}
          onChangeText={onChangePhone}
          placeholder="Nhập số điện thoại của bạn"
          placeholderTextColor="#9ca3af"
          keyboardType={Platform.select({
            ios: "number-pad",
            android: "numeric",
          })}
          inputMode="numeric"
          autoComplete="tel"
          textContentType="telephoneNumber"
          maxLength={11}
          style={styles.input}
        />

        <Pressable
          disabled={!canContinue}
          style={[styles.btn, !canContinue && styles.btnDisabled]}
          onPress={() => console.log("Continue with:", phone)}
        >
          <Text style={[styles.btnText, !canContinue && styles.btnTextDisabled]}>
            Tiếp tục
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  headerTitle: { fontSize: 25, fontWeight: "700" },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 18 },
  label: { fontSize: 24, fontWeight: "500", marginBottom: 28 },
  sub: { color: "#6b7280", marginBottom: 14, lineHeight: 25 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingVertical: 10,
    fontSize: 16,
  },
  btn: {
    marginTop: 28,
    backgroundColor: "#002167",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  btnDisabled: { backgroundColor: "#e5e7eb" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  btnTextDisabled: { color: "#9ca3af" },
});
