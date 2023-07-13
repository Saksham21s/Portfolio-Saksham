
import React from 'react';
import App from './certificates/app-development.jpeg';
import Python from './certificates/python.jpeg';
import Trainingse from './certificates/trainig-se.jpg';
import Udemy from './certificates/udemy-python.jpeg';
import Go from './certificates/go.jpeg';
import Sql from './certificates/sql.jpeg';
import Docker from './certificates/docker.jpeg';
import Seo from './certificates/seo.jpeg';
import Figure from 'react-bootstrap/Figure'

function ImageSlider() {
return (
    <Figure >
      <Figure.Image
        width={471}
        height={480}
        alt="171x180"
        border="4px"
        src={Sql}
        className='m-2 border-danger'
      />
      <Figure.Image
        width={471}
        height={480}
        alt="171x180"
        border="4px"
        src={Docker}
        className='m-2 border-danger'
      />
      <Figure.Image
       width={471}
       height={480}
        border="4px"
        alt="171x180"
        src={App}
        className='m-2  border-danger'
      />
      <Figure.Image
       width={471}
       height={480}
        border="4px"
        alt="171x180"
        src={Trainingse}
        className='m-2  border-danger'
      />
      <Figure.Image
        width={471}
        height={484}
        border="4px"
        alt="171x180"
        src={Udemy}
        className='m-2 border-danger'
      />
      <Figure.Image
        width={471}
        height={484}
        border="4px"
        alt="171x180"
        src={Go}
        className='m-2 border-danger'
      />
      <Figure.Image
        width={471}
        height={484}
        border="4px"
        alt="171x180"
        src={Seo}
        className='m-2 border-danger'
      />
      <Figure.Image
       width={471}
       height={480}
        border="4px"
        alt="171x180"
        src={Python}
        className='m-2 border-danger'
      />
    </Figure>
  );
}

export default ImageSlider;