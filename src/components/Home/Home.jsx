import c from './css/home.module.css'
import pen from '../../assets/pen.svg'
import search from '../../assets/search.svg'
import Post from './components/Post'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import SidebarHandler from './components/SidebarHandler'

const Home = () => {
	let [sidebar, setSidebar] = useState(false)
	const toggleSidebar = () => {
		setSidebar(sidebar = !sidebar)

		document.body.classList.toggle('hidden')
	}
	return (
		<div className={c.container}>
			<div className={sidebar ? `${c.active__container} ${c.wrapper}` : `${c.wrapper}`}>
				<header className={c.header__home}>
					<div className={c.left__item}>
						<div className={c.burger} onClick={() => toggleSidebar()}>
							<span className={c.sp}></span>
							<span className={c.sp}></span>
							<span className={c.sp}></span>
						</div>
						<div className={c.name__page}>Главная</div>
					</div>
					<div className={c.right__item}>
						<img src={search}
							className={c.search}
							width='22px'
							height='22px'
							alt="search" />
					</div>
				</header>
				<div className={c.stories}>
					<div className={c.item}>
						<div className={c.current__user}>
							<img src="https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"
								alt="user__photo"
								className={c.current__user_photo}
							/>
							<div className={c.add__stories}>+</div>
						</div>
						<div className={c.current__user_name}>Никита</div>
					</div>

				</div>
				<div className={c.create__post}>
					<button variant='contained' className={c.button}>
						Создать запись
						<img src={pen}
							width='22px'
							height='22px'
							className={c.pen}
							alt="create_new_post" />
					</button>
				</div>
				<div className="posts">
					<Post />
					<Post />
				</div>
			</div>
			<SidebarHandler toggle={sidebar} setSidebar={setSidebar} />
			<Sidebar toggle={sidebar} setSidebar={setSidebar} />
		</div>
	)
}
export default Home