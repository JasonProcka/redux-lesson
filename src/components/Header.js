import React from 'react';
import styled from 'styled-components';

const Header = () => {
	const HeaderWrapper = styled.div`
		height: 80px;
		display: block;
	`

	const TodobirdLogo = styled.h2`
		line-height: 80px;
		margin: 0;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		font-family: 'Lobster', sans-serif;
		color: #e74c3c;
	`

	const NavItem = styled.li`
		color: #34495e;
		margin-left: 20px;
		line-height: 80px;
		display: inline-block;
		list-style: none;
	`

	return (
		<HeaderWrapper>
			<div style={{ maxWidth: 760, margin: 'auto', paddingLeft: 40, paddingRight: 40 }}>
			<TodobirdLogo>Todobird</TodobirdLogo>
				<ul style={{ float: 'right', margin: 0, padding: 0 }}>
					<NavItem>Todos</NavItem>
					<NavItem>Progress</NavItem>
					<NavItem>Notifications</NavItem>
					<NavItem>Profile</NavItem>
				</ul>
			</div>
		</HeaderWrapper>
	);
}

export default Header;