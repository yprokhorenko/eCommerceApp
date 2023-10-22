import Card from "./Card";
import styled from "styled-components";

const Wrapper = styled.section`
  .list {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

 const List =({ catId, maxPrice, sort, subCats })=> {

  return (
    <Wrapper>
      {/* <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div> */}
    </Wrapper>
  );
}

export default List;