import Image from 'next/image';

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="profile-container">
        <Image src="/profile.image.jpg" alt="Rubab Fatima" width={200} height={200} className="profile-img" />
        <h1>Hi, I'm <span>Rubab Fatima</span></h1>
      <p>A passionate and innovative <b>Web Developer</b> dedicated to crafting immersive digital experiences. With expertise in <i>HTML, CSS, JavaScript, React.js and TypeScript</i>. I transform ideas into visually stunning and responsive web applications that captivate and engage.
      </p>
      </div>
    </section>
  );
}
