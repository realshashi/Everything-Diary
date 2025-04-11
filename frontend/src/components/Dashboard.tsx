import axios from "axios";
function Dashboard() {
  async function fetchContent() {
    const response = await axios.get("http://localhost:3000/api/v1/content");
    console.log(response.data);
    return response.data;
  }
  return (
    <div>
      <h1>dashboard</h1>
      <div>
        <button onClick={fetchContent}>fetch content</button>
        <div id="fetchedContent"></div>
      </div>
    </div>
  );
}

export default Dashboard;
