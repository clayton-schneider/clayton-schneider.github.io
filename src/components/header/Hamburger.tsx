interface Props {
	isOpen: boolean
	clicked: () => void
}
const Hamburger = ({ isOpen, clicked }: Props) => {
	return (
		<button
			aria-label="mobile menu"
			onClick={clicked}
			className="relative z-50 cursor-pointer xl:hidden"
		>
			<span
				className={
					'mx-auto my-1 block h-1 w-7 bg-black transition-all duration-300 ' +
					(isOpen ? 'translate-y-2 rotate-45 ' : '')
				}
			></span>
			<span
				className={
					'mx-auto my-1 block h-1 w-7 bg-black transition-all duration-300 ' +
					(isOpen ? 'opacity-0 ' : '')
				}
			></span>
			<span
				className={
					'mx-auto my-1 block h-1 w-7 bg-black transition-all duration-300 ' +
					(isOpen ? '-translate-y-2 -rotate-45 ' : '')
				}
			></span>
		</button>
	)
}

export default Hamburger
