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
			font-size: 16px;
			line-height: 44px;
			color: ${props => props.theme.text.primary};
		}
	}
`;

interface ITextProps {
	regName: string;
	placeholder: string;
}
function Text(props: ITextProps): JSX.Element {
	const { regName, placeholder } = props;
	const { register } = useFormContext();

	return (
		<TextInputBox>
			<input
				type="text"
				{...register(`${regName}`)}
				placeholder={placeholder}
			></input>
		</TextInputBox>
	);
}

export default Text;
