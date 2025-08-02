import './App.css';
import User from './components/User';

function App() {

  const name1 = 'Ivan';

  return (
    <div>
      <User firstname={name1} lastname='Petrov' age='29' username='sososo' email='mail1@gmail.com' />
      <User firstname='Inga' lastname='Ivanova' age='13' username='alalala' email='mail2@gmail.com' />
      <User firstname='Anna' lastname='Sidorova' age='33' username='hhnhnhn' email='mail3@gmail.com' />
      <User firstname='Petr' lastname='Ushanov' age='55' username='rmrmrr' email='mail4@gmail.com' />
    </div>
  );
}

export default App;

// JSX - синтаксическое расширение, которое позволяет писать
//  html-разметку в js-файле
// Синтаксический сахар в языке программирования — это
//  синтаксические возможности, применение которых не влияет
//  на поведение программы,
//  но делает использование языка более удобным для человека.
// props (properties) - входящий в компонент объект с данными