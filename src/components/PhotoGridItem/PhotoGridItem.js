import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
    const name = src.split('/').splice(-1, 1)[0].split('.').slice(0,1);
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image src={src}  srcSet={`/images/${name}.avif 1x, /images/${name}@2x.avif 2x, /images/${name}@3x.avif 3x`} alt={alt} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    border-radius: 2px;
    margin-bottom: 8px;
    object-fit: cover;
`;

const Tags = styled.ul`
    overflow: hidden;
    text-overflow: ellipsis;
    padding-block: 4px;
`;

const Tag = styled.li`
    display: inline;
    margin-right: 8px;
    padding: 4px 8px;
    background: var(--color-gray-300);
    font-size: 0.875rem;
    font-weight: 475;
    color: var(--color-gray-800);
    white-space: nowrap;
`;

export default PhotoGridItem;
