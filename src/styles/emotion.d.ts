import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		primary: {
			main: string;
			light: string;
			dark: string;
		};
		secondary: {
			main: string;
			light: string;
			dark: string;
		};
		border: {
			main: string;
			light: string;
			dark: string;
		};
		info: {
			main: string;
			light: string;
			dark: string;
		};
		warning: {
			main: string;
			light: string;
			dark: string;
		};
		error: {
			main: string;
			light: string;
			dark: string;
		};
		background: {
			main: string;
			light: string;
			dark: string;
		};
		button: {
			active: string;
			hover: string;
			selected: string;
			disabled: string;
		};
	}
}

// You are also able to use a 3rd party theme this way:
import '@emotion/react';
// import { LibTheme } from "some-lib";

declare module '@emotion/react' {
	//   export interface Theme extends LibTheme {}
}
