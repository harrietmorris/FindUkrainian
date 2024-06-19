import { UserType } from "../Types/UserType";

const baseUrl: string = "http://localhost:3000";

const apiLoginService = async (user: UserType) => {
  try {
    const res = await fetch(`${baseUrl}/login`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

export default apiLoginService;
