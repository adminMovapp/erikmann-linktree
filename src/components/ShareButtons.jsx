// src/components/ShareButtons.jsx
import React, { useState } from 'react';
import { FaWhatsapp, FaQrcode } from 'react-icons/fa';
import QrModal from './QrModal.jsx'; // versión React

export default function ShareButtons({ url }) {
   const [showQr, setShowQr] = useState(false);
   const shareText = ` ${url}`;
   const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

   return (
      <>
         <div className="flex justify-center gap-4 mt-8">
            <a
               href={whatsappUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition"
               aria-label="Compartir por WhatsApp"
            >
               <FaWhatsapp className="w-6 h-6" />
            </a>

            <button
               onClick={() => setShowQr(true)}
               className="bg-primary hover:bg-primary/70 text-white p-3 rounded-full shadow-md transition"
               aria-label="Mostrar QR"
            >
               <FaQrcode className="w-6 h-6" />
            </button>
         </div>

         {showQr && <QrModal url={url} onClose={() => setShowQr(false)} />}
      </>
   );
}
