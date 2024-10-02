/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Service } from "../components/ServiceCards/types-service";

type userFilterHookProps = {
  services: Service[];
  category: string;
};

export function useFilterCategories({
  services,
  category,
}: userFilterHookProps) {
  const [initData] = useState<Service[]>(services);
  const [data, setData] = useState<Service[] | null>(null);

  useEffect(() => {
    const filteredData = initData.filter((item) => {
      return item.category.toLowerCase() === category.toLowerCase();
    });
    setData(filteredData);
  }, [category, initData]);

  return { data };
}
