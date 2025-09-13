import React from "react";
import { useParams, Link } from "react-router-dom";

const articles = [
    {
    id: 1,
    title: "Golden Dragon Makes Giant Tap",
    reporter: "By Wrestling Observer Staff",
    content: [
      "It was billed as David vs. Goliath, but nobody expected KENTA the Golden Dragon to breathe this much fire inside the unforgiving steel cage!",
      "Facing the towering Denzel the Giant, the Japanese superstar unleashed a masterclass of destruction, hammering the Giant’s tree-trunk legs and punishing his lower back with pinpoint kicks and brutal strikes. The crowd gasped as every blow brought the Giant crashing closer to his knees.",
      "The end came in spectacular fashion — KENTA locked in a crippling ankle lock right in the middle of the cage! The Giant roared, clawed at the mat, and tried to break free, but there was NO ESCAPE. With nowhere to run and no ropes to save him, the massive warrior tapped out as the arena exploded in disbelief!",
      "KENTA climbed the cage wall, arms raised high, while chants of “Golden Dragon! Golden Dragon!” echoed through the night. The message was clear: no one — not even a Giant — can survive the Dragon’s wrath."
    ],
    image: "https://imgur.com/1udtdq7.gif"
  },
  
  {
  id: 2,
  title: "Ken Costa Retains Midnight Hobo",
  reporter: "By Mark Stevens, Wrestling Gazette",
  content: [
    "In last week’s RAWF Tropical Aggression event, the reigning Midnight Hobo Champion successfully defended the title against Hall of Famer Diesel Warrior.",
    "The match went on for several minutes with both wrestlers trading holds and strikes.",
    "Eventually, the champion managed to get the pinfall after a standard finishing move.",
    "Fans clapped, and the event ended without much surprise.",
    "The title remains unchanged, and the crowd slowly made their way out of the arena."
  ],
  image: "https://i.imgur.com/XSAFi0c.png"
},

  {
  id: 3,
  title: "Lord Amadeus is wearing a wig?",
  content: [
    "The world of professional wrestling thrives on spectacle, but nobody expected the biggest shocker of the season to come from behind the curtain. Sources close to RAWF Wrestling have revealed that the company’s flamboyant owner and promoter, Lord Amadeus, has been wearing a wig for years!",

    "Fans always admired Amadeus for his golden locks, which became as much a trademark as the steel cage and the championship belts. But whispers in locker rooms and backstage corridors suggested something wasn’t quite right. “We noticed it never moved during matches, even when he got shoved around,” one anonymous RAWF wrestler confessed. “That thing has more hold than the championship title itself.”",

    "The bombshell broke earlier this week when Amadeus was reportedly spotted at a late-night diner without his signature wig. Witnesses claim the promoter looked “unrecognizable” and “ten years younger, but balder.” Within hours, photos were leaked, and the story spread faster than a folding chair to the back.",

    "But does it change anything? Not to the fans. If anything, the revelation has added another layer of intrigue to the ever-dramatic world of RAWF. “Wrestling is about characters, and Lord Amadeus just gave us the ultimate twist,” said one longtime supporter.",

    "As for Amadeus himself, he has remained tight-lipped. When asked by reporters if he had any comment about his “hairpiece scandal,” the wrestling mogul simply smirked and said:",

    "“Whether it’s real or fake, business is booming — and that’s all that matters.”",

    "Love him or laugh at him, one thing is clear: wig or no wig, Lord Amadeus remains the undisputed showman of RAWF."

    
  ],
  image: "https://i.imgur.com/N0Jursf.jpeg"
}

];

export default function Article() {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) return <h2 className="text-danger mt-5 text-center">Article not found</h2>;

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Left */}
        <div className="col-md-5">
          <img
            src={article.image}
            alt={article.title}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Right */}
        <div className="col-md-7">
          <h1 className="text-danger">{article.title}</h1>
          <p className="lead">{article.content}</p>
          <Link to="/" className="btn btn-dark mt-3">
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
