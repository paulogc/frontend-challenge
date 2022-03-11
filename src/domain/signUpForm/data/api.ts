import type { FormData } from "domain/signUpForm/data/types";

export function submitForm(form: FormData) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3001/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);
        if (!response.ok) {
          reject(response.text);
        }
        resolve("ok");
      })
      .catch((e) => {
        reject(e);
      });
  });
}
