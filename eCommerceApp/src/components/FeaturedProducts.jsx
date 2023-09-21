import Card from "./Card";
import useFetch from "../hooks/useFetch";

import styled from "styled-components";

const Wrapper = styled.section`
  .featuredProducts {
    max-width: 1260px;
    margin: 100px auto;
    padding: 0 30px;

    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;

      .top-title {
        flex: 1;
      }

      .top-desc {
        flex: 2;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: flex-start;
    gap: 50px;
  }
`;

const FeaturedProducts = ({ type }) => {

  const { data, loading, error } = useFetch (
    `products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <Wrapper>
      <div className="featuredProducts">
        <div className="top">
          <h2 className="top-title"> {type} Products</h2>
          <p className="top-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur accusamus sint nihil commodi odio excepturi delectus
            veniam ullam voluptatem saepe, minima quia illo, necessitatibus
            itaque neque aliquam corrupti explicabo et.
          </p>
        </div>
        <div className="bottom">
          {error
            ? "Something went wrong!"
            : loading
            ? "Loading"
            : data.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
