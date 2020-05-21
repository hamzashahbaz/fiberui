import styled, { css } from 'styled-components';

const Button = styled.button`
	align-self: center;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px 20px;
	box-sizing: border-box;
	border: 2px solid ${(p) => p.theme.colors.B400};
	color: ${(p) => p.theme.colors.B400};
	font-weight: 500;
	font-size: 16px;
	text-decoration: none;
	svg {
		margin-left: 8px;
		fill: #0049c5;
	}
	@media ${(p) => p.theme.device.desktop} {
		&:hover {
			color: ${(p) => p.theme.colors.N0};
			background-color: ${(p) => p.theme.colors.B400};
			svg {
				fill: white;
			}
		}
	}
`;

Button.propTypes = {
	size: 'small',
	variant: 'text',
	color: 'primary',
	fullWidth: false,
	disabled: false,
};

export default Button;
