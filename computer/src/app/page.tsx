import React from "react";

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-yellow-100 rounded-xl p-20 md:p-40 dark:bg-slate-1000">
        <img
          className="w-80 h-60 md:w-60 md:h-60 md:rounded-none rounded-full mx-auto"
          src="/reyyan.jpg"
          alt="Portrait of Reyyan Hassan"
        />
        <div className="pt-6 md:p-10 text-center md:text-left space-y-2">
          <blockquote>
            <p className="text-lg font-medium">
              “My name is Reyyan. I recently completed my F.Sc and am joining the field of Generative AI. My teacher’s name is Sir Asif Langrah.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Reyyan Hassan
            </div>
            <div className="text-slate-1000 dark:text-slate-600">
              Artificial Intelligence (Student)
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;
