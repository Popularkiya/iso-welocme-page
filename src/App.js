import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  margin: 2px;
`;

function App() {
  return (
    <div class = "App">
      <div class = "app-centered-child">
        <div>
          <h1>Hello!</h1>
          <h3>In order to use this application please provide a TK study of abdomen in a DICOM format.</h3>
        </div>
        <div>
          <a href={process.env.LOCAL}>
            <Button> I have my own data </Button>
          </a>
          <a href={process.env.STUDY_LIST_URL}>
            <Button> Study List </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
