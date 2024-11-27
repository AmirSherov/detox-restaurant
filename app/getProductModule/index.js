// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase конфигурация
const firebaseConfig = {
  apiKey: "AIzaSyC26fY4qZ0sLO4JZqVQcEjGEZS_jFoT9nc",
  authDomain: "detox-res.firebaseapp.com",
  projectId: "detox-res",
  storageBucket: "detox-res.firebasestorage.app",
  messagingSenderId: "716996551128",
  appId: "1:716996551128:web:ff1eb0e26a1b93691bd2ad",
  measurementId: "G-04JC1BPH19"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Получаем экземпляры Firebase
const db = getFirestore(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Функция для получения данных (в зависимости от ID или всех продуктов)
export const getProducts = async (productId = "all") => {
  try {
    let querySnapshot;
    if (productId === "all") {
      querySnapshot = await getDocs(collection(db, "products"));
    } else {
      const docRef = doc(db, "products", productId); // Получаем один продукт по ID
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return [docSnap.data()]; // Возвращаем только один продукт в массиве
      } else {
        throw new Error("Product not found");
      }
    }
    
    const dataArr = querySnapshot.docs.map(doc => doc.data());
    return dataArr; // Возвращаем все продукты
  } catch (error) {
    console.error("Error getting products:", error);
    return [];
  }
};

export { db, analytics }; // Экспортируем для использования в других файлах
