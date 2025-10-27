# Pemrograman-Mobile-Tugas-5-UI-interaktif-reuseable-card
A simple travel destination app built using **React Native (Expo)** with stack navigation and TypeScript typing for route parameters.

# Cara menjalankan Code program
1. Clone repository
2. buat folder project expo baru: <br/><pre> npx create-expo-app@latest nama-project</pre>
3. cd folder project
4. salin folder scr/ dan App.tsx dari hasil clone repository
5. Install dependencies yang dibutuhkan <br/><pre> expo install @react-navigation/native \
expo install @react-navigation/native-stack \
expo install @react-navigation/bottom-tabs \
expo install react-native-screens \
expo install react-native-safe-area-context \
expo install react-native-vector-icons \
expo install expo-status-bar \
expo install expo-linear-gradient</pre>
6. ganti nilai 'main' pada file *package.json* menjadi <pre> "main": "node_modules/expo/AppEntry.js",</pre>
7. jalankan aplikasi <pre>npx expo start</pre>

# Versi React Native
| nama        | Version   | Keterangan |
|----------------|------------|-------------|
| expo           | ~54.0.20   | Framework utama untuk menjalankan proyek React Native |
| react          | 19.1.0     | Library inti React |
| react-native   | 0.81.5     | Library inti untuk pengembangan aplikasi mobile |
| typescript     | ~5.9.2     | Bahasa pemrograman dengan type-checking untuk JavaScript |

# Struktur Navigasi
