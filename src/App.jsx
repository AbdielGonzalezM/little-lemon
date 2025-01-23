import React, { useState } from 'react';
import Navbar from './components/Navbar';       // si así llamaste tu navbar
import MenuSection from './components/MenuSection'; // menú de platillos
import ReservationForm from './components/ReservationForm';
import SuccessScreen from './components/SuccessScreen';
import SEO from './components/SEO';
import { Menu } from 'lucide-react';

export default function App() {
  const [reservationDone, setReservationDone] = useState(false);

  const handleReservationSuccess = () => {
    setReservationDone(true);
  };

  const handleGoHome = () => {
    setReservationDone(false);
  };

  return (
    <>
      {/* Metaetiquetas de SEO */}
      <SEO
        title="Little Lemon - Reserva tu mesa"
        description="Reserva tu mesa en Little Lemon, un restaurante mediterráneo familiar con un toque moderno."
      />

      <nav style={ {  padding: '1rem', textAlign: 'justify', justifyContent: 'space-between', display: 'flex', flexDirection: 'row' } }>
        <button>
          <Menu size={24} />
        </button>
        <img src="https://restaurant-landing.pages.dev/letas.png" width={150} alt="Logo de Little Lemon" />
        <div></div>
      </nav>

      <Navbar />

      {reservationDone ? (
        <SuccessScreen onGoHome={handleGoHome} />
      ) : (
        <>
          <MenuSection />
          <ReservationForm onSuccess={handleReservationSuccess} />
        </>
      )}
    </>
  );
}
