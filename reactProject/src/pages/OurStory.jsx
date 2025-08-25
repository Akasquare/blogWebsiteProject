 
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <>
      <div className=" pt-10 text-white bg-[#242424]">
        <div className="px-14  pt-40 pb-10 flex flex-col gap-y-8 w-[65%]">
          <h2 className="text-5xl md:text-7xl lg:text-8xl leading-25 tracking-tight">
            Everyone has a story to tell
          </h2>
          <p className="text-md md:text-2xl ">
            Medium is a home for human stories and ideas. Here, anyone can share
            knowledge and wisdom with the world—without having to build a
            mailing list or a following first. The internet is noisy and
            chaotic; Medium is quiet yet full of insight. It’s simple,
            beautiful, collaborative, and helps you find the right readers for
            whatever you have to say.
          </p>
          <h5 className="text-lg md:text-4xl ">
            Ultimately, our goal is to deepen our collective understanding of
            the world through the power of writing.
          </h5>
          <p className="text-md md:text-2xl ">
            We believe that what you read and write matters. Words can divide or
            empower us, inspire or discourage us. In a world where the most
            sensational and surface-level stories often win, we’re building a
            system that rewards depth, nuance, and time well spent. A space for
            thoughtful conversation more than drive-by takes, and substance over
            packaging.
          </p>
          <p className="text-md md:text-2xl ">
            Over 100 million people connect and share their wisdom on Medium
            every month. They’re software developers, amateur novelists, product
            designers, CEOs, and anyone burning with a story they need to get
            out into the world. They write about what they’re working on, what’s
            keeping them up at night, what they’ve lived through, and what
            they’ve learned that the rest of us might want to know too.
          </p>
          <p className="text-md md:text-2xl ">
            Instead of selling ads or selling your data, we’re supported by a
            growing community of over a million Medium members who believe in
            our mission. If you’re new here, start reading. Dive deeper into
            whatever matters to you. Find a post that helps you learn something
            new, or reconsider something familiar—and then write your story.
          </p>
        </div>
        <Link to={'/'}>
          <div className="flex px-14 border-t justify-between py-10 text-5xl md:text-7xl lg:text-7xl leading-25 tracking-tight hover:text-black hover:bg-white duration-400">
            <span>Start reading</span>
            <span>a</span>
          </div>
        </Link>
        <Link to="/write">
          <div className="flex px-14 border-t justify-between py-10 text-5xl md:text-7xl lg:text-7xl leading-25 tracking-tight hover:text-black hover:bg-white duration-400">
            <span>Start writing</span>
            <span>a</span>
          </div>
        </Link>
        <Link to="#">
          <div className="flex px-14 border-t justify-between py-10 text-5xl md:text-7xl lg:text-7xl leading-25 tracking-tight hover:text-black hover:bg-white duration-400">
            <span>Become a member</span>
            <span>a</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default OurStory;
