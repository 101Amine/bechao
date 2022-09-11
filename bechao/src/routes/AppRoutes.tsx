import React from "react";
import { Route } from "react-router-dom";

import {createBrowserHistory} from 'history';  
export const history = createBrowserHistory();
const AppRoutes : React.FC<any> = ( props) => {

	console.log('props in routes',props);
	return (
		// Wrap root element with user context
		<Route
			exact={props.exact}
			path={props.path}
			history={history}
			render={(propss: JSX.IntrinsicAttributes) =>
				<props.component {...propss} />

			}
			{...props.rest}
		/>
	)
}

export default AppRoutes