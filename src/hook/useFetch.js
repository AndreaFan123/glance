import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  // set 3 stages
  const [datas, setDatas] = useState(null);
  const [laoding, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setDatas(res.data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { datas, laoding, error };
};
