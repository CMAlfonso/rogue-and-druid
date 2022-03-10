import GatsbyLink from "gatsby-link";
import React from "react"

export default function NavBar() {
    return(
        <nav>
            <div className="navLinks">
                <GatsbyLink to="/">Rogue and Druid</GatsbyLink>
                <GatsbyLink to="/listen">Listen</GatsbyLink>
                <GatsbyLink to="/hosts">Hosts</GatsbyLink>
                <GatsbyLink to="/gallery">Gallery</GatsbyLink>
                <GatsbyLink to="/fans">Fan Corner</GatsbyLink>
            </div>
        </nav>
    );
}