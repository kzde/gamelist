import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { colorPalettes, headerHeight, textSizes, margins } from '../utils/styleUtils';

const Wrapper = styled.div`
display: flex;
align-items: center;
height: ${headerHeight};
background: ${colorPalettes.black};
`;

const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: ${textSizes.titleText};
  color: ${colorPalettes.white};
`;

const Logo = styled.div`
  display: inherit;
  padding: 0 ${margins.medium};
`

const Header = ({ text }) => {
  return (
    <Wrapper>
      <NavLink to="/">
        <Logo>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 15.9836C31.6407 -0.406415 9.01656 -6.51964 0.302601 8.84542C0.690308 9.11873 1.21986 9.48313 1.60757 9.7428C0.945628 11.0866 0.496452 12.4577 0.255319 13.8335C0.0898347 14.7308 0 15.6556 0 16.594C0 25.0941 7.17256 32 16.0047 32C24.8369 32 31.9953 25.1078 31.9953 16.594C32 16.389 32 16.184 32 15.9836ZM3.94801 18.7304C3.73995 20.3931 3.87233 20.9124 3.87233 21.1128L3.48463 21.2449C3.33334 20.9716 2.97399 20.0013 2.80851 18.7031C2.38771 13.7469 5.9007 9.27815 11.253 8.43996C16.156 7.74756 20.8558 10.6812 21.948 14.7855L21.5603 14.9176C21.4421 14.8037 21.2435 14.4712 20.4965 13.7469C14.5721 8.03455 5.27188 10.6493 3.94801 18.7304ZM19.1773 21.5046C18.383 22.6024 17.078 23.3131 15.5934 23.3131C13.1773 23.3131 11.2293 21.4363 11.2293 19.1085C11.2293 16.8992 13.0166 15.0771 15.2813 14.9176C16.6903 14.8584 18.0095 15.5964 18.6289 16.7807C19.305 18.0653 19.0638 19.6415 18 20.712C18.3972 20.9853 18.7849 21.2449 19.1773 21.5046ZM28.2837 21.664C25.9716 26.7067 21.2198 29.3534 16.1466 29.2805C6.41135 28.8158 3.57447 17.9924 10.0851 14.0885L10.3688 14.3619C10.2648 14.5076 9.87233 14.7946 9.27187 15.938C8.56737 17.3274 8.34043 18.7122 8.43028 19.5823C8.94089 27.1395 19.9338 28.6883 23.7163 21.1994C28.539 10.9545 15.7542 0.531978 4.41608 8.49465L4.16077 8.24865C7.14421 3.73891 12.9835 1.73002 18.5485 3.07383C27.0497 5.14193 31.6265 13.6831 28.2837 21.664Z" fill="white" />
          </svg>
        </Logo>
      </NavLink>

      <Title>
        {text}
      </Title>
    </Wrapper>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}
export default Header;