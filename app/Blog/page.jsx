'use client';
import Link from 'next/link';
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "./blog.scss";
const Blog = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(3);
  const items = [
    { id: 1, databaseId: "product1", title: "Как поменять свои пищевые привычки?", date: "29.05.2020", imgSrc: "/images/blog1.png" },
    { id: 2, databaseId: "product2", title: "Как сделать утреннюю зарядку?", date: "29.05.2020", imgSrc: "/images/blog2.png" },
    { id: 3, databaseId: "product3", title: "Как быть продуктивным на работе?", date: "29.05.2020", imgSrc: "/images/blog3.png" },
    { id: 4, databaseId: "product1", title: "Как улучшить своё здоровье?", date: "29.05.2020", imgSrc: "/images/blog1.png" },
    { id: 5, databaseId: "product2", title: "Как настроить работу с командой?", date: "30.05.2020", imgSrc: "/images/blog2.png" },
    { id: 6, databaseId: "product3", title: "Как выстроить карьеру?", date: "30.05.2020", imgSrc: "/images/blog3.png" },
    { id: 7, databaseId: "product1", title: "Как научиться вести переговоры?", date: "01.06.2020", imgSrc: "/images/blog1.png" },
    { id: 8, databaseId: "product2", title: "Как поддерживать мотивацию?", date: "01.06.2020", imgSrc: "/images/blog2.png" },
    { id: 9, databaseId: "product3", title: "Как поддерживать мотивацию?", date: "01.06.2020", imgSrc: "/images/blog3.png" },
  ];

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  const currentItems = items.slice(0, visibleItems);

  return (
    <div>
      <div className="grid">
        {currentItems.map((item) => (
          <div key={item.id} className="card">
            <img width={300} height={200} src={item.imgSrc} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <Link href={`./DetailsPageBlog/${item.databaseId}`}>
              <button>{t("Blog.text-1")}</button>
            </Link>
          </div>
        ))}
      </div>

      <button onClick={loadMoreItems} className="load-more-button">
        {visibleItems < items.length ? t("Blog.text-3") : <>
          <div onClick={() => setVisibleItems(0)}>
          {t("Blog.text-2")}
          </div>
        </>}
      </button>
    </div>
  );
};

export default Blog;
