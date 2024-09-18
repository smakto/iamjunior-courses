/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export function useFilterCategories({ services, category }) {
  const [data, setData] = useState(services);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      return item.category.toLowerCase() === category.category;
    });
    setData(filteredData);
  }, [category]);

  return { data };
}
