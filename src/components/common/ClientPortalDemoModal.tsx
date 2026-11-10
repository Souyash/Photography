import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Download, Heart, ShoppingBag, Eye, CheckCircle2 } from 'lucide-react';

interface ClientPortalDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalDemoModal: React.FC<ClientPortalDemoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [favorites, setFavorites] = useState<string[]>(['p1', 'p3']);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const demoPhotos = [
    { id: 'p1', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600', title: 'Sunset Terrace Vows' },
    { id: 'p2', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600', title: 'Pont Alexandre Kiss' },
    { id: 'p3', url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600', title: 'Santorini Caldera Dawn' },
    { id: 'p4', url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=600', title: 'Highland Glen Gale' },
    { id: 'p5', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600', title: 'Kyoto Cedar Shrine' },
    { id: 'p6', url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600', title: 'Provence Courtyard Dinner' },
  ];

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#121214] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
        >
          {/* Top Bar of the Mock Portal */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#18181B] border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left">
                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#D4AF37]" />
                  <span>Sabyasachi Banerjee Private Vault™ · Client Suite Preview</span>
                </div>
                <div className="text-[10px] text-stone-400 font-mono">
                  Collection: Eleanor & Julian · Villa Balbiano (540 Photos)
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
              aria-label="Close demo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action Toolbar */}
          <div className="px-6 py-3 bg-[#151518] border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4 text-stone-300">
              <span className="flex items-center gap-1.5 text-[#D4AF37]">
                <Heart className="w-3.5 h-3.5 fill-[#D4AF37]" />
                <span>{favorites.length} Favorites Selected</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1 text-stone-400">
                <Eye className="w-3.5 h-3.5" /> High-Res 100% Zoom Active
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSimulateDownload}
                className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 flex items-center gap-1.5 text-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Download ZIP (Web & Print)</span>
              </button>

              <button
                onClick={() => alert('Integrated Fine Art Lab Ordering: Ships directly to client address in custom packaging.')}
                className="px-3 py-1.5 rounded-md bg-[#D4AF37] hover:bg-[#E5C378] text-[#0A0A0B] font-semibold flex items-center gap-1.5 text-xs transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Order Archival Prints</span>
              </button>
            </div>
          </div>

          {/* Notification banner on simulated download */}
          {downloadSuccess && (
            <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-6 py-2 flex items-center gap-2 text-xs text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Simulated: Master print zip archive initiated. High-resolution 300DPI files packaged.</span>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="p-6 overflow-y-auto flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {demoPhotos.map((photo) => {
              const isFav = favorites.includes(photo.id);

              return (
                <div
                  key={photo.id}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-[#18181B] border border-white/5 shadow-md"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Top Heart Badge */}
                  <button
                    onClick={() => toggleFavorite(photo.id)}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md transition-all text-white"
                    aria-label="Toggle favorite"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isFav ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-stone-300'
                      }`}
                    />
                  </button>

                  {/* Bottom title */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent text-[11px] text-stone-200">
                    {photo.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer of the Portal Demo */}
          <div className="px-6 py-4 bg-[#141417] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
            <span>Every commissioned couple receives lifetime private cloud vault access.</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
            >
              Exit Portal Demo
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
