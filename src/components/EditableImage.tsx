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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newSrc = reader.result as string;
        setCurrentSrc(newSrc);
        onImageChange?.(newSrc);
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
      
      {isHovered && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity">
          <button
            onClick={handleEditClick}
            className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <Icon name="Upload" size={20} />
            <span>Заменить фото</span>
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
