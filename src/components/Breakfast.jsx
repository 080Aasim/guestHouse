import React from "react";
import { Product } from "../cardInfo";
import { Link } from "react-router-dom";
import "./Breakfast.css";
function Breakfast() {
  return (
    <div>
      <div className="b-section-1">
        <img src="https://images.unsplash.com/photo-1562413255-16d008a3532b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className="b-section-2">
        <div className="b-top">
          <div className="b-l-text">
            <h2>
              Enjoy locally produced ingredients from the Blackwater Ridge area
            </h2>
          </div>
          <div className="b-r-text">
            <p>
              Our menu is inspired by local and organic foods, family recipes
              and fresh flavors of the seasons. We strive to offer our guests a
              healthy meal to begin the day. Please let us know any dietary
              requirements or special requests that you may have! Vegan, Lactose
              and Gluten Free available on request.
            </p>
            <h3>
              <i>Beverages, available by 7:00 am:</i>
            </h3>
            <p>
              1. Coffee- We feature certified organic Cafe Equitas, decaf
              available by request, produced locally by Longbottom Coffee
              Rosters
            </p>
            <p>2. Tea- Organic silk bag varieties</p>

            <h3>
              <i>Avilable by 7:30 am:</i>
            </h3>
            <p>1. Scones, muffins or a fresh baked pastry or</p>
            <p>2. Organic granola with yogurt</p>
            <p>3. Fresh or dried fruits of the season</p>
          </div>
        </div>
        <div className="bottom">
          <div className="b-display">
            <div className="b-display1"></div>
            <div className="b-display2"></div>
            <div className="b-display3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breakfast;
