import React, { Component } from 'react';
import { findMatchingBreed } from './utils';
import Form from './Form';
import Breed from './Breed';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      breeds: {
        french_bulldog: {
          name: 'French Bulldog',
          id: 'french_bulldog',
          activity: 'low',
          budget: 'low',
          space: 'low',
          time: 'low',
          size: 'small',
          hair: 'short',
          description: 'French Bulldogs are known as “lap dogs” that aim to please. They are a fun-loving breed that adores playtime but needs only a short daily walk for exercise.',
        },
        great_dane: {
          name: 'Great Dane',
          id: 'great_dane',
          activity: 'medium',
          budget: 'high',
          space: 'high',
          time: 'low',
          size: 'large',
          hair: 'short',
          description: 'Great Danes are friendly and loyal, and though their large size demands ample space to move around, they do not require intense exercise.',
        },
        cavalier_king_charles_spaniel: {
          name: 'Cavalier King Charles Spaniel',
          id: 'cavalier_king_charles_spaniel',
          activity: 'medium',
          budget: 'low',
          space: 'low',
          time: 'medium',
          size: 'small',
          hair: 'long',
          description: 'Bred primarily as a lapdog and companion, the Cavalier King Charles Spaniel excels at its original job. The breed is gentle, affectionate and would much rather be inside next to you than doing any sort of vigorous activity.',
        },
        shiba_inu: {
          name: 'Shiba Inu',
          id: 'shiba_inu',
          activity: 'medium',
          budget: 'low',
          space: 'medium',
          time: 'high',
          size: 'small',
          hair: 'long',
          description: 'Their white markings combined with their coloring (red, red sesame, or black and tan) and their alert expression and smooth stride makes them almost foxlike. They’re sturdy, muscular dogs with a bold, confident personality to match.',
        },
        keeshond: {
          name: 'Keeshond',
          id: 'keeshond',
          activity: 'medium',
          budget: 'medium',
          space: 'low',
          time: 'high',
          size: 'small',
          hair: 'long',
          description: 'Lively and full of personality, this breed is affectionate and loyal to his human companions. An excellent watchdog, the Keeshond is an energetic dog that should be exercised daily. His big, fluffy coat and plumed tail require grooming twice a week.',
        },
        akita: {
          name: 'Akita',
          id: 'akita',
          activity: 'medium',
          budget: 'medium',
          space: 'high',
          time: 'high',
          size: 'large',
          hair: 'medium',
          description: 'The Akita is a large, powerful hunting and guarding breed from Japan. Although considered a working dog, they are relatively lazy indoors and need little exercise overall to remain happy and healthy. The breed is not prone to being destructive and daily walks are typically sufficient.',
        },
        australian_shepherd: {
          name: 'Australian Shepherd',
          id: 'australian_shepherd',
          activity: 'high',
          budget: 'high',
          space: 'high',
          time: 'high',
          size: 'medium',
          hair: 'medium',
          description: 'The Australian Shepherd is a herding dog, with a bundle of energy. If they’re a companion, they need a lot of exercise to supplement their lack of work.',
        },
        golden_retriever: {
          name: 'Golden Retriever',
          id: 'golden_retriever',
          activity: 'high',
          budget: 'medium',
          space: 'medium',
          time: 'high',
          size: 'medium',
          hair: 'long',
          description: 'The Golden Retriever is patient, kind and loves everyone. His keen nose makes him an excellent hunting companion, and his gentle nature suits him well for therapy work or being a service dog for the disabled. The Golden needs daily exercise and regular grooming.',
        },
        siberian_husky: {
          name: 'Siberian Husky',
          id: 'siberian_husky',
          activity: 'high',
          budget: 'medium',
          space: 'high',
          time: 'high',
          size: 'medium',
          hair: 'medium',
          description: 'Siberian Husky’s are highly athletic. They were bred to pull sleds hundreds of miles in Alaska. They’re a great match for a high intensity winter athlete.',
        },
        dalmatian: {
          name: 'Dalmatian',
          id: 'dalmatian',
          activity: 'high',
          budget: 'medium',
          space: 'medium',
          time: 'medium',
          size: 'medium',
          hair: 'short',
          description: 'The Dalmatian is known for its endurance, speed, and intelligence. The original and only coach dog, Dalmatians were used as guardians and followers of horse-drawn carriages. They would trot next to the horse for its entire journey, making it a great companion for any long-distance runner!',
        },
        jack_russell_terrier: {
          name: 'Jack Russell Terrier',
          id: 'jack_russell_terrier',
          activity: 'high',
          budget: 'low',
          space: 'low',
          time: 'med',
          size: 'small',
          hair: 'short',
          description: 'Another small breed, with a large breed energy reserve is the Jack Russell Terrier. Originally bred to hunt foxes, these dogs need constant activity to fulfill their needs as fearless predators.',
        },
        cat: {
          name: 'Maybe you prefer a cat?',
          id: 'cat',
          activity: '',
          budget: '',
          space: '',
          time: '',
          size: 'small',
          hair: 'varied',
          description: 'There are many different breeds of cats, including Abyssinian, Himalayan, Maine Coon, Manx, Persian, Scottish Fold, and Siamese, to name a few. The most familiar cats are the domestic shorthair and the domestic longhair, which are really mixtures of different breeds. Cat breeds differ in looks, coat length, and other characteristics but vary relatively little in size.',
        },
      },
      questions: {
        activity: 'Do you like outdoor exercise?',
        budget: 'What is you pet budget?',
        space: 'How much space would your fluffy friend have?',
        time: 'How much time do you have to groom your pet?',
      },
      answers: {
        activity: '',
        budget: '',
        space: '',
        time: '',
      },
      selectedBreed: null,
    };

    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
    this.handleSubmitAnswers = this.handleSubmitAnswers.bind(this);
    this.handleClickNewSearch = this.handleClickNewSearch.bind(this);
  }

  handleChangeQuestion(label, value) {
    this.setState(prevState => ({
      answers: {
        ...prevState.answers,
        [label]: value,
      },
    }));
  }

  handleSubmitAnswers() {
    const { answers, breeds } = this.state;
    let result = null;

    if (findMatchingBreed(breeds, answers) !== null) {
      result = findMatchingBreed(breeds, answers);
    } else {
      result = 'cat';
    }

    this.setState(prevState => ({
      ...prevState,
      selectedBreed: result,
    }));
  }

  handleClickNewSearch() {
    this.setState({
      answers: {
        activity: '',
        budget: '',
        space: '',
        time: '',
      },
      selectedBreed: null,
    });
  }

  render() {
    const { questions, answers } = this.state;
    const breed = this.state.breeds[this.state.selectedBreed];

    return (
      <div className="App">
        <div className="App-header">
          <h2>Pet Matcher</h2>
        </div>
        <div className="App__body">
          {breed != null
            ? <Breed
              breed={breed}
              onClick={this.handleClickNewSearch}
            />
            : <Form
              questions={questions}
              answers={answers}
              onChange={this.handleChangeQuestion}
              onSubmit={this.handleSubmitAnswers}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
