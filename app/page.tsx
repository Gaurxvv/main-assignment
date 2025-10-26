import { ProfileCard } from './components/ProfileCard';
import { GalleryCard } from './components/GalleryCard';

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#24282d' }}>
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="flex gap-8 items-start">
          <div 
            className="rounded-lg shadow-sm"
            style={{ 
              backgroundColor: '#363C43',
              width: '720px',
              height: '696px'
            }}
          >
          </div>
          
          <div className="flex flex-col gap-4 items-center">
            <ProfileCard 
              className="relative"
              style={{ 
                width: '720px',
                height: '316px'
              }}
            />
            
            <div 
              className="rounded-lg"
              style={{ 
                backgroundColor: '#363C43',
                width: '720px',
                height: '4px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}
            >
            </div>
            
            <GalleryCard 
              style={{ 
                width: '720px',
                height: '316px'
              }}
            />
            
            <div 
              className="rounded-lg"
              style={{ 
                backgroundColor: '#363C43',
                width: '720px',
                height: '4px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}
            >
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
