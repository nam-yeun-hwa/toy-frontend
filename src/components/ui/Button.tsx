import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonType } from 'types/common/option';

export const Button = styled.div<{
	type: ButtonType;
	disabled?: boolean;
}>`
	position: relative;

	${props => {
		switch (props.type) {
			case ButtonType.PRIMARY:
				return css`
					width: 100%;
					height: 50px;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #9462e5;
					font-size: 17px;
					font-weight: 200;
					color: #fff;
					border-radius: 7px;
				`;
		}
	}}
`;
