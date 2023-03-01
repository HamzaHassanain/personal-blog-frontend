import React from "react";
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
  let { dashboard, links, projects } = data;

  return (
    <div className="BlogsPage">
      <Hero dashboard={dashboard} links={links} />
      <br />
      <br />
      <div className="Filter">
        <Link to={"/"} className="BlogsList-header link">
          Recent Projects
        </Link>
      </div>
      <BlogList blogs={projects} />
    </div>
  );
}
