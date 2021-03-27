import React, { useState, useEffect, useContext } from "react";
import Card from "../component/personajes";
import CardPlanetas from "../component/planetas";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-5 pb-5 rounded">
			<div className="col-12 rounded ">
				<h1 className="text-warning border-bottom border-warning ">CHARACTERS</h1>
			</div>
			<div className="row overX">
				{store.personajes.map((item, index) => {
					return (
						<div key={index} className="col-12 col-md-6 col-lg-4">
							<Card
								key={index}
								name={item.name}
								gender={item.gender}
								hair_color={item.hair_color}
								eye_color={item.eye_color}
								id={index}
							/>
						</div>
					);
				})}
			</div>
			<div className="col-12 mt-5">
				<h1 className="text-warning border-bottom border-warning "> PLANETS </h1>
			</div>
			<div className="row overX">
				{store.planetas.map((item, index) => {
					return (
						<div key={index} className="col-12 col-md-6 col-lg-4 ">
							<CardPlanetas
								key={index}
								url={item.url}
								name={item.name}
								diameter={item.diameter}
								population={item.population}
								terrain={item.terrain}
								id={index}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
