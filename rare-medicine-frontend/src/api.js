// src/api.js
// Centralized wrapper around fetch for the Rare Medicine Locator backend

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  "https://rare-medical-locator.vercel.app";

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return token
    ? {
      Authorization: `Bearer ${token}`,
    }
    : {};
}

export async function request(
  endpoint,
  method = "GET",
  data = null,
  auth = true
) {
  const url = `${API_BASE}${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
    ...(auth ? getAuthHeaders() : {}),
  };

  const options = {
    method,
    headers,
    credentials: "include",
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message || "API Error");
  }

  return json;
}

// =======================
// Auth APIs
// =======================

export const authApi = {
  register: (payload) =>
    request("/api/auth/register", "POST", payload, false),

  login: (payload) =>
    request("/api/auth/login", "POST", payload, false),
};

// =======================
// Medicine APIs
// =======================

export const medicineApi = {
  list: () => request("/api/medicines"),

  create: (data) =>
    request("/api/medicines", "POST", data),

  update: (id, data) =>
    request(`/api/medicines/${id}`, "PUT", data),

  delete: (id) =>
    request(`/api/medicines/${id}`, "DELETE"),
};

// =======================
// Shop APIs
// =======================

export const shopApi = {
  nearby: (lat, lng, radius = 5000) =>
    request(
      `/api/shops/nearby?lat=${lat}&lng=${lng}&radius=${radius}`
    ),
};