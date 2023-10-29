import styled from '@emotion/styled';
import { routerPath } from 'common/option';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Header(): JSX.Element {
	const router = useRouter();
	const [curRouter, setCurRouter] = useState('');

	useEffect(() => {
		let temp = routerPath.find(v => v.path === router.pathname);
		if (temp) {
			setCurRouter(temp.label);
		}
	}, []);

	return <HeaderBox>{curRouter}</HeaderBox>;
}

const HeaderBox = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(60px + env(safe-area-inset-top));
	font-size: 18px;
	line-height: 60px;
	text-align: center;
	background-color: aliceblue;
`;
