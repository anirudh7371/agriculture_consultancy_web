import React from 'react';
import './Card.css';

/**
 *  - icon (string)      — Font Awesome class string
 * Generic Card component.
 *
 * Props:
 *  - icon (string)      — emoji or text icon
 *  - tag (string)       — optional pill badge
 *  - title (string)
 *  - subtitle (string)  — optional muted subtitle
 *  - description (string)
 *  - highlights (string[]) — optional list of bullet highlights
 *  - image (string)     — optional image url
 *  - imageAlt (string)
 *  - footer (ReactNode) — optional footer content (buttons etc.)
 *  - className (string) — additional class names
 */
const Card = ({
  icon,
  tag,
  title,
  subtitle,
  description,
  highlights = [],
  image,
  imageAlt = '',
  footer,
  className = '',
}) => {
  return (
    <div className={`card fade-up ${className}`}>
      {image && (
        <div className="card-image-wrap">
          <img src={image} alt={imageAlt || title} className="card-image" />
        </div>
      )}

      <div className="card-body">
        {(icon || tag) && (
          <div className="card-header-row">
            {icon && <span className="card-icon"><i className={icon} aria-hidden="true"></i></span>}
            {tag && <span className="tag">{tag}</span>}
          </div>
        )}

        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {description && <p className="card-description">{description}</p>}
                <i className="fa-solid fa-check check" aria-hidden="true"></i>
        {highlights.length > 0 && (
          <ul className="card-highlights">
            {highlights.map((h, i) => (
              <li key={i}>
                 <i className="fa-solid fa-check check" aria-hidden="true"></i>
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>

      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
