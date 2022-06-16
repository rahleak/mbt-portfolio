import React from 'react';
import { Container, Box, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import BlogCard from 'components/cards/blog-card';
import blogImage1 from 'assets/mission.jpg';
import blogImage2 from 'assets/social-change.jpg';
import blogImage3 from 'assets/vision.jpg';
import classes from './blogs.module.css'

const BLOG_DATA = [
  {
    image: blogImage1,
    title: 'Mission',
    description:
      'Your companys mission statement',
    path: '/',
    linkLabel: null,
  },
  {
    image: blogImage2,
    title: 'Social Change',
    description: 'Your companys goal',
    path: '/',
    linkLabel: null,
  },
  {
    image: blogImage3,
    title:
      'Vision',
    description: 'Your companys vision',
    path: '/',
    linkLabel: null,
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = () => {
  return (
    <Box as="section" id="mission-vision" sx={styles.blogs}>
      <Container className={classes.container}>
        <BlockTitle
          title="Mission/Vision"
          text={null}
        />
        <div className={classes.blogWrapper}>
          {BLOG_DATA.map(
            ({ image, title, description, path, linkLabel }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            )
          )}
        </div>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
  },
  blogWrapper: {
    mx: '-15px',
  },
};
