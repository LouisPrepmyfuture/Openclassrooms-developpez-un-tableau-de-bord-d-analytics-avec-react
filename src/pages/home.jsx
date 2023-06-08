import React from "react"
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import getUser from "../services/fetchData/getData"

const Content = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Btn = styled(NavLink)`
	padding: 5px 20px;
	margin-left: 50px;
	text-align: center;
	background-color: #de2020;
	color: white;
	text-decoration: none;
	border-radius:10px;
`
export default function Home() {
  return (
		<Content>
			<Btn to="/dashboard/12">Karl Dovineau</Btn>
			<Btn to="/dashboard/18">Cecilia Ratorez</Btn>
		</Content>
  )
}