import { Global, css } from '@emotion/react';
// import reset from "styled-reset";

const style = css`
	* {
		box-sizing: border-box;
	}

	html {
		width: 100%;
		height: 100%;
	}

	body {
		width: 100%;
		height: 100%;
		font-family: 'Apple SD Gothic Neo', Sans-serif;
		font-size: 10px;
		background-color: aliceblue;
		margin: 0;
		padding: 0;
	}

	#__next {
		height: 100%;
	}

	main {
		display: block;
	}

	h1 {
		font-size: 2em;
		margin: 0;
	}

	hr {
		box-sizing: content-box;
		height: 0;
		overflow: visible;
	}

	pre {
		font-family: monospace, monospace;
		font-size: 1em;
	}

	a {
		background-color: transparent;
		text-decoration: none;
		color: inherit;
	}

	abbr[title] {
		border-bottom: none;
		text-decoration: underline;
		text-decoration: underline dotted;
	}

	b,
	strong {
		font-weight: bolder;
	}

	code,
	kbd,
	samp {
		font-family: monospace, monospace;
		font-size: 1em;
	}

	small {
		font-size: 80%;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	img {
		border-style: none;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
	}

	button,
	input {
		overflow: visible;
	}

	button,
	select {
		text-transform: none;
	}

	[type='button'],
	[type='reset'],
	[type='submit'],
	button {
		-webkit-appearance: button;
	}

	[type='button']::-moz-focus-inner,
	[type='reset']::-moz-focus-inner,
	[type='submit']::-moz-focus-inner,
	button::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}

	[type='button']:-moz-focusring,
	[type='reset']:-moz-focusring,
	[type='submit']:-moz-focusring,
	button:-moz-focusring {
		outline: 1px dotted ButtonText;
	}

	fieldset {
		padding: 0.35em 0.75em 0.625em;
	}

	legend {
		box-sizing: border-box;
		color: inherit;
		display: table;
		max-width: 100%;
		padding: 0;
		white-space: normal;
	}

	progress {
		vertical-align: baseline;
	}

	textarea {
		overflow: auto;
	}

	[type='checkbox'],
	[type='radio'] {
		box-sizing: border-box;
		padding: 0;
	}

	[type='number']::-webkit-inner-spin-button,
	[type='number']::-webkit-outer-spin-button {
		height: auto;
	}

	[type='search'] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}

	[type='search']::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}

	details {
		display: block;
	}

	summary {
		display: list-item;
	}

	[hidden],
	template {
		display: none;
	}

	li {
		list-style: none;
	}

	button {
		background: inherit;
		border: none;
		box-shadow: none;
		border-radius: 0;
		padding: 0;
		overflow: visible;
		cursor: pointer;
	}

	select {
		-webkit-appearance: none; /* 네이티브 외형 감추기 */
		-moz-appearance: none;
		appearance: none;
	}

	/* IE 10, 11의 네이티브 화살표 숨기기 */
	select::-ms-expand {
		display: none;
	}

	//폰트
	@font-face {
		font-family: 'Apple SD Gothic Neo';
		font-style: light;
		font-weight: 200;
		src: url('/fonts/Apple/AppleSDGothicNeoL.woff2') format('font-woff2'),
			url('/fonts/Apple/AppleSDGothicNeoL.woff') format('woff'),
			url('/fonts/Apple/AppleSDGothicNeoL.otf') format('truetype');
	}

	@font-face {
		font-family: 'Apple SD Gothic Neo';
		font-style: normal;
		font-weight: 400;
		src: url('/fonts/Apple/AppleSDGothicNeoM.woff2') format('font-woff2'),
			url('/fonts/Apple/AppleSDGothicNeoM.woff') format('woff'),
			url('/fonts/Apple/AppleSDGothicNeoM.otf') format('truetype');
	}

	@font-face {
		font-family: 'Apple SD Gothic Neo';
		font-style: bold;
		font-weight: 600;
		src: url('/fonts/Apple/AppleSDGothicNeoB.woff2') format('font-woff2'),
			url('/fonts/Apple/AppleSDGothicNeoB.woff') format('woff'),
			url('/fonts/Apple/AppleSDGothicNeoB.otf') format('truetype');
	}

	//페이지 컨테이너
	.page_container {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}
`;

const GlobalStyle = () => {
	return <Global styles={style} />;
};

export default GlobalStyle;
