import like from '../../../assets/like.svg'
import comment from '../../../assets/comment.svg'
import share from '../../../assets/shar.svg'
import c from '../css/home.module.css'
const Post = () => {
	return (
		<div className={c.post}>
			<div className={c.post__title}>
				<div className="post__img">
					<img
						width='40px'
						height='40px'
						className={c.post__logo}
						src='http://sun9-10.userapi.com/s/v1/ig1/NqTNNIGQBV4ANdbNL39bImgJKm9WZQiK6-advxoNJ_GWGidNZZjmdxGsUJONc_ER963JXsda.jpg?size=200x200&quality=96&crop=41,20,481,481&ava=1' alt="post__photo" />
				</div>
				<div className={c.post__title_item}>
					<div className={c.title}>Мемная папка</div>
					<small className={c.time}>Сегодня в 11:20</small>
				</div>
			</div>
			<div className={c.description}>
				Нет, вот настоящее зеркало
			</div>
			<div className="post__body">
				<img
					width='100%'
					height='100%'
					className={c.post__img}
					src="https://360tv.ru/media/uploads/article_images/2019/10/50059_19633152-7566413-image-a-56_1570908569851.jpg"
					alt="post_img" />
			</div>
			<div className={c.post__footer}>
				<button className={c.post__like}>
					<img src={like}
						alt="like"
						height='17px'
						width='17px'
					/>
					<div className={c.like__count}>12</div>
				</button>
				<button className={c.post__like}>
					<img src={comment}
						alt="comment"
						height='17px'
						width='17px'
					/>
					<div className={c.like__count}>5</div>
				</button>
				<button className={c.post__like}>
					<img src={share}
						alt="share"
						height='20px'
						width='20px'
					/>
					<div className={c.like__count}>20</div>
				</button>
			</div>

		</div>
	)

}
export default Post