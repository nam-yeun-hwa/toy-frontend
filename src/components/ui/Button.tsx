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
					background-color: ${props.theme.primary.main}
					font-size: 17px;
					font-weight: 200;
					color: #fff;
					border-radius: 7px;
				`;

			case ButtonType.BOTTOM:
				return css`
					position: fixed;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 60px;
					font-size: 16px;
					color: white;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: ${props.theme.button.disabled
						? props.theme.button.disabled
						: props.theme.button.active};
				`;
		}
	}}
`;
