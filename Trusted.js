import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3967/3967544.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://png.pngtree.com/png-vector/20220412/ourmid/pngtree-best-quality-100-guaranteed-red-badge-label-png-image_4539969.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://png.pngtree.com/png-clipart/20210711/original/pngtree-red-seal-for-premium-products-png-image_6521104.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://png.pngtree.com/png-vector/20220516/ourmid/pngtree-trust-gold-badge-png-png-image_4635237.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-simple-best-seller-symbol-png-image_5299870.jpg"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;