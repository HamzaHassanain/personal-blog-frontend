import React, { useEffect } from "react";
import Hero from "../components/Hero";
import BlogList from "../components/BlogList";
import { Link, useHref, useLoaderData, useNavigate } from "react-router-dom";

export default function BlogsPage() {
  const navigate = useNavigate();
  const { data, error } = useLoaderData();
  const href = useHref();
  if (error || !data) {
    navigate("/error");
    return;
  }
  let { dashboard, links, projects, blogs } = data;

  return (
    <div className="BlogsPage">
      <Hero dashboard={dashboard} links={links} />
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
