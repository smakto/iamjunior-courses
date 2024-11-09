import { Service } from "@/types/types-service";
import axios from "axios";
import { useEffect, useState } from "react";

export function useFavorites(service: Service) {
  const [favoriteStatus, setFavoriteStatus] = useState(service.favorite);

  async function setFavorite(serviceId: string): Promise<void> {
    const body = JSON.stringify({ favorite: true });
    axios.put(`http://localhost:3000/business/${serviceId}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setFavoriteStatus(true);
  }

  async function removeFavorite(serviceId: string): Promise<void> {
    const body = JSON.stringify({ favorite: false });
    axios.put(`http://localhost:3000/business/${serviceId}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setFavoriteStatus(false);
  }

  return { setFavorite, removeFavorite, favoriteStatus };
}
