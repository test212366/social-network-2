import c from './css/login.module.css'
import Button from '@material-ui/core/Button';
import search from '../../assets/search.svg'
import HeaderLogin from './components/HeaderLogin';
import users from '../../assets/users.svg'
import password from '../../assets/password.svg'
import { NavLink } from 'react-router-dom';

const Login = () => {
	return (
		<>
			<HeaderLogin search={search} c={c} />
			<div className={c.container}>
				<div className={c.login__container}>
					<div className="logo__stories">
						<div className={c.login__logo_wrapper}>
							<div className={c.login__logo}>
								ES
							</div>
						</div>
					</div>
					<h3 className={`${c.login__title} ${c.mt}`}>Добрый день</h3>
					<h3 className={c.login__title}>Войдите в аккаунт чтобы продолжить</h3>
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
							<img width='30px' height='30px'
								className={c.login__input_img}
								src={password}
								alt="password" />

							<input type="password"
								placeholder='Введите ваш пароль'
								className={c.login__input}
							/>
						</div>
						<div className={c.remember__wrapper}>
							<input type="checkbox" id='remember' className={c.remember__item} />
							<label htmlFor="remember" className={c.remember__wrapper_item}>Запомнить</label>
						</div>
						<Button
							variant='contained'
							type="submit"
						>Войти в аккаунт</Button>
						<NavLink to="/registration" className={c.registration}>Зарегистрироваться</NavLink>
					</form>

				</div>
				<div className={c.user__handler}>
					<small className={c.handler}>Email: Введите почту</small>
					<small className={c.handler}>Password: Введите пароль</small>
				</div>
			</div>
		</>
	)
}
export default Login