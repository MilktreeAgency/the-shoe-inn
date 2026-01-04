import React, { useEffect, useState } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { X, Calendar, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Configure your Cal.com username here after setting up the backend
const CAL_USERNAME = "theshoeinn"; // Update this with your actual Cal.com username

interface Room {
  id: number;
  title: string;
  slug: string;
  price: string;
  description: string;
}

// Room configurations matching Cal.com event types
const ROOMS: Room[] = [
  {
    id: 1,
    title: "King Suite - Room 1",
    slug: "room-1-king-suite",
    price: "£110",
    description: "Luxury King-size Hypnos bed with rainfall shower"
  },
  {
    id: 2,
    title: "Garden King - Room 2",
    slug: "room-2-garden-king",
    price: "£110",
    description: "King room with direct garden access"
  },
  {
    id: 3,
    title: "Cosy Double - Room 3",
    slug: "room-3-double",
    price: "£100",
    description: "Quiet double room with walk-in shower"
  },
  {
    id: 4,
    title: "Twin/Super King - Room 4",
    slug: "room-4-twin",
    price: "£120",
    description: "Flexible twin or super king configuration"
  },
  {
    id: 5,
    title: "Dog Friendly - Room 5",
    slug: "room-5-dog-friendly",
    price: "£120",
    description: "Spacious room welcoming four-legged friends"
  }
];

interface RoomBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomId?: number;
}

export const RoomBookingModal: React.FC<RoomBookingModalProps> = ({ 
  isOpen, 
  onClose, 
  roomId 
}) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(
    roomId ? ROOMS.find(r => r.id === roomId) || null : null
  );
  const [isCalLoading, setIsCalLoading] = useState(true);

  useEffect(() => {
    if (roomId) {
      setSelectedRoom(ROOMS.find(r => r.id === roomId) || null);
    }
  }, [roomId]);

  useEffect(() => {
    if (isOpen && selectedRoom) {
      (async () => {
        const cal = await getCalApi();
        cal("ui", {
          theme: "light",
          styles: { 
            branding: { brandColor: "#1a3a2f" } // forest-900
          },
          hideEventTypeDetails: false,
        });
        // Give calendar time to load
        setTimeout(() => setIsCalLoading(false), 1000);
      })();
    }
  }, [isOpen, selectedRoom]);

  // Reset loading state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsCalLoading(true);
      if (!roomId) {
        setSelectedRoom(null);
      }
    }
  }, [isOpen, roomId]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-forest-900 text-parchment-100 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar size={24} className="text-gold" />
              <div>
                <h2 className="font-heading font-bold text-xl">
                  {selectedRoom ? `Book ${selectedRoom.title}` : 'Select a Room'}
                </h2>
                {selectedRoom && (
                  <p className="text-sm text-parchment-200">
                    {selectedRoom.price} per night
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
            {!selectedRoom ? (
              // Room Selection Grid
              <div className="p-6">
                <p className="text-charcoal-light mb-6 text-center">
                  Choose a room to view availability and book your stay
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ROOMS.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room)}
                      className="p-6 bg-parchment-50 border border-parchment-200 rounded-sm text-left hover:border-gold hover:shadow-md transition-all group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-heading font-bold text-lg text-forest-800 group-hover:text-gold transition-colors">
                          {room.title}
                        </h3>
                        <span className="text-gold font-bold">{room.price}</span>
                      </div>
                      <p className="text-sm text-charcoal-light">{room.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Calendar Embed
              <div className="relative min-h-[500px]">
                {isCalLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-parchment-50">
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 size={40} className="animate-spin text-forest-800" />
                      <p className="text-charcoal-light">Loading availability...</p>
                    </div>
                  </div>
                )}
                <Cal
                  calLink={`${CAL_USERNAME}/${selectedRoom.slug}`}
                  style={{ 
                    width: "100%", 
                    height: "600px",
                    overflow: "scroll"
                  }}
                  config={{ 
                    layout: "month_view",
                    theme: "light"
                  }}
                />
                
                {/* Back Button */}
                <div className="p-4 border-t border-parchment-200 bg-white">
                  <button
                    onClick={() => setSelectedRoom(null)}
                    className="text-sm text-forest-800 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    ← Choose a different room
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Inline booking component for embedding directly in pages
interface RoomBookingInlineProps {
  roomSlug: string;
  className?: string;
}

export const RoomBookingInline: React.FC<RoomBookingInlineProps> = ({ 
  roomSlug, 
  className = "" 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { 
          branding: { brandColor: "#1a3a2f" }
        },
        hideEventTypeDetails: false,
      });
      setTimeout(() => setIsLoading(false), 1000);
    })();
  }, []);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-parchment-50 rounded-sm">
          <Loader2 size={32} className="animate-spin text-forest-800" />
        </div>
      )}
      <Cal
        calLink={`${CAL_USERNAME}/${roomSlug}`}
        style={{ 
          width: "100%", 
          height: "500px",
          minHeight: "500px"
        }}
        config={{ 
          layout: "month_view",
          theme: "light"
        }}
      />
    </div>
  );
};

// Export room data for use in other components
export { ROOMS, CAL_USERNAME };
export type { Room };

