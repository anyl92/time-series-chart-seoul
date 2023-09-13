import { MouseEvent } from "react";
import "../styles/filter.css";
import { regions } from "../constants/constants";

const Filter = ({
  handleClickFilter,
}: {
  handleClickFilter: (idx: number) => void;
}) => {
  return (
    <div className="filter_box">
      {regions.map((region, idx) => (
        <button
          key={idx}
          className="filter_item"
          type="button"
          onClick={() => handleClickFilter(idx)}
        >
          {region}
        </button>
      ))}
    </div>
  );
};

export default Filter;
