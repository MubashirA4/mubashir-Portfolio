import type { ContactForm } from "@/schemas/contact";

export const firebaseConfig = {
  apiKey: "AIzaSyAPrkNsVztwbybQXf5wuc8qrbRae13XZHQ",
  authDomain: "portfolio-a7f30.firebaseapp.com",
  databaseURL: "https://portfolio-a7f30-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-a7f30",
  storageBucket: "portfolio-a7f30.firebasestorage.app",
  messagingSenderId: "1091600946659",
  appId: "1:1091600946659:web:da765ce56f394d00223cd6",
  measurementId: "G-181LEBC466"
};

// Optimized REST API Submission to avoid bundling massive Firebase SDK packages
export const submitToFirebase = async (data: ContactForm): Promise<unknown> => {
  const url = `${firebaseConfig.databaseURL}/messages.json`;
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      timestamp: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit response to Firebase");
  }

  return response.json();
};
