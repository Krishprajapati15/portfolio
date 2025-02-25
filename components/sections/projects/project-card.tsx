"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type props = {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    githubLink: string;
    previewLink: string;
    languages: string[];
  };
};

export default function ProjectCard({ project }: props) {
  return (
    <div className="w-full max-w-[500px] rounded-2xl bg-muted border sticky top-3">
      <div className="flex justify-between flex-shrink-0 px-4 pt-2">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Globe size={18} />
          <span>Web-Page</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="block rounded-full size-3 bg-green-500 ml-auto" />
          <span className="block rounded-full size-3 bg-yellow-500" />
          <span className="block rounded-full size-3 bg-red-500 " />
        </div>
      </div>
      <div className="group relative h-[200px] overflow-hidden cursor-pointer rounded-lg m-2 border">
        <Image
          className="size-full  object-top object-fill"
          src={project.image}
          alt={project.title}
          width={400}
          height={400}
        />
        <Link
          href={project.previewLink}
          target="_blank"
          className="size-full bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <ExternalLink
          size={24}
          className="absolute top-4 right-4 opacity-90 hidden group-hover:block"
        />
      </div>
      <div className="px-4 py-2 w-full">
        <div className="flex items-center gap-2">
          <h2 className="text-xl capitalize font-bold">{project.title}</h2>
          <Link
            href={project.githubLink}
            target="_blank"
            className="group relative flex items-center justify-center size-8 rounded-full bg-gray-800 text-white transition-transform duration-300 hover:scale-110"
          >
            <Github size={18} />
          </Link>
        </div>

        <p className="text-muted-foreground h-[180px] sm:h-[120px] text-justify line-clamp-4 sm:line-clamp-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.languages.map((lang, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
