import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col">
			<div className="card shadow my-3">
				<img
					src="https://miro.medium.com/max/1000/1*CmBM-60jVJpBW0wF_7bDWQ.gif"
					className="card-img-top rounded-top border border-warning"
					alt="..."
				/>
				<div className="card-body bg-dark text-light rounded-bottom border border-warning">
					<h5 className="card-title">
						<strong>Character:</strong> {props.name}
					</h5>
					<p className="card-text">
						<strong>Gender:</strong> {props.gender}
					</p>
					<p className="card-text">
						<strong>Hair Color:</strong> {props.hair_color}
					</p>
					<p className="card-text">
						<strong>Eye Color:</strong> {props.eye_color}
					</p>
					<div className="row">
						<div className="col-6">
							<Link to={`/single/${props.id}`}>
								<div className="btn btn-warning text-dark">Learn More... </div>
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
Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	id: PropTypes.number,
	url: PropTypes.string
};
export default Card;
