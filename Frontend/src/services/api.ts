import axios from "axios";
import type { PredictionHistory } from "../lib/supabase";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: API_URL,
});

const parseArrayResponse = (data: any): string[] => {
  if (!data) return [];
  if (Array.isArray(data)) {
    if (data.length === 0) return [];
    if (typeof data[0] === "string") {
      try {
        return JSON.parse(data[0]);
      } catch {
        return data;
      }
    }
    return data[0] || [];
  }
  return [];
};

export const predictDisease = async (
  symptoms: string[]
): Promise<PredictionHistory> => {
  try {
    const symptomsQuery = symptoms.join(",");
    const response = await api.get(`/predict?symptoms=${symptomsQuery}`);

    if (
      !response.data ||
      response.data.status !== "success" ||
      !response.data.data
    ) {
      throw new Error("Invalid response format from server");
    }

    const { data } = response.data;

    // Polyfill for crypto.randomUUID
    const generateUUID = () => {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    };

    const uuid = window.crypto?.randomUUID?.() ?? generateUUID();
    return {
      id: uuid,
      user_id: "",
      symptoms,
      predicted_disease: data.predicted_disease || "",
      description: data.description || "",
      medications: parseArrayResponse(data.medications),
      diet: parseArrayResponse(data.diet),
      workout: Array.isArray(data.workout) ? data.workout : [],
      precautions: Array.isArray(data.precautions) ? data.precautions : [],
      created_at: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error predicting disease:", error);
    throw error;
  }
};
