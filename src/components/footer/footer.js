import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  render () {
    return (
      <div>
        <hr/>
        <p>
          &copy; Большая Вселенная, 2010—2015.
        </p>
        <p>
          Использование материалов сайта «Большая Вселенная» разрешено при наличии активной ссылки на источник.<br/>
          Все права на фотографии и иллюстрации принадлежат их авторам.
        </p>
      </div>
    );
  }
}
