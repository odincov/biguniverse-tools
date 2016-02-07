import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Footer extends Component {
  render () {
    return (
      <div>
        <hr/>
        <p>
          &copy; Большая Вселенная, 2010—2015.
        </p>
        <p>
          Использование материалов сайта «Большая Вселенная» разрешено при наличии активной ссылки на источник. <br style={styles.br}/>
          Все права на фотографии и иллюстрации принадлежат их авторам.
        </p>
      </div>
    );
  }
}

const styles = {
  br: {
    display: 'none',
    '@media (min-width: 1107px)': {
      display: 'block'
    }
  }
}
