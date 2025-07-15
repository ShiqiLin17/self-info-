import { useState } from 'react';

const Hobbies = () => {
  const hobbyList = [
    {
      title: 'Dance',
      description: "I've been dancing since I was a kid, and it’s always been a big part of my life. I love the way it lets me express myself and connect with others. Whether it's hip-hop, jazz, or even some traditional Chinese dance, I find joy in the rhythm and movement. Dancing is not just a hobby for me; it's a way to unwind and feel alive."
    },
    {
      title: 'Photography',
      description: "Photography is a passion of mine that allows me to capture the beauty of the world around me. I love exploring new places and finding unique angles to tell a story through my lens. Whether it's landscapes, portraits, or candid moments, photography helps me appreciate the little things in life and share them with others."
    },
    {
      title: 'Shopping',
      description: "Shopping is an enjoyment for me. I enjoy exploring different styles and trends, whether it's fashion, home decor, or tech gadgets. Shopping gives me the chance to discover new things and express my personality through what I choose to buy. It's also a great way to relax and treat myself after a long week."
    }
  ];

  const [expanded, setExpanded] = useState({});

  const handleToggle = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="hobbies">
      <h2>My Hobbies</h2>
      {hobbyList.map((hobby, i) => (
        <div key={i} className="hobby">
          <h3> - {hobby.title}</h3>
          {expanded[i] && <p>{hobby.description}</p>}
          <button onClick={() => handleToggle(i)}>
            {expanded[i] ? 'Show Less' : 'Show More'}
          </button>
        </div>
      ))}
    </section>
  );
};

export default Hobbies;
