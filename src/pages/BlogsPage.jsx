import React from "react";
import Hero from "../components/Hero";
import BlogList from "../components/BlogList";
import { Link, useHref, useLoaderData } from "react-router-dom";

export default function BlogsPage() {
  const { data, error } = useLoaderData();
  const href = useHref();
  const { dashboard, links, projects, blogs } = data;
  console.log(projects, blogs);
  if (!dashboard) {
    console.log(error);
  }
  return (
    <div className="BlogsPage">
      <Hero dashboard={dashboard[0]} links={links} />
      <br />
      <br />
      <div className="Filter">
        <Link to={"/projects"} className="BlogsList-header link">
          Projects
        </Link>
        <Link to={"/blogs"} className="BlogsList-header link">
          Posts
        </Link>
      </div>
      {href === "/blogs" ? (
        <BlogList blogs={blogs} />
      ) : href === "/projects" ? (
        <BlogList blogs={projects} />
      ) : (
        <>
          <BlogList blogs={projects} />
          <BlogList blogs={blogs} />
        </>
      )}
    </div>
  );
}
