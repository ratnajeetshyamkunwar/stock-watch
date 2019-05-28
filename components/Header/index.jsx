import React from 'react';
import Link from 'next/link';
import { HeaderContainer, A } from './styles';

const Header = ({ className }) => (
	<HeaderContainer className={className}>
		<Link href='/' passHref>
			<A className={className}>Historical</A>
		</Link>
		<Link href='/live' passHref>
			<A className={className}>Live</A>
		</Link>
		<Link href='/live-table' passHref>
			<A className={className}>Live Table</A>
		</Link>
	</HeaderContainer>
)

export default Header;