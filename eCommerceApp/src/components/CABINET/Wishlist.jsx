import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const WishlistItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const ProductName = styled.span`
  font-size: 16px;
`;

const RemoveButton = styled.button`
  color: #ff0000;
  background: none;
  border: none;
  cursor: pointer;
`;

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <Container>
      <Title>Wishlist</Title>
      {wishlistItems.map(item => (
        <WishlistItem key={item.id}>
          <ProductName>{item.name}</ProductName>
          <RemoveButton>Remove</RemoveButton>
        </WishlistItem>
      ))}
    </Container>
  );
};

export default Wishlist;
