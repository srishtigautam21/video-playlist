import "./App.css";
import VideoList from "./component/VideoList";

function App() {
  return (
    <div className='p-8'>
      <div className='text-text1 text-[40px] font-bold'>Video Player</div>
      <div>
        <VideoList />
      </div>
    </div>
  );
}

export default App;
