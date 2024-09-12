import { useParams } from "react-router-dom";

export function CategoryPage() {
  const { category } = useParams();

  return <div>{category}</div>;
}
