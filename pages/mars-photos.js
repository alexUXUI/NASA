import { useState, useEffect } from "react";
import axios from "axios";

const useMarsPhotos = () => {
  const [marsData, setMarsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
      )
      .then((response) => {
        setLoading(false);
        setMarsData(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return {
    marsData,
    loading,
    error,
  };
};

export default function MarsPhotos() {
  const { marsData, loading, error } = useMarsPhotos();

  if (error) {
    return <p>Error: {error.message}</p>;
  } else if (loading) {
    return <p>Loading...</p>;
  } else if (!marsData) {
    return <p>No data</p>;
  } else {
    return (
      <div>
        <h1>Mars Photos</h1>
        <ul>
          {marsData.photos.map((photo) => (
            <li key={photo.id}>
              <a href={photo.img_src}>{photo.img_src}</a>
              <img src={photo.img_src} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
