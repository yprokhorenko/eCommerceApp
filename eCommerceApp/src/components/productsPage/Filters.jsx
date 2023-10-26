import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueValues } from "../../constants";

const Wrapper = styled.div``;

const Filters = ({ clearFilter, updateFilter }) => {
  const dispatch = useDispatch();
  const {
    text,
    company,
    category,
    color,
    min_price,
    max_price,
    price,
    shipping,
  } = useSelector((state) => state.products.filters);
  const products = useSelector((state) => state.products.products);

  const categories = getUniqueValues(products, "category");
  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");
  console.log("colors", colors);

  return (
    <Wrapper>
      <div className="container">
        <form action="" className="form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="search"
            className="input"
            value={text}
            onChange={updateFilter}
          />
        </form>
      </div>
    </Wrapper>
  );
};

export default Filters;
