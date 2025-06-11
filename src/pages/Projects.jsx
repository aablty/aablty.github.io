// Hooks
import { useDocumentTitle } from "../hooks";

export default function Projects() {
  useDocumentTitle("projects");

  return (
    <div className="container content">
      <h1>My Projects</h1>
      <ul>
        <li>
          <strong>Project 1:</strong> Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tempore libero adipisci nostrum commodi.
        </li>
        <li>
          <strong>Project 2:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi vel reprehenderit, et ducimus quam sed
          iure dolor quis ad, magni eum expedita, quibusdam accusamus corrupti
          nemo ipsum laboriosam recusandae ab.
        </li>
        <li>
          <strong>Project 3:</strong> Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sunt dicta consequatur nam consequuntur natus
          laboriosam asperiores nesciunt officiis debitis sed maxime, temporibus
          nostrum, nobis ut, necessitatibus inventore dolorum aliquam eius.
        </li>
      </ul>
    </div>
  );
}
