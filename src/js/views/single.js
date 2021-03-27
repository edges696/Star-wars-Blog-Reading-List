import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);

	const params = useParams();
	return (
		<div className="container align-self-center">
			<div className="row" id="mainview">
				<div className="col-6 col-md-6">
					<img
						className="img-fluid border border-warning rounded-left "
						src="https://cdn.dribbble.com/users/50387/screenshots/2368315/st.gif"
					/>
				</div>
				<div className="col-6 col-md-6 text-center bg-dark border border-warning text-light rounded-right">
					<h1 className="text-warning">{store.personajes[params.theid].name}</h1>
					<p>
						The movie revolves around a civil war taking place in a galaxy far far away. The Rebels are
						fighting against the nefarious Darth Vader and his Imperial forces from the Galactic Empire, a
						tyrannical army intent on destroying civilizations across the universe. Princess Leia is head of
						the Rebels Alliance and manages to steal Imperial blueprints and details about a deadly weapon
						and space station called the Death Star. When she is captured by Imperial forces, she puts the
						plans in the memory of a droid, R2-D2, who escapes with another droid, C-3PO to the planet of
						Tatooine.
					</p>
				</div>
				<Link to="/">
					<span className="ml-5 btn btn-warning text-dark" href="#" role="button" id="homespace">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

Single.propTypes = {
	name: PropTypes.string
};
