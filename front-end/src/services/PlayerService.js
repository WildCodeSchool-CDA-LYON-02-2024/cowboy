import { jwtDecode } from "jwt-decode";

export const registerService = async ({ username, email, password }) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      }
    );
    console.log(response, "RESPONSE");

    const responseData = await response.json();
    console.log(responseData, "RRRRRRRRRRRRRRRRRRRRRRR");

    if (response.status === 200) {
      return { success: true };
    } else {
      const error =
        responseData.message ||
        "Une erreur est survenue lors de l'inscription.";
      return { success: false, error };
    }
  } catch (err) {
    console.error("Network error:", err);
    return {
      success: false,
      error: "Erreur de connexion au serveur. Veuillez réessayer plus tard.",
    };
  }
};

export const loginService = async (email, password) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.status === 200) {
      const userData = await response.json();
      const token = userData.token;
      console.log(token, "TOKEN");

      if (!token) {
        return {
          success: false,
          error: "Aucun jeton d'authentification fourni",
        };
      }

      // Stocker le token dans le localStorage pour les requêtes ultérieures
      localStorage.setItem("authToken", token);

      // Décoder le jeton pour extraire le rôle
      const decodedToken = jwtDecode(token);
      console.log(decodedToken, "DECODED TOKEN");
      // const role = decodedToken.adherent.adherentRole;
      // console.log(role, "ROLE");

      // // Stocker le rôle décodé dans le localStorage
      // localStorage.setItem("userRole", role);

      return { success: true, user: userData };
    } else {
      const error = await response.json();
      return {
        success: false,
        error: error.message || "Email ou mot de passe incorrect",
      };
    }
  } catch (err) {
    console.error("Login service error:", err);
    return { success: false, error: err.message };
  }
};
