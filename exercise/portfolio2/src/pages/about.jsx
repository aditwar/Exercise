import Contact from "../components/contact";

export default function About() {
    return (
    <section className="about" id="about">
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, molestiae sunt doloribus error ullam expedita cumque blanditiis quas vero, qui, consectetur modi possimus. Consequuntur optio ad quae possimus, debitis earum.</p>
          </div>
          <div className="col-md-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, molestiae sunt doloribus error ullam expedita cumque blanditiis quas vero, qui, consectetur modi possimus. Consequuntur optio ad quae possimus, debitis earum.</p>
          </div>
        </div>
      </div>
      <Contact />
    </section>
    )
}