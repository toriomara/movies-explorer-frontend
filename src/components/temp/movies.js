import movie001 from '../temp/movie001.png'
import movie002 from '../temp/movie002.png'
import movie003 from '../temp/movie003.png'
import movie004 from '../temp/movie004.png'
import movie005 from '../temp/movie005.png'
import movie006 from '../temp/movie006.png'
import movie007 from '../temp/movie007.png'

export const movies = [
  {
    nameRU: "33 слова о дизайне",
    isLiked: false,
    duration: "1ч 42м",
    imgLink: movie001
  },
  {
    nameRU: "Киноальманах «100 лет дизайна»",
    isLiked: false,
    duration: "1ч 42м",
    imgLink: movie002
  },
  {
    nameRU: "В погоне за Бэнкси",
    isLiked: false,
    duration: "1ч 42м",
    imgLink: movie003
  },
  {
    nameRU: "Баския: Взрыв реальности",
    isLiked: false,
    duration: "1ч 42м",
    imgLink: movie004
  },
  {
    nameRU: "Бег это свобода",
    isLiked: false,
    duration: "1ч 42м",
    imgLink: movie005
  },
  {
    nameRU: "Книготорговцы",
    isLiked: false,
    duration: "1ч 42м",
    imgLink: movie006
  },
  {
    nameRU: "Когда я думаю о Германии ночью",
    isLiked: false,
    duration: "1ч 42м",
    imgLink: movie007
  },
]

export const savedMovies = [
  {
    nameRU: "33 слова о дизайне",
    isLiked: false,
    duration: "1ч 42м",
    imgLink: movie001
  },
  {
    nameRU: "Киноальманах «100 лет дизайна»",
    isLiked: false,
    duration: "1ч 42м",
    imgLink: movie002
  },
  {
    nameRU: "В погоне за Бэнкси",
    isLiked: false,
    duration: "1ч 42м",
    imgLink: movie003
  },
]

export const signup = {
  title: 'Добро пожаловать!',
  button: 'Зарегистрироваться',
  question: 'Уже зарегистрированы?',
  linkText: 'Войти',
  linkUrl: '/signin',
  error: 'Что-то пошло не так...',
}

export const signin = {
  title: 'Рады видеть!',
  button: 'Войти',
  question: 'Ещё не зарегистрированы?',
  linkText: 'Регистрация',
  linkUrl: '/signup',
  error: 'Что-то пошло не так...',
}