import {
  Card, CardMedia, CardContent, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import db from '../../mock/db.json';

const useStyles = makeStyles({
  media: {
    width: '100%',
    height: '30%',
  },
  card: {
    width: '300px',
    height: '500px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 500,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  description: {
    fontSize: '.8rem',
    fontWeight: 400,
    display: '-webkit-box',
    WebkitLineClamp: 9,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',

  },
});

const Posts = () => {
  const s = useStyles();
  return (
    <Card className={s.card}>
      <CardMedia
        image={db.posts[0].image}
        title="Paella dish"
        className={s.media}
      />
      <CardContent>
        <div
          className={s.title}
        >
          Lorem ipsum dolor sit amet.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Iusto hic tempore quas fugiat labore quae explicabo deserunt iste et quis
          est pariatur architecto eaque ex sunt, atque quasi aliquid sint.
        </div>
      </CardContent>
      <CardContent>
        <div className={s.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam
          voluptatibus possimus laboriosam
          quisquam, enim blanditiis rem vitae ullam quasi incidunt
          alias nihil quibusdam atque illum veritatis facilis officia beatae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat provident nesciunt voluptatem commodi esse enim
          adipisci assumenda facere nobis ut odio aliquam accusamus quos,
          distinctio quo laudantium? Hic, soluta id!
        </div>
      </CardContent>
    </Card>
  );
};

export default Posts;
