import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanetas = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col">
			<div className="card shadow my-3">
				<img
					src="https://media0.giphy.com/media/xT1R9BU7SSDC93MPQc/giphy.gif"
					className="card-img-top rounded-top border border-warning"
					alt="..."
				/>
				<div className="card-body bg-dark text-light rounded-bottom border border-warning">
					<h5 className="card-title">
						<strong>Name:</strong> {props.name}
					</h5>
					<p className="card-text">
						<strong>Diameter:</strong> {props.diameter}
					</p>
					<p className="card-text">
						<strong>Population:</strong> {props.population}
					</p>
					<p className="card-text">
						<strong>Terrain:</strong> {props.terrain}
					</p>
					<div className="row">
						<div className="col-6">
							<Link to="/single">
								<div className="btn btn-warning text-dark">Learn More</div>
							</Link>
						</div>
						<div className="col-6">
							<Link onClick={() => actions.addFavorite(props.name)}>
								<div className="btn btn-warning">
									<i className="fas fa-heart" />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
CardPlanetas.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	url: PropTypes.string
};
export default CardPlanetas;
