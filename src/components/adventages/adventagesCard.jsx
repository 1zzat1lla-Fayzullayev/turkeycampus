/* eslint-disable no-unused-vars */
import React from "react";

function AdvantagesCard() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="flex items-center gap-2 adventages-item bg-white p-4 shadow-md rounded-lg">
          <img src="/check-circle-broken.png" alt="Check circle" />
          <p>
            Free and Guaranteed{" "}
            <span className="text-[#e63f38]">University Acceptance</span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-2 adventages-item bg-white p-4 shadow-md rounded-lg">
          <img src="/sale-03.png" alt="Sale icon" />
          <p>
            <span className="text-[#e63f38]">Exclusive Discounts</span> up to
            75%
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-2 adventages-item bg-white p-4 shadow-md rounded-lg">
          <img src="/certificate-01.png" alt="Certificate icon" />
          <p>
            Free and Guaranteed{" "}
            <span className="text-[#e63f38]">University Acceptance</span>
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex items-center gap-2 adventages-item bg-white p-4 shadow-md rounded-lg">
          <img src="/zap-circle.png" alt="Zap circle icon" />
          <p>
            Free and Guaranteed{" "}
            <span className="text-[#e63f38]">University Acceptance</span>
          </p>
        </div>

        {/* Card 5 */}
        <div className="flex items-center gap-2 adventages-item bg-white p-4 shadow-md rounded-lg">
          <img src="/certificate-01.png" alt="Certificate icon" />
          <p>
            Free and Guaranteed{" "}
            <span className="text-[#e63f38]">University Acceptance</span>
          </p>
        </div>

        {/* Card 6 */}
        <div className="flex items-center gap-2 adventages-item bg-white p-4 shadow-md rounded-lg">
          <img src="/heart-hand.png" alt="Heart hand icon" />
          <p>
            Free and Guaranteed{" "}
            <span className="text-[#e63f38]">University Acceptance</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdvantagesCard;
