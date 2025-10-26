'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface GalleryCardProps {
  className?: string;
  style?: React.CSSProperties;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ className = '', style }) => {
  const [leftPressed, setLeftPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageUrl = event.target?.result as string;
          setImages(prev => [...prev, imageUrl]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleNext = () => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const getDisplayedImages = () => {
    if (images.length === 0) return [];
    if (images.length <= 3) return images;
    
    const displayed = [];
    for (let i = 0; i < 3; i++) {
      displayed.push(images[(currentIndex + i) % images.length]);
    }
    return displayed;
  };

  return (
    <div className={`rounded-lg overflow-hidden relative ${className}`} style={{ backgroundColor: '#363C43', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6), 4px 0 8px rgba(0, 0, 0, 0.6)', ...style }}>
      <div className="flex items-center justify-between p-5 px-3">
        <div className="flex content-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z" fill="url(#paint0_linear_1_107)"/>
            <defs>
              <linearGradient id="paint0_linear_1_107" x1="19.5" y1="27.5" x2="3.5" y2="2" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A4E54"/>
                <stop offset="1" stopColor="#A3ADBA"/>
              </linearGradient>
            </defs>
          </svg>
          
          <div 
            className="flex items-center justify-center text-xl font-semibold text-white"
            style={{
              width: '149px',
              height: '62px',
              backgroundColor: '#171717',
              borderRadius: '20px'
            }}
          >
            Gallery
          </div>
        </div>
        
        <div className="flex items-center gap-8">
           <input
             ref={fileInputRef}
             type="file"
             accept="image/*"
             multiple
             onChange={handleAddImage}
             className="hidden"
           />
           <button 
             onClick={() => fileInputRef.current?.click()}
             className="text-white px-6 py-3 rounded-lg text-sm font-bold uppercase transition-all duration-150 active:scale-95"
             style={{
               background: 'radial-gradient(circle at 30% 30%, #404040, #2a2a2a)',
               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
             }}
             onMouseDown={(e) => {
               e.currentTarget.style.background = 'radial-gradient(circle at 30% 30%, #2a2a2a, #1a1a1a)';
               e.currentTarget.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.2)';
             }}
             onMouseUp={(e) => {
               e.currentTarget.style.background = 'radial-gradient(circle at 30% 30%, #404040, #2a2a2a)';
               e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.background = 'radial-gradient(circle at 30% 30%, #404040, #2a2a2a)';
               e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
             }}
           >
             + ADD IMAGE
           </button>
          
           <div className="flex gap-2">
             <button 
               onClick={handlePrev}
               className="w-11 h-11 flex items-center justify-center transition-all duration-150 rounded-full active:scale-95"
               onMouseDown={() => setLeftPressed(true)}
               onMouseUp={() => setLeftPressed(false)}
               onMouseLeave={() => setLeftPressed(false)}
               style={{
                 background: leftPressed 
                   ? 'radial-gradient(circle at 30% 30%, #2a2a2a, #1a1a1a)'
                   : 'radial-gradient(circle at 30% 30%, #404040, #2a2a2a)',
                 boxShadow: leftPressed
                   ? 'inset 0 4px 8px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(0, 0, 0, 0.4)'
                   : '0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(94, 116, 142, 0.3)'
               }}
             >
               <img src="/Leftarrow.svg" alt="Left Arrow" className="w-3.5 h-3.5" />
             </button>
             
             <button 
               onClick={handleNext}
               className="w-11 h-11 flex items-center justify-center transition-all duration-150 rounded-full active:scale-95"
               onMouseDown={() => setRightPressed(true)}
               onMouseUp={() => setRightPressed(false)}
               onMouseLeave={() => setRightPressed(false)}
               style={{
                 background: rightPressed 
                   ? 'radial-gradient(circle at 30% 30%, #2a2a2a, #1a1a1a)'
                   : 'radial-gradient(circle at 30% 30%, #404040, #2a2a2a)',
                 boxShadow: rightPressed
                   ? 'inset 0 4px 8px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(0, 0, 0, 0.4)'
                   : '0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(94, 116, 142, 0.3)'
               }}
             >
               <img src="/Rightarrow.svg" alt="Right Arrow" className="w-3.5 h-3.5" />
             </button>
           </div>
        </div>
      </div>
      
      <div className="px-6 pb-0 flex justify-center relative">
      <div className="absolute bottom-24 left-4">
        <svg width="24" height="30" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
          <rect x="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
          <rect y="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
          <rect x="10.6878" y="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
          <rect y="21.3757" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
          <rect x="10.6878" y="21.3757" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
        </svg>
      </div>
        <div className="flex gap-4 justify-center w-full">
          {getDisplayedImages().length > 0 ? (
            getDisplayedImages().map((image, index) => (
              <motion.div 
                key={index} 
                style={{ width: '190px', height: '179px' }} 
                className="bg-gray-700 rounded-lg shadow-sm overflow-hidden group"
                whileHover={{ 
                  scale: 1.08, 
                  rotate: -1,
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))
          ) : (
            <>
              <div style={{ width: '190px', height: '179px' }} className="bg-gray-700 rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-full h-full rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #4b5563, #1f2937)' }}>
                  <span className="text-gray-400 text-xs">No images</span>
                </div>
              </div>
              
              <div style={{ width: '190px', height: '179px' }} className="bg-gray-700 rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-full h-full rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #4b5563, #1f2937)' }}>
                  <span className="text-gray-400 text-xs">No images</span>
                </div>
              </div>
              
              <div style={{ width: '190px', height: '179px' }} className="bg-gray-700 rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-full h-full rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #4b5563, #1f2937)' }}>
                  <span className="text-gray-400 text-xs">No images</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      
    </div>
  );
};
