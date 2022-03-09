import { useEffect, useState } from "react";

export const useMoreInfoPage = () => {
  const [colors, setColor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3001/api/colors`)
      .then((res) => res.json())
      .then((data) => {
        setColor(data);
      })
      .catch(() => {
        console.log("error");
        setColor([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, colors };
};
