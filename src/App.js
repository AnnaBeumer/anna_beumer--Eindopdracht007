import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <SongForm />
      <SongList />
    </div>
  );
}

export default App;
