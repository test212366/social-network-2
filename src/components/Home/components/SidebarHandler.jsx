import c from '../css/home.module.css'
const SidebarHandler = ({ toggle, setSidebar }) => {
	const toggleSidebar = () => {
		setSidebar(toggle = !toggle)
		document.body.classList.toggle('hidden')
	}
	return (
		<div className={toggle ? `${c.sidebar__handler} ${c.active__handler}` : `${c.sidebar__handler}`} onClick={() => toggleSidebar()}></div>
	)
}
export default SidebarHandler