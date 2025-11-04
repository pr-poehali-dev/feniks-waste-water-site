import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
  onImageChange?: (newSrc: string) => void;
}

const EditableImage = ({ src, alt, className = '', onImageChange }: EditableImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result as string;
        
        try {
          const response = await fetch('https://functions.poehali.dev/fba8a974-cb42-470c-8f9c-c38ce90e7118', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              image: base64Image
            })
          });
          
          const data = await response.json();
          
          if (data.url) {
            setCurrentSrc(data.url);
            onImageChange?.(data.url);
            localStorage.setItem(`image-${alt}`, data.url);
          }
        } catch (error) {
          console.error('Upload failed:', error);
          setCurrentSrc(base64Image);
        } finally {
          setIsUploading(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={currentSrc} alt={alt} className={className} />
      
      {(isHovered || isUploading) && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity">
          <button
            onClick={handleEditClick}
            disabled={isUploading}
            className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            <Icon name={isUploading ? "Loader2" : "Upload"} size={20} className={isUploading ? "animate-spin" : ""} />
            <span>{isUploading ? 'Загрузка...' : 'Заменить фото'}</span>
          </button>
        </div>
      )}
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default EditableImage;