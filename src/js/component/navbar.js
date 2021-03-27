import React, { useState, useEffect, useContext } from "react";
import Card from "../component/personajes";
import CardPlanetas from "../component/planetas";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container bg-warning rounded-bottom sticky-top">
			<nav className="navbar navbar-dark bg-dark rounded-bottom mb-3">
				<Link className="col-6 col-md-2" to="/">
					<img
						className="img-fluid"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/1200px-Star_Wars_Yellow_Logo.svg.png"
					/>
				</Link>
				<div className="col-3">
					<div className="dropdown">
						<button
							className="btn btn-warning dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
							<span className="badge badge-dark m-2">{store.favorites.length}</span>
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							{store.favorites.map((item, index) => {
								return (
									<div key={index} className="dropdown-item">
										<div className="row">
											<div className="col-9">{item.name}</div>
											<div className="col-2">
												<a
													className="badge badge-danger text-white"
													onClick={() => actions.deleteFavorite(index)}>
													<i className="far fa-trash-alt" />
												</a>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
