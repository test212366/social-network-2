import c from '../Login//css/login.module.css'
import Button from '@material-ui/core/Button';
import search from '../../assets/search.svg'
import HeaderLogin from '../Login/components/HeaderLogin';
import users from '../../assets/users.svg'
import password from '../../assets/password.svg'
import { NavLink } from 'react-router-dom';

const Registation = () => {
	return (
		<>
			<HeaderLogin search={search} c={c} />
			<div className={c.container}>
				<div className={c.login__container}>
					<div className={c.logo__stories_reg}>
						<div className={c.login__logo_wrapper}>
							<div className={c.login__logo}>
								ES
							</div>
						</div>
					</div>
					<h3 className={c.login__title}>Зарегистрируйте аккаунт чтобы продолжить</h3>
					<form action="" className={c.login__form}>
						<div className={c.login__item}>
							<div className={`${c.login__input_img} ${c.login__handler}`}></div>
							<img width='30px' height='30px'
								className={c.login__input_img}
								src={users}
								alt="user" />
							<input type="email"
								placeholder='Введите вашу почту'
								className={c.login__input}
							/>
						</div>
						<div className={c.login__item}>
							<div className={`${c.login__input_img} ${c.login__handler}`}></div>
							<img width='30px' height='30px'
								className={c.login__input_img}
								src={users}
								alt="user" />
							<input type="email"
								placeholder='Введите ваше имя'
								className={c.login__input}
							/>
						</div>
						<div className={c.login__item}>
							<div className={`${c.login__input_img} ${c.login__handler}`}></div>
							<img width='30px' height='30px'
								className={c.login__input_img}
								src={users}
								alt="user" />
							<input type="email"
								placeholder='Введите вашу фамилию'
								className={c.login__input}
							/>
						</div>
						<div className={c.login__item}>
							<img width='30px' height='30px'
								className={c.login__input_img}
								src={password}
								alt="password" />

							<input type="password"
								placeholder='Введите ваш пароль'
								className={c.login__input}
							/>
						</div>
						<div className={c.female}>
							<input type="radio" id='man' />
							<label className={c.female__label} htmlFor="man">Муж.</label>
							<input type="radio" id='woman' />
							<label className={c.female__label} htmlFor="woman">Жен.</label>
						</div>
						<Button
							variant='contained'
							type="submit"
						>Создать аккаунт</Button>
						<NavLink to="/" className={c.registration}>Авторизироваться</NavLink>
					</form>

				</div>
			</div>
		</>
	)
}
export default Registation