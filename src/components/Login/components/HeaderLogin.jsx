import HeaderLogo from "./HeaderLogo"

const HeaderLogin = props => {
	return (
		<header className={props.c.header}>
			<div className={props.c.header__title}>
				<HeaderLogo />
				EASE
			</div>
			<form className={props.c.form}>
				<div className={props.c.header__search_title}>
					<img width='18px' height='18px'
						src={props.search}
						alt="search"
						className={props.c.search}
					/>
					<input type="text"
						autoComplete='off'
						className={props.c.header__search}
						id='i'
						placeholder='Найти пользователя'
					/>
					<label htmlFor='i' className={props.c.label} />
				</div>
			</form>

		</header>
	)
}
export default HeaderLogin