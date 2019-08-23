## Задача: сделать SPA справочник по Игре престолов.
 
API: https://anapioficeandfire.com/Documentation
 
SPA состоит из нескольких роутов.
 
`/houses/:page`
 
отображение пагинации списка Домов Вестероса, вида /houses/3, где 3 - номер страницы, отображать по 10 домов на странице.
 
Каждую страницу загружать только один раз, при загрузке показывать лоадер, при повторном посещении страницы - брать ее из стора.
 
Каждый элемент списка на странице может закрыт по умолчанию, показывает только название Дома. При нажатии на название открывать/закрывать детали: слоган и список персонажей (swornMembers). Самих персонажей необходимо подгружать дополнительно, во время загрузки показывать лоадер, не загружать их повторно. В списке персонажей отображать только имена, как ссылки на роут /people/:id - страницу с детальной информацией о персонаже.
 
`/people/:id`
 
Страница с детальной информацией о персонаже. При первом посещении страницы, при необходимости, загрузить персонажа, показывая лоадер. Не загружать персонажа повторно, если он уже есть в сторе.
 
Для реализации SPA использовать стек React + Redux + Reselect + Immutable + React Router. Настроить самостоятельно сборку приложения на Webpack + Babel.

## &#x1F534; Reselect Note
В данной имплементации не нашел нужнды в Reseleсt, поскольку все селекторы и так простой get по ключу. 
