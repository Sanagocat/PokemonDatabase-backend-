const express = require("express");
const cors = require("cors");
const app = express();
const port = 80;

// 모든 도메인에서의 요청을 허용하는 CORS 설정
app.use(cors());

// Default GET 요청 처리
app.get("/", (req, res) => {
  res.send("welcome to danwoo's Pokemon server.");
});

// /name?name=Pikachu -> search monster name is "Pikachu"
app.get("/name", (req, res) => {
  const searchName = req.query.name.toLowerCase();
  console.log("Search monster name is " + searchName);

  //pokemon data -> get monster inforamtion from chatGPT ....
  const pokemonInfoList = {
    pikachu: {
      HP: 35,
      Attack: 55,
      Defense: 40,
      SpecialAttack: 50,
      SpecialDefense: 50,
      Speed: 90,
      ImageURL:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    charmander: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      SpecialAttack: 60,
      SpecialDefense: 50,
      Speed: 65,
      ImageURL:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    squirtle: {
      HP: 44,
      Attack: 48,
      Defense: 65,
      SpecialAttack: 50,
      SpecialDefense: 64,
      Speed: 43,
      ImageURL:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    bulbasaur: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      SpecialAttack: 65,
      SpecialDefense: 65,
      Speed: 45,
      ImageURL:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    caterpie: {
      HP: 45,
      Attack: 30,
      Defense: 35,
      SpecialAttack: 20,
      SpecialDefense: 20,
      Speed: 45,
      ImageURL:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    },
    weedle: {
      HP: 40,
      Attack: 35,
      Defense: 30,
      SpecialAttack: 20,
      SpecialDefense: 20,
      Speed: 50,
      ImageURL:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    },
    pidgey: {
      HP: 40,
      Attack: 45,
      Defense: 40,
      SpecialAttack: 35,
      SpecialDefense: 35,
      Speed: 56,
      ImageURL:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    },
    rattata: {
      HP: 30,
      Attack: 56,
      Defense: 35,
      SpecialAttack: 25,
      SpecialDefense: 35,
      Speed: 72,
      ImageURL:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    },
    spearow: {
      HP: 40,
      Attack: 60,
      Defense: 30,
      SpecialAttack: 31,
      SpecialDefense: 31,
      Speed: 70,
      ImageURL:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    },
    ekans: {
      HP: 35,
      Attack: 60,
      Defense: 44,
      SpecialAttack: 40,
      SpecialDefense: 54,
      Speed: 55,
      ImageURL:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    },
  };

  //check if key in list or not
  if (pokemonInfoList.hasOwnProperty(searchName) == true) {
    //Add response_code = 1
    pokemonInfoList[searchName].response_code = 1;
    //show  userSearchName info using console
    console.log(pokemonInfoList[searchName]);
    const monsterInfo = JSON.stringify(pokemonInfoList[searchName]);
    res.send(monsterInfo);
  } 
  else {
    //Add response_code = 0
    const errorResponse = {
      response_code: 0,
    };
    console.log(errorResponse);
    res.send(errorResponse);
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
