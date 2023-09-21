import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
  .card {
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 10;
    margin-bottom: 50px;
}

.card_img {
    position: relative;
    height: 350px;
    width: 100%;
    overflow: hidden;
    border-radius: 3px;

    .image-main {
        transition: all 0.3s ease;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

    .image-sec {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    .image-main:hover {
        opacity: 0;
    }

}

.card-price {
    margin-top: 10px;

    .old_price {
        color: #999;
        text-decoration: line-through;
        margin-right: 5px;
    }

    .price {
        color: #333;
        font-weight: bold;
    }
}

.new-season {
    position: absolute;
    background-color: white;
    padding: 3px;
    font-size: 14px;
    z-index: 1;
    top: 5px;
    left: 5px;
    color: yellowgreen;
}


.card-title {
    font-weight: bold;
    margin-top: 10px;
}

.card-title {
    font-size: 16px;
}
  
`


export default function Card({item}) {
  console.log(item)
    return (
      <Wrapper>
        <NavLink to={`/product/${item.id}`} className="card_link" >
          <div className="card">
            <div className="card_img">
              {item?.attributes.isNew && <span className="new-season">New Season</span>}
              <img src={"http://localhost:1337" + item?.attributes?.img?.data?.attributes?.url} alt="" className="image-main" />
              <img src={"http://localhost:1337" + item?.attributes?.img2?.data?.attributes?.url} alt="" className="image-sec" />
            </div>
            <h3 className="card-title">{item.attributes.title}</h3>
            <div className="card-price">
              <span className="old_price">${item?.attributes.oldPrice || item?.attributes.price + 20}</span>
              <span className="price">${item?.attributes.price}</span>
            </div>
          </div>
        </NavLink >
      </Wrapper>
  )
}