import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
	width: ${(p) => (p.align == 'center' ? '100%' : 'auto')};
	font-size: ${(p) => p.theme.typography[p.size].size};
	line-height: ${(p) => p.theme.typography[p.size].lineHeight};
	font-weight: ${(p) => p.theme.typography[p.size].weight};
	color: ${(p) => p.theme.colors[p.color]};
	text-align: ${(p) => p.align};
`;

const Title = (props) => {
	return (
		<Text size={props.size} color={props.color} align={props.align}>
			{props.text}
		</Text>
	);
};

Title.defaultProps = {
	size: 'body1',
	color: 'N700',
	align: 'left',
};

export default Title;
