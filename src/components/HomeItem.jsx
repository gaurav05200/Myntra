/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          <IoIosAddCircle /> Add to Bag
        </button>
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemove}
        >
          <MdDelete /> Remove
        </button>
      </div>
    </>
  );
};
export default HomeItem;
