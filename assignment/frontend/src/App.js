import JokeStory from "./components/JokeStory/JokeStory";
import Quote from "./components/Quote/Quote";
import DefaultLayout from "./layouts/DefaultLayout";
function App() {
  return (
    <DefaultLayout>
      <Quote />
      <JokeStory />
    </DefaultLayout>
  );
}

export default App;
