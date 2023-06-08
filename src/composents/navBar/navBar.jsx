import React from 'react';
import styled from 'styled-components';

const handleStylePosition = position => {
	switch (position) {
		case "left":
			return `
			width: 117px;
			flex-direction: column;
			align-items: center;
			justify-content: center;
				& ul{
					flex-direction: column;
					width: 100%;
					justify-content: center;
					padding: 0;
				}
			}
			`
		default:
			return `
			width: 100%;			
			height: 91px;
			& ul{
			padding: 0 81px 0 23px;
			list-style: none;
			color: white;
			margin: 0px;
			
			align-items: center;
			justify-content: space-between;
			font-family: Roboto;
			font-size: 24px;
			font-weight: 500;
			line-height: 24px;
			width: 100%;
			}
			`
	}
};


const NavStyled = styled.nav`
	background-color:#020203;
	margin: 0;
	display: flex;
	
	& ul{
		display: flex;
		align-items: center;
	}
	${({ position }) => handleStylePosition(position)};
	
`

function NavBar({position ,children}) {
  return (
    <NavStyled position={position} >
    	{children}
    </NavStyled>
  );
}
export default NavBar;
