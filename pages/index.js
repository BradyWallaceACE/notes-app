import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from "semantic-ui-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/notes");
      const { data } = await res.json();
      console.log(data);

      setNotes(() => data);
    }
    fetchData();
  }, []);

  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <div className="grid wrapper">
        {notes?.map((note) => {
          return (
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>{note.title}</Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${note._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/notes");
//   const { data } = await res.json();
//   console.log(data);
//   return {
//     props: {
//       notes: data,
//     },
//   };
// }

// Index.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3000/api/notes");
//   const { data } = await res.json();

//   return { posts: data };
// };

export default Index;
