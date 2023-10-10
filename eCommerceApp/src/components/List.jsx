import Card from "./Card";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const Wrapper = styled.section`
  .list {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

 const List =({ catId, maxPrice, sort, subCats })=> {
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
console.log("data666", data)
  return (
    <Wrapper>
      <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
    </Wrapper>
  );
}

export default List;