import { Link } from "react-router-dom";

function SalonCard({ salon }) {
  const mapUrl = salon.mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(salon.mapQuery)}`
    : `https://www.google.com/maps/search/?api=1&query=${salon.latitude},${salon.longitude}`;

  return (
    <div className="salon-card">
      <img
        src={salon.image}
        alt={salon.name}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = "/images/salon-fallback.svg";
        }}
      />

      <div className="salon-card-content">
        <h3>{salon.name}</h3>
        <p>📍 {salon.location}</p>
        <p>⭐ {salon.rating} ({salon.reviewCount} تقييم)</p>
        <p>🧴 {salon.services[0]} • {salon.services[1]}</p>
        <p>🕒 {salon.hours}</p>
        <p>💰 {salon.priceRange}</p>

        <div className="card-actions">
          <Link to={`/salons/${salon.id}`} className="view-button">
            عرض الصالون
          </Link>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <span className="location-icon" aria-hidden="true">📍</span>
            الموقع
          </a>
        </div>

        <div className="social-mini-links">
          {salon.instagram && (
            <a href={salon.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
          <a href={salon.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          {salon.whatsapp && (
            <a href={salon.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SalonCard;