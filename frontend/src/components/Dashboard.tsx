import { useEffect, useState } from "react";

function Dashboard() {
  type Content = {
    userId: object;
    type: string;
    link: string;
    title: string;
    tags: object;
  };
  const [content, setContent] = useState<Content[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/content").then(async function (res) {
      const json = await res.json();
      setContent(json.content);
    });
  }, []);
  return (
    <>
      <div>
        {content.map(function (content) {
          return (
            <>
              <div>
                <h1>{content.title}</h1>
                <h5>{content.type}</h5>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
