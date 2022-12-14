import { Link } from "@remix-run/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default () => {
  return (
    <div className="flex flex-col items-center">
      <main className="w-auto max-w-lg border-2 rounded p-4 text-center flex flex-col justify-end items-center">
        <img
          src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0="
          className="rounded-full aspect-square object-cover w-48 drop-shadow-lg border-white border-4"
          alt="person's face"
        />
        <header className=" flex flex-col items-center w-10/12">
          <h1 className="mb-2">Stan Lee</h1>
          <small>Company Name | Position</small>
          <ul className="w-10/12 list-none flex flex-wrap justify-center p-0">
            <li className="m-0.5 border-2 rounded-md flex p-1 px-2 items-center text-sm">
              <FaGithub className="mr-1" />
              GitHub
            </li>
            <li className="m-0.5 border-2 rounded-md flex p-1 px-2 items-center text-sm">
              <FaLinkedin className="mr-1" />
              LinkedIn
            </li>
            <li className="m-0.5 border-2 rounded-md flex p-1 px-2 items-center text-sm">
              <FaTwitter className="mr-1" />
              Twitter
            </li>
          </ul>
        </header>
        <section className="w-10/12">
          <p>
            I am a construction technologist whose heart beats fast for helping
            skilled trades workers, labor supervision, and project management
            teams save time and mitigate risk through creative problem solving
            with technology. My key principle is to act as a missionary - not
            mercenary - for innovation: earning the trust of field and executive
            teams alike.
          </p>
        </section>
      </main>
      <sub className="mt-8 space-x-1">
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/auth/logout">Log Out</Link>
      </sub>
    </div>
  );
};
