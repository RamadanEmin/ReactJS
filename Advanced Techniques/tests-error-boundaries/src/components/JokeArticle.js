const JokeArticle = ({ joke }) => {
  if (joke.value && !joke.value.startsWith('Chuck Norris')) {
    throw new Error('No Chuck Norris');
  }

  return (
    <article>
      <header>
        <img src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png' alt="Chuck Norris Joke" />
      </header>
      <main>
        <p className="joke" >{joke.value}</p>
      </main>
    </article>
  );
};

export default JokeArticle;