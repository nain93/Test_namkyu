import React, { useState } from "react";
import bannerData from "../../data/bannerData.json";
import { IoIosArrowDown } from "react-icons/io";

function RollingBanner() {
  const [isRolling, setIsRoiing] = useState(false);

  const handleRolling = () => {
    if (isRolling) {
      setIsRoiing(false);
      return;
    }
    setIsRoiing(true);
    return;
  };
  return (
    <>
      <div className={isRolling ? "banner-open-box" : "banner-box"}>
        {isRolling ? (
          <>
            {bannerData.map((item, idx) => {
              return (
                <div key={idx}>
                  <button>
                    [{item.comment}] {item.label} {item.price}
                  </button>
                </div>
              );
            })}
          </>
        ) : (
          <div>
            <button>
              [{bannerData[0].comment}] {bannerData[0].label}{" "}
              {bannerData[0].price}
            </button>
          </div>
        )}
        <div className="arrow-logo" onClick={handleRolling}>
          <IoIosArrowDown
            size="20"
            style={
              isRolling && {
                transform: "rotate(180deg)",
              }
            }
          />
        </div>
      </div>
    </>
  );
}

export default RollingBanner;
