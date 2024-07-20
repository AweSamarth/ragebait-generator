"use client";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Tweet from "@/components/Tweet";
import { useState } from "react";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [starvedMode, setStarvedMode] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [content, setContent] = useState<string | undefined>(undefined);

  const [animatedWord1, setAnimatedWord1] = useState("");
  const [animatedWord2, setAnimatedWord2] = useState("");
  const [animatedWord3, setAnimatedWord3] = useState("");
  const [animating, setAnimating] = useState(false);
  //add too obvious
  const positiveOrNeuralActivityArray = [
    "eat mangoes",
    "drive cars",
    "listen to desi hip hop",
    "listen to rap",
    "get good grades",
    "do art",
    "like classical music",
    "work out",
    "paint their walls blue",
    "play basketball",
    "read fantasy novels",
    "practice yoga",
    "learn new languages",
    "volunteer at animal shelters",
    "play video games",
    "go on hikes",
    "cook new recipes",
    "write poetry",
    "play chess",
    "start their own business",
    "learn how to dance",
    "play musical instruments",
    "go to concerts",
    "watch documentaries",
    "plant trees",
    "help their community",
    "study abroad",
    "go skydiving",
    "learn photography",
    "play soccer",
    "go to museums",
    "write code",
    "participate in debates",
    "go to comedy shows",
    "learn how to swim",
    "start a blog",
    "play tennis",
    "go to music festivals",
    "learn a new sport",
    "go to the gym",
    "learn how to meditate",
    "start a YouTube channel",
    "go to the beach",
    "learn how to cook",
    "play golf",
    "go to the park",
    "learn how to play cricket",
    "start podcasts",
    "go to the library",
    "learn how to skateboard",
    "go to the zoo",
    "learn how to play football",
    "start a non-profit organization",
    "want to travel the world",
    "drink ice cold water",
    "like eating cake",
    "get into relationships after 20",
    "have healthy relationships",
    "are on good terms with their parents",
    "use their phones after work",
    "like knitting",
    "know how to cook food",
    "are into photography",
    "use dating apps",
    "use public transport",
    "drive manual",
    "who are doing degrees",
    "play mobile games",
    "buy sports bikes",
  ];

  const negativeAdjectiveArray = [
    "just fooling themselves",
    "good for nothing",
    "lame as fuck like damn get a life blud",
    "to be avoided at all costs",
    "dangerous for mankind",
    "stupid",
    "foolish",
    "objectively worthless",
    "utterly useless",
    "completely incompetent",
    "totally clueless",
    "mind-bogglingly stupid",
    "insanely cringeworthy",
    "delusional asf",
    "selfish and no one can change my mind",
    "narcissistic and self-absorbed",
    "manipulative and will always try to gaslight you",
    "disgustingly toxic and should be socially boycotted",
    "cancerous. That's it, that's the tweet.",
    "terrible both online and irl",
    "atrocious",
    "abysmally down bad",
    "dreadful to interact with. They give me the ick.",
    "wretched creatures",
    "fucking terrible",
    "godawful",
    "pretty despicable imo",
    "loathsome",
    "sickening",
    "disgusting",
    "batshit crazy",
    "fucking insane",
    "certifiably crazy",
    "bonkers",
    "nuts",
    "crackheads",
    "deranged",
    "demented. take your meds bud",
    "moronic to the point where they can't be saved",
    "imbeciles and no one can convince me otherwise",
    "retarded as helll",
    "fuckwitted",
    "thick as shit",
    "dumb as fuck",
    "brainless",
    "half-witted",
    "cunts",
    "complete fucking idiots",
    "psychopaths. runnn as fast as possible",
    "bastards",
    "fucking arseholes",
    "total waste of oxygen",
    "utterly pointless",
    "completely irrelevant",
    "totally useless",
    "good for fuck all",
    "fucking useless",
    "absolutely dreadful",
    "totally fucking awful",
    "wayyy too full of their own shit to be treated as regular humans",
  ];

  const whatPeople = [
    "Short",
    "Tall",
    "Obese",
    "Well-built",
    "Healthy",
    "American",
    "Indian",
    "French",
    "Hot",
    "Ugly",
    "Poor",
    "Rich",
    "Shy",
    "Introverted",
    "Extroverted",
    "Creative",
    "Old",
    "Young",
    "Middle-aged",
    "Elderly",
    "Teenage",
    "Gothic",
    "Punk",
    "Hipster",
    "Nerdy",
    "Geeky",
    "Tech-savvy",
    "Artistic",
    "Musical",
    "Athletic",
    "Ambitious",
    "Adventurous",
    "Fearless",
    "Outgoing",
    "Reserved",
    "Quiet",
    "Loud",
    "Talkative",
    "Rude",
    "Polite",
    "Sarcastic",
    "Witty",
    "Humorous",
    "Serious",
    "Depressed",
    "Anxious",
    "Angry",
    "Curvy",
    "Skinny",
    "Blonde",
    "Brunette",
    "Redheaded",
    "Bald",
    "Bearded",
    "Tattooed",
    "Straight",
    "Gay",
    "Lesbian",
    "Bisexual",
    "Non-binary",
    "Christian",
    "Religious",
    "Atheist",
  ];

  const negativeActivityArray = [
    "hate minorities",
    "like violence",
    "believe in toxicity",
    "think it's okay to abandon kids",
    "condone bullying",
    "endorse harassment",
    "support online trolling",
    "indulge in cyberstalking and cyberbullying",
    "justify hate speech",
    "promote xenophobia",
    "advocate for sexism",
    "believe in brainwashing kids",
    "want to detach from their cultures and traditions completely",
    "understand that women are better than men",
    "believe that emotions should be the sole basis for decision-making",
    "endorse the notion that all forms of competition are toxic",
    "promote the idea that achievement and success are inherently bad",
    "agree that feelings are a better decision making factor than facts",
    "support the forced redistribution of wealth and resources of all sections of society",
    "advocate for the complete erasure of historical context",
    "endorse the idea that personal responsibility is a myth and is a concept forced down our throats by the system",
    "think that tradition and heritage are irrelevant",
    "agree that compromise is always the best solution, no matter the circumstances",
    "defend racism",
    "dismiss mental health",
    "belittle others' struggles",
    "gloat about others' misfortunes",
    "celebrate hate crimes",
    "prioritize outrage over reason",
    "stir up controversy for awareness",
    "demonize marginalized groups",
    "spew venom against folks who are not their kind",
    "refuse to listen to opposing views",
    "dismiss constructive criticism",
    "prioritize being 'kind' over being right",
    "fuel outrage and hysteria",
    "engage in schadenfreude",
    "make fun of others' failures ",
    "believe in debunked conspiracy theories",
    "deny established facts",
    "prioritize sensationalism over truth",
    "use Twitter to rant and rave",
    "seek out drama and conflict",
    "stir up trouble for entertainment",
    "enjoy watching others squirm",
    "believe in the 'ends justify the means'",
    "prioritize winning arguments over learning",
  ];

  const okayArray = [
    "the pillars of our society",
    "deserving of respect",
    "the only people i can vibe with in this soft world",
    "exactly the kind of people we need rn. I'm sick of snowflakes.",
    "the ones who will trigger the snowflakes and make them cry",
    "the embodiment of 'no cap'",
    "the only ones who truly understand today's world",
    "the vanguards of edginess",
    "the ones who will save us from the woke apocalypse",
    "the pioneers of unapologetic honesty",
    "the ones who will make the world a more 'interesting' place",
    "the champions of 'telling it like it is'",
    "the heroes who will slay the dragons of political correctness",
    "the ones who will lead us to a glorious future of unfiltered thoughts",
    "the trailblazers of unapologetic greatness",
    "the ones who will make us laugh while they burn the world down",
    "the maestros of restoring this fallen society",
    "the ones who will show us what it truly means to be sane",
    "the sages of satire (but not really)",
    "the ones who will rightly make us question our believes",
    "the prophets of provocativity",
    "the real MVPs",
    "keeping it real in a world full of fake outrage",
    "the only ones brave enough to speak the truth",
    "my spirit animals",
    "the embodiment of free speech",
    "justified in their actions, no matter what",
    "the heroes we need, but don't deserve",
    "the ones who truly understand what's going on",
    "my role models",
    "the ones who make the world a more interesting place",
    "the rebels we need to shake things up",
    "the ones who refuse to be silenced",
    "the true patriots",
    "the ones who make me proud to be human",
    "the ones who show us what it means to be truly unapologetic",
    "the ones who will lead us to a better future",
  ];

  const animateWord = (
    wordsArray: string[],
    setAnimatedWord: React.Dispatch<React.SetStateAction<string>>,
    delay: number
  ): Promise<string> => {
    return new Promise((resolve) => {
      let index = 0;
      const interval = setInterval(() => {
        setAnimatedWord(wordsArray[index]);
        index = (index + 1) % wordsArray.length;
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
        const finalWord =
          wordsArray[Math.floor(Math.random() * wordsArray.length)];
        setAnimatedWord(finalWord);
        resolve(finalWord);
      }, delay);
    });
  };

  const generate = () => {
    if (animating) return;
    setGenerated(true);
    setAnimatedWord1("");
    setAnimatedWord2("");
    setAnimatedWord3("");
    setAnimating(true);
    setContent(undefined);

    let finalWord1 = "",
      finalWord2 = "",
      finalWord3 = "";

    if (starvedMode) {
      animateWord(negativeActivityArray, setAnimatedWord2, 700)
        .then((word2) => {
          finalWord2 = word2;
          return animateWord(okayArray, setAnimatedWord3, 700);
        })
        .then((word3) => {
          finalWord3 = word3;

          setContent(`People who ${finalWord2} are ${finalWord3}`);
          setAnimating(false);
        });
    } else {
      animateWord(whatPeople, setAnimatedWord1, 700)
        .then((word1) => {
          finalWord1 = word1;
          return animateWord(
            positiveOrNeuralActivityArray,
            setAnimatedWord2,
            700
          );
        })
        .then((word2) => {
          finalWord2 = word2;
          return animateWord(negativeAdjectiveArray, setAnimatedWord3, 700);
        })
        .then((word3) => {
          finalWord3 = word3;

          setContent(
            `${finalWord1} people who ${finalWord2} are ${finalWord3}`
          );
          setAnimating(false);
        });
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-800 via-blue-900 to-gray-900">
      <div className="flex flex-col justify-center items-center gap-5">
        <div
          className={` text-4xl font-bold text-purple-300 ` + poppins.className}
        >
          Twitter Ragebait Generator
        </div>
        <div className={`text-2xl font-semibold  ` + inter.className}>
          {starvedMode
            ? "Please please please give me attention 🥺🥺"
            : "Give me attention!"}
        </div>
      </div>
      <div className="flex flex-col jsutify-center items-center gap-2 ">
        <div className="flex items-center space-x-3 mb-5">
          <button
            onClick={() => setStarvedMode((prev) => !prev)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              starvedMode ? "bg-red-500" : "bg-gray-200"
            }`}
          >
            <span className="sr-only">Toggle Starved Mode</span>
            <span
              className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
                starvedMode ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-white font-medium ${inter.className}`}>
            Starved Mode
          </span>
        </div>
        <Tweet
          starvedMode={starvedMode}
          content={
            !generated
              ? "*your generated ragebait goes here*"
              : content ||
                `${starvedMode ? "" : animatedWord1 || "\u00A0".repeat(10)} ${
                  starvedMode ? "People" : "people"
                } who ${animatedWord2 || "\u00A0".repeat(10)} are ${
                  animatedWord3 || "\u00A0".repeat(10)
                }`
          }
        />

        <div className="flex flex-col gap-4">
          {content ? (
            <Link
              href={`https://twitter.com/intent/tweet?text=${content}%0A%0Athis bait was brought to you by: Twitter Ragebait Generator`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className=" flex w-60 h-14 justify-center items-center  gap-1 px-10 py-3 bg-black mt-4 text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <Image
                  src="/x.png"
                  className="-ml-2"
                  width={30}
                  height={30}
                  alt="x logo"
                />
                <span>Post it!</span>
              </button>
            </Link>
          ) : (
            <div className="w-60 h-6"></div>
          )}

          <button
            onClick={generate}
            className={`px-10 py-3 w-60 h-14 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
              animating ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={animating}
          >
            {animating ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>
      <div> </div>
    </main>
  );
}
