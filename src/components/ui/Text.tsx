import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';

const TextInputBox = styled.div`
	width: 100%;

	input {
		width: 100%;
		height: 44px;
		border: 1px solid ${props => props.theme.border.primary};
		border-radius: 6px;
		padding: 10px;

		font-weight: 200;
		font-size: 16px;
		/* line-height: 44px; */
		color: ${props => props.theme.text.primary};

		::placeholder {
			font-weight: 200;
			font-size: 15px;
			line-height: 44px;
			color: ${props => props.theme.text.primary};
		}
	}
`;

interface ITextProps {
	regName: string;
	placeholder: string;
	type?: string;
	validation?: {
		required: string;
		minLength: {
			value: number;
			message: string;
		};
		maxLength: {
			value: number;
			message: string;
		};

		pattern: {
			value: string;
			message: string;
		};
	};
}
function Text(props: ITextProps): JSX.Element {
	const { regName, placeholder, type, validation } = props;
	const { register } = useFormContext();

	return (
		<TextInputBox>
			<input
				type={type || 'text'}
				{...register(`${regName}`)}
				placeholder={placeholder}
			></input>
		</TextInputBox>
	);
}

export default Text;
