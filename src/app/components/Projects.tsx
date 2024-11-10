import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-card">
        <Image src="/word-counter.webp" alt="Word Counter Project" width={100} height={100} />
        <h3>Word Counter</h3>
        <p>A simple tool to count words, built with TypeScript.</p>
        <a href="https://github.com/rubii22/WORD-COUNTER.git" target="_blank" className="project-link">View Project</a>
      </div>
      <div className="project-card">
        <Image src="/todo-list.jpg" alt="To-Do List Project" width={100} height={100} />
        <h3>To-Do List</h3>
        <p>An interactive to-do list with HTML, CSS, and JavaScript.</p>
        <a href="https://github.com/rubii22/Todo-List.git" target="_blank" className="project-link">View Project</a>
      </div>
      <div className="project-card">
        <Image src="/flower-theme.webp" alt="Flower Themed Website" width={100} height={100} />
        <h3>Flower Themed Website</h3>
        <p>A visually engaging multi-page site created with React.</p>
        <a href="https://flower-themed-website.vercel.app/" target="_blank" className="project-link">View Project</a>
      </div>
    </section>
  );
}
