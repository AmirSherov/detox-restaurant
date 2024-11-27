
'use client';
import "./blog.scss"
import { useEffect, useState } from "react";
import { getProducts } from '../getProductModule/index.js'; 

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts("all"); 
      setData(products);
      setLoading(false);
    };

    fetchData();
  }, []); 

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Firestore Data</h1>
      <ul>
        {data.map((product, index) => (
          <li key={index}>
            <img src={product.img} alt="" />
            <p>{product.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

// 'use client';
// import { useEffect, useState } from "react";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore"; 
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyC26fY4qZ0sLO4JZqVQcEjGEZS_jFoT9nc",
//   authDomain: "detox-res.firebaseapp.com",
//   projectId: "detox-res",
//   storageBucket: "detox-res.firebasestorage.app",
//   messagingSenderId: "716996551128",
//   appId: "1:716996551128:web:ff1eb0e26a1b93691bd2ad",
//   measurementId: "G-04JC1BPH19"
// };

// const app = initializeApp(firebaseConfig);

// const FirebaseComponent = () => {
//   const [data, setData] = useState(null);
//   const [analytics, setAnalytics] = useState(null);
//   const [db, setDb] = useState(null);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setDb(getFirestore(app));
//       setAnalytics(getAnalytics(app));
//     }
//   }, []);

//   useEffect(() => {
//     if (db) {
//       const fetchData = async () => {
//         const querySnapshot = await getDocs(collection(db, "products"));
//         const dataArr = querySnapshot.docs.map(doc => doc.data());
//         setData(dataArr); // Сохраняем массив объектов
//       };
//       fetchData();
//     }
//   }, [db]);

//   if (!data) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Firestore Data</h1>
//       <ul>
//         {data.map((product, index) => (
//           <li key={index}>
//             <h2><img src={product.img} alt="" />{product.img}</h2> 
//             <p>{product.text}</p> 
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FirebaseComponent;
