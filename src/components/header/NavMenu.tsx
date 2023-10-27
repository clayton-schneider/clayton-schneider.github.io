import { useState } from 'react'
import Hamburger from './Hamburger'

interface Props {
	links: {
		link: string
		linkText: string
		sublinks?: {
			link: string
			linkText: string
		}[]
	}[]
}

const NavMenu = ({ links }: Props) => {
	const [isOpen, setOpen] = useState(false)
	const handleClick = () => {
		setOpen(!isOpen)
	}

	return (
		<div>
			<ul
				className={
					'xs:top-[75px] absolute top-[104px] z-50 flex w-full flex-col items-start gap-6 bg-white px-4 py-5 text-lg transition-all duration-300 xl:static xl:w-auto xl:flex-row xl:items-center xl:bg-transparent xl:px-0 xl:py-0 ' +
					(isOpen ? 'left-0 z-40 !text-black shadow' : '-left-full')
				}
			>
				{links.map((link, idx) => {
					if (link.sublinks) {
						return (
							<li key={idx} className="group relative">
								<a href={link.link}>{link.linkText}</a>
								<ul className="z-50 w-full pl-5 pt-1 text-center text-black lg:absolute lg:left-1/2 lg:hidden lg:w-[200px] lg:-translate-x-1/2 lg:pl-0  lg:shadow lg:group-hover:block">
									{link.sublinks.map((sublink, idx) => (
										<li
											key={idx}
											className="lg:hover:bg-primary text-left first:rounded-t last:rounded-b lg:bg-white lg:text-center lg:hover:text-white"
										>
											<a className="block px-4 py-2" href={sublink.link}>
												{sublink.linkText}
											</a>
										</li>
									))}
								</ul>
							</li>
						)
					} else {
						return (
							<li key={idx}>
								<a href={link.link}>{link.linkText}</a>
							</li>
						)
					}
				})}
			</ul>
			<Hamburger clicked={handleClick} isOpen={isOpen} />
		</div>
	)
}
export default NavMenu
