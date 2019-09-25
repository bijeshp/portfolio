import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Blogs } from "../data"

import "./blogs.scss"

class BlogsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogList: Blogs,
      tagList: this.getTags(Blogs),
    }
  }
  getTags() {
    const tagList = ["All"]
    Blogs.forEach(blog => {
      const { tags } = blog
      tags.forEach(tag => {
        if (tagList.indexOf(tag) === -1) tagList.push(tag)
      })
    })
    return tagList
  }

  filterByTags(tagName) {
    let filteredBlogs = Blogs.filter(blog => {
      if (tagName == "All") return true
      return blog.tags.indexOf(tagName) >= 0
    })
    this.setState({ blogList: filteredBlogs })
  }
  render() {
    const { tagList, blogList } = this.state
    return (
      <Layout coloredHeader>
        <SEO title="Blogs" />
        <div className="blogs">
          <div className="grid ">
            <div className="col-xs-3 col-md-3 col-grid">
              <aside className="tags">
                {tagList.map(tag => {
                  return (
                    <nav
                      className="filter-link"
                      onClick={() => {
                        this.filterByTags(tag)
                      }}
                    >
                      {tag}
                    </nav>
                  )
                })}
              </aside>
            </div>
            <div className="col-xs-9 col-md-9 col-grid">
              <section className="blog-list-wrap">
                <ul className="list-blogs">
                  {blogList.map(blog => {
                    const {
                      tags,
                      type,
                      name,
                      date,
                      description,
                      image,
                      url,
                    } = blog
                    return (
                      <li className="blog">
                        <div
                          className="blog__header"
                          style={{ backgroundImage: `url(${image})` }}
                        >
                          <p className="date">{date}</p>
                          <div className="content">
                            <ul className="tags">
                              {tags.map(tag => (
                                <li className="tag">{tag}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="blog__body">
                          <p className="title">{name}</p>
                          <p className="description">{description}</p>
                        </div>
                        <div className="blog__footer">
                          <a target="new" href={url}>
                            <i
                              className={`icon ${
                                type === "code" ? "icon-git" : "icon-desktop"
                              }`}
                            />
                            {type === "code"
                              ? "  View on GitHub"
                              : "Read More..."}
                          </a>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogsPage
