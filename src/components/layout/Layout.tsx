import styled from '@emotion/styled';
import Header from 'components/common/header/Header';

const LayoutBox = styled.section`
	position: relative;
	width: 100%;
	height: 100%;
	.container {
		position: relative;
		margin-top: 60px;
		width: 100%;
		height: 100%;
	}
`;

export interface AppLayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: AppLayoutProps): JSX.Element {
	return (
		<LayoutBox>
			<Header />
			<div className="container">{children}</div>
		</LayoutBox>
	);
}
