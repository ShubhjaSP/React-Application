import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const ImageUploadComponent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);
    try {
      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Image Upload</Typography>
        <input
          type="file"
          accept="image/*"
          id="image-upload"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor="image-upload">
          <Button component="span">Choose Image</Button>
        </label>
        {selectedImage && (
          <CardMedia
            component="img"
            src={URL.createObjectURL(selectedImage)}
            alt="Uploaded Image"
            style={{ marginTop: 10, maxWidth: 300 }}
          />
        )}
      
      </CardContent>
    </Card>
  );
};

export default ImageUploadComponent;
