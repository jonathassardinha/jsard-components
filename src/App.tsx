import styled from "styled-components";
import Dropdown from "./components/Dropdown";

const Wrapper = styled.div`
  padding: 8px;
  margin: 8px;
  border: 1px solid #ccc;
  width: 250px;
`;

function App() {
  return (
    <Wrapper>
      <form>
        <Dropdown
          label="Options"
          placeholder="Choose one"
          options={["Option 1", "Option 2"]}
        />
      </form>
    </Wrapper>
  );
}

export default App;
