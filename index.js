

  function generator(i) {

      yield i;

      yield i + 10;

  }

      const gen = generator(2);

      console.log(gem.next().value);
