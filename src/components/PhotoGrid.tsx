import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PhotoGrid.css";

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random?client_id=6mslEXjbctzxK_8Ep-MMsl5JA5JD5Sb1MinKKmRjxDE",
        {
          params: { count: 9 },
        }
      );
      const photoUrls = response.data.map((photo: any) => photo.urls.small);
      setPhotos(photoUrls);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const intervalId = setInterval(fetchPhotos, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((url, index) => (
        <div key={index} className="photo-item">
          <img src={url} alt={`Random Pic ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
