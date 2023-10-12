import styled from '@emotion/styled';

interface IDescTxt {
	paddingTop?: string;
	paddingBottom?: string;
}

export const DescBox = styled.p<{ desc?: IDescTxt }>`
	font-size: 14px;
	color: ${props => props.theme.info.main};
	line-height: 18px;
	font-weight: 100;
	padding-top: ${props => props.desc?.paddingTop || null};
	padding-bottom: ${props => props.desc?.paddingBottom || null};
	opacity: 0.7;
	padding-left: 2px;
	margin: 0;
`;
