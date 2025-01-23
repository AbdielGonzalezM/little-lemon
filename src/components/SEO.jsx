// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({
  title = 'Little Lemon - Reserva tu mesa',
  description = 'Restaurante mediterráneo familiar con un giro moderno.',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Si gustas, agrega más meta tags (Open Graph, etc.) */}
    </Helmet>
  );
}
