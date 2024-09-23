/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export function useFilterCategories({ services, category }) {
  const [initData] = useState(services);
  const [data, setData] = useState();

  useEffect(() => {
    const filteredData = initData.filter((item) => {
      return item.category.toLowerCase() === category.category;
    });
    setData(filteredData);
  }, [category]);

  return { data };
}
