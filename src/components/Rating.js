import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

export default function Rating({ rating, numReviews }) {
  return (
    <div>
      <div className="rating">
        <span>
          <FontAwesomeIcon
            icon={
              rating >= 1 ? faStar : rating >= 0.5 ?faStarHalfAlt : faStarEmpty
            }
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={
              rating >= 2 ? faStar : rating >= 1.5 ? faStarHalfAlt : faStarEmpty
            }
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={
              rating >= 3 ? faStar : rating >= 2.5 ? faStarHalfAlt : faStarEmpty
            }
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={
              rating >= 4 ? faStar : rating >= 3.5 ? faStarHalfAlt : faStarEmpty
            }
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={
              rating >= 5 ? faStar : rating >= 4.5 ? faStarHalfAlt : faStarEmpty
            }
          />
        </span>

        <span>{numReviews + " reviews"}</span>
      </div>
    </div>
  );
}
