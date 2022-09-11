import React from "react";
import { Form } from "rsuite";


// TODO ref: https://hashrocket.com/blog/posts/managing-react-router-pathnames
export const paths = {
	form: "/"
	
	
};

export const routes = [
	{
		path: paths.form,
		element: Form,
		isPrivate: false,
		exact: true,
		title: "Form",
	},
]
// 	{
// 		path: paths.surclassement,
// 		component: Surclassement,
// 		isPrivate: false,
// 		exact: false,
// 		// title: "Tableau de bord",
// 	},

	
// ]
