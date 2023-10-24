import c from '../css/home.module.css'
import HeaderLogo from './../../Login/components/HeaderLogo'
import user from '../../../assets/user__sidebar.svg'
import home from '../../../assets/home.svg'
import users from '../../../assets/users_sidebar.svg'
import messages from '../../../assets/messages.svg'
import usersGroup from '../../../assets/groups.svg'
import music from '../../../assets/music.svg'
import arrow from '../../../assets/arrow.svg'
import settings from '../../../assets/settings.svg'
import { NavLink } from 'react-router-dom';

const Sidebar = ({ toggle }) => {
	return (
		<div className={toggle ? `${c.sidebar__wrapper} ${c.sidebar__active}` : `${c.sidebar__wrapper}`}>
			123
			<div className={c.sidebar}>
				<div className={c.sidebar__user}>
					<HeaderLogo />
					<img
						className={c.back}
						width='25px'
						height='25px'
						src={arrow} alt="back"
					/>
					<div className={c.user__description}>
						<div className={c.user__wrapper_photo}>
							<div className={c.user__online}></div>
							<img
								width='60px'
								height='60px'
								className={c.user__description_photo}
								src="https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg" alt="user__photo" />
						</div>
						<p className={c.user__name}>
							Никита Змановский
						</p>
						<small className={c.user__id}>
							@nuk.kovalchyc
						</small>
						<div>
							<NavLink to="/profile" className={c.user__profile}>
								<img
									className={c.user__profile_photo}
									width='20px'
									height='20px'
									src={user} alt="" />
								Мой профиль
							</NavLink>


						</div>
					</div>
				</div>
				<nav className={c.sidebar__navigation}>
					<ul>
						<li className={c.itemL}>
							<div className={c.wrap}></div>
							<img src={home}
								width='25px'
								height='25px'
								alt="home" />
							<a
								className={c.link}
								href="#">Главная</a>
						</li>
						<li className={c.itemL}>
							<div className={c.wrap}></div>
							<img src={users}
								width='25px'
								height='25px'
								alt="friends" />
							<a href="#"
								className={c.link}
							>Друзья</a>
						</li>
						<li className={c.itemL}>
							<div className={c.wrap}></div>
							<img src={messages}
								width='25px'
								height='25px'
								alt="messages" />
							<a href="#"
								className={c.link}>Сообщения</a>
						</li>
						<li className={c.itemL}>
							<div className={c.wrap}></div>
							<img src={usersGroup}
								width='25px'
								height='25px'
								alt="groups" />
							<a href="#"
								className={c.link}>Сообщества</a>
						</li>
						<li className={c.itemL}>
							<div className={c.wrap}></div>
							<img src={music}
								width='25px'
								height='25px'
								alt="mus" />
							<a href="#"
								className={c.link}
							>Музыка</a>
						</li>
						<li className={c.itemL}>
							<div className={c.wrap}></div>
							<img src={settings}
								width='35px'
								height='35px' alt="settings" />
							<a href="#"
								className={c.link}
							>Настройки</a>
						</li>
					</ul>
				</nav>
				<div className={c.sitebar__footer}>

				</div>
			</div>
		</div>
	)
}
export default Sidebar